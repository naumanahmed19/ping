"use server";

import { db } from "@/db/db";
import { useAuth } from "../use-auth";

// Sample data
export async function getCommunities() {
  const { user, isAuthenticated } = await useAuth();

  if (!user) return;

  const response = await db.query.communities.findMany();

  // attach media to community

  if (!response) {
    return { error: "Failed to get communities" };
  }

  return response;
}
