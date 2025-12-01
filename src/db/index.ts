// src/db/db.ts (Example Content)
// Drizzle
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Make sure DATABASE_URL exists
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing in .env");
}

// 1. Initialize the PostgreSQL Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// 2. Create and export the Drizzle DB client
export const db = drizzle(pool);
