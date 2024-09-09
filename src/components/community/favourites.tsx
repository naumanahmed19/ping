/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GvfhuE6GfDj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Star } from "lucide-react";
import { useState } from "react";

interface ComponentProps {
  className?: string;
}
export default function Component({ className }: ComponentProps) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const handleFavouriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
