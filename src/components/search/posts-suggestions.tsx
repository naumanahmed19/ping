import { cn } from "@/lib/utils";
import { Post } from "@/types/Post";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import Link from "next/link";

interface PostsSuggestionsProps {
  posts: Post[];

  hasFavourites?: boolean;
  hasSubscribers?: boolean;
  onSelect: (chip: any) => void; // Fix the type to accept an argument
}

const PostsSuggestions: React.FC<PostsSuggestionsProps> = ({
  posts,

  onSelect,
}) => {
  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          <Link
            onClick={() => {
              let chip = {
                title: post.title,
                image: post?.image,
              };
              onSelect(chip);
            }}
            href={`/posts/${post.id}`}
            key={index}
            className={cn(
              "w-full justify-start items-center flex rounded-md px-4 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            )}
          >
            {post.image && (
              <div className="overflow-hidden rounded-md my-3">
                <Image
                  src={post.image}
                  width="150"
                  height="100"
                  alt=""
                  className={cn(
                    "h-auto w-auto object-cover transition-all hover:scale-105 rounded-md",
                    "portrait",
                  )}
                  style={{ aspectRatio: "150/100", objectFit: "cover" }}
                />
              </div>
            )}

            <div className="grid gap-1 font-medium ">
              <p className="text-sm  ">{post.content}</p>
            </div>
          </Link>
          <Separator />
        </div>
      ))}
    </>
  );
};

export default PostsSuggestions;
