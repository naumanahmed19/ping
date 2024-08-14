import { posts  } from "@/data/posts";
import { comments } from "@/data/comments";

export const fetchPosts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate returning JSON data
      resolve(posts);
    }, 100); // Simulate a network delay of 1 second
  });
};

// export const fetchPosts = async () => {
//   return new Promise((resolve,reject) => {
//     reject(new Error('Failed to fetch posts')); // Reject with an error
//     // setTimeout(() => {
//     //   // Simulate returning JSON data
//     //   resolve(posts);
//     // }, 1000); // Simulate a network delay of 1 second
//   });
// };


export const getComments = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000); // Simulate a network delay
  });
};



