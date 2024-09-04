"use client";
import * as React from "react";

import NotificationsHeader from "@/app/notifications/_components/notifications-header";
import { Container } from "@/components/base/container";
import { ContainerContent } from "@/components/base/container-content";
const Page: React.FC = () => {
  return (
    <Container>
      <NotificationsHeader />
      <div className="flex items-start justify-between gap-4">
        <ContainerContent>Messages</ContainerContent>
      </div>
    </Container>
  );
};
export default Page;
