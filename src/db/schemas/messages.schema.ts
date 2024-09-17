import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { users } from "../schema";

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(), // Auto-incrementing primary key
  userId: text("userid").references(() => users.id),
  avatar: varchar("avatar", { length: 255 }).notNull(), // URL or path to the avatar image
  name: varchar("name", { length: 255 }).notNull(), // Name of the message sender
  message: text("message").notNull(), // Content of the message
});
