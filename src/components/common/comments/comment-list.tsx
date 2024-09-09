// CommentList.js
import { Comment as CommentType } from "@/types/Comment";
import Comment from "./comment"; // Import the Comment component
const CommentList = ({ comments }: { comments: CommentType[] }) => {
  return (
    <div className="space-y-8">
      {comments.map((comment: CommentType, index) => (
        <Comment key={comment.id} index={index} reply={comment} isOpen={true} />
      ))}
    </div>
  );
};

export default CommentList;
