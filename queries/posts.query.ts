import { getPosts } from "@/repositories/posts/posts.repository";
import { useQuery } from "@tanstack/react-query";

export const useGetPosts = (page?: number) => {
  return useQuery({
    queryFn: () => getPosts(page),
    queryKey: ["posts", page],
  });
};
