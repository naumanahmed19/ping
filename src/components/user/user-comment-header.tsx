// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { MoreHorizontal } from "lucide-react";

// import { getPost } from "@/actions/get-post";
// import CommunityHoverCard from "@/components/community/community-hover-card";
// import { af, when } from "@/lib/utils";
// import { Comment } from "@/types/Comment";
// import { Post } from "@/types/Post";
// import Link from "next/link";
// import ListItem from "../base/list-items";

// const UserCommentHeader: React.FC<{
//   comment: Comment;
//   isDetailsPage?: boolean;
// }> = async ({ comment, isDetailsPage = false }) => {
//   const post: Post | undefined = await getPost(comment.postId);

//   if (!post) return;

//   // AvatarWithHoverCard Component (Internal)
//   const Leading = () => {
//     return (
//       <CommunityHoverCard community={post?.community}>
//         <Avatar className={!isDetailsPage ? "h-7 w-7" : "h-10 w-10"}>
//           <AvatarImage
//             src={post?.community?.icon_img}
//             alt={post?.community?.name}
//           />
//           <AvatarFallback>{af(post?.community?.name ?? "")}</AvatarFallback>
//         </Avatar>
//       </CommunityHoverCard>
//     );
//   };

//   const Title = () => {
//     return (
//       <CommunityHoverCard community={post?.community}>
//         <div className="flex items-center text-xs ">
//           <div className="ml-2 ">
//             <div className="flex">
//               <div className="font-bold">{post?.community?.name}</div>
//               <div className="text-muted-foreground mx-3">
//                 . <Link href={`/post/${post.id}`}> {post?.title}</Link>
//               </div>
//             </div>

//             <div className="text-muted-foreground">
//               commented {when(post?.created_at ?? "")}
//             </div>
//           </div>
//         </div>
//       </CommunityHoverCard>
//     );
//   };

//   const Trailing = () => {
//     return (
//       <>
//         {!isDetailsPage && (
//           <Button
//             variant="outline"
//             className="h-[24px] items-center gap-1.5 rounded-md border p-[8px] shadow-sm"
//           >
//             Join
//           </Button>
//         )}
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button aria-haspopup="true" size="icon" variant="ghost">
//               <MoreHorizontal className="h-4 w-4" />
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuItem>Save</DropdownMenuItem>
//             <DropdownMenuItem>Hide</DropdownMenuItem>
//             <DropdownMenuItem>Report</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </>
//     );
//   };
//   return (
//     <ListItem
//       leading={<Leading />}
//       // Title slot: Community and post info
//       title={<Title />}
//       // Trailing slot: Buttons and dropdown
//       trailing={<Trailing />}
//     />
//   );
// };

// export default UserCommentHeader;
