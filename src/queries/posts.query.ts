import { useGet } from "@/lib/use-fetch";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const BASE_URL = "/api/posts";
const QUERY_KEY = "posts";

export const useGetPosts = (page?: number) => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 0 }) => useGet(`${BASE_URL}/?page=${pageParam}`),
    queryKey: [QUERY_KEY],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useGetPost = (id?: number) => {
  return useQuery({
    queryFn: () => useGet(`${BASE_URL}/${id}`),
    queryKey: [QUERY_KEY, id],
  });
};
