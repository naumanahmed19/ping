import React, { useState } from "react";
import NotificationsListHeader from "./notifications-list-header";
import { useNotifications } from "@/queries/notifications.query";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";

const NotificationList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isError, isLoading } = useNotifications(currentPage);

  const totalPages = data?.totalPages;

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
      <BaseDataPlaceholder
        isLoading={isLoading}
        isError={isError}
        dataLength={data?.notifications.length}
        count={5}
        variant="avatar-list"
      >
        <div className="space-y-1 ">
          {data?.notifications?.map((notification) => (
            <NotificationsListHeader
              key={notification.id}
              className="rounded-md p-3"
              notification={notification}
            />
          ))}
        </div>
      </BaseDataPlaceholder>
    </div>
  );
};

export default NotificationList;
