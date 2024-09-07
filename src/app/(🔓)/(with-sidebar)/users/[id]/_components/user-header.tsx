import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming these are imported from somewhere
import { when } from "@/lib/utils";
import { User } from "@/types/User";
import UserNav from "./user-nav";

const UserHeader = ({ user }: { user: User }) => {
  return (
    <>
      <div className="flex items-center my-10">
        <Avatar>
          <AvatarImage src={user?.profile?.avatar} alt={user?.name} />
          <AvatarFallback>{user?.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <h1 className="text-2xl font-semibold tracking-tight">
            {user?.name}
          </h1>
          <p className="text-sm text-muted-foreground">
            Joined {when(user?.created_at)}
          </p>
        </div>
      </div>
      <UserNav user={user} />
    </>
  );
};

export default UserHeader;
