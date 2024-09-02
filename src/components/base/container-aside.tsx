"use client";

import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";

export interface ContainerAsideProps {
  children?: React.ReactNode;
  className?: string;
}

export function ContainerAside({ children, className }: ContainerAsideProps) {
  return (
    <div className={cn("hidden lg:block sticky top-24", className)}>
      {children}
    </div>
  );
}
