"use client";

import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Post } from "@/data/posts";

const PostHeader: React.FC<{ post: Post; isDetailsPage?: boolean }> = ({
  post,
  isDetailsPage = false,
}) => {
  return (
    <div key={post.id}>
      <div className="flex items-center justify-start">
        <Avatar className={!isDetailsPage ? 'h-7 w-7': 'h-10 w-10'}>
          <AvatarImage src={post.community.src} alt={post.community.alt} />
          <AvatarFallback>{post.community.fallback}</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs ">
              <div className="ml-2 ">
                <div className="flex">
                  <div className="font-bold">{post.community.text}</div>
                  <div className="text-muted-foreground mx-3">
                    {formatDistanceToNow(new Date(post.createdAt ?? ""), {
                      addSuffix: false,
                    })}
                  </div>
              
                </div>
                {isDetailsPage &&  <div className="text-muted-foreground">
                  {post.community.title}
                </div> }
               
              </div>
            </div>

            <div className="flex items-center">
              {!isDetailsPage && (
                <Button
                  variant="outline"
                  className="h-[24px] items-center gap-1.5 rounded-md border p-[8px] shadow-sm"
                >
                  Join
                </Button>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                 
                  <DropdownMenuItem>Save</DropdownMenuItem>
                  <DropdownMenuItem>Hide</DropdownMenuItem>
                  <DropdownMenuItem>Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
