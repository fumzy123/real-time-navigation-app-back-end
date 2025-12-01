import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import express from "express";
import pkg from "pg";

const { Pool } = pkg;

// Make sure DATABASE_URL exists
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing in .env");
}

// Create PostgreSQL pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Initialize Drizzle ORM
const db = drizzle(pool);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Feature-specific routers
// app.use('/api/history', addressHistoryRouter);

// ⚡ New Root Route Handler ⚡
app.get("/", (req, res) => {
  res.send("Welcome to the Real-Time Navigation App Back-end API.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(
    `Database URL: ${
      process.env.DATABASE_URL ? "Configured" : "MISSING"
    }`
  );
});

export { db };
