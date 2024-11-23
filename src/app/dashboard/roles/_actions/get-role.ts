"use server";

import { useAuth } from "@/actions/use-auth";
import { db } from "@/db/db";
import { roles } from "@/db/schema";
import { desc } from "drizzle-orm";

// Sample data
export async function getRoles() {
  const { user } = await useAuth();

  if (!user) return;

  const response = await db.query.roles.findMany({
    with: {
      rolePermissions: {
        with: {
          permission: true,
        },
      },
    },
    orderBy: [desc(roles.createdAt)],
  });

  console.log(response);

  // attach media to community

  if (!response) {
    return { error: "Failed to get categories" };
  }

  return response;
}
