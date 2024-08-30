import {
  createCommunityParam,
  getCommunitiesParam,
  getCommunityParam,
} from "./communities.params";

// Fetch all communities
export const fetchCommunities = async (params?: getCommunitiesParam) => {
  const response = await fetch(`/data/communities.json`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Fetch a community by name
export const fetchCommunity = async (name: string) => {
  try {
    const response = await fetch("/data/communities.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const communities = await response.json();
    const community = communities.find((community) => community.name === name);

    if (!community) {
      throw new Error(`Community with name ${name} not found`);
    }

    return community;
  } catch (error) {
    console.error("Failed to fetch community:", error);
    return null;
  }
};
// Create a new community
export const createCommunity = async (data: createCommunityParam) => {
  const response = await fetch("/api/submit", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    // Throwing error here if response is not okay (e.g., 404)thrownewError(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
