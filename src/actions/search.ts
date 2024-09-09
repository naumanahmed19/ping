"use server";

import communities from "@/../public/data/communities.json";
import posts from "@/../public/data/posts.json";

export async function fetchSearchResults(
  q: string | null,
  type: string | null,
): Promise<any[]> {
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

export const getPosts = async (q: string | null): Promise<any[]> => {
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

    response = filteredPosts;
  }

  return response;
};

export const getCommunities = async (q: string | null): Promise<any[]> => {
  let response: any[] = [];

  if (q) {
    const regexes = createRegexes(q);

    const filteredCommunities = communities.filter((c) =>
      regexes.some((regex) => regex.test(c.name)),
    );

    response = filteredCommunities;
  }

  return response;
};
