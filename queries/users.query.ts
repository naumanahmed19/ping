import { useGet } from "@/lib/use-fetch";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const BASE_URL = "/api/users";
const QUERY_KEY = "users";

export const useGetUsers = (page?: number) => {
  return useQuery({
    queryFn: () => useGet(BASE_URL),
    queryKey: [QUERY_KEY, page],
  });
};

export const useGetUser = (id?: number) => {
  return useQuery({
    queryFn: () => useGet(`${BASE_URL}/${id}`),
    queryKey: [QUERY_KEY, id],
  });
};

// export const useGetUserPosts = (userId: number, page: number) => {
//   return useQuery({
//     queryFn: () => useGet(`${BASE_URL}/${userId}/posts`),
//     queryKey: ["users-posts", page],
//   });
// };

export const useGetUserPosts = (userId: number) => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 0 }) =>
      useGet(`${BASE_URL}/${userId}/posts?page=${pageParam}`),
    queryKey: ["users-posts", userId],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};
