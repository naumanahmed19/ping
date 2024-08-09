import * as React from "react"
import Image from "next/image"
import PostHeader from "./PostHeader"
import PostActions  from "./PostActions"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Separator } from "./ui/separator"
import { Badge } from "./ui/badge"

interface PostTemplateProps {
    post: {
      
        id: string
        title: string
        image?: string
        content: string
        flair: string
    },
        children: React.ReactNode;
}

const PostTemplate: React.FC<PostTemplateProps> = ({ children, post }) => {
    return (
        <div>
            <PostHeader key={post.id} post={post} />
            <h2 className="text-md font-bold">{post.title}</h2>

            <Badge className="rounded-md">
               {post.flair}
            </Badge>


            {post.image && (
                <div className="overflow-hidden rounded-md my-3">
                    <Image
                        src={post.image}
                        width="700"
                        height="400"
                        alt="Unsplash Photo"
                        className={cn(
                            "h-auto w-auto object-cover transition-all hover:scale-105 rounded-md",
                            "portrait"
                        )}
                        style={{ aspectRatio: "700/400", objectFit: "cover" }}
                    />
                </div>
            )}
            <p className="text-sm  my-3">{post.content}</p>
            <PostActions />
            <Separator className="my-4" />
            {children}
        </div>
    )
}

export default PostTemplate