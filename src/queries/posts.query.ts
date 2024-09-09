import { get } from "@/lib/use-fetch";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const BASE_URL = "/api/posts";
const QUERY_KEY = "posts";

export const useGetPosts = () => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 0 }) => get(`${BASE_URL}/?page=${pageParam}`),
    queryKey: [QUERY_KEY],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useGetPost = (id?: number) => {
  return useQuery({
    queryFn: () => get(`${BASE_URL}/${id}`),
    queryKey: [QUERY_KEY, id],
  });
};

export const useGetPostComments = (postId: number) => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 0 }) =>
      get(`${BASE_URL}/${postId}/comments?page=${pageParam}`),
    queryKey: ["comments"],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};
