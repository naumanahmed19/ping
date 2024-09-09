import { Comment as CommentType } from "@/types/Comment";
import { useState } from "react";
import CommentList from "./comment-list";
import ReplyForm from "./reply-form";

const Comments = ({ comments }: { comments: CommentType[] }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <>
      {!showReplyForm && (
        <button
          onClick={() => setShowReplyForm(!showReplyForm)}
          type="button"
          className="rounded-md border cursor-text  w-full text-left px-5 my-5 py-3  text-sm text-muted-foreground"
        >
          Add a comment
        </button>
      )}

      <ReplyForm
        showReplyForm={showReplyForm}
        onCancel={() => setShowReplyForm(false)}
      />
      <CommentList comments={comments} />
    </>
  );
};

export default Comments;
