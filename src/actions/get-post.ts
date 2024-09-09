"use server";
import communities from "@/../public/data/communities.json";
import posts from "@/../public/data/posts.json";
import { Community } from "@/types/Community";
import { Post } from "@/types/Post";
// Sample data
export async function getPost(postId: number) {
  const post: Post | undefined = posts.find((post: any) => post.id === postId);

  if (post) {
    const community: Community | undefined = communities.find(
      (c: any) => c.id === post.communityId,
    );
    post.community = community;
  }

  return post;
}
