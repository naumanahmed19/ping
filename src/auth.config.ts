import { NextAuthConfig } from "next-auth";
import {
  apiAuthRoutes,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  protectedRoutes,
  publicRoutes,
} from "./routes";

import { SignInSchema } from "@/lib/schemas/auth.schema";
import bcryptjs from "bcryptjs";
import { eq } from "drizzle-orm";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { db } from "./db/db";
import { users } from "./db/schema";

async function getUser(email: string) {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });
    return user;
  } catch (error: any) {
    throw new Error("Failed to fetch user.");
  }
}
export const authConfig = {
  pages: {
    signIn: "/login",
  },
  events: {
    async linkAccount({ user }) {
      await db
        .update(users)
        .set({ emailVerified: new Date() })
        .where(eq(users.email, user?.email as string));
    },
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;

      const isApiAuthRoute = pathname.startsWith(apiAuthRoutes);
      const isPublicRoute = publicRoutes.some((route) => {
        const regexPattern = `^${route.replace(/:\w+/g, "[^/]+")}$`;
        const regex = new RegExp(regexPattern);
        return regex.test(nextUrl.pathname);
      });
      const isAuthRoute = authRoutes.includes(pathname);
      const isProtectedRoute = protectedRoutes.includes(pathname);

      if (isApiAuthRoute) {
        return false;
      }

      if (isAuthRoute) {
        if (isLoggedIn) {
          return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return true;
      }

      if (!isLoggedIn && (isProtectedRoute || !isPublicRoute)) {
        return Response.redirect(new URL("/login", nextUrl));
      }

      return true;
    },
  },
  providers: [
    Google,
    Credentials({
      async authorize(credentials): Promise<any> {
        const parsedCredentials = SignInSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcryptjs.compare(
            password,
            user.password,
          );

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
