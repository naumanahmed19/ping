import { Metadata } from "next";
import NotificationList from "./_components/notifications-list";

export const metadata: Metadata = {
  title: "Notifications",
  description: "View your notifications",
};
export default function Page() {
  return <NotificationList />;
}
