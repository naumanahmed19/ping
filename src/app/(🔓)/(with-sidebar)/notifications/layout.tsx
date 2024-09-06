import { Container } from "@/components/base/container";
import NotificationsHeader from "./_components/notifications-header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <NotificationsHeader />

      {children}
    </Container>
  );
};

export default Layout;
