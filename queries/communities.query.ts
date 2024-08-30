import {
  getCommunitiesParam,
  getCommunityParam,
} from "@/repositories/communities/communities.params";
import {
  createCommunity,
  fetchCommunities,
  fetchCommunity,
} from "@/repositories/communities/communities.repository";

import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCommunities = (params?: getCommunitiesParam) => {
  return useQuery({
    queryFn: () => fetchCommunities(params),
    queryKey: ["communities"],
  });
};

export const useGetCommunity = (name: string) => {
  return useQuery({
    queryFn: () => fetchCommunity(name),
    queryKey: ["communities", name],
  });
};

export const useCreateCommunityMutation = () => useMutation(createCommunity);
