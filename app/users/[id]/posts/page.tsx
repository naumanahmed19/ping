"use client";
import * as React from "react";

import { useParams } from "next/navigation";
import { userData } from "@/data";
import { posts } from "@/data/posts";
import UserHeader from "@/components/user/user-header";
import { PostsRightSidebar } from "@/components/PostsRightSidebar";
import PostsList from "@/components/posts/posts-lists";
import { ContainerContent } from "@/components/base/container-content";
import { ContainerAside } from "@/components/base/container-aside";
import { Container } from "@/components/base/container";
const UserPage: React.FC = () => {

  const id = useParams().id;

  // Fetch the first post from the data
  const user = userData.find((user) => user.id === Number(id));

  if (!user) return <p>Not found</p>;


  return (
    <Container>
    <UserHeader key={user?.id} user={user} />
    <div className="flex items-start justify-between gap-4">
      <ContainerContent>
        <PostsList posts={posts} />
      </ContainerContent>
      <ContainerAside>
        <PostsRightSidebar />
      </ContainerAside>
    </div>
  </Container>
  );
};

export default UserPage;
