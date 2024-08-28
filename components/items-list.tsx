"use client";

import { Container } from "@/components/base/container";
import { PostsRightSidebar } from "./PostsRightSidebar";
import PostsList from "@/components/posts/posts-lists";
import { ContainerContent } from "@/components/base/container-content";
import { ContainerAside } from "@/components/base/container-aside";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import { usePosts } from "@/api/posts";

const ItemsList: React.FC = () => {
  const { data: posts, isLoading, isError } = usePosts();

  return (
    <Container className="flex items-start justify-between gap-4">
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
    </Container>
  );
};

export default ItemsList;
