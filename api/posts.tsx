import { posts } from "@/data/posts";
import { comments } from "@/data/comments";
import { useQuery } from "@tanstack/react-query";

export const fetchPosts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate returning JSON data
      resolve(posts);
    }, 100); // Simulate a network delay of 1 second
  });
};

// export const fetchPosts = async () => {
//   return new Promise((resolve,reject) => {
//     reject(new Error('Failed to fetch posts')); // Reject with an error
//     // setTimeout(() => {
//     //   // Simulate returning JSON data
//     //   resolve(posts);
//     // }, 1000); // Simulate a network delay of 1 second
//   });
// };

export const getComments = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000); // Simulate a network delay
  });
};

export const getPosts = async () => {
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

/**
 * Custom hook for fetching community data.
 *
 * @param id - The ID of the community to fetch.
 * @returns The result of the query.
 */
export const usePosts = () => {
  return useQuery({
    queryFn: getPosts,
    queryKey: ["posts"],
  });
};
