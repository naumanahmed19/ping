// Comment.js
"use client";
import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

import CommentActions from "./comment-actions";
import CommentHeader from "./comment-header";
import ReplyForm from "./reply-form";
import { BranchThreadLine, MainThreadLine } from "./thread-lines";
const Comment = ({ key, index, author, time, content, replies, isOpen }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleShowReplyForm = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowReplyForm(!showReplyForm);
  };

  useEffect(() => {
    const detailsElement = detailsRef.current;
    const handleToggle = () => {
      console.log("toggle");
      if (detailsElement) {
        setIsExpanded(detailsElement.open);
      }
    };

    if (detailsElement) {
      detailsElement.addEventListener("toggle", handleToggle);
    }

    return () => {
      if (detailsElement) {
        detailsElement.removeEventListener("toggle", handleToggle);
      }
    };
  }, []);

  return (
    <details
      ref={detailsRef}
      aria-label={`Thread for ${author.name}'s comment`}
      open={isOpen}
    >
      <summary
        aria-label={`Metadata for ${author.name}'s comment`}
        className="grid "
      >
        <CommentHeader isExpanded={isExpanded} user={author} time={time} />
      </summary>

      <div className="grid grid-cols-[24px_1fr] xs:grid-cols-[32px_1fr] relative">
        {replies.length > 0 && <MainThreadLine />}
        <div className="contents">
          <div></div>
          <div className="min-w-0 mx-2 md:mx-5 py-2">
            <p className="text-xs ">{content}</p>
            <ReplyForm
              showReplyForm={showReplyForm}
              onCancel={() => setShowReplyForm(false)}
            />
          </div>
        </div>

        <div className="contents">
          <div className="w-8 flex justify-center  relative">
            {replies.length > 0 && (
              <button
                aria-controls="comment-children"
                aria-expanded={showReplies}
                aria-label="Toggle Comment Thread"
                onClick={() => setShowReplies(!showReplies)}
              >
                {showReplies ? (
                  <MinusCircledIcon className=" h-4 w-4 bg-background" />
                ) : (
                  <PlusCircledIcon className=" h-4 w-4 bg-background" />
                )}
              </button>
            )}
          </div>

          <div className="mx-2">
            <CommentActions handleShowReplyForm={handleShowReplyForm} />

            {/* <div> {replies.length} replies  </div>  */}
          </div>
        </div>

        {showReplies && replies && replies.length > 0 && (
          <>
            {replies.map((reply, i) => (
              <div id="comment-children" className="contents bg-background">
                <BranchThreadLine isLast={i === replies.length - 1} />
                <Comment
                  key={i}
                  {...reply}
                  index={i}
                  isOpen={true}
                  isNested={true}
                />
              </div>
            ))}
          </>
        )}
        <div />
      </div>
    </details>
  );
};

export default Comment;
