"use server";

import { useAuth } from "@/actions/use-auth";
import { db } from "@/db/db";
import { categories } from "@/db/schema";
import { desc } from "drizzle-orm";

// Sample data
export async function getCategories() {
  const { user } = await useAuth();

  if (!user) return;

  const response = await db.query.categories.findMany({
    orderBy: [desc(categories.createdAt)],
  });

  // attach media to community

  if (!response) {
    return { error: "Failed to get categories" };
  }

  return response;
}
