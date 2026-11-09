// src/app/projects/page.tsx
"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { projectsData } from "@/data/projects";
import { DomainCategory } from "@/types/portfolio";
import { PortfolioCard } from "@/components/projects/PortfolioCard";
import { cn } from "@/lib/utils";

const FILTER_TABS: { id: "all" | DomainCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "data-science", label: "Data Analytics & Science" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "web-dev", label: "Web & Software Dev" },
];

export default function ProjectsDirectoryPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | DomainCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.shortDescription.toLowerCase().includes(query) ||
      project.techStack.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
      {/* Header Halaman */}
      <div className="max-w-2xl space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400">
           Portfolio Directory
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Multidisciplinary Engineering Projects
        </h1>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
          Kumpulan studi kasus dan implementasi teknis di bidang pengolahan data, analisis pertahanan keamanan siber, serta pengembangan aplikasi web modern.
        </p>
      </div>

      {/* Baris Filter Kategori & Pencarian */}
      <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 dark:border-zinc-800 md:flex-row md:items-center">
        <div className="flex flex-wrap gap-2">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={cn(
                "rounded-lg px-3.5 py-2 font-mono text-xs font-medium transition",
                activeCategory === tab.id
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-zinc-900"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-400"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Input Filter Teknologi / Kata Kunci */}
        <div className="relative w-full md:w-72">
          <Search className="
            pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400
          " />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by tech (e.g. Python, SQL)..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-4 font-mono text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-100"
          />
        </div>
      </div>

      {/* Grid Kartu Proyek */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} item={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center dark:border-zinc-800">
          <p className="font-mono text-sm text-slate-500">
            Tidak ada proyek yang cocok dengan filter pencarian Anda.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-3 font-mono text-xs text-blue-600 underline dark:text-blue-400"
          >
            Reset Semua Filter
          </button>
        </div>
      )}
    </div>
  );
}