'use client';
import * as React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { communities } from "@/data/communities"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import { cn } from "@/lib/utils"
import CommunityHoverCard from "./CommunityHoverCard"

export function PostsRightSidebar() {
    const [visibleCount, setVisibleCount] = useState(5)

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 5)
    }

    return (
       <div className="w-[300px] ">  
        <Card >
            <CardHeader>
                <CardTitle className="text-sm font-semibold tracking-tight">Popular Communities</CardTitle>
            </CardHeader>

            <CardContent  className="w-[300px]">
                {communities.slice(0, visibleCount).map((community, index) => (
                   <CommunityHoverCard community={community}>
                 <Link href="/" key={index}

                        className={cn(
                            "flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",

                        )}

                    >
                        <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={community.icon_img} alt={community.name} />
                        <AvatarFallback>{community.title.slice(0,2)}</AvatarFallback>
                        </Avatar>

                        <div className="grid gap-1">
                            <p className="text-xs font-medium leading-none">
                            {community.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {community.subscribers} members
                            </p>
                        </div>
                        {/* <div className="ml-auto text-xs">Join</div> */}
                    </Link>
                    </CommunityHoverCard>
                ))}
            </CardContent>
            <CardFooter className="">
                {visibleCount < communities.length && (
                    <Button variant="link" className="text-xs text-muted-foreground" onClick={handleShowMore}>
                        Show More
                    </Button>
                )}
            </CardFooter>
        </Card>
     </div>
    )
}