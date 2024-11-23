"use server";

import { db } from "@/db/db";
import { useAuth } from "../use-auth";

// Sample data
export async function getUsers() {
  const { user, isAuthenticated } = await useAuth();

  if (!user) return;

  const users = await db.query.users.findMany({
    with: {
      communities: true,
    },
  });

  // attach media to community

  if (!users) {
    return { error: "Failed to get users" };
  }

  return users;
}
