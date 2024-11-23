"use server";

import { useAuth } from "@/actions/use-auth";

import { db } from "@/db/db";
import { permissions, roles } from "@/db/schema";
import { schema } from "../_constants/fields";

export interface CreateRoleInput {
  name: string;
  description: string;
}

export async function createPermission(data: CreateRoleInput) {
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
      .insert(permissions)
      .values(data)
      .onConflictDoUpdate({
        target: roles.id,
        set: {
          ...data,

          // Add other fields you want to update
        },
      })
      .returning({ id: permissions.id });

    // await db.insert(profiles).values({ userId: newUser[0].userId }).execute();
    //  revalidatePath(`/dashboard/categories`);
    return {
      success: "Permission created successfully",
      id: response[0].id,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to create permission", error);
  }
}
