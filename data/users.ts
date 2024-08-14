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
}

export const users = [
  {
    id: 0,
    name: "john_doe",
    created_utc: 1627387200,
    link_karma: 1200,
    comment_karma: 3400,
    is_gold: true,
    is_mod: false,
    has_verified_email: true,
    profile: {
      default_set: true,
      user_is_contributor: false,
      banner_img:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxza3l8ZW58MHx8fHwxNjkxNTUyOTc2&ixlib=rb-4.0.3&q=80&w=1080",
      banner_size: [1280, 384],
      user_is_banned: false,
      community_icon:
        "https://images.unsplash.com/photo-1521120098177-47e60fe9a5a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZlcnJpc3doZWVsfGVufDB8fHx8MTY5MTU1Mjk3Ng&ixlib=rb-4.0.3&q=80&w=400",
      show_media: true,
      avatar: "/images/user1.jpg",
      display_name: "u_john_doe",
      title: "John's Thoughts",
      coins: 500,
      over_18: false,
      description: "A place for my random musings.",
      public_description: "Welcome to John's profile!",
      subscribers: 250,
      is_default_banner: false,
      is_default_icon: false,
      profile_type: "public",
      is_subscriber: true,
    },
  },
  {
    id: 1,
    name: "jane_smith",
    created_utc: 1609459200,
    link_karma: 4520,
    comment_karma: 7890,
    is_gold: false,
    is_mod: true,
    has_verified_email: true,
    profile: {
      default_set: true,
      user_is_contributor: true,
      banner_img:
        "https://images.unsplash.com/photo-1531340313559-b66bd4b5b264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHx0ZWNofGVufDB8fHx8MTY5MTU1Mjk3Ng&ixlib=rb-4.0.3&q=80&w=1080",
      banner_size: [1280, 384],
      user_is_banned: false,
      community_icon:
        "https://images.unsplash.com/photo-1515855464479-6cdb1eb9c1e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBlb3BsZXxlbnwwfHx8fDE2OTE1NTI5NzY&ixlib=rb-4.0.3&q=80&w=400",
      show_media: true,
      avatar: "/images/user2.jpg",
      display_name: "u_jane_smith",
      title: "Jane's Corner",
      coins: 100,
      over_18: false,
      description: "Discussions on tech and lifestyle.",
      public_description: "Tech enthusiast and lifestyle blogger.",
      subscribers: 500,
      is_default_banner: false,
      is_default_icon: false,
      profile_type: "private",
      is_subscriber: false,
    },
  },
  {
    id: 2,
    name: "tech_guru",
    created_utc: 1593571200,
    link_karma: 9800,
    comment_karma: 11200,
    is_gold: true,
    is_mod: false,
    has_verified_email: true,
    profile: {
      default_set: true,
      user_is_contributor: false,
      banner_img:
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fZWxlY3Ryb25pY3N8ZW58MHx8fHwxNjkxNTUyOTc2&ixlib=rb-4.0.3&q=80&w=1080",
      banner_size: [1280, 384],
      user_is_banned: false,
      community_icon:
        "https://images.unsplash.com/photo-1523301343968-6a6c59e3e6bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHRlY2h8ZW58MHx8fHwxNjkxNTUyOTc2&ixlib=rb-4.0.3&q=80&w=400",
      show_media: true,
      avatar: "/images/user3.jpg",
      display_name: "u_tech_guru",
      title: "Tech Guru's Space",
      coins: 850,
      over_18: false,
      description: "All things technology.",
      public_description: "Tech reviews, news, and more.",
      subscribers: 1200,
      is_default_banner: false,
      is_default_icon: false,
      profile_type: "public",
      is_subscriber: true,
    },
  },
  {
    id: 3,
    name: "nature_lover",
    created_utc: 1615852800,
    link_karma: 600,
    comment_karma: 2200,
    is_gold: false,
    is_mod: false,
    has_verified_email: true,
    profile: {
      default_set: true,
      user_is_contributor: false,
      banner_img:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxza3l8ZW58MHx8fHwxNjkxNTUyOTc2&ixlib=rb-4.0.3&q=80&w=1080",
      banner_size: [1280, 384],
      user_is_banned: false,
      community_icon:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxza3l8ZW58MHx8fHwxNjkxNTUyOTc2&ixlib=rb-4.0.3&q=80&w=400",
      show_media: true,
      avatar: "/images/user4.jpg",
      display_name: "u_nature_lover",
      title: "Nature Lover",
      coins: 300,
      over_18: false,
      description: "Celebrating the beauty of nature.",
      public_description: "Join me on a journey through nature.",
      subscribers: 800,
      is_default_banner: false,
      is_default_icon: false,
      profile_type: "public",
      is_subscriber: true,
    },
  },
  {
    id: 4,
    name: "foodie_fanatic",
    created_utc: 1625097600,
    link_karma: 3700,
    comment_karma: 5200,
    is_gold: true,
    is_mod: false,
    has_verified_email: true,
    profile: {
      default_set: true,
      user_is_contributor: false,
      banner_img:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIxfHxmb29kfGVufDB8fHx8MTY5MTU1Mjk3Ng&ixlib=rb-4.0.3&q=80&w=1080",
      banner_size: [1280, 384],
      user_is_banned: false,
      community_icon:
        "https://images.unsplash.com/photo-1512058564366-c9e3e2ca402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvb2R8ZW58MHx8fHwxNjkxNTUyOTc2&ixlib=rb-4.0.3&q=80&w=400",
      show_media: true,
      avatar: "/images/user5.jpg",
      display_name: "u_foodie_fanatic",
      title: "Foodie Fanatic",
      coins: 650,
      over_18: false,
      description: "Exploring flavors from around the world.",
      public_description: "Join me in my culinary adventures!",
      subscribers: 1500,
      is_default_banner: false,
      is_default_icon: false,
      profile_type: "public",
      is_subscriber: true,
    },
  },
  {
    id: 4,
    name: "foodie_fanatic",
    created_utc: 1625097600,
    link_karma: 3700,
    comment_karma: 5200,
    is_gold: true,
    is_mod: false,
    has_verified_email: true,
    profile: {
      default_set: true,
      user_is_contributor: false,
      banner_img:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIxfHxmb29kfGVufDB8fHx8MTY5MTU1Mjk3Ng&ixlib=rb-4.0.3&q=80&w=1080",
      banner_size: [1280, 384],
      user_is_banned: false,
      community_icon:
        "https://images.unsplash.com/photo-1512058564366-c9e3e2ca402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvb2R8ZW58MHx8fHwxNjkxNTUyOTc2&ixlib=rb-4.0.3&q=80&w=400",
      show_media: true,
      avatar: "/images/user4.jpg",
      display_name: "u_foodie_fanatic",
      title: "Foodie Fanatic",
      coins: 650,
      over_18: false,
      description: "Exploring flavors from around the world.",
      public_description: "Join me in my culinary adventures!",
      subscribers: 1500,
      is_default_banner: false,
      is_default_icon: false,
      profile_type: "public",
      is_subscriber: true,
    },
  },
  {
    id: 5,
    name: "bookworm_betty",
    created_utc: 1640995200,
    link_karma: 2800,
    comment_karma: 4300,
    is_gold: false,
    is_mod: false,
    has_verified_email: true,
    profile: {
      default_set: true,
      user_is_contributor: false,
      banner_img:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxza3l8ZW58MHx8fHwxNjkxNTUyOTc2&ixlib=rb-4.0.3&q=80&w=1080",
      banner_size: [1280, 384],
      user_is_banned: false,
      community_icon:
        "https://images.unsplash.com/photo-1560766892-fc1484b23c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJvb2t3b3JrfGVufDB8fHx8MTY5MTU1Mjk3Ng&ixlib=rb-4.0.3&q=80&w=400",
      show_media: true,
      avatar: "/images/user5.jpg",
      display_name: "u_bookworm_betty",
      title: "Bookworm Betty",
      coins: 150,
      over_18: false,
      description: "Avid reader and book reviewer.",
      public_description: "Discussing books, reviews, and literary adventures.",
      subscribers: 700,
      is_default_banner: false,
      is_default_icon: false,
      profile_type: "public",
      is_subscriber: false,
    },
  },
  {
    id: 6,
    name: "bookworm_betty",
    created_utc: 1640995200,
    link_karma: 2800,
    comment_karma: 4300,
    is_gold: false,
    is_mod: false,
    has_verified_email: true,
    profile: {
      default_set: true,
      user_is_contributor: false,
      banner_img:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxza3l8ZW58MHx8fHwxNjkxNTUyOTc2&ixlib=rb-4.0.3&q=80&w=1080",
      banner_size: [1280, 384],
      user_is_banned: false,
      community_icon:
        "https://images.unsplash.com/photo-1560766892-fc1484b23c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJvb2t3b3JrfGVufDB8fHx8MTY5MTU1Mjk3Ng&ixlib=rb-4.0.3&q=80&w=400",
      show_media: true,
      avatar: "/images/user5.jpg",
      display_name: "u_bookworm_betty",
      title: "Bookworm Betty",
      coins: 150,
      over_18: false,
      description: "Avid reader and book reviewer.",
      public_description: "Discussing books, reviews, and literary adventures.",
      subscribers: 700,
      is_default_banner: false,
      is_default_icon: false,
      profile_type: "public",
      is_subscriber: false,
    },
  },
];
