import * as React from "react";
import Image from "next/image";
import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Post } from "@/data/posts";

interface PostTemplateProps {
  post: Post;
  children?: React.ReactNode;
}

const PostTemplate: React.FC<PostTemplateProps> = ({ children, post }) => {
  return (
    <div>
      <PostHeader key={post.id} post={post} />
      <h2 className="text-md font-bold">{post.title}</h2>

      <Badge className="rounded-sm bg-primary/10 font-normal border-primary text-primary hover:bg-primary/10 hover:bg-primary/10">
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
              "portrait",
            )}
            style={{ aspectRatio: "700/400", objectFit: "cover" }}
          />
        </div>
      )}
      <p className="text-sm  my-3">{post.content}</p>
      <PostActions />

      {children}
    </div>
  );
};

export default PostTemplate;
