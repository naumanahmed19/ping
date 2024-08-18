export const notifications = [
  {
    id: "noti_1",
    type: "comment_reply",
    message: "UserX replied to your comment",
    post_title: "What do you think about AI?",
    post_link: "/r/technology/comments/abc123/what_do_you_think_about_ai",
    comment_snippet: "I think AI will be...",
    created_at: "2024-08-18T10:30:00Z",
    is_read: false,
    user: {
      display_name: "UserX",
      avatar: "images/user1.jpg",
    },
  },
  {
    id: "noti_2",
    type: "post_upvote",
    message: "Your post received an upvote!",
    post_title: "My thoughts on Quantum Computing",
    post_link: "/r/science/comments/xyz456/my_thoughts_on_quantum_computing",
    created_at: "2024-08-17T18:20:00Z",
    is_read: true,
  },
  {
    id: "noti_3",
    type: "mention",
    message: "You were mentioned in a comment",
    post_title: "Discussion about Neural Networks",
    post_link:
      "/r/machinelearning/comments/qwe789/discussion_about_neural_networks",
    comment_snippet: "@YourUsername I totally agree with your point!",
    created_at: "2024-08-16T12:45:00Z",
    is_read: false,
    user: {
      display_name: "UserY",
      avatar: "images/user3.jpg",
    },
  },
];
