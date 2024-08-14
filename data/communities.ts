export interface Community {
  id: number;
  name: string;
  title: string;
  description: string;
  subscribers: number;
  online_members: number;
  rank: number;
  created_utc: number;
  icon_img: string;
  banner_img: string;
  public_description: string;
  type: "public" | "private" | "restricted";
  over_18: boolean;
}

export const communities = [
  {
    id: 1,
    name: "@technology",
    title: "Technology",
    description: "The latest news and discussions about technology.",
    subscribers: 11000000,
    online_members: 32000,
    rank: 42,
    created_at: "2023-03-01T12:00:00Z",
    icon_img: "/images/c1.jpg",
    banner_img: "/images/cover1.jpg",
    public_description:
      "A place to share and discuss the latest technology news and trends.",
    type: "public",
    over_18: false,
  },
  {
    id: 2,
    name: "@gaming",
    title: "Gaming",
    description:
      "A community for gamers to discuss and share their gaming experiences.",
    subscribers: 26000000,
    online_members: 75000,
    rank: 8,
    created_at: "2023-03-01T12:00:00Z",
    icon_img: "/images/c2.jpg",
    banner_img: "/images/cover2.jpg",
    public_description: "Everything and anything related to gaming.",
    type: "public",
    over_18: false,
  },
  {
    id: 3,
    name: "@science",
    title: "Science",
    description: "A community for discussing scientific discoveries and news.",
    subscribers: 20000000,
    online_members: 54000,
    rank: 15,
    created_at: "2023-03-01T12:00:00Z",
    icon_img: "/images/c3.jpg",
    banner_img: "/images/cover3.jpg",
    public_description: "Discuss and explore scientific research and findings.",
    type: "public",
    over_18: false,
  },
  {
    id: 4,
    name: "@movies",
    title: "Movies",
    description:
      "A community dedicated to discussing movies, movie news, and trailers.",
    subscribers: 22000000,
    online_members: 64000,
    rank: 12,
    created_at: "2023-03-01T12:00:00Z",
    icon_img: "/images/c4.jpg",
    banner_img: "/images/cover4.jpg",
    public_description:
      "Join the discussion on your favorite movies and discover new ones.",
    type: "public",
    over_18: false,
  },
  {
    id: 5,
    name: "@books",
    title: "Books",
    description: "A community for book lovers to share and discuss books.",
    subscribers: 17000000,
    online_members: 22000,
    rank: 24,
    created_at: "2023-03-01T12:00:00Z",
    icon_img: "/images/c5.jpg",
    banner_img: "/images/cover5.jpg",
    public_description:
      "For book lovers to discuss and share their favorite books.",
    type: "public",
    over_18: false,
  },
  {
    id: 6,
    name: "@RAML",
    title: "RAML - RESTful API Modeling Language",
    description:
      "A community dedicated to discussions about RAML (RESTful API Modeling Language) and API design.",
    subscribers: 45000,
    online_members: 1200,
    rank: 3572,
    created_at: "2023-03-01T12:00:00Z",
    icon_img: "/images/c6.jpg",
    banner_img: "/images/cover6.jpg",
    public_description:
      "Explore and discuss everything related to RAML and API development.",
    type: "public",
    over_18: false,
  },
  {
    id: 7,
    name: "@OnlineMemers",
    title: "Online Memers",
    description: "A community for sharing and creating internet memes.",
    subscribers: 1500000,
    online_members: 35000,
    rank: 892,
    created_at: "2023-03-01T12:00:00Z",
    icon_img: "/images/c7.jpg",
    banner_img: "/images/cover7.jpg",
    public_description:
      "Join the fun in creating, sharing, and enjoying the latest memes!",
    type: "public",
    over_18: false,
  },
  {
    id: 8,
    name: "@photography",
    title: "Photography",
    description:
      "A community for photographers to share their work and discuss photography techniques.",
    subscribers: 3000000,
    online_members: 8500,
    rank: 278,
    created_at: "2023-03-01T12:00:00Z",
    icon_img: "/images/c8.jpg",
    banner_img: "/images/cover8.jpg",
    public_description: "Capture and share your best shots.",
    type: "public",
    over_18: false,
  },
  {
    id: 9,
    name: "@cooking",
    title: "Cooking",
    description:
      "A community for cooking enthusiasts to share recipes, tips, and cooking experiences.",
    subscribers: 5000000,
    online_members: 19000,
    rank: 154,
    created_at: "2023-03-01T12:00:00Z",
    icon_img: "/images/c9.jpg",
    banner_img: "/images/cover9.jpg",
    public_description: "Share your love of cooking and discover new recipes.",
    type: "public",
    over_18: false,
  },
  {
    id: 10,
    name: "@fitness",
    title: "Fitness",
    description:
      "A community dedicated to health, fitness, and workout routines.",
    subscribers: 12000000,
    online_members: 45000,
    rank: 34,
    created_at: "2023-03-01T12:00:00Z",
    icon_img: "/images/c10.jpg",
    banner_img: "/images/cover10.jpg",
    public_description: "Discuss fitness goals, workout tips, and more.",
    type: "public",
    over_18: false,
  },
];
