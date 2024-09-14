"use server";

import { db } from "@/db/db";
import { users } from "@/db/schema";
import { SignUpSchema } from "@/lib/schemas/auth.schema";
import bcryptjs from "bcryptjs";
import { eq } from "drizzle-orm";

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export async function signup(data: CreateUserInput) {
  try {
    // Validate input data
    const validate = SignUpSchema.safeParse(data);
    if (!validate.success) {
      throw new Error("Invalid input data");
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(data.password, 10);
    data.password = hashedPassword;

    //check if email already exists
    const userExists = await db.query.users.findFirst({
      where: eq(users.email, data.email),
    });

    if (userExists) {
      return { error: "Email is already used" };
    }

    // Insert user data into the database
    const newUser = await db
      .insert(users)
      .values(data)
      .onConflictDoNothing({ target: users.email })
      .returning({ userId: users.id });

    // await db.insert(profiles).values({ userId: newUser[0].userId }).execute();

    return { success: "User created successfully", userId: newUser[0].userId };

    return { success: "User created successfully" };
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to create user", error);
  }
}
