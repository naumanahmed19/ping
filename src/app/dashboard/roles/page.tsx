"use server";

import { getRoles } from "./_actions/get-role";
import { List as CategoriesList } from "./_components/list";
import { Role } from "./_types/Role";

export default async function Page() {
  const result = await getRoles();

  if (!result || "error" in result) return <>Failed to load categories</>;

  const roles: Role[] = result;

  return (
    <>
      <h1 className="text-2xl">Roles</h1>
      <CategoriesList roles={roles} />
    </>
  );
}
