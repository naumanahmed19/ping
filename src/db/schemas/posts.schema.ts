import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { communities, users } from "../schema";

// Post Schema
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  userId: text("userid")
    .notNull()
    .references(() => users.id),
  communityId: integer("community_id")
    .notNull()
    .references(() => communities.id),
  title: text("title").notNull(),
  content: text("content").notNull(),
  image: text("image"),
  aspectRatio: text("aspect_ratio"),
  upvotes: integer("upvotes").notNull().default(0),
  downvotes: integer("downvotes").notNull().default(0),
  comments: integer("comments").notNull().default(0),
  isAwarded: boolean("is_awarded").notNull(),
  isFavourited: boolean("is_favourited").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  tags: jsonb("tags"),
  flair: text("flair"),
});

export const postsRelations = relations(posts, ({ one }) => ({
  user: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
}));
