"use client";

import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";

export interface ContainerContentProps {
  children?: React.ReactNode;
  className?: string;
}

export function ContainerContent({
  children,
  className,
}: ContainerContentProps) {
  const [{ postLayout }] = useConfig();
  let isGridView = postLayout === "card";

  return (
    <div
      className={cn(
        "flex-1",
        !isGridView ? "md:w-[700px] lg:w-[700px]" : "",
        className
      )}
    >
      {children}
    </div>
  );
}
