export const getPosts = async (page?: number) => {
  const postsResponse = await fetch(`/data/posts.json`).then((res) =>
    res.json(),
  );
  const communitiesResponse = await fetch(`/data/communities.json`).then(
    (res) => res.json(),
  );

  // Attach community to each post
  const postsWithCommunity = postsResponse.map((post: any) => {
    const community = communitiesResponse.find(
      (c: any) => c.id === post.communityId,
    );

    post.community = community;
    return post;
  });

  return postsWithCommunity;
};
