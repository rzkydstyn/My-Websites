// src/app/page.tsx
"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import * as icons from "lucide-react";
import { profileData } from "@/data/profile";
import { skillsData } from "@/data/skills";
import { projectsData } from "@/data/projects";
import { DomainCategory } from "@/types/portfolio";
import * as cardMod from "@/components/projects/PortfolioCard";
import { cn, domainAccentMap } from "@/lib/utils";

const homeUi = {
  Link: NextLink,
  ProjectCard: cardMod.PortfolioCard,
};

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  "data-science": <icons.Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
  "cybersecurity": <icons.ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
  "web-dev": <icons.Code2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />,
};

export default function HomePage() {
  const [selectedDomain, setSelectedDomain] = useState<"all" | DomainCategory>("all");

  const visibleProjects = projectsData
    .filter((p) => p.featured)
    .filter((p) => (selectedDomain === "all" ? true : p.category === selectedDomain));

  return (
    <div className="mx-auto max-w-6xl space-y-24 px-6 py-16">
      {/* 1. HERO SECTION */}
      <section className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 font-mono text-xs text-slate-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-300">
          <icons.Sparkles className="h-3.5 w-3.5 text-blue-500" />
          <span>{profileData.statusBadge}</span>
        </div>

        <div className="space-y-3">
          <p className="font-mono text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {profileData.name}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl sm:leading-[1.15]">
            {profileData.headline}
          </h1>
        </div>

        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          {profileData.shortIntro}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <homeUi.Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-zinc-950 dark:hover:bg-slate-200"
          >
            <span>Explore Projects</span>
            <icons.ArrowRight className="h-4 w-4" />
          </homeUi.Link>
          <homeUi.Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-200 dark:hover:bg-zinc-800"
          >
            <icons.Mail className="h-4 w-4" />
            <span>Contact Me</span>
          </homeUi.Link>
        </div>
      </section>

      {/* 2. THREE CORE PILLARS (BENTO MATRIX) */}
      <section className="space-y-6">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
              01 // Core Competencies
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
              Three-Pillar Engineering Focus
            </h2>
          </div>
          {selectedDomain !== "all" && (
            <button
              type="button"
              onClick={() => setSelectedDomain("all")}
              className="font-mono text-xs text-blue-600 underline dark:text-blue-400"
            >
              Reset Filter (Show All Pillars)
            </button>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {skillsData.map((pillar) => {
            const accent = domainAccentMap[pillar.id];
            const isSelected = selectedDomain === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedDomain(isSelected ? "all" : pillar.id)}
                className={cn(
                  "cursor-pointer rounded-xl border p-6 transition-all",
                  isSelected
                    ? "border-slate-900 bg-slate-50 dark:border-slate-100 dark:bg-zinc-900"
                    : "border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50",
                  accent.borderHover
                )}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={cn("rounded-lg p-2.5", accent.bgSubtle)}>
                    {PILLAR_ICONS[pillar.id]}
                  </div>
                  <span className={cn("rounded border px-2 py-0.5 font-mono text-[10px]", accent.badge)}>
                    {isSelected ? "ACTIVE FILTER" : "CLICK TO FOCUS"}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED PROJECTS */}
      <section className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
              02 // Case Studies
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
              Featured Projects
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Domains" },
              { id: "data-science", label: "Data & BI" },
              { id: "cybersecurity", label: "Cybersecurity" },
              { id: "web-dev", label: "Web Dev" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedDomain(tab.id as "all" | DomainCategory)}
                className={cn(
                  "rounded-md px-3 py-1.5 font-mono text-xs transition",
                  selectedDomain === tab.id
                    ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-zinc-900"
                    : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-400"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {visibleProjects.map((project) => (
            <homeUi.ProjectCard key={project.id} item={project} />
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL SKILLS MATRIX (A1, B2, C1) */}
      <section className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
            03 // Technical Arsenal
          </p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Categorized Skills & Tools
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillsData.map((group) => {
            const accent = domainAccentMap[group.id];
            return (
              <div
                key={group.id}
                className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <div className="mb-4 border-b border-slate-100 pb-4 dark:border-zinc-800">
                  <span className={cn("font-mono text-xs font-semibold", accent.text)}>
                    {group.subtitle}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.subcategories.map((sub) => (
                    <div key={sub.name}>
                      <p className="mb-2 font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                        {sub.name}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {sub.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/80 sm:p-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Ready to Contribute to Data, Security, or Engineering Teams
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
          Terbuka untuk kesempatan Internship, proyek riset kolaboratif, maupun diskusi teknis seputar Data Analytics, Defensive Security, dan Full-Stack Web Development.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <homeUi.Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Get In Touch
          </homeUi.Link>
          <homeUi.Link
            href="/projects"
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 dark:border-zinc-700 dark:text-slate-200"
          >
            View All Projects
          </homeUi.Link>
        </div>
      </section>
    </div>
  );
}