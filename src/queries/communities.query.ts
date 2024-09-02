import {
  useInfiniteQuery,
  useQuery,
  UseQueryResult,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { useGet, useServerGet } from "@/lib/use-fetch";

const BASE_URL = "/api/communities";
const QUERY_KEY = "communities";

/**
 * Hook to fetch the list of communities.
 *
 * @returns {UseQueryResult<any, unknown>} Query object containing the status and data of the request.
 */
export const useGetCommunities = (): UseQueryResult<any, unknown> => {
  return useQuery({
    queryFn: () => useGet(BASE_URL),
    queryKey: [QUERY_KEY],
  });
};

/**
 * Hook to fetch a specific community by name.
 *
 * @param {string} [name] - The name of the community to fetch.
 * @returns {Promise<any>} The response object containing the community data.
 */
export const useGetCommunity = (name?: string): Promise<any> => {
  return useServerGet(`${BASE_URL}/${name}`);
};

/**
 * Hook to fetch posts of a specific community with infinite scrolling.
 *
 * @param {number} id - The ID of the community whose posts are to be fetched.
 * @returns {UseInfiniteQueryResult<any, unknown>} Infinite query object containing the status and data of the request.
 */
export const useGetCommunityPosts = (
  id: number,
): UseInfiniteQueryResult<any, unknown> => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 0 }) =>
      useGet(`${BASE_URL}/${id}/posts?page=${pageParam}`),
    queryKey: ["community-posts", id],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};
