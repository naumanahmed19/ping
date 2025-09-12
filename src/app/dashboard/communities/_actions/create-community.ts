"use server";

import { useAuth } from "@/actions/use-auth";
import { db } from "@/db/db";
import { communities } from "@/db/schema";

export interface CreateCommunityInput {
  name: string;
  title: string;
}

export async function createCommunity(data: CreateCommunityInput) {
  const { user } = await useAuth();

  if (!user) return;

  try {
    // Validate input data
    if (!data.name || !data.title) {
      throw new Error("Name and title are required");
    }

    // Insert community data into the database
    const response = await db
      .insert(communities)
      .values({
        userId: user.id,
        name: data.name,
        title: data.title,
      })
      .onConflictDoUpdate({
        target: communities.id,
        set: {
          name: data.name,
          title: data.title,
          userId: user.id,
        },
      })
      .returning({ communityId: communities.id });

    return {
      success: "Community created successfully",
      communityId: response[0].communityId,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to create community: " + error.message);
  }
}
