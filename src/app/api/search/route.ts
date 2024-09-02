import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import posts from "@/../public/data/posts.json";
import { Post } from "@/types/Post";
import communities from "@/../public/data/communities.json";
import { Community } from "@/types/Community";

export async function GET(request: Request, context: any) {
  const data = new URLSearchParams(request.url.split("?")[1]); // Extract query parameters from the URL
  const q = data.get("q");

  const type = data.get("type");

  const response = await fetchSearchResults(q, type);

  return NextResponse.json(response);
}

export async function fetchSearchResults(
  q: string | null,
  type: string | null,
) {
  switch (type) {
    case "posts":
      return await getPosts(q); // Await the getPosts function
    case "communities":
      return await getCommunities(q); // Await the getCommunities function
    default:
      return await getPosts(q); // Await the getPosts function
  }
}
const createRegexes = (query: string) => {
  const queryWords = query.toLowerCase().split(" ");
  return queryWords.map((word) => new RegExp(word, "i"));
};

export const getPosts = async (q: string | null) => {
  let response: any[] = [];

  if (q) {
    const regexes = createRegexes(q);

    const filteredPosts = posts.filter((p) =>
      regexes.some((regex) => regex.test(p.title)),
    );

    //Attach community to post
    filteredPosts.map((post: any) => {
      const community = communities.find((c: any) => c.id === post.communityId);
      post.community = community;
      return post;
    });

    if (filteredPosts.length > 0) {
      response = filteredPosts;
    }
  }
  return response;
};

export const getCommunities = async (q: string | null) => {
  let response: Community[] = [];

  if (q) {
    const regexes = createRegexes(q);

    const filteredCommunities = communities.filter((c: Community) =>
      regexes.some((regex) => regex.test(c.title)),
    );

    if (filteredCommunities.length > 0) {
      response = filteredCommunities;
    }
  }
  return response;
};
