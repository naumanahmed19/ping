import React, { useEffect, useState } from 'react';
import PostSkeleton from './post-skeleton';
import { Separator } from '../ui/separator';


interface WithSkeletonProps {
  items?: number;  // Mark items as optional
  isLoading?: boolean;  // Mark isLoading as optional
  isError?: boolean;  // Mark isLoading as optional
  errorMessage?: string;  // Mark errorMessage as optional
  children: React.ReactNode;  // Render prop pattern
}

export const WithSkeleton: React.FC<WithSkeletonProps> = ({
    isLoading =false,isError=false, errorMessage='Something went wrong', items = 1, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);  // Mark as mounted after data is fetched
  }, [isLoading]);


    if (isError) {
        return <p>{errorMessage}</p>;
    }

  if (isLoading || !isMounted) {
    return <div>
     {Array.from({ length: items }, (_, index) => (
        <React.Fragment key={index}>
          <PostSkeleton />
          {index < items - 1 && <Separator className='my-3' />} 
        </React.Fragment>
      ))}
    </div>;
  }

  return <>{children}</>;
};
