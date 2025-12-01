import { DbAddressHistory } from "../../../db/schema";

import { addressHistoryRepository } from "../infrastructure/PostgresAddressHistoryRepoAdapter";

/**
 * Application Use Case: Fetches the list of recently used addresses.
 *
 * @param limit - The maximum number of history items to return.
 * @returns A promise that resolves to an array of recent history items.
 */
export async function getRecentAddressHistory(
  limit: number = 10
): Promise<DbAddressHistory[]> {
  // Directly call the repository's method
  return addressHistoryRepository.getLatestAddressHistory(limit);
}
