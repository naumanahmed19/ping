/**
 * TODO:
 * This function needs to be changed to get results from server
 * Search suggestion may included posts, communities etc
 * Then structure can be seen in suggestions.json file
 */
export async function fetchSearchSuggestions(q: string) {
  let suggestions;
  const data = new URLSearchParams();

  //on search key changes send q params to server to get exact results
  if (q) {
    suggestions = await fetch(`/data/suggestions.json`).then((res) =>
      res.json(),
    );

    suggestions.users = suggestions.users.filter((u) =>
      u.name.toLowerCase().includes(q),
    );
    suggestions.communities = suggestions.communities.filter((u) =>
      u.title.toLowerCase().includes(q),
    );
  } else {
    //default suggestion:
    suggestions = await fetch(`/data/suggestions-default.json`).then((res) =>
      res.json(),
    );
  }
  return suggestions;
}

export function fetchSearchResults(q) {
  switch (q) {
    case "posts":
      return getPosts(q);
    case "communities":
      return getPosts(q);
    default:
      return getPosts(q);
  }
}

export const getPosts = async (q) => {
  const postsResponse = await fetch(`/data/posts.json`).then((res) =>
    res.json(),
  );

  const filteredPosts = postsResponse.filter((post) => {
    return post.title.toLowerCase().includes(q?.s.toLowerCase());
  });

  const communitiesResponse = await fetch(`/data/communities.json`).then(
    (res) => res.json(),
  );

  // Attach community to each post
  const postsWithCommunity = filteredPosts.map((post: any) => {
    const community = communitiesResponse.find(
      (c: any) => c.id === post.communityId,
    );

    post.community = community;
    return post;
  });

  return postsWithCommunity;
};
