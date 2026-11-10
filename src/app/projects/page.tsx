// src/app/projects/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
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

  // Hitung jumlah proyek di masing-masing kategori
  const categoryCounts = useMemo(() => {
    return {
      all: projectsData.length,
      "data-science": projectsData.filter((p) => p.category === "data-science").length,
      cybersecurity: projectsData.filter((p) => p.category === "cybersecurity").length,
      "web-dev": projectsData.filter((p) => p.category === "web-dev").length,
    };
  }, []);

  // Logika filter kategori + pencarian kata kunci
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesTitle = project.title.toLowerCase().includes(query);
      const matchesDesc = project.shortDescription.toLowerCase().includes(query);
      const matchesOverview = project.overview.toLowerCase().includes(query);
      const matchesCategoryLabel = project.categoryLabel.toLowerCase().includes(query);
      const matchesTech = project.techStack.some((t) =>
        t.toLowerCase().includes(query)
      );

      return (
        matchesCategory &&
        (matchesTitle || matchesDesc || matchesOverview || matchesCategoryLabel || matchesTech)
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
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
      <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 dark:border-zinc-800 lg:flex-row lg:items-center">
        {/* Tombol Kategori */}
        <div className="flex flex-wrap gap-2">
          {FILTER_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            const count = categoryCounts[tab.id];

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={cn(
                  "inline-flex cursor-pointer items-center gap-2 rounded-lg px-3.5 py-2 font-mono text-xs font-medium transition-all",
                  isActive
                    ? "bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-zinc-900"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-400 dark:hover:border-zinc-700 dark:hover:text-slate-200"
                )}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px]",
                    isActive
                      ? "bg-slate-700 text-slate-100 dark:bg-zinc-300 dark:text-zinc-900"
                      : "bg-slate-100 text-slate-500 dark:bg-zinc-800 dark:text-slate-400"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Input Filter Teknologi / Kata Kunci */}
        <div className="relative w-full lg:w-80">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by tech (e.g. Python, SQL)..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-9 font-mono text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-100"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Status Info Filter Aktif */}
      <div className="flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400">
        <span>
          Showing <strong>{filteredProjects.length}</strong> of{" "}
          <strong>{projectsData.length}</strong> projects
          {activeCategory !== "all" &&
            ` in ${FILTER_TABS.find((t) => t.id === activeCategory)?.label}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </span>

        {(activeCategory !== "all" || searchQuery !== "") && (
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Reset filter
          </button>
        )}
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
          <p className="font-mono text-sm text-slate-500 dark:text-slate-400">
            Tidak ada proyek yang cocok dengan kriteria pencarian &quot;{searchQuery}&quot;.
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