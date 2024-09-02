/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cirbGuXT1c9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "../toggle-group";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { cn } from "@/lib/utils";

interface VotingProps {
  className?: string;
}

const Voting: React.FC<VotingProps> = ({ className }) => {
  const [voteCount, setVoteCount] = useState(0);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setVoteCount(voteCount + 1);
  };
  const handleDownvote = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setVoteCount(voteCount - 1);
  };
  return (
    <div
      className={cn(
        "hidden items-center bg-background gap-1.5 p-[2px]  md:flex",
        className,
      )}
    >
      <ToggleGroup
        type="single"
        defaultValue={undefined}
        aria-label="Vote"
        className="flex items-center"
      >
        <ToggleGroupItem
          value="upvote"
          onClick={handleUpvote}
          className={`h-[22px] w-[22px] rounded-sm p-0 hover:bg-primary/10 ${voteCount < 0 ? "text-red-50" : "text-primary"}`}
        >
          <ArrowUpIcon className="w-3 h-3" />
        </ToggleGroupItem>
        <div className="px-2 text-center text-sm font-medium">{voteCount}</div>
        <ToggleGroupItem
          value="downvote"
          onClick={handleDownvote}
          className={`h-[22px] w-[22px] rounded-sm p-0 hover:bg-primary/10 ${voteCount < 0 ? "text-red-50" : "text-primary"}`}
        >
          <ArrowDownIcon className="w-3 h-3" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
export default Voting;

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}
