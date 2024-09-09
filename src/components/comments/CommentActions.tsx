import { Button } from "@/components/ui/button";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Voting from "@/components/ui/voting/voting";
import { Award, MessageSquare, MoreHorizontal, Share2 } from "lucide-react";

interface CommentActionsProps {
  handleShowReplyForm: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CommentActions: React.FC<CommentActionsProps> = ({
  handleShowReplyForm,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="flex items-center gap-3 my-2">
      <Voting />
      <Button
        variant="ghost"
        className="text-xs h-[28px] items-center gap-1.5 p-[4px] "
        onClick={handleShowReplyForm}
      >
        <MessageSquare width={14} height={14} />
        Reply
      </Button>
      <Button
        variant="ghost"
        className="text-xs h-[28px] items-center gap-1.5 p-[4px] "
        onClick={handleClick}
      >
        <Award width={14} height={14} />
        Award
      </Button>
      <Button
        variant="ghost"
        className="text-xs h-[28px] items-center gap-1.5 p-[4px] "
        onClick={handleClick}
      >
        <Share2 width={14} height={14} />
        Share
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="text-xs h-[28px] w-[28px] "
            aria-haspopup="true"
            size="icon"
            variant="ghost"
          >
            <MoreHorizontal width={14} height={14} />
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
  );
};
