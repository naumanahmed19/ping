"use server";

import { db } from "@/db/db";
import { useAuth } from "../use-auth";

// Sample data
export async function getCategories() {
  const { user, isAuthenticated } = await useAuth();

  if (!user) return;

  const categories = await db.query.categories.findMany();

  // attach media to community

  if (!categories) {
    return { error: "Failed to get categories" };
  }

  return categories;
}
