"use server";

import { getUsers } from "@/actions/users/get-users";
import { User } from "@/types/User";
import { List as UsersList } from "./_components/list";

// import { Category } from "@/types/Category";

export default async function Page() {
  const result = await getUsers();

  if (!result || "error" in result) return <>Failed to load categories</>;

  const users: User[] = result;

  return (
    <>
      <h1 className="text-2xl">Users</h1>
      <UsersList users={users} />
    </>
  );
}
