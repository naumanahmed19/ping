import React from 'react';

const MainThreadLine = ({ replies }) => (
  replies.length > 0 && (
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 bottom-0  w-8 flex justify-center items-center z-0 cursor-pointer group mb-3"
    >
      <div
        className="w-[1px] h-full group-hover:bg-tone-2 bg-tone-4 bg-border"
        data-testid="main-thread-line"
      ></div>
    </div>
  )
);

export default MainThreadLine;