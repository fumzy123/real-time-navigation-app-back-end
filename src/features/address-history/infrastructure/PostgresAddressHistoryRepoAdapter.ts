import { db } from "../../../db";
import {
  addressHistory,
  DbAddressHistory,
  NewAddressHistory,
} from "../../../db/schema";
import { AddressHistoryRepository } from "../ports/AddressHistoryRepository";
import { desc, eq } from "drizzle-orm";

import type { NodePgDatabase } from "drizzle-orm/node-postgres";

/**
 * ADAPTER (Outbound): Implementation of the AddressHistoryRepository Port using Drizzle ORM
 * and PostgreSQL. This layer knows about the database implementation details.
 */
export class PostgresAddressHistoryRepoAdapter
  implements AddressHistoryRepository
{
  // Inject the database client (Db) to keep this class testable
  constructor(private db: NodePgDatabase) {}

  /**
   * Saves a new address to history or updates the existing one.
   * Logic: Check for existence -> Update if found (and return void) -> Insert if new (and return void).
   */
  async createAddressHistory(
    addressHistoryData: NewAddressHistory
  ): Promise<DbAddressHistory> {
    // 1. Check if the address already exists (using addressText)
    const existing = await this.db
      .select()
      .from(addressHistory)
      .where(
        eq(addressHistory.addressText, addressHistoryData.addressText)
      )
      .limit(1);

    if (existing.length > 0) {
      // 2. If it exists, update the lastUsed timestamp and coordinates
      await this.db
        .update(addressHistory)
        .set({
          lastUsed: new Date(),
          longitude: addressHistoryData.longitude,
          latitude: addressHistoryData.latitude,
        })
        .where(eq(addressHistory.id, existing[0].id));

      // Return the updated record
      const updated = await this.db
        .select()
        .from(addressHistory)
        .where(eq(addressHistory.id, existing[0].id))
        .limit(1);

      return updated[0];
    } else {
      // 3. If new, insert the record and return it
      const inserted = await this.db
        .insert(addressHistory)
        .values({
          addressText: addressHistoryData.addressText,
          longitude: addressHistoryData.longitude,
          latitude: addressHistoryData.latitude,
          lastUsed: new Date(),
        })
        .returning(); // Drizzle ORM supports returning inserted rows

      return inserted[0];
    }
  }

  /**
   * Retrieves the most recently used addresses, limited by the provided number.
   * This method always returns a list (array) of DbAddressHistory objects.
   */
  async getLatestAddressHistory(
    limit: number
  ): Promise<DbAddressHistory[]> {
    return this.db
      .select()
      .from(addressHistory)
      .orderBy(desc(addressHistory.lastUsed)) // Most recent first
      .limit(limit);
  }
}

// Instantiate the repository using the shared db client
export const addressHistoryRepository =
  new PostgresAddressHistoryRepoAdapter(db);
