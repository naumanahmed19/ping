import { UseInfiniteQueryResult } from "@tanstack/react-query";
import * as React from "react";
import { useInView } from "react-intersection-observer";
import { BaseDataPlaceholder } from "./base-data-placeholder";

interface InfiniteScrollProps<T> {
  placeholderVariant?:
    | "spinner"
    | "spinner-text "
    | "avatar-list"
    | "posts-list";

  query: UseInfiniteQueryResult<{ pages: T[] }, unknown>;
  renderItem: (item: T, index: number) => React.ReactNode;
}

const InfiniteScroll = <T,>({
  query: {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isFetchNextPageError,
  },
  renderItem,

  placeholderVariant = "posts-list",
}: InfiniteScrollProps<T>) => {
  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const dataLength = (data?.pages?.[0] as { data: T[] })?.data?.length;

  return (
    <>
      <>
        {data?.pages.map((item, index) => (
          <React.Fragment key={index}>
            {renderItem((item as { data: T })?.data, index)}
          </React.Fragment>
        ))}
        <div ref={ref} className="mt-4 p-2">
          <BaseDataPlaceholder
            isLoading={isFetchingNextPage}
            variant={placeholderVariant}
            isError={isFetchNextPageError}
          />
        </div>
      </>
      {dataLength == 0 && "No post found"}
    </>
  );
};

export default InfiniteScroll;
