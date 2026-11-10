// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import * as themeCtrl from "@/components/layout/ThemeControl";
import * as siteNav from "@/components/layout/SiteNavigation";
import { profileData } from "@/data/profile";

const layoutUi = {
  ThemeWrapper: themeCtrl.PortfolioThemeWrapper,
  TopNavbar: siteNav.TopNavigationBar,
  Footer: siteNav.BottomFooter,
};

const sansFont = Inter({ subsets: ["latin"], variable: "--font-sans" });
const monoFont = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: `${profileData.name} — Multidisciplinary Informatics Portfolio`,
  description: profileData.headline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${sansFont.variable} ${monoFont.variable} min-h-screen bg-slate-50 font-sans text-slate-900 antialiased dark:bg-zinc-950 dark:text-slate-50`}
      >
        <layoutUi.ThemeWrapper>
          <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-zinc-950 dark:text-slate-50">
            <layoutUi.TopNavbar />
            <main className="flex-1 bg-slate-50 dark:bg-zinc-950">{children}</main>
            <layoutUi.Footer />
          </div>
        </layoutUi.ThemeWrapper>
      </body>
    </html>
  );
}