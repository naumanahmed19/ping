import { cn } from "@/lib/utils";

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Community } from "@/data/communities";
import CommunityHoverCard from "./community-hover-card";
import Favourites from "./favourites";

interface CommunitiesWidgetProps {
  communities: Community[];

  hasFavourites?: boolean;
  hasSubscribers?: boolean;
}

const CommunitiesWidget: React.FC<CommunitiesWidgetProps> = ({
  communities,
  hasFavourites = false,
  hasSubscribers = false,
}) => {
  return (
    <>
      {communities.map((community, index) => (
        <CommunityHoverCard community={community} key={index}>
          <Link
            href={`/communities/${community.name}`}
            key={index}
            className={cn(
              "w-full justify-start items-center flex rounded-md px-4 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            )}
          >
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src={community.icon_img} alt={community.name} />
              <AvatarFallback>{community.title.slice(0, 2)}</AvatarFallback>
            </Avatar>

            <div className="grid gap-1">
              <p className="text-sm font-medium ">{community.name}</p>

              {hasSubscribers && (
                <p className="text-xs text-muted-foreground">
                  {community.subscribers} members
                </p>
              )}
            </div>
            {hasFavourites && <Favourites className="ml-auto" />}
          </Link>
        </CommunityHoverCard>
      ))}
    </>
  );
};

export default CommunitiesWidget;
