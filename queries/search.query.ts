/**
 * Nav bar suggestions:
 *
 */

import {
  fetchSearchResults,
  fetchSearchSuggestions,
} from "@/repositories/search/search.repository";
import { useQuery } from "@tanstack/react-query";

export const useSearchSuggestions = (q: any) => {
  return useQuery({
    queryKey: ["useSearchSuggestions", q],
    queryFn: () => fetchSearchSuggestions(q),
    // enabled: !!q,
  });
};

/**
 *  When a user press enters on searchbar we want to fetch results
 *  to show on search page
 *
 */
export const useSearch = (q: any) => {
  return useQuery({
    queryKey: ["searchResults", q],
    queryFn: () => fetchSearchResults(q),
    enabled: !!q,
  });
};
