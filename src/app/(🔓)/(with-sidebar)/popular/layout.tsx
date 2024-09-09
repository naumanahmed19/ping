import { Container } from "@/components/base/container";
import { ContainerAside } from "@/components/base/container-aside";
import { ContainerContent } from "@/components/base/container-content";
import { PostsRightSidebar } from "@/components/posts/PostsRightSidebar";
import { CarouselPosts } from "./_components/carousel-posts";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="space-y-5 mb-0">
      <CarouselPosts />
      <div className="flex items-start justify-between gap-4">
        <ContainerContent>{children}</ContainerContent>

        <ContainerAside>
          <PostsRightSidebar />
        </ContainerAside>
      </div>
    </Container>
  );
};

export default LandingPageLayout;
