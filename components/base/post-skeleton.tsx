import { Skeleton } from "@/components/ui/skeleton";

export default function PostSkeleton() {
  return (
    <div>

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
  );
}
