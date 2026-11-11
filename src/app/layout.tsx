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

// Bagian metadata di src/app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: `${profileData.name} — Multidisciplinary Informatics Portfolio`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.headline,
  keywords: [
    "Muhammad Rizky Destyanto",
    "Informatics Engineering",
    "UIN Syarif Hidayatullah Jakarta",
    "Data Science Portfolio",
    "Data Analyst Intern",
    "Cybersecurity Portfolio",
    "Full-Stack Web Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: profileData.name, url: profileData.contacts.github }],
  openGraph: {
    title: `${profileData.name} — Multidisciplinary Informatics Engineer`,
    description: profileData.shortIntro,
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Bagian return di dalam src/app/layout.tsx
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${sansFont.variable} ${monoFont.variable} min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900 antialiased dark:bg-zinc-950 dark:text-slate-50`}
      >
        <layoutUi.ThemeWrapper>
          <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-zinc-950 dark:text-slate-50">
            <layoutUi.TopNavbar />
            <main className="w-full flex-1 bg-slate-50 dark:bg-zinc-950">{children}</main>
            <layoutUi.Footer />
          </div>
        </layoutUi.ThemeWrapper>
      </body>
    </html>
  );
}