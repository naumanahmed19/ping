"use client";

import { Container } from "@/components/base/container";
import { PostsRightSidebar } from "./PostsRightSidebar";
import PostsList from "@/components/posts/posts-lists";
import WithSkeleton from "./base/with-skeleton";
import { fetchPosts } from "@/api";
import { ContainerContent } from "./base/container-content";
import { ContainerAside } from "./base/container-aside";

const ItemsList: React.FC = () => {
  return (
    <Container className="flex items-start justify-between gap-4">
      <ContainerContent>
      <PostsList />
      </ContainerContent>

      <ContainerAside>
        <PostsRightSidebar />
      </ContainerAside>
    </Container>
  );
};

export default ItemsList;
