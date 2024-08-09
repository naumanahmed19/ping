'use client';
import * as React from "react"

import { useParams, usePathname, useSearchParams } from 'next/navigation'
import PostTemplate from "@/components/PostTemplate"
import { posts } from '@/data/posts';
import { Container } from "@/components/base/container";
import { PostsRightSidebar } from "@/components/PostsRightSidebar";
import PostSidebar from "./components/PostSidebar";
import CommentList from "./components/CommentList";
import { comments } from "@/data/comments";

const PostPage: React.FC = () => {
    const id = useParams().id

    { id }
    if (!id) return 'loading...'
    // Fetch the first post from the data
    const firstPost = posts.find((post) => post.id === Number(id));

    return (
        <div className="md:w-[700px] lg:w-[1000px] mx-auto my-4 ">

            <Container />

            <div className='flex items-start gap-4'>
                <PostTemplate post={firstPost}>


                    
                     <CommentList comments={comments} />
                </PostTemplate>
                <div className='hidden md:block '>
                  <PostSidebar post={firstPost} />
                </div>
            </div>

          
            

        </div>
    )
}

export default PostPage