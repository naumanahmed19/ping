import { useGet, useServerGet } from "@/lib/use-fetch";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";

const BASE_URL = "/api/communities";
const QUERY_KEY = "communities";

export const useGetPopularCommunities = (): UseQueryResult<any, unknown> => {
  return useQuery({
    queryFn: () => useGet(`${BASE_URL}/popular`),
    queryKey: ["communities-popular"],
  });
};

export const useGetCommunities = (): UseInfiniteQueryResult<any, unknown> => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 0 }) => useGet(`${BASE_URL}/?page=${pageParam}`),
    queryKey: ["communities-all"],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useGetCommunity = (name?: string): Promise<any> => {
  return useServerGet(`${BASE_URL}/${name}`);
};

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
