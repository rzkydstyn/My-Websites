// src/components/projects/PortfolioCard.tsx
import React from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Layers } from "lucide-react";
import { ProjectItem } from "@/types/portfolio";
import { cn, domainAccentMap } from "@/lib/utils";

export function PortfolioCard({ item }: { item: ProjectItem }) {
  const styleTheme = domainAccentMap[item.category];

  return (
    <article
      className={cn(
        "group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 dark:border-zinc-800 dark:bg-zinc-900/70",
        styleTheme.borderHover
      )}
    >
      <div>
        {/* Visual Thumbnail Placeholder & Badge Kategori */}
        <div className="relative mb-4 flex h-44 w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-slate-200/70 bg-slate-100 dark:border-zinc-800 dark:bg-zinc-950">
          <span
            className={cn(
              "absolute left-3 top-3 rounded border px-2.5 py-1 font-mono text-[11px] font-medium",
              styleTheme.badge
            )}
          >
            {item.categoryLabel}
          </span>
          <Layers className={cn("mb-2 h-8 w-8 opacity-40", styleTheme.text)} />
          <span className="px-4 text-center font-mono text-[11px] text-slate-400 dark:text-zinc-500">
            [{item.thumbnailPlaceholder}]
          </span>
        </div>

        {/* Judul & Deskripsi Singkat */}
        <h3 className="text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
          <Link href={`/projects/${item.slug}`}>{item.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {item.shortDescription}
        </p>
      </div>

      <div className="mt-5">
        {/* Tech Stack Pills */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-700 dark:bg-zinc-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Baris Tombol Aksi */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-3.5 dark:border-zinc-800/80">
          <Link
            href={`/projects/${item.slug}`}
            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-slate-900 hover:underline dark:text-slate-100"
          >
            <span>Read Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            {item.liveDemoUrl && (
              <a
                href={item.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Live Demo"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}