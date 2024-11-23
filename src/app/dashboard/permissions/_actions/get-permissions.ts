"use server";

import { useAuth } from "@/actions/use-auth";
import { db } from "@/db/db";
import { permissions } from "@/db/schema";
import { desc } from "drizzle-orm";

// Sample data
export async function getPermissions() {
  const { user } = await useAuth();

  if (!user) return;

  const response = await db.query.permissions.findMany({
    // with: {
    //   rolePermissions: {
    //     with: {
    //       permission: true,
    //     },
    //   },
    // },
    orderBy: [desc(permissions.createdAt)],
  });

  // attach media to community

  if (!response) {
    return { error: "Failed to get permissions" };
  }

  return response;
}
