"use client";
import * as React from "react";

import { useParams } from "next/navigation";
import { userData } from "@/data";
import { posts } from "@/data/posts";
import UserHeader from "@/components/user/user-header";
import { PostsRightSidebar } from "@/components/PostsRightSidebar";
import PostsList from "@/components/posts/posts-lists";

const UserPage: React.FC = () => {

  const id = useParams().id;

  // Fetch the first post from the data
  const user = userData.find((user) => user.id === Number(id));

  if (!user) return <p>Not found</p>;


  return (
    <PostsLayout>
      <UserHeader key={user?.id} user={user} />
      <div className="flex items-start gap-4">
        <PostsList posts={posts}/>
        <div className="hidden lg:block ">
          <PostsRightSidebar />
        </div>
      </div>

    </PostsLayout>
  );
};

export default UserPage;
