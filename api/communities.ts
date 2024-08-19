import { useQuery } from "@tanstack/react-query";

export const createCommunity = async (data) => {
  const response = await fetch("/api/submit", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    // Throwing error here if response is not okay (e.g., 404)thrownewError(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

/**
 * Custom hook for fetching communities data.
 * @returns {QueryResult} The result of the query.
 */
export const useCommunities = () => {
  return useQuery({
    queryFn: () => fetch(`/data/communities.json`).then((res) => res.json()),
    queryKey: ["communities"],
  });
};

/**
 * Custom hook for fetching community data.
 *
 * @param id - The ID of the community to fetch.
 * @returns The result of the query.
 */
export const useCommunity = (id) => {
  return useQuery({
    queryFn: () =>
      fetch(`/data/communities/${id}.json`).then((res) => res.json()),
    queryKey: ["communities", id],
  });
};
