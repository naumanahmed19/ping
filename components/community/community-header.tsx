// Avatar.tsx
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming these are imported from somewhere
import { Community } from "@/data/communities";
import CommunityNav from "./community-nav";

const CommunityHeader = ({ community }: { community: Community }) => (
  <>
    <div className="flex items-center">
      <div className="ml-3"></div>
    </div>

    <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md " />
    <div className="px-5 py-2 flex flex-col gap-3 pb-6">
      <div className="flex items-center justify-between">
        <div className="flex">
          <div className=" h-[100px] shadow-md w-[100px] rounded-full border-4 overflow-hidden -mt-12 border-white">
            <Avatar className="w-full h-full rounded-full object-center object-cover">
              <AvatarImage src={community?.icon_img} alt={community?.name} />
              <AvatarFallback>{community?.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight  m-2">
            {community?.name}
          </h1>
        </div>

        <CommunityNav community={community} />
      </div>
    </div>
  </>
);

export default CommunityHeader;
