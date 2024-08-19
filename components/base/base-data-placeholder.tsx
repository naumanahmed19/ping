import { LoaderCircle, ServerCrash } from "lucide-react";
import React, { ReactNode } from "react";
import { Skeleton } from "../ui/skeleton";

interface BaseDataPlaceholderProps {
  isLoading: boolean;
  isError: boolean;
  children?: React.ReactNode;
  variant?: "spinner" | "spinner-text " | "avatar-list";
}

export const BaseDataPlaceholder: React.FC<BaseDataPlaceholderProps> = ({
  isLoading,
  isError,
  children,
  variant = "spinner-text",
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
      if (variant === "avatar-list") {
        return (
          <>
            {[...Array(5)].map((_, index) => (
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

  return <>{children}</>;
};
