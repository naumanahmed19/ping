import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { categories, users } from "../schema";

export const communities = pgTable("communities", {
  id: serial("id").primaryKey(),
  userId: text("userid")
    .notNull()
    .references(() => users.id), // Foreign key linking to users table
  name: text("name").notNull(),
  title: text("title").notNull(),
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

export const communityCategories = pgTable("community_categories", {
  communityId: integer("community_id")
    .notNull()
    .references(() => communities.id), // Foreign key linking to communities table
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id), // Foreign key linking to categories table
});

export const communitiesRelations = relations(communities, ({ one }) => ({
  user: one(users, {
    fields: [communities.userId],
    references: [users.id],
  }),
}));
