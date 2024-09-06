"use client";
// for tree view https://github.com/shadcn-ui/ui/issues/355#issuecomment-1703767574
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const handleSavePost = () => {
    console.log("Save Post");
  };

  const handlePublishPost = () => {
    console.log("Publish Post");
  };

  return (
    <div className={cn("fixed right-0 top-16 h-full border-l p-4", className)}>
      <div className="flex flex-col gap-4">
        <Button onClick={handleSavePost}>Save Post</Button>
        <Button onClick={handlePublishPost}>Publish Post</Button>
      </div>
    </div>
  );
}
