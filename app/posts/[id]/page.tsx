"use client";
import * as React from "react";

import { useParams } from "next/navigation";
import PostTemplate from "@/components/PostTemplate";
import { postsData , commentsData } from "@/data";
import Image from "next/image"
import { Container } from "@/components/base/container";
import PostSidebar from "./components/PostSidebar";

import Comments from "@/components/comments/Comments";
import PostHeader from "@/components/PostHeader";
import PostActions from "@/components/PostActions";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PostPage: React.FC = () => {
 
  const id = useParams().id;

  {
    id;
  }
  if (!id) return "loading...";
  // Fetch the first post from the data
  const post = postsData.find((post) => post.id === Number(id));

  return (
    <div className="md:w-[700px] lg:w-[1000px] mx-auto my-4 ">
      <Container />
      <div className="flex items-start gap-4">
        <div>

            <PostHeader key={post.id} post={post} isDetailsPage/>
           
            <h1 className="text-xl font-bold my-2">{post.title}</h1>

            <Badge className="rounded-md">
               {post.flair}
            </Badge>


            {post.image && (
                <div className="overflow-hidden rounded-md my-3">
                    <Image
                        src={post.image}
                        width="700"
                        height="400"
                        alt="Unsplash Photo"
                        className={cn(
                            "h-auto w-auto object-cover transition-all hover:scale-105 rounded-md",
                            "portrait"
                        )}
                        style={{ aspectRatio: "700/400", objectFit: "cover" }}
                    />
                </div>
            )}
            <p className="text-sm  my-3">{post.content}</p>

            <PostActions />

            <Comments comments={commentsData} />
        
        </div>

        <div className="hidden md:block ">
          <PostSidebar post={post} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
