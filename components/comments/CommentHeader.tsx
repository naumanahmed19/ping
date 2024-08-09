
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 
import Link from 'next/link'; // Assuming Link is from next/link
import { PlusCircledIcon } from '@radix-ui/react-icons'; // Assuming this is the correct import

const CommentHeader = ({ isExpanded, author, time }) => (
  isExpanded ? (
    <div className="flex">
      <div className="relative">
        <Avatar className="h-8 w-8">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex relative items-center justify-start mx-2 md:mx-3">
        <h4 className="text-xs font-semibold">{author.name}</h4>
        <div className="text-xs text-gray-500 mx-2">{time}</div>
      </div>
    </div>
  ) : (
    <div className="flex items-center">
      <div>
        <PlusCircledIcon className="mr-2 h-4 w-4" />
      </div>
      <Link href="/"> {author.name}</Link>
    </div>
  )
);

export default CommentHeader;