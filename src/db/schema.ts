//  npx drizzle migrate
// npx drizzle-kit push

import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  jsonb,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";
// Message Schema
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(), // Auto-incrementing primary key
  userId: text("userid").references(() => users.id),
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
  userId: text("userid").references(() => users.id),
});

// Category Schema
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  parentId: integer("parent_id"),
});
// export const categoryRelations = relations(categories, ({ many }) => ({
//   posts: many(postOnCategories),
// }));
// export const postOnCategories = pgTable(
//   "post_categories",
//   {
//     postId: integer("post_id")
//       .notNull()
//       .references(() => posts.id),
//     categoryId: integer("category_id")
//       .notNull()
//       .references(() => categories.id),
//   },
//   (t) => ({
//     pk: primaryKey(t.postId, t.categoryId),
//   }),
//);

// Comment Schema

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

// Community Schema
export const communities = pgTable("communities", {
  id: serial("id").primaryKey(),
  userId: text("userid")
    .notNull()
    .references(() => users.id), // Foreign key linking to users table
  // name: text("name").notNull(),
  // title: text("title").notNull(),
  // description: text("description"),
  // subscribers: integer("subscribers"),
  // onlineMembers: integer("online_members"),
  // members: integer("members"),
  // rules: text("rules"),
  // rank: integer("rank"),
  // createdAt: timestamp("created_at").defaultNow().notNull(),
  // iconImg: text("icon_img"),
  // bannerImg: text("banner_img"),
  // publicDescription: text("public_description"),
  // type: text("type").notNull(),
  // over18: boolean("over_18").default(false).notNull(),
});

// Profile Schema

export const roles = pgTable("roles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
});
export const permissions = pgTable("permissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
});
export const userRoles = pgTable("user_roles", {
  userId: text("userid")
    .notNull()
    .references(() => users.id),
  roleId: integer("role_id")
    .notNull()
    .references(() => roles.id),
});

export const rolePermissions = pgTable("role_permissions", {
  roleId: integer("role_id")
    .notNull()
    .references(() => roles.id),
  permissionId: integer("permission_id")
    .notNull()
    .references(() => permissions.id),
});

// Profile Schema
export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  userId: text("userid")
    .notNull()
    .references(() => users.id), // Foreign key linking to users table
  // defaultSet: boolean("default_set").notNull(),
  // userIsContributor: boolean("user_is_contributor").notNull(),
  bannerImg: text("banner_img"),
  // bannerSize: integer("banner_width").array(2), // Assuming width and height are integers
  // userIsBanned: boolean("user_is_banned").notNull(),
  // communityIcon: text("community_icon"),
  // showMedia: boolean("show_media").notNull(),
  avatar: text("avatar"),
  // displayName: text("display_name").notNull(),
  // title: text("title"),
  // coins: integer("coins").notNull(),
  // over18: boolean("over_18").notNull(),
  description: text("description"),
  // publicDescription: text("public_description"),
  // subscribers: integer("subscribers").notNull(),
  // isDefaultBanner: boolean("is_default_banner").notNull(),
  // isDefaultIcon: boolean("is_default_icon").notNull(),
  // profileType: text("profile_type").notNull(),
  // isSubscriber: boolean("is_subscriber").notNull(),
});

// Accounts Schema
export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  }),
);

// User Schema
export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  //id: uuid("id").default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  emailVerified: timestamp("email_verified"),
  image: text("image"),
  password: text("password").notNull(),
});
// export const users = pgTable("users", {
//   id: serial("id").primaryKey(),
//   name: text("name").notNull(),
//   email: text("email").unique().notNull(),
//   emailVerified: timestamp("email_verified"),
//   // password: text("password").notNull(),
//   image: text("image"),
//   // linkKarma: integer("link_karma").default(0).notNull(),
//   // commentKarma: integer("comment_karma").default(0).notNull(),
//  // createdAt: timestamp("created_at").defaultNow().notNull(),
// });

// Relations
export const usersRelations = relations(users, ({ one, many }) => ({
  profile: one(profiles, {
    fields: [users.id],
    references: [profiles.id],
  }),
  communities: many(communities),
  posts: many(posts),
  userRoles: many(userRoles),
}));

export const postsRelations = relations(posts, ({ one }) => ({
  user: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
}));

export const communitiesRelations = relations(communities, ({ one }) => ({
  user: one(users, {
    fields: [communities.userId],
    references: [users.id],
  }),
}));

// export const usersRelations = relations(users, ({ one, many }) => ({
//   profileInfo: one(users, {
//     fields: [profileInfo.userId],
//     references: [users.id],
//   }),
//   roles: many(userRoles, {
//     fields: [userRoles.userId],
//     references: [users.id],
//   }),
// }));

// export const rolesRelations = relations(roles, ({ many }) => ({
//   users: many(userRoles, {
//     fields: [userRoles.roleId],
//     references: [roles.id],
//   }),
//   permissions: many(rolePermissions, {
//     fields: [rolePermissions.roleId],
//     references: [roles.id],
//   }),
// }));

// export const permissionsRelations = relations(permissions, ({ many }) => ({
//   roles: many(rolePermissions, {
//     relationName: "roles",
//     references: [permissions.id],
//   }),
// }));
