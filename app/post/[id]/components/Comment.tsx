// Comment.js
"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  BellIcon,
  ChatBubbleIcon,
  MinusCircledIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import CommentActions from "./CommentActions";
const Comment = ({ key, index, author, time, content, replies, isOpen }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleShowReplyForm = () => {
    console.log(showReplyForm);
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
        className="grid grid-cols-[24px_minmax(0,1fr)] xs:grid-cols-[32px_minmax(0,1fr)]"
      >
        {isExpanded ? (
          <div className="flex ">
            <div className="relative">
              <Avatar className="h-8 w-8">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex relative items-center justify-start mx-2 md:mx-3">
              <h4 className="text-xs font-semibold">{author.name}</h4>
              <div className="text-xs text-gray-500 mx-2">{time}</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <div>
              <PlusCircledIcon className="mr-2 h-4 w-4" />
            </div>
            <Link href="/"> {author.name}</Link>
          </div>
        )}
      </summary>

      <div className="grid grid-cols-[24px_1fr] xs:grid-cols-[32px_1fr] relative">
        {replies.length > 0 && (
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 bottom-0  w-8 flex justify-center items-center z-0 cursor-pointer group mb-3"
          >
            <div
              className="w-[1px] h-full group-hover:bg-tone-2 bg-tone-4 bg-border"
              data-testid="main-thread-line"
            ></div>
          </div>
        )}
        <div className="contents">
          <div></div>
          <div className="min-w-0 mx-2 md:mx-5 py-2">
            <p className="text-xs ">{content}</p>

            {showReplyForm && (
              <div className="mt-2">
                <Card>
                  <CardContent className="p-0 text-sm">
                    <Textarea
                      id="comment"
                      className="my-0 border-none"
                      placeholder="Write your reply"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-3 py-2">
                    <div className="text-xs text-muted-foreground">
                      {/* Updated <time dateTime="2023-11-23">November 23, 2023</time> */}
                    </div>
                    <div className=" mr-0 w-auto">
                      <Button type="submit" size="sm" className="h-[28px]">
                        Comment
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            )}
          </div>
        </div>

        <div className="contents ">
          {replies.length > 0 && (
            <div className="w-8 flex justify-center  relative  ">
              <button
                aria-controls="comment-children"
                aria-expanded={showReplies}
                aria-label="Toggle Comment Thread"
                onClick={() => setShowReplies(!showReplies)}
              >
                <span className="flex items-center justify-center">
                  <span className="flex">
                    {showReplies ? (
                      <div>
                        {" "}
                        <MinusCircledIcon className=" h-4 w-4 bg-background" />
                      </div>
                    ) : (
                      <div className="flex item-center">
                        <div>
                          {" "}
                          <PlusCircledIcon className=" h-4 w-4 bg-background" />
                        </div>
                      </div>
                    )}
                  </span>
                </span>
              </button>
            </div>
          )}

          <div className="mx-2">
            <CommentActions handleShowReplyForm={handleShowReplyForm} />

            {/* <div> {replies.length} replies  </div>  */}
          </div>
        </div>

        {showReplies && replies && replies.length > 0 && (
          <>
            {replies.map((reply, i) => (
              <div
                id="comment-children"
                className="contents [&>.threadline>*]:border-tone-4 bg-background"
              >
                {branchLine(i, replies)}
                
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
function branchLine(i: any, replies: any) {
  return <div
    aria-hidden="true"
    className={cn(
      i === replies.length - 1 ? "bg-background" : "",
      "threadline flex justify-end align-start relative"
    )}
  >
    <div
      className="box-border h-5  border-0 border-tone-4 border-solid border-b-[1px] w-[8.4px] border-l-[1px] rounded-bl-[12px]"
      data-testid="branch-line"
    ></div>
  </div>;
}

