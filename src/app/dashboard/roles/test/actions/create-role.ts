import { rolesSchema } from "@/app/dashboard/roles/test/_components/fields";
import { db } from "@/db/db";
import { roles } from "@/db/schema";

export interface CreateRoleInput {
  name: string;
  description: string;
}

export async function createRole(data: CreateRoleInput) {
  console.log("Submitted data", data);

  console.log("=====================================");
  if (db == undefined) return { error: "Failed to save role" };
  try {
    // Validate input data
    const validate = rolesSchema.safeParse(data);
    if (!validate.success) {
      return { error: "Invalid input data" };
    }

    // Insert user data into the database
    const response = await db
      .insert(roles)
      .values(data)
      .onConflictDoUpdate({
        target: roles?.id,
        set: {
          ...data,
        },
      })
      .returning({ id: roles.id });

    // if (response.length > 0) {
    //   // Revalidate path if the response is successful
    //   revalidatePath(`/dashboard/roles`);
    //   return {
    //     success: "Role created successfully",
    //     id: response[0].id,
    //   };
    // } else {
    //   return { error: "Failed to save role" };
    // }
  } catch (error: any) {
    console.error("Error creating role:", error);
    return { error: "Failed to create role" };
  }
}
