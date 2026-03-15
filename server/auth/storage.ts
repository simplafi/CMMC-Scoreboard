import { users, type User, type UpsertUser } from "@shared/models/auth";
import { db } from "../db";
import { eq } from "drizzle-orm";

export async function getUser(id: string): Promise<User | undefined> {
  const [user] = await db.select().from(users).where(eq(users.id, id));
  return user;
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email.toLowerCase()));
  return user;
}

export async function createUser(userData: UpsertUser): Promise<User> {
  const [user] = await db
    .insert(users)
    .values({ ...userData, email: userData.email?.toLowerCase() })
    .returning();
  return user;
}

/**
 * Find or create a user from an OAuth provider.
 * If the email already exists, update their name/profile; otherwise create new.
 */
export async function upsertOAuthUser(profile: {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  profileImageUrl?: string | null;
}): Promise<User> {
  const existing = await getUserByEmail(profile.email);
  if (existing) {
    // Update name/profile if they were missing
    const updates: Partial<UpsertUser> = {};
    if (!existing.firstName && profile.firstName) updates.firstName = profile.firstName;
    if (!existing.lastName && profile.lastName) updates.lastName = profile.lastName;
    if (!existing.profileImageUrl && profile.profileImageUrl) updates.profileImageUrl = profile.profileImageUrl;

    if (Object.keys(updates).length > 0) {
      const [updated] = await db
        .update(users)
        .set(updates)
        .where(eq(users.id, existing.id))
        .returning();
      return updated;
    }
    return existing;
  }

  return createUser({
    email: profile.email.toLowerCase(),
    firstName: profile.firstName ?? null,
    lastName: profile.lastName ?? null,
    profileImageUrl: profile.profileImageUrl ?? null,
  });
}
