import * as React from "react";
import { useInView } from "react-intersection-observer";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { BaseDataPlaceholder } from "./base-data-placeholder";

interface InfiniteScrollProps<T> {
  dataKey?: string;
  query: UseInfiniteQueryResult<{ pages: T[] }, unknown>;
  renderItem: (item: T, index: number) => React.ReactNode;
}

const InfiniteScroll = <T,>({
  dataKey,
  query: {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isFetchNextPageError,
  },
  renderItem,
}: InfiniteScrollProps<T>) => {
  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const dataLength = (data?.pages?.[0] as { posts: unknown[] })?.posts.length;

  return (
    <div>
      {data?.pages.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item, index)}</React.Fragment>
      ))}
      <div ref={ref} className="mt-4 p-2">
        <BaseDataPlaceholder
          isLoading={isFetchingNextPage}
          variant="posts-list"
          isError={isFetchNextPageError}
        />

        {dataLength == 0 && "No post found"}

        {!hasNextPage && dataLength > 0 && "No more posts"}
      </div>
    </div>
  );
};

export default InfiniteScroll;
