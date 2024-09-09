import { PostContainer } from "@/components/base/post-container";
import PostActions from "@/components/posts/PostActions";
import { Separator } from "@/components/ui/separator";
import { Comment } from "@/types/Comment";

const CommentList = ({ comments }: { comments: Comment[] }) => {
  return (
    <div>
      {comments.map((comment) => (
        <>
          {console.log(comment)}
          <PostContainer route={`/post/${comment?.postId}`}>
            {/* <UserCommentHeader comment={comment} /> */}
            <p className="text-sm  my-3">{comment.content}</p>
            <PostActions />
          </PostContainer>
          <Separator className="my-4" />
        </>
      ))}
    </div>
  );
};

export default CommentList;
