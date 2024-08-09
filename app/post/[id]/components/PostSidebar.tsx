import React from 'react';
import PostMetaCard from './PostMetaCard';

interface PostSidebarProps {
    postId: string;
}

const PostSidebar: React.FC<PostSidebarProps> = ({ post }) => {
    return (
        <div className="post-sidebar w-[300px]">
            <PostMetaCard community={post?.community} />
        </div>
    );
};

export default PostSidebar;