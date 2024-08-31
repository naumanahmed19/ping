import { useGet } from "@/lib/use-fetch";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "/api/posts";
const QUERY_KEY = "posts";

export const useGetPosts = (page?: number) => {
  return useQuery({
    queryFn: () => useGet(BASE_URL),
    queryKey: [QUERY_KEY, page],
  });
};

export const useGetPost = (id?: number) => {
  return useQuery({
    queryFn: () => useGet(`${BASE_URL}/${id}`),
    queryKey: [QUERY_KEY, id],
  });
};
