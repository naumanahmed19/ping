import { SearchParams } from "@/lib/schemas/search.schema";
import { useGet } from "@/lib/use-fetch";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "/api/search";
const QUERY_KEY = "search";

export const useSearchSuggestions = (searchTerm: string) => {
  return useQuery({
    queryFn: () => useGet(`${BASE_URL}/suggestions`, { q: searchTerm }),
    queryKey: [QUERY_KEY, searchTerm],
    // enabled: !!q,
  });
};

/**
 *  When a user press enters on searchbar we want to fetch results
 *  to show on search page
 *
 */
export const useSearch = (params: SearchParams) => {
  console.log("params", params);
  return useQuery({
    queryKey: [QUERY_KEY, params],
    queryFn: () => useGet(BASE_URL, params),
    enabled: !!params,
  });
};
