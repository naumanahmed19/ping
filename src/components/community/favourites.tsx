/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GvfhuE6GfDj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Toggle } from "@/components/ui/toggle";
import { Star, StarIcon } from "lucide-react";

export default function Component({ className }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const handleFavouriteClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    setIsFavourite(!isFavourite);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <>
      <Toggle className={className} onClick={handleFavouriteClick}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {isFavourite ? (
                <Star size="16" fill="orange" strokeWidth={0} />
              ) : (
                <Star size="16" />
              )}
            </TooltipTrigger>
            <TooltipContent>
              {isFavourite ? "Remove from favourites" : "Add to favourites"}
            </TooltipContent>
          </Tooltip>
          <span className="sr-only">Favourite</span>
        </TooltipProvider>
      </Toggle>
      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-lg">
          {isFavourite ? "Added to favourites" : "Removed from favourites"}
        </div>
      )}
    </>
  );
}
