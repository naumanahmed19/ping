"use server";

import communities from "@/../public/data/communities.json";
import posts from "@/../public/data/posts.json";
// Sample data
export async function getPopularPosts() {
  const response = posts.map((post: any) => {
    const community = communities.find((c: any) => c.id === post.communityId);
    post.community = community;
    return post;
  });

  return response;
}
