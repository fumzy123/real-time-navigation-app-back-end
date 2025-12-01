import {
  pgTable,
  serial,
  text,
  doublePrecision,
  timestamp,
} from "drizzle-orm/pg-core";

export const addressHistory = pgTable("address_history", {
  id: serial("id").primaryKey(),
  addressText: text("address_text").notNull(),
  // Store coordinates as two double-precision numbers
  longitude: doublePrecision("longitude").notNull(),
  latitude: doublePrecision("latitude").notNull(),
  lastUsed: timestamp("last_used").defaultNow().notNull(),
  // Add a unique constraint to prevent saving the same address text repeatedly
  // unique: addressText
});

// Define the type for history items used across the app
export type DbAddressHistory = typeof addressHistory.$inferSelect;
export type NewAddressHistory = typeof addressHistory.$inferInsert;
