"use server";

import { useAuth } from "../../../../../actions/use-auth";

// Sample data
export async function getRoles() {
  const { user, isAuthenticated } = await useAuth();

  if (!user) return;

  // const roles = await db.query.roles.findMany({
  //   // with: {
  //   //   rolePermissions: {
  //   //     with: {
  //   //       permission: true,
  //   //     },
  //   //   },
  //   // },
  // });

  // attach media to community

  const roles = [];

  if (!roles) {
    return { error: "Failed to get roles" };
  }

  return roles;
}
