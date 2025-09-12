"use server";

import { useAuth } from "@/actions/use-auth";
import { db } from "@/db/db";
import { comments, communities, posts } from "@/db/schema";
import { eq, inArray } from "drizzle-orm";

export async function deleteCommunity(id: number) {
  const { user } = await useAuth();

  if (!user) {
    throw new Error("Unauthorized");
  }

  try {
    // Check if the community exists and the user is the owner
    const community = await db
      .select()
      .from(communities)
      .where(eq(communities.id, id))
      .limit(1);

    if (!community.length) {
      throw new Error("Community not found");
    }

    if (community[0].userId !== user.id) {
      throw new Error("You are not authorized to delete this community");
    }

    // Get all posts in this community to delete their comments
    const communityPosts = await db
      .select({ id: posts.id })
      .from(posts)
      .where(eq(posts.communityId, id));

    // Delete all comments for posts in this community
    if (communityPosts.length > 0) {
      const postIds = communityPosts.map((post) => post.id);
      await db.delete(comments).where(inArray(comments.postId, postIds));
    }

    // Delete all posts related to this community
    await db.delete(posts).where(eq(posts.communityId, id));

    // Delete the community from the database
    const response = await db
      .delete(communities)
      .where(eq(communities.id, id))
      .returning({ deletedId: communities.id });

    if (response.length === 0) {
      throw new Error("Community not found");
    }

    return {
      success: "Community deleted successfully",
      deletedId: response[0].deletedId,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to delete community: " + error.message);
  }
}
