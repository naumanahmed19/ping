"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Community } from "@/types/Community";
import {
  BellMinus,
  BellOff,
  BellPlus,
  BellRing,
  MoreHorizontal,
  Plus,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const CommunityNav = ({ community }: { community: Community }) => {
  const [isJoined, setIsJoined] = React.useState(false);

  const handleJoinClick = () => {
    setIsJoined(!isJoined);
  };

  return (
    <div className="flex items-center space-x-2">
      <Button asChild variant="outline">
        <Link href={`/posts/create/?community=${community?.id}`}>
          <Plus className="mr-2 h-4 w-4" /> Create a post
        </Link>
      </Button>

      <Button variant="outline" onClick={handleJoinClick}>
        {isJoined ? (
          <>
            <UsersRound className="mr-2 h-4 w-4" /> Joined
          </>
        ) : (
          <>
            <UsersRound className="mr-2 h-4 w-4" /> Join
          </>
        )}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-haspopup="true" size="icon">
            <BellPlus className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            {" "}
            <BellRing className="h-4 w-4 mr-3" /> Frequent
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BellMinus className="h-4 w-4 mr-3" /> Low
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BellOff className="h-4 w-4 mr-3" /> Off
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-haspopup="true" size="icon">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Add to Custom feed</DropdownMenuItem>
          <DropdownMenuItem>Add to favourites</DropdownMenuItem>
          <DropdownMenuItem>Mute</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
