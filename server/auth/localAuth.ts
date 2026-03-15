import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as MicrosoftStrategy } from "passport-microsoft";
import session from "express-session";
import connectPg from "connect-pg-simple";
import bcrypt from "bcryptjs";
import type { Express, RequestHandler } from "express";
import { getUser, getUserByEmail, upsertOAuthUser } from "./storage";
import type { User } from "@shared/models/auth";

export function getSession() {
  if (!process.env.SESSION_SECRET) {
    console.error("WARNING: SESSION_SECRET is not set. Auth will not work correctly.");
  }

  const sessionTtl = 7 * 24 * 60 * 60 * 1000; // 1 week
  const pgStore = connectPg(session);
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: true,
    ttl: sessionTtl,
    tableName: "sessions",
  });
  return session({
    secret: process.env.SESSION_SECRET || "fallback-dev-secret-change-me",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: sessionTtl,
    },
  });
}

export function setupAuth(app: Express) {
  app.set("trust proxy", 1);
  app.use(getSession());
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await getUserByEmail(email);
          if (!user || !user.passwordHash) {
            return done(null, false, { message: "Invalid email or password" });
          }
          const valid = await bcrypt.compare(password, user.passwordHash);
          if (!valid) {
            return done(null, false, { message: "Invalid email or password" });
          }
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  // Microsoft OAuth strategy
  if (process.env.MICROSOFT_CLIENT_ID && process.env.MICROSOFT_CLIENT_SECRET) {
    const callbackURL = process.env.NODE_ENV === "production"
      ? "https://app.simplafi.us/api/auth/microsoft/callback"
      : "http://localhost:5000/api/auth/microsoft/callback";

    passport.use(
      new MicrosoftStrategy(
        {
          clientID: process.env.MICROSOFT_CLIENT_ID,
          clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
          callbackURL,
          scope: ["user.read"],
          tenant: "common",
          authorizationURL: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
          tokenURL: "https://login.microsoftonline.com/common/oauth2/v2.0/token",
        },
        async (
          _accessToken: string,
          _refreshToken: string,
          profile: any,
          done: (err: any, user?: Express.User | false) => void
        ) => {
          try {
            const email =
              profile.emails?.[0]?.value ||
              profile._json?.mail ||
              profile._json?.userPrincipalName;

            if (!email) {
              return done(null, false);
            }

            const user = await upsertOAuthUser({
              email,
              firstName: profile.name?.givenName || null,
              lastName: profile.name?.familyName || null,
              profileImageUrl: profile.photos?.[0]?.value || null,
            });

            return done(null, user);
          } catch (err) {
            return done(err);
          }
        }
      )
    );
    console.log("Microsoft OAuth strategy configured");
  } else {
    console.log("Microsoft OAuth not configured (MICROSOFT_CLIENT_ID/SECRET not set)");
  }

  passport.serializeUser((user: Express.User, cb) => {
    cb(null, (user as User).id);
  });

  passport.deserializeUser(async (id: string, cb) => {
    try {
      const user = await getUser(id);
      cb(null, user ?? false);
    } catch (err) {
      cb(err);
    }
  });
}

export const isAuthenticated: RequestHandler = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: "Unauthorized" });
};
