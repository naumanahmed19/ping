"use client";
import { playlists } from "@/data/playlists";
import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";
import { Header } from "../layout/header";

export interface IBaseWrapperProps {
  children?: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

export function Container({
  children,
  className,
  isFullWidth,
}: IBaseWrapperProps) {
  const [{ postLayout }] = useConfig();
  let isGridView = postLayout === "card";

  return (
    <div>
      <main className="flex">
        <div
          className={cn(
            "p-4 mt-16",
            !isGridView ? "md:w-[700px] lg:w-[1000px] mx-auto" : "ml-64",
            className,
          )}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
