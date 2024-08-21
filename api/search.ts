import { useQuery } from "@tanstack/react-query";

export const useSearch = (q: any) => {
  return useQuery({
    queryKey: ["searchResults", q],
    queryFn: () => fetchSearch(q),
    enabled: !!q,
  });
};

function fetchSearch(q) {
  console.log(q, "q");
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
