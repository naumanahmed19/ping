import { Header } from "./_components/header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Header />
      <div> {children}</div>
    </div>
  );
};
export default AuthLayout;
