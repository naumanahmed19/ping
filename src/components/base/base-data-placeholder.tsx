import { LoaderCircle, SearchSlash, ServerCrash } from "lucide-react";
import React, { ReactNode } from "react";
import { Skeleton } from "../ui/skeleton";
import NoResults from "./no-results";

interface BaseDataPlaceholderProps {
  isLoading: boolean;
  isError?: boolean;
  children?: React.ReactNode;
  count?: number;
  dataLength?: number;
  variant?: "spinner" | "spinner-text " | "avatar-list" | "posts-list";
  noResults?: ReactNode;
}

export const BaseDataPlaceholder: React.FC<BaseDataPlaceholderProps> = ({
  dataLength = undefined,
  isLoading,
  isError,
  children,
  variant = "spinner-text",
  noResults,

  count = 5,
}) => {
  if (isLoading) {
    if (variant === "spinner") {
      return (
        <div className="h-[300px] relative">
          <div className="absolute inset-0 z-10 flex h-[--container-height] w-full items-center justify-center gap-2 bg-background text-sm text-muted-foreground">
            <LoaderCircle className="h-4 w-4 animate-spin" />
          </div>
        </div>
      );
    }

    if (variant === "spinner-text") {
      return (
        <div className="h-[300px] relative">
          <div className="absolute inset-0 z-10 flex h-[--container-height] w-full items-center justify-center gap-2 bg-background text-sm text-muted-foreground">
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Loading...
          </div>
        </div>
      );
    }

    if (variant === "avatar-list") {
      return (
        <>
          {[...Array(count)].map((_, index) => (
            <div
              key={index}
              className="w-full my-2  justify-start items-center flex rounded-md px-4 py-2 leading-none no-underline outline-none transition-colors"
            >
              <Skeleton className="h-10 w-10 rounded-full mr-2" />
              <div className="grid gap-1 w-11/12">
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </>
      );
    }

    if (variant === "posts-list") {
      return (
        <div className="animate-fadeOut">
          {[...Array(count)].map((_, index) => (
            <div key={index}>
              <div className="flex items-center justify-start">
                <Skeleton className="rounded-full h-7 w-7" />
                <div className="flex-1 space-y-2 ml-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs space-x-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-6 w-16 rounded-md" />
                      <Skeleton className="h-6 w-16 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
              <Skeleton className="h-4 w-full mt-4" />
              <Skeleton className="h-4 w-full mt-4" />
              <Skeleton className="h-4 w-full mt-4" />
              <Skeleton className="h-4 w-5/6 mt-2" />
              <div className="flex items-center gap-3 my-3">
                <Skeleton className="h-6 w-16 rounded-md" />
                <Skeleton className="h-6 w-10 rounded-md" />
                <Skeleton className="h-6 w-10 rounded-md" />
                <Skeleton className="h-6 w-10 rounded-md" />
                <Skeleton className="h-6 w-10 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="h-[300px] relative">
        <div className="absolute inset-0 z-10 flex h-[--container-height] w-full items-center justify-center gap-2 bg-background text-sm text-muted-foreground">
          <LoaderCircle className="h-4 w-4 animate-spin" />
          Loading...
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <div className="relative h-[300px]">
          <div className="absolute inset-0 z-10 flex h-[--container-height] w-full items-center justify-center gap-2 bg-background text-sm text-muted-foreground">
            <div>
              <ServerCrash className="text-center w-full" />
              <div className="my-3">Something went wrong</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main render function
  if (dataLength === 0) {
    return noResults ? (
      noResults
    ) : (
      <NoResults
        icon={<SearchSlash className="w-10 h-10 mx-auto my-5 text-muted/95" />}
        title="No results found"
        subtitle="Try searching for something else"
      />
    );
  }

  return <div className="animate-fadeIn">{children}</div>;
};
