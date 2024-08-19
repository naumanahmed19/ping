import React from "react";
import PostMetaCard from "./PostMetaCard";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/button";

interface PostSidebarProps {
  postId: string;
}

const PostSidebar: React.FC<PostSidebarProps> = ({ post }) => {
  return (
    <div className="post-sidebar w-[300px]">
      <PostMetaCard community={post?.community} />

      <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
          <CardTitle>Your Orders </CardTitle>
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
