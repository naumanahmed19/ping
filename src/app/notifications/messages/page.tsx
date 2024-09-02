"use client";
import * as React from "react";

import { Container } from "@/components/base/container";
import { ContainerContent } from "@/components/base/container-content";
import NotificationsHeader from "@/app/notifications/components/notifications-header";
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
