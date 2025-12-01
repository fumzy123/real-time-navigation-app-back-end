// Express
import express from "express";

// Router
import { addressHistoryRouter } from "./features/address-history/delivery/AddressHistoryController";



const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Register Route handler for addressHistory
app.use("/api/addressHistory", addressHistoryRouter);

// Route Handler
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
