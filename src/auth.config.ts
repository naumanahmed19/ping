export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHomePage = nextUrl.pathname === "/";
      const isOnLoginPage = nextUrl.pathname === "/login";

      if (isLoggedIn && isOnLoginPage) {
        // Redirect authenticated users from login page to home page
        return Response.redirect(new URL("/", nextUrl));
      }

      if (!isLoggedIn && !isOnHomePage && !isOnLoginPage) {
        // Redirect unauthenticated users to login page if they are not on the home page or login page
        return Response.redirect(new URL("/login", nextUrl));
      }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
