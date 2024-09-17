import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { communities, posts, users } from "../schema";

// Define the media table
export const media = pgTable("media", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id), // Foreign key linking to users table
  url: text("url").notNull(),
  type: text("type").notNull(),
  key: text("key").notNull(),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(),
  resourceId: text("resource_id"), // Generic resource ID
  resourceType: text("resource_type").notNull(), // Type of the resource (e.g., 'post', 'community')
});

// Define the relations for the media table
export const mediaRelations = relations(media, ({ one }) => ({
  user: one(users, {
    fields: [media.userId],
    references: [users.id],
  }),
  post: one(posts, {
    fields: [media.resourceId],
    references: [posts.id],
  }),
  community: one(communities, {
    fields: [media.resourceId],
    references: [communities.id],
  }),
}));
