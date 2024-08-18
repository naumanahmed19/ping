// Avatar.tsx
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming these are imported from somewhere
import UserNav from "./notifications-nav";
import NotificationNav from "./notifications-nav";

const NotificationsHeader = () => (
  <>
    <div className="md:flex items-center justify-between">
      <h1 className="text-2xl font-bold my-10">Notifications</h1>
    </div>

    <NotificationNav />
  </>
);

export default NotificationsHeader;
