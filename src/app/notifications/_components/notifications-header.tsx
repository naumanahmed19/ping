// Avatar.tsx
import NotificationNav from "./notifications-nav";

const NotificationItem = () => (
  <>
    <div className="md:flex items-center justify-between">
      <h1 className="text-2xl font-bold my-10">Notifications</h1>
    </div>

    <NotificationNav />
  </>
);

export default NotificationItem;
