import { Container } from "@/components/base/container";
import { ContainerAside } from "@/components/base/container-aside";
import { ContainerContent } from "@/components/base/container-content";
import { PostsRightSidebar } from "@/components/posts/PostsRightSidebar";
import { useGetUser } from "@/queries/users.query";
import UserHeader from "../_components/user-header";
import UserPosts from "../_components/user-posts";

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
          <UserPosts />
        </ContainerContent>
        <ContainerAside>
          <PostsRightSidebar />
        </ContainerAside>
      </div>
    </Container>
  );
}
