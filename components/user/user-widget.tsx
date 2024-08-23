import { cn } from "@/lib/utils";

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Favourites from "../community/favourites";
import { User } from "@/data/users";
import { Button } from "react-day-picker";

interface UserWidgetProps {
  users: User[];

  hasFavourites?: boolean;
  hasSubscribers?: boolean;
  onSelect: () => void; //TODO: fix type
}

const UserWidget: React.FC<UserWidgetProps> = ({
  users,
  hasFavourites = false,
  hasSubscribers = false,
  onSelect,
}) => {
  return (
    <>
      {users.map((user, index) => (
        <Link
          onClick={() => {
            let chip = {
              title: user.name,
              image: user.profile.avatar,
            };
            onSelect(chip);
          }}
          href={`/users/${user.id}`}
          key={index}
          className={cn(
            "w-full justify-start items-center flex rounded-md px-4 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          )}
        >
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={user.profile.avatar} alt={user.name} />
            <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
          </Avatar>

          <div className="grid gap-1">
            <p className="text-sm font-medium ">{user.name}</p>

            {hasSubscribers && (
              <p className="text-xs text-muted-foreground">
                {user.profile.subscribers} members
              </p>
            )}
          </div>
          {hasFavourites && <Favourites className="ml-auto" />}
        </Link>
      ))}
    </>
  );
};

export default UserWidget;
