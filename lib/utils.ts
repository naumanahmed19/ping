import { type ClassValue, clsx } from "clsx";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Display correct date titme  */
export function when(dataTime: string | number) {
  if (!dataTime) return "";
  return formatDistanceToNow(new Date(dataTime), {
    addSuffix: false,
  });
}

export function dt(dataTime: string | number) {
  if (!dataTime) return "";
  return formatDistanceToNow(new Date(dataTime ?? ""), {
    addSuffix: false,
  });
}

/** avatar fallbacks shothand */
export function af(name: string) {
  return name?.slice(0, 2);
}

export function themeClassName(theme: string) {
  return `theme-${theme}` || "zinc";
}
