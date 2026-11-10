// src/components/layout/ThemeControl.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesWrapper, useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function PortfolioThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesWrapper
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesWrapper>
  );
}

export function ThemeSwitchButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-md border border-slate-200 dark:border-zinc-800" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Ubah tema tampilan"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-200 dark:hover:bg-zinc-800"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700" />
      )}
    </button>
  );
}

function useState<T>(initial: T) {
  return React.useState<T>(initial);
}