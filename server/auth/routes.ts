import passport from "passport";
import bcrypt from "bcryptjs";
import type { Express } from "express";
import { getUserByEmail, createUser } from "./storage";
import { isAuthenticated } from "./localAuth";
import { syncContactToCRM } from "../integrations/leadconnector";

export function registerAuthRoutes(app: Express) {
  // Get current user
  app.get("/api/auth/user", isAuthenticated, (req, res) => {
    res.json(req.user);
  });

  // Register new user
  app.post("/api/auth/register", async (req, res) => {
    const { email, password, firstName, lastName } = req.body as {
      email?: string;
      password?: string;
      firstName?: string;
      lastName?: string;
    };

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    try {
      const existing = await getUserByEmail(email);
      if (existing) {
        return res.status(409).json({ message: "An account with this email already exists" });
      }

      const passwordHash = await bcrypt.hash(password, 12);
      const user = await createUser({
        email: email.toLowerCase(),
        passwordHash,
        firstName: firstName?.trim() || null,
        lastName: lastName?.trim() || null,
      });

      syncContactToCRM({
        email: user.email!,
        firstName: user.firstName ?? undefined,
        lastName: user.lastName ?? undefined,
      }).catch((err: unknown) => {
        console.log("[LeadConnector] Registration sync error:", err instanceof Error ? err.message : err);
      });

      req.logIn(user, (err) => {
        if (err) {
          console.error("Login after register failed:", err);
          return res.status(500).json({ message: "Registration succeeded but login failed" });
        }
        res.status(201).json(user);
      });
    } catch (err) {
      console.error("Registration error:", err);
      res.status(500).json({ message: "Registration failed" });
    }
  });

  // Login
  app.post("/api/auth/login", (req, res, next) => {
    passport.authenticate("local", (err: Error | null, user: Express.User | false, info: { message: string } | undefined) => {
      if (err) return next(err);
      if (!user) {
        return res.status(401).json({ message: info?.message || "Invalid email or password" });
      }
      req.logIn(user, (loginErr) => {
        if (loginErr) return next(loginErr);
        res.json(user);
      });
    })(req, res, next);
  });

  // Logout
  app.post("/api/auth/logout", (req, res) => {
    req.logout(() => {
      res.json({ ok: true });
    });
  });

}
