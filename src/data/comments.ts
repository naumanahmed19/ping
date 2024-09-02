import { users } from "@/data/users";
import { communities } from "./communities";
import { posts } from "@/data/posts";

export const comments = [
  {
    post: posts[0],
    community: communities[0],
    author: users[Math.floor(Math.random() * 6)],
    time: "7h ago",
    content:
      'I thought it would be a simple "will you marry me" bro did the whole speech in Chinese omg!',
    upvotes: 6800,
    created_at: "2023-03-01T12:00:00Z",
    replies: [
      {
        post: posts[0],
        community: communities[0],
        author: { name: "Meatwood_Flak", avatar: "/path/to/avatar2.png" },
        time: "6h ago",
        content:
          "It's a tough language for westerners. If you get the tones wrong, you suddenly go from proposing marriage to ordering lunch.",
        upvotes: 2300,
        replies: [
          {
            post: posts[0],
            community: communities[0],
            author: users[Math.floor(Math.random() * 6)],
            time: "4h ago",
            content: "To be fair, Cantonese is A LOT harder than Mandarin.",
            upvotes: 58,
            replies: [
              {
                post: posts[0],
                community: communities[0],
                author: {
                  name: "Celestial_Crook",
                  avatar: "/path/to/avatar4.png",
                },
                time: "4h ago",
                content: "To be fair, Cantonese is A LOT harder than Mandarin.",
                upvotes: 58,
                replies: [
                  // Further nested replies if any
                ],
                created_at: "2023-03-01T12:00:00Z",
              },
            ],
          },
          {
            post: posts[0],
            community: communities[0],
            author: users[Math.floor(Math.random() * 6)],
            time: "4h ago",
            content: "To be fair, Cantonese is A LOT harder than Mandarin.",
            upvotes: 58,
            replies: [
              {
                post: posts[0],
                community: communities[0],
                author: {
                  name: "Celestial_Crook",
                  avatar: "/path/to/avatar4.png",
                },
                time: "4h ago",
                content: "To be fair, Cantonese is A LOT harder than Mandarin.",
                upvotes: 58,
                replies: [
                  // Further nested replies if any
                ],
                created_at: "2023-03-01T12:00:00Z",
              },
            ],
            created_at: "2023-03-01T12:00:00Z",
          },
        ],
      },
      {
        post: posts[0],
        community: communities[0],
        author: users[Math.floor(Math.random() * 6)],
        time: "4h ago",
        content: "To be fair, Cantonese is A LOT harder than Mandarin.",
        upvotes: 58,
        replies: [
          // Further nested replies if any
        ],
        created_at: "2023-03-01T12:00:00Z",
      },
      {
        post: posts[0],
        community: communities[0],
        author: users[Math.floor(Math.random() * 6)],
        time: "4h ago",
        content: "To be fair, Cantonese is A LOT harder than Mandarin.",
        upvotes: 58,
        replies: [
          {
            author: users[Math.floor(Math.random() * 6)],
            time: "4h ago",
            content: "To be fair, Cantonese is A LOT harder than Mandarin.",
            upvotes: 58,
            replies: [
              // Further nested replies if any
            ],
            created_at: "2023-03-01T12:00:00Z",
          },
        ],
      },
    ],
  },
  {
    post: posts[0],
    community: communities[0],
    author: users[Math.floor(Math.random() * 6)],
    time: "6h ago",
    content:
      "Ha my wife would've shut my ass down after the 2nd sentence before she keeled over from my pronunciation if I had tried this in Cantonese. I probably had to say lou po 50 times before she found it acceptable. I still plan on learning it at some point if I can ever find a legit lesson plan. I have to talk like a robot because if I accidentally let any emotion into it the word comes out wrong and that's even after a year of taking mandarin.",
    upvotes: 77,
    replies: [
      {
        post: posts[0],
        community: communities[0],
        author: users[Math.floor(Math.random() * 6)],
        time: "4h ago",
        content:
          "To be fair, Cantonese is A LOT harder than Mandarin. To be fair, Cantonese is A LOT harder than Mandarin. To be fair, Cantonese is A LOT harder than Mandarin.",
        upvotes: 58,
        replies: [
          // Further nested replies if any
        ],
        created_at: "2023-03-01T12:00:00Z",
      },
      {
        post: posts[0],
        community: communities[0],
        author: users[Math.floor(Math.random() * 6)],
        time: "4h ago",
        content: "To be fair, Cantonese is A LOT harder than Mandarin.",
        upvotes: 58,
        replies: [
          // Further nested replies if any
        ],
        created_at: "2023-03-01T12:00:00Z",
      },
      // More replies if any
    ],
  },
  {
    post: posts[0],
    community: communities[0],
    author: users[Math.floor(Math.random() * 6)],
    time: "6h ago",
    content:
      "I'm a man so normally I'm not allowed to get sappy, but this post is a whole sugar maple tree. The sappiest thing I've seen today.",
    upvotes: null,
    replies: [],
    created_at: "2023-03-01T12:00:00Z",
  },
];
