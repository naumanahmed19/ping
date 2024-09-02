import React from "react";
import { Button } from "@/components/ui/button";

import { Award, MessageSquare, Share2 } from "lucide-react";
import Voting from "@/components/ui/voting/voting";

const PostActions: React.FC = () => {
  return (
    <div className="flex items-center gap-3 my-3">
      <Voting className="rounded-md border border-gray-300 shadow-sm" />
      <Button
        variant="outline"
        className="h-[28px] items-center gap-1.5 rounded-md border p-[4px] shadow-sm"
      >
        <MessageSquare width={16} height={16} />
        256
      </Button>
      <Button
        variant="outline"
        className="h-[28px] items-center gap-1.5 rounded-md border p-[4px] shadow-sm"
      >
        <Award width={16} height={16} />
      </Button>
      <Button
        variant="outline"
        className="h-[28px] items-center gap-1.5 rounded-md border p-[4px] shadow-sm"
      >
        <Share2 width={16} height={16} />
        Share
      </Button>
    </div>
  );
};

export default PostActions;
