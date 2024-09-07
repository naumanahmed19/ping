"use client";
import * as React from "react";

import { Container } from "@/components/base/container";
import { postsData } from "@/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import PostSidebar from "./components/PostSidebar";

import PostHeader from "@/components/posts/PostHeader";

import PostActions from "@/components/posts/PostActions";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import PostComments from "./components/post-comments";

const PostPage: React.FC = () => {
  const id = useParams().id;

  {
    id;
  }
  if (!id) return "loading...";
  // Fetch the first post from the data
  const post = postsData.find((post) => post.id === Number(id));

  return (
    <Container isFullWidth={false}>
      <div className="flex items-start gap-4">
        <div>
          <PostHeader key={post.id} post={post} isDetailsPage hasActions />

          <h1 className="text-xl font-bold my-2">{post.title}</h1>

          <Badge className="rounded-md">{post.flair}</Badge>

          {post.image && (
            <div className="overflow-hidden rounded-md my-3">
              <Image
                src={post.image}
                width="700"
                height="400"
                alt="Unsplash Photo"
                className={cn(
                  "h-auto w-auto object-cover transition-all hover:scale-105 rounded-md",
                  "portrait",
                )}
                style={{ aspectRatio: "700/400", objectFit: "cover" }}
              />
            </div>
          )}
          <p className="text-sm  my-3">{post.content}</p>

          <PostActions />

          <PostComments postId={post.id} />
        </div>

        <div className="hidden md:block ">
          <PostSidebar post={post} />
        </div>
      </div>
    </Container>
  );
};

export default PostPage;
