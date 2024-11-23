"use server";

import { useAuth } from "@/actions/use-auth";

import { db } from "@/db/db";
import { rolePermissions, roles } from "@/db/schema";
import { schema } from "../_constants/fields";

export interface CreateRoleInput {
  name: string;
  description: string;
  permissons: number[];
}

export async function createRole(data: CreateRoleInput) {
  console.log(data.permissons);
  const { user } = await useAuth();

  if (!user) return;

  try {
    // Validate input data
    const validate = schema.safeParse(data);
    if (!validate.success) {
      throw new Error("Invalid input data");
    }

    // Insert user data into the database
    const response = await db
      .insert(roles)
      .values({
        name: data.name,
        description: data.description,
      })
      .onConflictDoUpdate({
        target: roles.id,
        set: {
          ...data,

          // Add other fields you want to update
        },
      })
      .returning({ id: roles.id });

    // attach permissions to the role
    data.permissons.forEach(async (permissionId: number) => {
      await db
        .insert(rolePermissions)
        .values({
          roleId: response[0].id,
          permissionId,
        })
        .onConflictDoNothing()
        .execute();
    });

    return {
      success: "Role created successfully",
      categoryId: response[0].id,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to create role", error);
  }
}
