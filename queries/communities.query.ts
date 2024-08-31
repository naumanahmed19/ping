import { useQuery } from "@tanstack/react-query";
import { useGet } from "@/lib/use-fetch";

const BASE_URL = "/api/communities";
const QUERY_KEY = "communities";

export const useGetCommunities = () => {
  return useQuery({
    queryFn: () => useGet(BASE_URL),
    queryKey: [QUERY_KEY],
  });
};

export const useGetCommunity = (name: string) => {
  return useQuery({
    queryFn: () => useGet(`${BASE_URL}/${name}`),
    queryKey: [QUERY_KEY, name],
  });
};
