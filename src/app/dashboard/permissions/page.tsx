"use server";

import { getPermissions } from "./_actions/get-permissions";
import { List } from "./_components/list";
import { Permission } from "./_types/Permission";

export default async function Page() {
  const result = await getPermissions();

  if (!result || "error" in result) return <>Failed to load categories</>;

  const permissions: Permission[] = result;

  return (
    <>
      <h1 className="text-2xl">Permissions</h1>
      <List permissions={permissions} />
    </>
  );
}
