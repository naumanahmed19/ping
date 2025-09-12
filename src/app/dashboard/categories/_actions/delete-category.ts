"use server";

import { useAuth } from "@/actions/use-auth";
import { db } from "@/db/db";
import { categories } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function deleteCategory(id: number) {
  const { user } = await useAuth();

  if (!user) {
    throw new Error("Unauthorized");
  }

  try {
    // Delete the category from the database
    const response = await db
      .delete(categories)
      .where(eq(categories.id, id))
      .returning({ deletedId: categories.id });

    if (response.length === 0) {
      throw new Error("Category not found");
    }

    return {
      success: "Category deleted successfully",
      deletedId: response[0].deletedId,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to delete category: " + error.message);
  }
}
