import { cn } from "@/lib/utils";
import React from "react";

export const MainThreadLine = () => (
  <div
    aria-hidden="true"
    className="absolute top-0 left-0 bottom-0  w-8 flex justify-center items-center z-0 cursor-pointer group mb-3"
  >
    <div
      className="w-[1px] h-full group-hover:bg-tone-2 bg-tone-4 bg-border"
      data-testid="main-thread-line"
    ></div>
  </div>
);

export const BranchThreadLine = ({ isLast }: { isLast: boolean }) => (
  <div
    aria-hidden="true"
    className={cn(
      isLast ? "bg-background" : "",
      "threadline flex justify-end align-start relative",
    )}
  >
    <div
      className="box-border h-5  border-0 border-tone-4 border-solid border-b-[1px] w-[8.4px] border-l-[1px] rounded-bl-[12px]"
      data-testid="branch-line"
    ></div>
  </div>
);
