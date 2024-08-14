"use client";
import * as React from "react";

import { useParams } from "next/navigation";
import { userData } from "@/data";
import UserHeader from "@/components/user/user-header";
import { PostsRightSidebar } from "@/components/PostsRightSidebar";

import CommentsList from "./comments-list";
import { comments } from "@/data/comments";
import { ContainerContent } from "@/components/base/container-content";
import { ContainerAside } from "@/components/base/container-aside";
import { Container } from "@/components/base/container";
import { useQuery } from "@tanstack/react-query";
import { getComments } from "@/api";
const UserPage: React.FC = () => {

  const id = useParams().id;

  // Fetch the comments data
  const { data: comments, isLoading, isError } = useQuery({
    queryKey: ["comments", { userId: id }],
    queryFn: getComments,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching comments</p>;


  // Fetch the first post from the data
  const user = userData.find((user) => user.id === Number(id));

  if (!user) return <p>Not found</p>;


  return (
    <Container>
    <UserHeader key={user?.id} user={user} />
    <div className="flex items-start justify-between gap-4">
      <ContainerContent>
        <CommentsList comments={comments}/>
      </ContainerContent>
      <ContainerAside>
        <PostsRightSidebar />
      </ContainerAside>
    </div>
  </Container>
  );
};

export default UserPage;
