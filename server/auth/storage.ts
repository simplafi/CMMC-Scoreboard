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
