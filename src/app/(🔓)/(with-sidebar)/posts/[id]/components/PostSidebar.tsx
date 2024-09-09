import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/types/Post";
import React from "react";
import PostMetaCard from "./PostMetaCard";

interface PostSidebarProps {
  post: Post;
}

const PostSidebar: React.FC<PostSidebarProps> = ({ post }) => {
  return (
    <div className="post-sidebar w-[300px]">
      {post?.community && <PostMetaCard community={post.community} />}

      <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
          <CardTitle>Theme Orders </CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Introducing Our Dynamic Orders Dashboard for Seamless Management and
            Insightful Analysis.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>Create New Order</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostSidebar;
