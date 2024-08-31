import { useGet, usePost } from "@/lib/use-fetch";
import {
  createCommunityParam,
  getCommunitiesParam,
  getCommunityParam,
} from "./communities.params";

// Fetch all communities
export const fetchCommunities = (params?: getCommunitiesParam) => {
  return useGet("/api/communities");
};

// Fetch a community by name
export const fetchCommunity = (name: string) => {
  return useGet(`/api/communities/${name}`);
};

// Create a new community
export const createCommunity = (data: createCommunityParam) => {
  return usePost("/api/communities", data);
};
