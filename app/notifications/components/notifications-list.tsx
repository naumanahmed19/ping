import { useNotifications } from "@/api/notifications";
import React, { useState } from "react";
import NotificationsListHeader from "./notifications-list-header";

const NotificationList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useNotifications(currentPage);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading notifications</div>;

  const notifications = data.notifications;
  const totalPages = data.totalPages;

  const handleNextPage = (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="space-y-1 ">
        {notifications?.map((notification) => (
          <NotificationsListHeader
            className="rounded-md p-3"
            notification={notification}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
