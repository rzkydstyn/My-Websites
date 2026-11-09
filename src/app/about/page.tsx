// src/app/about/page.tsx
import React from "react";
import Link from "next/link";
import { GraduationCap, Target, Compass, BookOpen, ArrowRight } from "lucide-react";
import { profileData } from "@/data/profile";

export default function AboutPage() {
  const { education, careerInterests, journeyTimeline } = profileData;

  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 py-16">
      {/* 1. HEADER & PROFILE NARRATIVE */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400">
            01 // Profile & Background
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            About Me
          </h1>
        </div>

        <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {profileData.name} — {profileData.headline}
          </h2>
          {profileData.aboutNarrative.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* 2. EDUCATION & CAREER INTERESTS */}
      <section className="grid gap-6 md:grid-cols-5">
        {/* Blok Pendidikan (3 Kolom) */}
        <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 md:col-span-3">
          <div className="flex items-center gap-2.5">
            <div className="rounded-lg bg-blue-500/10 p-2 text-blue-600 dark:text-blue-400">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase text-slate-400">02 // Education</p>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Academic Background
              </h2>
            </div>
          </div>

          <div className="space-y-1 border-l-2 border-blue-500 pl-4">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              {education.university}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{education.degree}</p>
            <div className="flex flex-wrap gap-3 pt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
              <span>Period: {education.period}</span>
              <span>•</span>
              <span>Focus / GPA: {education.gpa}</span>
            </div>
          </div>

          <div className="pt-2">
            <p className="mb-2.5 flex items-center gap-1.5 font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Relevant Coursework:</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {education.relevantCoursework.map((course) => (
                <span
                  key={course}
                  className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Blok Career Interests (2 Kolom) */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 md:col-span-2">
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-slate-400">03 // Target Roles</p>
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Career Interests
                </h2>
              </div>
            </div>

            <ul className="space-y-3">
              {careerInterests.map((role) => (
                <li
                  key={role}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-3 font-mono text-xs font-medium text-slate-800 dark:border-zinc-800/80 dark:bg-zinc-950 dark:text-slate-200"
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              <span>See how I apply these skills</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. PERSONAL DEVELOPMENT JOURNEY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-600 dark:text-indigo-400">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase text-slate-400">04 // Progression</p>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Personal Development Journey
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {journeyTimeline.map((step, index) => (
            <div
              key={step.phase}
              className="relative rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                STEP 0{index + 1}
              </span>
              <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100">
                {step.phase}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}