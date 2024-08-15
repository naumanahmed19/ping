"use server";

import { cookies } from "next/headers";

export async function setCookie(name: string, value: string) {
  cookies().set(name, value);
}
// export async function getTheme() {
//   console.log("theme", cookies().get("theme")?.value);
//   return cookies().get("theme")?.value || "theme-zinc";
// }

// export async function setTheme(theme: object) {
//   Object.entries(theme).forEach(([key, value]) => {
//     cookies().set(key, value);
//   });
// }

export async function getTheme() {
  console.log(cookies().get("theme")?.value);
  return {
    theme: cookies().get("theme")?.value || "zinc",
    radius: cookies().get("radius")?.value || "0.5",
    layout: cookies().get("layout")?.value || "card",
  };
}
