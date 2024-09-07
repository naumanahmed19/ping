// "use client";
// import * as React from "react";

// import { useParams } from "next/navigation";
// import { userData } from "@/data";
// import UserHeader from "@/components/user/user-header";

// import CommentsList from "./comments-list";
// import { comments } from "@/data/comments";
// import { ContainerContent } from "@/components/base/container-content";
// import { ContainerAside } from "@/components/base/container-aside";
// import { Container } from "@/components/base/container";
// import { useQuery } from "@tanstack/react-query";
// import { getComments } from "@/api";
// import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
// import { PostsRightSidebar } from "@/components/posts/PostsRightSidebar";
// const UserPage: React.FC = () => {
//   const id = useParams().id;

//   // Fetch the comments data
//   const {
//     data: comments,
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["comments", { userId: id }],
//     queryFn: getComments,
//   });

//   // Fetch the first post from the data
//   const user = userData.find((user) => user.id === Number(id));

//   if (!user) return <p>Not found</p>;

//   return (
//     <Container>
//       <UserHeader key={user?.id} user={user} />
//       <div className="flex items-start justify-between gap-4">
//         <ContainerContent>
//           <BaseDataPlaceholder
//             isLoading={isLoading}
//             isError={isError}
//             variant="avatar-list"
//           >
//             <CommentsList comments={comments} />
//           </BaseDataPlaceholder>
//         </ContainerContent>
//         <ContainerAside>
//           <PostsRightSidebar />
//         </ContainerAside>
//       </div>
//     </Container>
//   );
// };

// export default UserPage;
import { Container } from "@/components/base/container";
import { ContainerAside } from "@/components/base/container-aside";
import { ContainerContent } from "@/components/base/container-content";
import { PostsRightSidebar } from "@/components/posts/PostsRightSidebar";
import { useGetUser } from "@/queries/users.query";
import UserComments from "../_components/user-comments";
import UserHeader from "../_components/user-header";

type Props = {
  params: { id: string };
};

export default async function UserPage({ params }: Props) {
  const user = await useGetUser(params.id);
  return (
    <Container>
      <UserHeader user={user} />
      <div className="flex items-start justify-between gap-4">
        <ContainerContent>
          <UserComments userId={user.id} />
        </ContainerContent>
        <ContainerAside>
          <PostsRightSidebar />
        </ContainerAside>
      </div>
    </Container>
  );
}
