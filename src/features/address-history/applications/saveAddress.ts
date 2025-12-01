import {
  NewAddressHistory,
  DbAddressHistory,
} from "../../../db/schema";
import { addressHistoryRepository } from "../infrastructure/PostgresAddressHistoryRepoAdapter";

/**
 * Application Use Case: Saves a new address to history, or updates the existing one.
 *
 * @param address - The address data (text, long, lat).
 */
export async function saveAddress(
  address: NewAddressHistory
): Promise<DbAddressHistory> {
  // Example Business Rule: Basic validation (optional but good practice)
  if (
    !address.addressText ||
    address.longitude === undefined ||
    address.latitude === undefined
  ) {
    throw new Error(
      "All address details (text, longitude, latitude) are required for history logging."
    );
  }

  // Directly call the repository's method
  return addressHistoryRepository.createAddressHistory(address);
}
