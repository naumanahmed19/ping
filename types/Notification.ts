import { User } from "./User";

export interface Notification {
  id: number;
  type: string;
  message: string;
  post_title: string;
  post_link: string;
  comment_snippet?: string;
  created_at: Date;
  is_read: boolean;
  user?: User;
}
