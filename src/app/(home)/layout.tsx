"use client";

import { Container } from "@/components/base/container";
import { ContainerAside } from "@/components/base/container-aside";
import { ContainerContent } from "@/components/base/container-content";
import { PostsRightSidebar } from "@/components/posts/PostsRightSidebar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="flex items-start justify-between gap-4">
      <ContainerContent>{children}</ContainerContent>
      <ContainerAside>
        <PostsRightSidebar />
      </ContainerAside>
    </Container>
  );
};

export default LandingPageLayout;
