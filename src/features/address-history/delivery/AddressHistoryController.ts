import { Router, Request, Response } from "express";
// Import the application-layer functions (use cases)
import { getRecentAddressHistory } from "../applications/getRecentAddressHistory";
import { saveAddress } from "../applications/saveAddress";
import { NewAddressHistory } from "../../../db/schema";

const router = Router();

/**
 * POST /api/history - Endpoint to save a new address to history.
 * Inbound Adapter: Maps HTTP request body to Application function parameters.
 */
router.post("/", async (req: Request, res: Response) => {
  try {
    // Extract required fields from the request body
    const { addressText, longitude, latitude } = req.body;

    // Type checking and basic validation for the input data
    if (
      typeof addressText !== "string" ||
      typeof longitude !== "number" ||
      typeof latitude !== "number"
    ) {
      return res.status(400).send({
        message:
          "Invalid input types for address history: text must be string, coords must be number.",
      });
    }

    // Construct the input object required by the Application layer
    const addressData: NewAddressHistory = {
      addressText,
      longitude,
      latitude,
    };

    // Call the Application Use Case to save the data
    const savedAddress = await saveAddress(addressData);

    // Successful operation, but no content to return (204 No Content)
    return res.json(savedAddress);
  } catch (error: any) {
    console.error("Error saving address history:", error.message);

    // Use 400 for errors originating from invalid user input/data
    return res.status(400).send({
      message: error.message || "Error saving address history.",
    });
  }
});

/**
 * GET /api/history - Endpoint to retrieve the most recent addresses.
 * Inbound Adapter: Maps URL query parameters to Application function parameters.
 */
router.get("/", async (req: Request, res: Response) => {
  try {
    // Extract and parse the optional limit query parameter, default to 10
    const limit = req.query.limit
      ? parseInt(req.query.limit as string, 10)
      : 10;

    if (isNaN(limit) || limit < 1) {
      return res
        .status(400)
        .send({ message: "Limit must be a positive integer." });
    }

    // Call the Application Use Case to fetch the data
    const history = await getRecentAddressHistory(limit);

    // Map Application-layer data structure back to JSON HTTP response
    return res.json(history);
  } catch (error) {
    console.error("Error fetching address history:", error);
    // Use 500 for unhandled server-side errors
    return res
      .status(500)
      .send({ message: "Error fetching address history." });
  }
});

export const addressHistoryRouter = router;
