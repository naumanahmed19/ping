export const publicRoutes = [
  "/",

  "/explore",
  "/popular",
  "/posts/all",
  "/posts/:id",
  "/communities/:name", // Add this pattern to match dynamic routes
];

export const protectedRoutes = ["/posts/create", "/communities/create"];

export const authRoutes = ["/login", "/signup", "/forgot-password"];

export const apiAuthRoutes = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/";
