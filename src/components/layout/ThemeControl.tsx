// src/components/layout/ThemeControl.tsx
"use client";

import * as React from "react";
import * as nextThemes from "next-themes";
import * as icons from "lucide-react";

export function PortfolioThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <nextThemes.ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </nextThemes.ThemeProvider>
  );
}

export function ThemeSwitchButton() {
  const { theme, setTheme } = nextThemes.useTheme();
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <div className="h-9 w-9 rounded-md border border-slate-200 dark:border-zinc-800" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Ubah tema tampilan"
      className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-200 dark:hover:bg-zinc-800"
    >
      {isDark ? (
        <icons.Sun className="h-4 w-4 text-amber-400" />
      ) : (
        <icons.Moon className="h-4 w-4 text-slate-700" />
      )}
    </button>
  );
}