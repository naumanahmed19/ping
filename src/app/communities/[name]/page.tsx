import { ContainerContent } from "@/components/base/container-content";
import { Container } from "@/components/base/container";
import CommunityHeader from "@/components/community/community-header";
import { useGetCommunity } from "@/queries/communities.query";
import { Community } from "@/types/Community";
import { ContainerAside } from "@/components/base/container-aside";
import { PostsRightSidebar } from "@/components/posts/PostsRightSidebar";
import CommunityPosts from "@/components/community/community-posts";

type Props = {
  params: { name: string };
};

/**
 * Generates metadata for the community page.
 * @param params - The parameters containing the community name.
 * @returns Metadata object for the community page.
 */
export async function generateMetadata({ params }: Props) {
  const community: Community = await useGetCommunity(params.name);
  return {
    title: community.name,
    openGraph: {
      images: [community.icon_img],
    },
  };
}

/**
 * Renders the community page.
 * @param params - The parameters containing the community name.
 * @returns JSX.Element representing the community page.
 */
export default async function CommunityPage({ params }: Props) {
  const community: Community = await useGetCommunity(params.name);
  return (
    <Container>
      <CommunityHeader community={community} />
      <div className="flex items-start justify-between gap-4">
        <ContainerContent>
          <CommunityPosts id={community.id} />
        </ContainerContent>
        <ContainerAside>
          <PostsRightSidebar />
        </ContainerAside>
      </div>
    </Container>
  );
}
