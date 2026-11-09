// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper warna aksen semantik sesuai Phase 3
export const domainAccentMap = {
  "data-science": {
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    borderHover: "hover:border-blue-500/60",
    text: "text-blue-600 dark:text-blue-400",
    bgSubtle: "bg-blue-500/5",
  },
  "cybersecurity": {
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    borderHover: "hover:border-emerald-500/60",
    text: "text-emerald-600 dark:text-emerald-400",
    bgSubtle: "bg-emerald-500/5",
  },
  "web-dev": {
    badge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    borderHover: "hover:border-indigo-500/60",
    text: "text-indigo-600 dark:text-indigo-400",
    bgSubtle: "bg-indigo-500/5",
  },
} as const;