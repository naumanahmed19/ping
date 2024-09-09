export interface Community {
  id: number;
  name: string;
  title: string;
  description: string;
  subscribers: number;
  online_members: number;
  members: number;
  rules: string;
  rank: number;
  created_at: string;
  icon_img: string;
  banner_img: string;
  public_description: string;
  type: string;
  over_18: boolean;
}
