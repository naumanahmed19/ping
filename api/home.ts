import { useQuery } from "@tanstack/react-query";

export const useNotifications = (page: number) => {
  return useQuery({
    queryFn: () =>
      fetch(`/data/notifications.json?page=${page}`).then((res) => res.json()),
    queryKey: ["notifications", page],
  });
};
