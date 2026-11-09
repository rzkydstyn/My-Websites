// src/app/projects/[slug]/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CheckCircle2, AlertTriangle } from "lucide-react";
import { projectsData } from "@/data/projects";
import { CaseStudyRenderer } from "@/components/projects/CaseStudyRenderer";
import { cn, domainAccentMap } from "@/lib/utils";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const accent = domainAccentMap[project.category];

  return (
    <article className="mx-auto max-w-4xl space-y-12 px-6 py-16">
      {/* Navigasi Kembali */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-mono text-xs text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Projects Directory</span>
      </Link>

      {/* Header Proyek */}
      <header className="space-y-5 border-b border-slate-200 pb-8 dark:border-zinc-800">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={cn(
              "rounded border px-2.5 py-1 font-mono text-xs font-medium",
              accent.badge
            )}
          >
            {project.categoryLabel}
          </span>
          <span className="font-mono text-xs text-slate-400">Year: {project.date}</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          {project.title}
        </h1>

        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {project.overview}
        </p>

        {/* Tech Stack & Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 font-mono text-xs font-medium text-slate-800 transition hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-slate-200"
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
              <span>GitHub Repository</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-mono text-xs font-medium text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-zinc-900"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Bagian 1: Background & Problem Statement */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
            01 // Background
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {project.background}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
            02 // Problem Statement
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {project.problemStatement}
          </p>
        </div>
      </section>

      {/* Bagian 2: Objectives & General Methodology */}
      <section className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
        <div>
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
            03 // Objectives
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {project.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", accent.text)} />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 dark:border-zinc-800">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
            04 // Methodology & Implementation
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {project.methodologyGeneral}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.implementationSummary}
          </p>
        </div>
      </section>

      {/* Bagian 3: KOMPONEN DINAMIS SPESIFIK KATEGORI (Data / Cyber / Web) */}
      <CaseStudyRenderer project={project} />

      {/* Bagian 4: Results, Challenges & Lessons Learned */}
      <section className="space-y-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
            05 // Results Summary
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {project.resultsSummary}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <AlertTriangle className="h-4 w-4" />
              <span>Technical Challenges</span>
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {project.challenges.map((ch, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Lessons Learned
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {project.lessonsLearned.map((lesson, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}