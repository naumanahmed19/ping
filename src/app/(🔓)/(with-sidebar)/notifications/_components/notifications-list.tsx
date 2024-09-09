"use client";
import { BaseDataPlaceholder } from "@/components/base/base-data-placeholder";
import InfiniteScroll from "@/components/base/infinite-scroll";
import { useNotifications } from "@/queries/notifications.query";
import { Notification } from "@/types/Notification";
import { NotificationsListItem } from "./notifications-list-item";

const NotificationList = () => {
  const query = useNotifications();

  return (
    <div>
      <BaseDataPlaceholder
        isLoading={query.isLoading}
        isError={query.isError}
        count={5}
        variant="avatar-list"
      >
        <div className="space-y-1 ">
          <InfiniteScroll
            query={query}
            renderItem={(notifications: Notification[]) => (
              <List notifications={notifications} />
            )}
          />
        </div>
      </BaseDataPlaceholder>
    </div>
  );
};

export default NotificationList;

function List({ notifications }: { notifications: Notification[] }) {
  return (
    <>
      {notifications?.map((notification) => (
        <NotificationsListItem
          key={notification.id}
          className="rounded-md p-3"
          notification={notification}
        />
      ))}
    </>
  );
}
