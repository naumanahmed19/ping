import { get } from "@/lib/use-fetch";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
const BASE_URL = "/api/notifications";

export const useLatestNotifications = () => {
  return useQuery({
    queryFn: () => get(`${BASE_URL}/latest`),
    queryKey: ["latest-notifications"],
  });
};

export const useNotifications = () => {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 0 }) => get(`${BASE_URL}/?page=${pageParam}`),
    queryKey: ["notifications"],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};
