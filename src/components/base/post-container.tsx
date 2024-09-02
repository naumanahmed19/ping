"use client";

import { useRouter } from "next/navigation";

export interface PostContainerProps {
  children?: React.ReactNode;
  className?: string;
  route?: string;
}

export function PostContainer({
  children,
  className,
  route = "",
}: PostContainerProps) {
  const router = useRouter();

  const handleClick = (e, route: string) => {
    e.stopPropagation();
    e.preventDefault();
    router.push(route); // Navigate to the post page
  };

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
  return (
    <div
      onClick={(e) => handleClick(e, route)}
      className="relative p-3 rounded-md cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      {children}
    </div>
  );
}
