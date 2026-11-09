// src/app/experience/page.tsx
"use client";

import React, { useState } from "react";
import {
  Briefcase,
  FlaskConical,
  Award,
  ExternalLink,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { experienceData, researchData, certificatesData } from "@/data/experience";
import { cn, domainAccentMap } from "@/lib/utils";

type SectionTab = "all" | "experience" | "research" | "certificates";

export default function ExperienceAndResearchPage() {
  const [activeTab, setActiveTab] = useState<SectionTab>("all");

  return (
    <div className="mx-auto max-w-6xl space-y-14 px-6 py-16">
      {/* Header & Quick Section Switcher */}
      <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 dark:border-zinc-800 lg:flex-row lg:items-end">
        <div className="max-w-2xl space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Track Record & Publications
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Experience, Research & Credentials
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            Rekam jejak pengalaman organisasi, magang, eksperimen riset akademik di bidang Machine Learning & keamanan sistem, serta sertifikasi kompetensi teknis.
          </p>
        </div>

        {/* Tombol Filter Seksi */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "Show All" },
            { id: "experience", label: "Experience & Org" },
            { id: "research", label: "Research & Lab" },
            { id: "certificates", label: "Certificates" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as SectionTab)}
              className={cn(
                "rounded-lg px-3.5 py-2 font-mono text-xs font-medium transition",
                activeTab === tab.id
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-zinc-900"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-400"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* SEKSI 1: EXPERIENCE & ORGANIZATION */}
      {(activeTab === "all" || activeTab === "experience") && (
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Experience & Leadership
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-blue-600 dark:text-blue-400">
                      {exp.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                      {exp.organization}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 pt-2 text-sm text-slate-700 dark:text-slate-300">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SEKSI 2: ACADEMIC RESEARCH & ML EXPERIMENTS */}
      {(activeTab === "all" || activeTab === "research") && (
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <FlaskConical className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Academic Research & Technical Experiments
            </h2>
          </div>

          <div className="space-y-6">
            {researchData.map((res) => (
              <article
                key={res.id}
                className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {res.category}
                  </span>
                  <span className="font-mono text-xs text-slate-400">Year: {res.date}</span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-slate-100">
                  {res.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {res.abstract}
                </p>

                <div className="mt-5 grid gap-4 border-t border-slate-100 pt-5 dark:border-zinc-800 md:grid-cols-2">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase text-slate-400">
                      Methodology & Workflow
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {res.methodology.map((m) => (
                        <span
                          key={m}
                          className="rounded bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:bg-zinc-800 dark:text-slate-300"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-xs font-semibold uppercase text-slate-400">
                      Key Findings / Output
                    </p>
                    <p className="mt-1.5 text-sm text-slate-700 dark:text-slate-300">
                      {res.keyFindings}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <a
                    href={res.documentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    <span>View Research Documentation</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* SEKSI 3: CERTIFICATES & CREDENTIALS */}
      {(activeTab === "all" || activeTab === "certificates") && (
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Certifications & Credentials
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificatesData.map((cert) => {
              const accent = domainAccentMap[cert.domain];
              return (
                <div
                  key={cert.id}
                  className={cn(
                    "flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition dark:border-zinc-800 dark:bg-zinc-900/60",
                    accent.borderHover
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={cn(
                          "rounded border px-2 py-0.5 font-mono text-[10px] uppercase",
                          accent.badge
                        )}
                      >
                        {cert.domain}
                      </span>
                      <span className="font-mono text-xs text-slate-400">{cert.date}</span>
                    </div>

                    <h3 className="mt-3 font-semibold text-slate-900 dark:text-slate-100">
                      {cert.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                      Issued by {cert.issuer}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-3 dark:border-zinc-800">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}