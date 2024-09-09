import { User } from "./User";

export interface Comment {
  id: number;
  postId: number;
  communityId: number;
  userId: number;
  time: string;
  content: string;
  upvotes: number;
  created_at: string;
  replies: Comment[];
  author: User;
}
