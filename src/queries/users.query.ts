import { useGet, useServerGet } from "@/lib/use-fetch";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const BASE_URL = "/api/users";
const QUERY_KEY = "users";

export const useGetUsers = (page?: number) => {
  return useQuery({
    queryFn: () => useGet(BASE_URL),
    queryKey: [QUERY_KEY, page],
  });
};

export const useGetUser = (userId?: string) => {
  return useServerGet(`${BASE_URL}/${userId}`);
};

export const useGetUserPosts = (userId: number) => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 0 }) =>
      useGet(`${BASE_URL}/${userId}/posts?page=${pageParam}`),
    queryKey: ["users-posts", userId],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useGetUserCommunities = (userId: number) => {
  return useQuery({
    queryFn: () => useGet(`${BASE_URL}/${userId}/communities`),
    queryKey: [QUERY_KEY],
  });
};

export const useGetUserComments = (userId: number) => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 0 }) =>
      useGet(`${BASE_URL}/${userId}/comments?page=${pageParam}`),
    queryKey: ["comments"],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};
