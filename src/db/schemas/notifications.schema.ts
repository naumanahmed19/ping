import {
  boolean,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "../schema";

export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 255 }).notNull(),
  message: text("message").notNull(),
  postTitle: varchar("post_title", { length: 255 }).notNull(),
  postLink: varchar("post_link", { length: 255 }).notNull(),
  commentSnippet: text("comment_snippet"),
  createdAt: timestamp("created_at").defaultNow(),
  isRead: boolean("is_read").notNull(),
  userId: text("userid").references(() => users.id),
});
