"use client";
import * as React from "react";
import { useParams } from "next/navigation";
import UserHeader from "@/components/user/user-header";
import { Container } from "@/components/base/container";
import { ContainerAside } from "@/components/base/container-aside";
import { ContainerContent } from "@/components/base/container-content";
import { PostsRightSidebar } from "@/components/posts/PostsRightSidebar";
import { useGetUser } from "@/queries/users.query";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import UserPosts from "@/components/user/user-posts";

const UserPage: React.FC = () => {
  const { id } = useParams();
  const userId = Number(id);

  const userQuery = useGetUser(userId);

  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = userQuery;

  return (
    <Container>
      <BaseDataPlaceholder
        isLoading={isLoadingUser}
        isError={isErrorUser}
        variant="avatar-list"
        count={1}
      >
        <UserHeader key={user?.id} user={user} />
      </BaseDataPlaceholder>
      <div className="flex items-start justify-between gap-4">
        <ContainerContent>
          <UserPosts userId={userId} />
        </ContainerContent>
        <ContainerAside>
          <PostsRightSidebar />
        </ContainerAside>
      </div>
    </Container>
  );
};

export default UserPage;
