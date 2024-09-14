"use server";
import { db } from "@/db/db";
import { roles, userRoles, users } from "@/db/schema";
import { eq, inArray } from "drizzle-orm";
export async function getUser(email: string) {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (user) {
      const userRolesData = await db.query.userRoles.findMany({
        where: eq(userRoles.userId, user.id),
      });

      const roleIds = userRolesData.map((userRole) => userRole.roleId);

      console.log("roleIds", roleIds);
      const rolesData = await db.query.roles.findMany({
        where: inArray(roles.id, roleIds),
      });

      return {
        ...user,
        roles: rolesData.map((role) => role.name),
      };
    }

    return null;
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to fetch user.");
  }
}
