import { get, serverGet } from "@/lib/use-fetch";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";

const BASE_URL = "/api/communities";

export const useGetPopularCommunities = (): UseQueryResult<any, unknown> => {
  return useQuery({
    queryFn: () => get(`${BASE_URL}/popular`),
    queryKey: ["communities-popular"],
  });
};

export const useGetCommunities = (): UseInfiniteQueryResult<any, unknown> => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 0 }) => get(`${BASE_URL}/?page=${pageParam}`),
    queryKey: ["communities-all"],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useGetCommunity = (name?: string): Promise<any> => {
  return serverGet(`${BASE_URL}/${name}`);
};

export const useGetCommunityPosts = (
  id: number,
): UseInfiniteQueryResult<any, unknown> => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 0 }) =>
      get(`${BASE_URL}/${id}/posts?page=${pageParam}`),
    queryKey: ["community-posts", id],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useCreateCommunity = (name?: string): Promise<any> => {
  return serverGet(`${BASE_URL}/${name}`);
};
