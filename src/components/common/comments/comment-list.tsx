// CommentList.js
import Comment from "./comment"; // Import the Comment component

const CommentList = ({ comments }) => {
  return (
    <div className="space-y-8">
      {comments.map((comment, index) => (
        <Comment key={index} index={index} {...comment} isOpen={true} />
      ))}
    </div>
  );
};

export default CommentList;
