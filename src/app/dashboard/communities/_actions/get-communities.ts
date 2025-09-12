"use server";

import { useAuth } from "@/actions/use-auth";
import { db } from "@/db/db";
import { communities } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getCommunities() {
  const { user } = await useAuth();

  if (!user) return;

  const response = await db.query.communities.findMany({
    orderBy: [desc(communities.id)],
  });

  if (!response) {
    return { error: "Failed to get communities" };
  }

  return response;
}
