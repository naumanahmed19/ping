"use server";

import { List as RolesList } from "./_components/list";
import { getRoles } from "./actions/get-roles";

import { Role } from "./types/Role";

export default async function Page() {
  const result = await getRoles();

  if (!result || "error" in result) return <>Failed to load categories</>;

  const roles: Role[] = result.map((role) => ({
    ...role,
    title: role.name, // Assuming 'name' can be used as 'title'
    permissions: [], // Provide a default value for 'permissions'
  }));

  return (
    <>
      <h1 className="text-2xl">Roles</h1>
      <RolesList roles={roles} />
    </>
  );
}
