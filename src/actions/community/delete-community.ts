"use server";

import { db } from "@/db/db";
import { comments, communities, communityCategories, posts } from "@/db/schema";
import { eq, inArray } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { useAuth } from "../use-auth";

export async function deleteCommunity(communityId: number) {
  try {
    const { user, isAuthenticated } = await useAuth();

    if (!user) {
      return { error: "Not authenticated" };
    }

    // Check if the community exists and the user is the owner
    const community = await db
      .select()
      .from(communities)
      .where(eq(communities.id, communityId))
      .limit(1);

    if (!community.length) {
      return { error: "Community not found" };
    }

    if (community[0].userId !== user.id) {
      return { error: "You are not authorized to delete this community" };
    }

    // Delete all related data in the correct order (to handle foreign key constraints)

    // 1. Get all posts in the community first
    const communityPosts = await db
      .select({ id: posts.id })
      .from(posts)
      .where(eq(posts.communityId, communityId));

    // 2. Delete all comments on posts in this community
    if (communityPosts.length > 0) {
      const postIds = communityPosts.map((post) => post.id);
      await db.delete(comments).where(inArray(comments.postId, postIds));
    }

    // 3. Delete all posts in the community
    await db.delete(posts).where(eq(posts.communityId, communityId));

    // 4. Delete related community categories
    await db
      .delete(communityCategories)
      .where(eq(communityCategories.communityId, communityId));

    // 5. Finally, delete the community
    await db.delete(communities).where(eq(communities.id, communityId));

    // Revalidate the communities page to reflect the changes
    revalidatePath("/dashboard/communities");

    return { success: "Community deleted successfully" };
  } catch (error) {
    console.error("Error deleting community:", error);
    return { error: "Failed to delete community" };
  }
}
