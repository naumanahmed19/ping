'use client';

import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Post } from '@/data/posts';



const PostHeader: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div key={post.id}>
      <div className="flex items-center justify-start">
        <Avatar className="h-7 w-7">
          <AvatarImage src={post.community.src} alt={post.community.alt} />
          <AvatarFallback>{post.community.fallback}</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs ">
              <div className="ml-2 mr-2 font-bold">{post.community.text}</div>
              <div className="text-muted-foreground">
                {formatDistanceToNow(new Date(post.createdAt ?? ''), { addSuffix: false })}
              </div>
            </div>

    
            <div className="flex items-center">
            <Button
        variant="outline"
        className="h-[24px] items-center gap-1.5 rounded-md border p-[8px] shadow-sm"
      >
       
        Join
      </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
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