'use client';

import { useState } from 'react';
import { posts } from '@/data/posts';
import PostsFilter from '@/components/PostsFilter';
import { Container } from "@/components/base/container"
import { PostsRightSidebar } from './PostsRightSidebar';
import PostTemplate from './PostTemplate';
import Link from 'next/link';
const ItemsList: React.FC = () => {
  const [isGridView, setIsGridView] = useState(false);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };


  const postsLayout = 
    <div className='flex items-start gap-4'>
      <div>
        <PostsFilter toggleView={toggleView} isGridView={isGridView} />
        <div className={isGridView ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ' : 'md:w-[700px] mx-auto space-y-4'}>

          {posts.map(post => (
             <Link href={`/post/${post.id}`} key={post.id}>
            <PostTemplate key={post.id} post={post} />
            </Link>
          ))}
        </div>
      </div>
      <div className='hidden lg:block '>
        <PostsRightSidebar />
      </div>
    </div>

  return (
      <div className={`border-b border-gray-200 ${!isGridView ? 'md:w-[700px] lg:w-[1000px] mx-auto' : ''}`}>
        {/* <div className="flex items-center justify-between my-20">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Listen Now
            </h2>
            <p className="text-sm text-muted-foreground">
              Top picks for you. Updated daily.
            </p>
          </div>
        </div> */}



        {
        isGridView ?
          <Container><div className="p-4">{postsLayout}</div></Container> 
        :
          <div className="py-4"><Container /> {postsLayout}</div>
        }
      </div>
 
  );
};

export default ItemsList;