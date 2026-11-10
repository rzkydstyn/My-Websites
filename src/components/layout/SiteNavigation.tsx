// src/components/layout/SiteNavigation.tsx
"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import * as icons from "lucide-react";
import { profileData } from "@/data/profile";
import * as themeCtrl from "./ThemeControl";
import { cn } from "@/lib/utils";

const navUi = {
  Link: NextLink,
  ThemeSwitch: themeCtrl.ThemeSwitchButton,
};

const MAIN_MENU = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Experience & Research", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

export function TopNavigationBar() {
  const currentPath = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md transition-colors dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Identitas Brand / Inisial dengan warna tegas di Light & Dark Mode */}
        <navUi.Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-zinc-900">
            <icons.Terminal className="h-4 w-4" />
          </span>
          <span>rzkydstyn.DEV</span>
        </navUi.Link>

        {/* Menu Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {MAIN_MENU.map((item) => {
            const isActive =
              item.path === "/" ? currentPath === "/" : currentPath.startsWith(item.path);
            return (
              <navUi.Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "font-semibold text-blue-600 dark:text-blue-400"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                )}
              >
                {item.label}
              </navUi.Link>
            );
          })}
        </nav>

        {/* Aksi Kanan: Toggle Tema & Tombol Resume */}
        <div className="hidden items-center gap-3 md:flex">
          <navUi.ThemeSwitch />
          <a
            href={profileData.contacts.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3.5 py-2 font-mono text-xs font-medium text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-zinc-950 dark:hover:bg-slate-200"
          >
            <icons.FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Tombol Hamburger Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <navUi.ThemeSwitch />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Buka menu navigasi"
            className="rounded-md border border-slate-200 p-2 text-slate-700 dark:border-zinc-800 dark:text-slate-200"
          >
            {mobileOpen ? <icons.X className="h-5 w-5" /> : <icons.Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Drawer Navigasi Mobile */}
      {mobileOpen && (
        <div className="border-b border-slate-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <div className="flex flex-col space-y-3">
            {MAIN_MENU.map((item) => (
              <navUi.Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className="py-1 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                {item.label}
              </navUi.Link>
            ))}
            <a
              href={profileData.contacts.resumeUrl}
              className="inline-flex w-fit items-center gap-2 rounded-md bg-slate-900 px-4 py-2 font-mono text-xs text-white dark:bg-slate-100 dark:text-zinc-900"
            >
              <icons.FileText className="h-3.5 w-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function BottomFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 transition-colors dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div>
          <p className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100">
            {profileData.name}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Multidisciplinary Informatics Engineering Portfolio — Data, Security & Web.
          </p>
        </div>
        <div className="flex items-center gap-5 font-mono text-xs text-slate-600 dark:text-slate-400">
          <a
            href={profileData.contacts.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 hover:underline dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href={profileData.contacts.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 hover:underline dark:hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profileData.contacts.email}`}
            className="hover:text-slate-900 hover:underline dark:hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}