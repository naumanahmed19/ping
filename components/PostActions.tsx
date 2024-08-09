import React from 'react';
import { Button } from './ui/button';
import Voting from './voting';
import { Award, MessageSquare, Share2 } from 'lucide-react';

const PostActions: React.FC = () => {
  return (
    <div className="flex items-center gap-3 my-3">
      <Voting 
      className="rounded-md border border-gray-300 shadow-sm"
      
      size='sm' variant='outline' />
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