//  npx drizzle migrate
// npx drizzle-kit push

import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

// Message Schema
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(), // Auto-incrementing primary key
  userId: integer("user_id").references(() => users.id),
  avatar: varchar("avatar", { length: 255 }).notNull(), // URL or path to the avatar image
  name: varchar("name", { length: 255 }).notNull(), // Name of the message sender
  message: text("message").notNull(), // Content of the message
});

// Notification Schema
export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 255 }).notNull(),
  message: text("message").notNull(),
  postTitle: varchar("post_title", { length: 255 }).notNull(),
  postLink: varchar("post_link", { length: 255 }).notNull(),
  commentSnippet: text("comment_snippet"),
  createdAt: timestamp("created_at").defaultNow(),
  isRead: boolean("is_read").notNull(),
  userId: integer("user_id").references(() => users.id),
});

// Category Schema
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  parentId: integer("parent_id"),
});

// Comment Schema

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  postId: integer("post_id")
    .notNull()
    .references(() => posts.id),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  parentId: integer("parent_id"),
  content: text("content").notNull(),
  upvotes: integer("upvotes").notNull().default(0),
  downvotes: integer("downvotes").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

// Post Schema
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
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

// Community Schema
export const communities = pgTable("communities", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id), // Foreign key linking to users table
  name: text("name").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  subscribers: integer("subscribers").notNull(),
  onlineMembers: integer("online_members").notNull(),
  members: integer("members").notNull(),
  rules: text("rules").notNull(),
  rank: integer("rank").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  iconImg: text("icon_img"),
  bannerImg: text("banner_img"),
  publicDescription: text("public_description"),
  type: text("type").notNull(),
  over18: boolean("over_18").notNull(),
});

// Profile Schema
// Profile Schema
export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id), // Foreign key linking to users table
  defaultSet: boolean("default_set").notNull(),
  userIsContributor: boolean("user_is_contributor").notNull(),
  bannerImg: text("banner_img"),
  bannerSize: integer("banner_width").array(2), // Assuming width and height are integers
  userIsBanned: boolean("user_is_banned").notNull(),
  communityIcon: text("community_icon"),
  showMedia: boolean("show_media").notNull(),
  avatar: text("avatar").notNull(),
  displayName: text("display_name").notNull(),
  title: text("title"),
  coins: integer("coins").notNull(),
  over18: boolean("over_18").notNull(),
  description: text("description"),
  publicDescription: text("public_description"),
  subscribers: integer("subscribers").notNull(),
  isDefaultBanner: boolean("is_default_banner").notNull(),
  isDefaultIcon: boolean("is_default_icon").notNull(),
  profileType: text("profile_type").notNull(),
  isSubscriber: boolean("is_subscriber").notNull(),
});

// User Schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  linkKarma: integer("link_karma").default(0).notNull(),
  commentKarma: integer("comment_karma").default(0).notNull(),
  isGold: boolean("is_gold").default(false).notNull(),
  isMod: boolean("is_mod").default(false).notNull(),
  emailVerified: timestamp("email_verified"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
