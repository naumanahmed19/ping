export interface Community {
  id: number;
  name: string;
  title: string;
  description: string;
  subscribers: number;
  online_members: number;
  rank: number;
  created_at: Date;
  icon_img: string;
  banner_img: string;
  public_description: string;
  type: Type;
  over_18: boolean;
}

export enum Type {
  Public = "public",
}
