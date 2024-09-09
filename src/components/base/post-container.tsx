import { useRouter } from "next/navigation";
import React from "react";

export interface PostContainerProps {
  children?: React.ReactNode;
  className?: string;
  route?: string;
}

export const PostContainer: React.FC<PostContainerProps> = ({
  children,
  className,
  route = "",
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, route: string) => {
    e.stopPropagation();
    e.preventDefault();
    router.push(route); // Navigate to the post page
  };

  return (
    <div
      onClick={(e) => handleClick(e, route)}
      className={`relative p-3 rounded-md cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
    >
      {children}
    </div>
  );
};
