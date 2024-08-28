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
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import { usePosts } from "@/api/posts";
const UserPage: React.FC = () => {
  const id = useParams().id;

  // Fetch the first post from the data
  const user = userData.find((user) => user.id === Number(id));

  if (!user) return <p>Not found</p>;

  const { data: posts, isLoading, isError } = usePosts();

  return (
    <Container>
      <UserHeader key={user?.id} user={user} />
      <div className="flex items-start justify-between gap-4">
        <ContainerContent>
          <BaseDataPlaceholder
            isLoading={isLoading}
            count={5}
            isError={isError}
            variant="posts-list"
          >
            <PostsList posts={posts} />
          </BaseDataPlaceholder>
        </ContainerContent>
        <ContainerAside>
          <PostsRightSidebar />
        </ContainerAside>
      </div>
    </Container>
  );
};

export default UserPage;
