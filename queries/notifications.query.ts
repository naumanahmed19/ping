import { useGet } from "@/lib/use-fetch";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "/api/notifications";
const QUERY_KEY = "notifications";

export const useNotifications = (page: number) => {
  return useQuery({
    queryFn: () => useGet(BASE_URL),
    queryKey: [QUERY_KEY],
  });
};
