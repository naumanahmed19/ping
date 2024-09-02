"use client";
import * as React from "react";
import { Container } from "@/components/base/container";
import { ContainerContent } from "@/components/base/container-content";
import NotificationsHeader from "@/app/notifications/components/notifications-header";
import NotificationList from "@/app/notifications/components/notifications-list";
const Page: React.FC = () => {
  return (
    <Container>
      <NotificationsHeader />
      <div className="flex items-start justify-between gap-4">
        <ContainerContent>
          <NotificationList />
        </ContainerContent>
      </div>
    </Container>
  );
};
export default Page;

// components/ListItem.js
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

function ListItem({ notification }) {
  return (
    <li className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
      <div className="flex items-center space-x-3">
        {notification.user && (
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={notification.user.avatar_url}
              alt={notification.user.username}
            />
          </Avatar>
        )}
        <div>
          <a
            href={notification.post_link}
            className="font-medium text-blue-500 hover:underline"
          >
            {notification.post_title}
          </a>
          <p className="text-sm text-gray-500">{notification.message}</p>
          {notification.comment_snippet && (
            <p className="text-xs italic text-gray-400">
              "{notification.comment_snippet}"
            </p>
          )}
          <p className="text-xs text-gray-400">
            {new Date(notification.created_at).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Unread badge */}
      {!notification.is_read && (
        <Badge variant="outline" className="bg-green-100 text-green-600">
          Unread
        </Badge>
      )}
    </li>
  );
}
