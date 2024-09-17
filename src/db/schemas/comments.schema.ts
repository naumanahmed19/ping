import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { posts, users } from "../schema";

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  postId: integer("post_id")
    .notNull()
    .references(() => posts.id),
  userId: text("userid")
    .notNull()
    .references(() => users.id),
  parentId: integer("parent_id"),
  content: text("content").notNull(),
  upvotes: integer("upvotes").notNull().default(0),
  downvotes: integer("downvotes").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
});
