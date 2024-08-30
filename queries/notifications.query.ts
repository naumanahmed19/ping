import { fetchNotifications } from "@/repositories/notifications/notifications.repository";
import { useQuery } from "@tanstack/react-query";

export const useNotifications = (page: number) => {
  return useQuery({
    queryFn: () => fetchNotifications(page),
    queryKey: ["notifications", page],
  });
};
