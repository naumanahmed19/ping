import { Community } from "./Community";

export type Post = {
  id: number;
  title: string;
  content: string;
  image: string | null;
  aspectRatio?: "portrait" | "square";
  community: Community;
  votes: number;
  comments: number;
  isAwarded: boolean;
  isFavourited: boolean;
  created_at?: string;
  tags?: string[]; // Add tags property
  flair?: string; // Add flair property
};
