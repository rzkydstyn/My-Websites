// src/components/projects/CaseStudyRenderer.tsx
import React from "react";
import {
  Database,
  BarChart3,
  Lightbulb,
  ShieldAlert,
  Terminal,
  FileCode,
  Cpu,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { ProjectItem } from "@/types/portfolio";
import { cn } from "@/lib/utils";

const SEVERITY_COLORS = {
  Low: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
  Medium: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  High: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  Critical: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
};

export function CaseStudyRenderer({ project }: { project: ProjectItem }) {
  // 1. TAMPILAN KHUSUS DATA ANALYTICS & DATA SCIENCE (Opsi A1)
  if (project.category === "data-science" && project.dataDetails) {
    const { datasetInfo, preprocessingSteps, metrics, visualizations, actionableInsights } =
      project.dataDetails;

    return (
      <div className="space-y-10 border-y border-slate-200 py-10 dark:border-zinc-800">
        <div className="flex items-center gap-2.5">
          <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Data Pipeline, Evaluation & Analytical Insights
          </h2>
        </div>

        {/* Metrik Utama */}
        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 dark:bg-blue-500/10"
            >
              <p className="font-mono text-xs uppercase text-blue-600 dark:text-blue-400">
                {m.label}
              </p>
              <p className="mt-2 font-mono text-2xl font-bold text-slate-900 dark:text-white">
                {m.value}
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{m.description}</p>
            </div>
          ))}
        </div>

        {/* Dataset & Preprocessing */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Dataset Specification
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {datasetInfo}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Data Cleaning & Preprocessing
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {preprocessingSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visualisasi Data */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 font-mono text-sm font-semibold text-slate-900 dark:text-slate-100">
            <BarChart3 className="h-4 w-4 text-blue-500" />
            <span>Data Visualizations & BI Dashboards</span>
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {visualizations.map((vis) => (
              <div
                key={vis.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <div className="flex h-52 flex-col items-center justify-center border-b border-slate-200 bg-slate-100 p-6 text-center dark:border-zinc-800 dark:bg-zinc-950">
                  <BarChart3 className="mb-2 h-8 w-8 text-blue-500/50" />
                  <p className="font-mono text-xs text-slate-500 dark:text-zinc-400">
                    [{vis.placeholderLabel}]
                  </p>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">{vis.title}</h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{vis.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actionable Insights */}
        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
          <h3 className="flex items-center gap-2 font-mono text-sm font-semibold text-blue-600 dark:text-blue-400">
            <Lightbulb className="h-4 w-4" />
            <span>Key Analytical Findings & Business Recommendations</span>
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
            {actionableInsights.map((insight, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // 2. TAMPILAN KHUSUS CYBERSECURITY (Opsi B2)
  if (project.category === "cybersecurity" && project.cyberDetails) {
    const { authorizationScope, threatModelOrScope, methodology, findings } = project.cyberDetails;

    return (
      <div className="space-y-10 border-y border-slate-200 py-10 dark:border-zinc-800">
        {/* Disclaimer Wajib Pengujian Berizin */}
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Authorized Testing & Ethical Scope Notice
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                {authorizationScope}
              </p>
            </div>
          </div>
        </div>

        {/* Scope & Methodology */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Threat Model & Target Scope
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {threatModelOrScope}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Security Assessment Methodology
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {methodology.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Terminal className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Daftar Temuan Kerentanan & Remediation Code Patch */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-slate-100">
            <FileCode className="h-5 w-5 text-emerald-500" />
            <span>Vulnerability Analysis & Defensive Remediation</span>
          </h3>

          {findings.map((finding, index) => (
            <div
              key={index}
              className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 dark:border-zinc-800">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                  Finding #{index + 1}: {finding.title}
                </h4>
                <span
                  className={cn(
                    "rounded border px-2.5 py-0.5 font-mono text-xs font-semibold",
                    SEVERITY_COLORS[finding.severity]
                  )}
                >
                  Severity: {finding.severity}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase text-slate-400">
                    Root Cause & Technical Analysis
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {finding.analysis}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold uppercase text-emerald-600 dark:text-emerald-400">
                    Remediation & Defense Strategy
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {finding.remediation}
                  </p>
                </div>
              </div>

              {finding.codePatch && (
                <div className="grid gap-4 pt-2 lg:grid-cols-2">
                  <div className="overflow-x-auto rounded-lg border border-red-500/20 bg-zinc-950 p-4">
                    <p className="mb-2 font-mono text-[11px] font-semibold text-red-400">
                      - VULNERABLE PATTERN
                    </p>
                    <pre className="font-mono text-xs leading-relaxed text-slate-300">
                      <code>{finding.codePatch.vulnerable}</code>
                    </pre>
                  </div>
                  <div className="overflow-x-auto rounded-lg border border-emerald-500/20 bg-zinc-950 p-4">
                    <p className="mb-2 font-mono text-[11px] font-semibold text-emerald-400">
                      + REMEDIATED SECURE PATCH
                    </p>
                    <pre className="font-mono text-xs leading-relaxed text-slate-300">
                      <code>{finding.codePatch.secure}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 3. TAMPILAN KHUSUS WEB & SOFTWARE DEVELOPMENT (Opsi C1)
  if (project.category === "web-dev" && project.webDetails) {
    const { keyFeatures, systemArchitecture, databaseDesign, uiUxHighlights } = project.webDetails;

    return (
      <div className="space-y-10 border-y border-slate-200 py-10 dark:border-zinc-800">
        <div className="flex items-center gap-2.5">
          <Cpu className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            System Architecture, Database Design & Features
          </h2>
        </div>

        {/* Fitur Utama */}
        <div className="grid gap-4 sm:grid-cols-3">
          {keyFeatures.map((feat) => (
            <div
              key={feat.title}
              className="rounded-xl border border-slate-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">{feat.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Arsitektur & Database ERD */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              System Architecture
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              {systemArchitecture.description}
            </p>
            <div className="mt-4 flex h-36 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
              <span className="font-mono text-xs text-slate-500">
                [{systemArchitecture.diagramPlaceholder}]
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Database Schema ({databaseDesign.ormOrDb})
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              {databaseDesign.schemaDescription}
            </p>
            <div className="mt-4 flex h-36 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
              <span className="font-mono text-xs text-slate-500">
                [{databaseDesign.erdPlaceholder}]
              </span>
            </div>
          </div>
        </div>

        {/* UI/UX Implementation Highlights */}
        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6">
          <h3 className="flex items-center gap-2 font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            <Layers className="h-4 w-4" />
            <span>UI/UX & Frontend Engineering Highlights</span>
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {uiUxHighlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return null;
}