import { Message } from "./Message";

export interface Profile {
  default_set: boolean;
  user_is_contributor: boolean;
  banner_img: string;
  banner_size: [number, number];
  user_is_banned: boolean;
  community_icon: string;
  show_media: boolean;
  avatar: string;
  display_name: string;
  title: string;
  coins: number;
  over_18: boolean;
  description: string;
  public_description: string;
  subscribers: number;
  is_default_banner: boolean;
  is_default_icon: boolean;
  profile_type: string;
  is_subscriber: boolean;
}

export interface User {
  id: number;
  name: string;
  created_utc: number;
  link_karma: number;
  comment_karma: number;
  is_gold: boolean;
  is_mod: boolean;
  has_verified_email: boolean;
  profile: Profile;
  messages: Message[];
}
