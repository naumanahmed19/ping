import { PostContainer } from "@/components/base/post-container";
import PostActions from "@/components/posts/PostActions";
import { Separator } from "@/components/ui/separator";
import UserCommentHeader from "@/components/user/user-comment-header";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <>
          {console.log(comment)}
          <PostContainer route={`/post/${comment?.post?.id}`}>
            <UserCommentHeader comment={comment} />
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
