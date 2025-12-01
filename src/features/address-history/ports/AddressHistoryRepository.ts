import {
  DbAddressHistory,
  NewAddressHistory,
} from "../../../db/schema";

export interface AddressHistoryRepository {
  createAddressHistory(
    addressHistory: NewAddressHistory
  ): Promise<void>;
  getLatestAddressHistory(limit: number): Promise<DbAddressHistory>;
  deleteAddressHistory(id: string): Promise<void>;
}
