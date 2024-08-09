
type Community = {
    route: string;
    src: string;
    alt: string;
    fallback: string;
    text: string;
    title: string;
    description: string;
    members: number;
    online: number;
    rank: number;
    rules: string;
    logo: string;
    banner: string;
    createdAt: string;
    updatedAt: string;
  };
  export type Post = {
    id: number;
    title: string;
    content: string;
    image: string | null;
    aspectRatio?: "portrait" | "square"
    community: Community;
    votes: number;
    comments: number;
    isAwarded: boolean;
    isFavourited: boolean;
    createdAt?: string;
    tags?: string[]; // Add tags property
    flair?: string; // Add flair property
  };
  export const posts: Post[] = [
    {
      id: 0,
      title: 'Check out this amazing sunset! 🌅',
      content: 'I captured this beautiful sunset while hiking yesterday. Nature is truly breathtaking! The colors were so vibrant and the sky looked like it was on fire. It was a perfect end to a great day. I felt so at peace watching the sun go down.',
      image: null,
      aspectRatio: "square",
      community: {
        route: '/community/nature',
        src: '/avatars/01.png',
        alt: '@nature',
        fallback: 'N',
        text: '@nature',
        title: 'Nature',
        description: 'Nature is truly breathtaking! The colors were so vibrant and the sky looked like it was on fire. It was a perfect end to a great day. I felt so at peace watching the sun go down.',
        members: 1000,
        online: 50,
        rank: 1,
        rules: "Respect nature and fellow members.",
        logo: "/logos/nature.png",
        banner: "/banners/nature.jpg",
        createdAt: '2023-03-01T12:00:00Z',
        updatedAt: '2023-03-01T12:00:00Z'
      },
      votes: 10,
      tags: ['sunset', 'nature', 'hiking'],
      flair: 'Awarded',
      comments: 5,
      isAwarded: true,
      isFavourited: true,
      createdAt: '2023-03-01T12:00:00Z',
    },
    {
      id: 1,
      title: 'Check out this amazing sunset! 🌅',
      content: 'I captured this beautiful sunset while hiking yesterday. Nature is truly breathtaking! The colors were so vibrant and the sky looked like it was on fire. It was a perfect end to a great day. I felt so at peace watching the sun go down.',
      image: 'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      aspectRatio: "portrait",
      community: {
        route: '/community/nature',
        src: '/avatars/01.png',
        alt: '@nature',
        fallback: 'N',
        text: '@nature',
        title: 'Nature',
        description: 'Nature is truly breathtaking! The colors were so vibrant and the sky looked like it was on fire. It was a perfect end to a great day. I felt so at peace watching the sun go down.',
        members: 1000,
        online: 50,
        rank: 1,
        rules: "Respect nature and fellow members.",
        logo: "/logos/nature.png",
        banner: "/banners/nature.jpg",
        createdAt: '2023-03-01T12:00:00Z',
        updatedAt: '2023-03-01T12:00:00Z'
      },
      votes: 10,
      tags: ['sunset', 'nature', 'hiking'],
      flair: 'Awarded',
      comments: 5,
      isAwarded: true,
      isFavourited: true,
      createdAt: '2023-03-01T12:00:00Z',
    },
    {
      id: 2,
      title: 'What are your thoughts on the latest tech trends? 🤔',
      content: 'With the rapid advancements in AI and machine learning, how do you think the job market will be affected in the next 5 years? Will there be more opportunities or will automation take over many jobs? Let\'s discuss! I believe there will be a mix of both, with new job roles emerging while some traditional roles may become obsolete.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlY2h8ZW58MHx8fHwxNjY0OTc2NDcw&ixlib=rb-1.2.1&q=80&w=800',
      aspectRatio: "square",
      community: {
        route: '/community/technology',
        src: '/avatars/02.png',
        alt: '@technology',
        fallback: 'T',
        text: '@technology',
        title: 'Technology',
        description: 'Discuss the latest tech trends and innovations.',
        members: 5000,
        online: 100,
        rank: 2,
        rules: "Stay on topic and be respectful.",
        logo: "/logos/technology.png",
        banner: "/banners/technology.jpg",
        createdAt: '2023-03-02T12:00:00Z',
        updatedAt: '2023-03-02T12:00:00Z'
      },
      votes: 20,
      tags: ['tech', 'AI', 'machine learning'],
      flair: 'Awarded',
      comments: 10,
      isAwarded: false,
      isFavourited: false,
      createdAt: '2023-03-02T12:00:00Z',
    },
    {
      id: 3,
      title: 'Delicious homemade pizza recipe 🍕',
      content: 'I tried this new pizza recipe and it turned out amazing Here are the ingredients and steps to make it. The crust was perfectly crispy and the toppings were just right. You have to try this at home! It\'s a great way to enjoy a homemade meal with family and friends.',
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      aspectRatio: "square",
      community: {
        route: '/community/food',
        src: '/avatars/03.png',
        alt: '@food',
        fallback: 'F',
        text: '@food',
        title: 'Food',
        description: 'Share your favorite recipes and food experiences.',
        members: 2000,
        online: 75,
        rank: 3,
        rules: "Share only food-related content.",
        logo: "/logos/food.png",
        banner: "/banners/food.jpg",
        createdAt: '2023-03-03T12:00:00Z',
        updatedAt: '2023-03-03T12:00:00Z'
      },
      votes: 30,
      tags: ['pizza', 'recipe', 'homemade'],
      flair: 'Awarded',
      comments: 15,
      isAwarded: true,
      isFavourited: true,
      createdAt: '2023-03-03T12:00:00Z',
    },
    {
      id: 4,
      title: 'My cat doing funny things 🐱',
      content: 'Caught my cat in the act of doing something hilarious. Cats are such funny creatures! They always find a way to make us laugh. Here\'s a picture of my cat trying to fit into a tiny box. It\'s amazing how they can squeeze into the smallest spaces!',
      image: null,
      aspectRatio: "square",
      community: {
        route: '/community/aww',
        src: '/avatars/04.png',
        alt: '@aww',
        fallback: 'A',
        text: '@aww',
        title: 'Aww',
        description: 'Share cute and heartwarming moments.',
        members: 3000,
        online: 80,
        rank: 4,
        rules: "Keep it cute and positive.",
        logo: "/logos/aww.png",
        banner: "/banners/aww.jpg",
        createdAt: '2023-03-04T12:00:00Z',
        updatedAt: '2023-03-04T12:00:00Z'
      },
      votes: 40,
      tags: ['cat', 'funny', 'cute'],
      flair: 'Awarded',
      comments: 20,
      isAwarded: false,
      isFavourited: true,
      createdAt: '2023-03-04T12:00:00Z',
    },
    {
      id: 5,
      title: 'Best books to read in 2023 📚',
      content: 'Looking for book recommendations for 2023. What are some must-read books you would suggest? I\'m particularly interested in fiction and self-help genres. Let\'s share our favorite reads! I\'ve already read a few great books this year and can\'t wait to discover more.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJvb2tzfGVufDB8fHx8MTY2NDk3NjQ3MA&ixlib=rb-1.2.1&q=80&w=800',
      aspectRatio: "portrait",
      community: {
        route: '/community/books',
        src: '/avatars/05.png',
        alt: '@books',
        fallback: 'B',
        text: '@books',
        title: 'Books',
        description: 'Discuss your favorite books and authors.',
        members: 4000,
        online: 90,
        rank: 5,
        rules: "Respect different opinions and authors.",
        logo: "/logos/books.png",
        banner: "/banners/books.jpg",
        createdAt: '2023-03-05T12:00:00Z',
        updatedAt: '2023-03-05T12:00:00Z'
      },
      votes: 50,
      tags: ['books', 'reading', 'fiction', 'self-help'],
      flair: 'Awarded',
      comments: 25,
      isAwarded: true,
      isFavourited: false,
      createdAt: '2023-03-05T12:00:00Z',
    },
  ];
  