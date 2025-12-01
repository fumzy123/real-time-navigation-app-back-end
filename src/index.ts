// Drizzle ORM
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

// Express
import express from "express";

const db = drizzle(process.env.DATABASE_URL!);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Body parser

// Feature-specific routers
// app.use('/api/history', addressHistoryRouter);

// Basic Health Check
app.get("/health", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    `Database URL: ${
      process.env.DATABASE_URL ? "Configured" : "MISSING"
    }`
  );
});
