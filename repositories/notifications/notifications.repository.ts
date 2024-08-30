import { getNotificationsParams } from "./notification.params";

export const fetchNotifications = async ({ page }: getNotificationsParams) => {
  return fetch(`/data/notifications.json?page=${page}`).then((res) =>
    res.json(),
  );
};
