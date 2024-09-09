import { getCommuity } from "@/actions/get-community";
import { Container } from "@/components/base/container";
import { ContainerAside } from "@/components/base/container-aside";
import { ContainerContent } from "@/components/base/container-content";
import { PostsRightSidebar } from "@/components/posts/PostsRightSidebar";
import { Community } from "@/types/Community";
import { CommunityHeader } from "../_components/community-header";
import { CommunityPosts } from "../_components/community-posts";

type Props = {
  params: { name: string };
};

/**
 * Generates metadata for the community page.
 * @param params - The parameters containing the community name.
 * @returns Metadata object for the community page.
 */
export async function generateMetadata({ params }: Props) {
  const community = await getCommuity(params?.name);
  return {
    title: community?.name,

    openGraph: {
      images: [community?.icon_img],
    },
  };
}

/**
 * Renders the community page.
 * @param params - The parameters containing the community name.
 * @returns JSX.Element representing the community page.
 */
export default async function CommunityPage({ params }: Props) {
  const community: Community = await getCommuity(params.name);

  return (
    <Container>
      <CommunityHeader community={community} />
      <div className="flex items-start justify-between gap-4">
        <ContainerContent>
          <CommunityPosts id={community?.id} />
        </ContainerContent>
        <ContainerAside>
          <PostsRightSidebar />
        </ContainerAside>
      </div>
    </Container>
  );
}
