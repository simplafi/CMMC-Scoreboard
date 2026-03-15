import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});
export const db = drizzle(pool, { schema });

/**
 * Ensure all required tables exist on startup.
 * This replaces the need for running `npm run db:push` manually.
 */
export async function ensureTables() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS "users" (
        "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),
        "email" varchar UNIQUE,
        "first_name" varchar,
        "last_name" varchar,
        "profile_image_url" varchar,
        "password_hash" varchar,
        "created_at" timestamp DEFAULT now(),
        "updated_at" timestamp DEFAULT now()
      );

      CREATE TABLE IF NOT EXISTS "sessions" (
        "sid" varchar PRIMARY KEY,
        "sess" jsonb NOT NULL,
        "expire" timestamp NOT NULL
      );
      CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "sessions" ("expire");

      CREATE TABLE IF NOT EXISTS "assessments" (
        "id" serial PRIMARY KEY,
        "user_id" varchar NOT NULL REFERENCES "users"("id"),
        "name" varchar(255) NOT NULL DEFAULT 'My Assessment',
        "has_ssp" boolean NOT NULL DEFAULT false,
        "control_statuses" jsonb NOT NULL DEFAULT '{}',
        "objective_statuses" jsonb NOT NULL DEFAULT '{}',
        "last_calculated_score" integer,
        "created_at" timestamp DEFAULT now(),
        "updated_at" timestamp DEFAULT now()
      );
    `);
    console.log("Database tables verified/created successfully");
  } catch (err) {
    console.error("Failed to create tables:", err);
    throw err;
  } finally {
    client.release();
  }
}
