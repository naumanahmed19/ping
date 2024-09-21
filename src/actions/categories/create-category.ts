"use server";

import { categorySchema } from "@/app/dashboard/categories/_components/fields";
import { db } from "@/db/db";
import { categories } from "@/db/schema";

export interface CreateUserInput {
  title: string;
  parentId: number | null;
}

export async function createCategory(data: CreateUserInput) {
  try {
    // Validate input data
    const validate = categorySchema.safeParse(data);
    if (!validate.success) {
      throw new Error("Invalid input data");
    }

    console.log("Creating category", data);

    // Insert user data into the database
    const response = await db
      .insert(categories)
      .values(data)
      .onConflictDoUpdate({
        target: categories.id,
        set: {
          ...data,

          // Add other fields you want to update
        },
      })
      .returning({ categoryId: categories.id });

    // await db.insert(profiles).values({ userId: newUser[0].userId }).execute();

    return {
      success: "Category created successfully",
      categoryId: response[0].categoryId,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to create user", error);
  }
}
