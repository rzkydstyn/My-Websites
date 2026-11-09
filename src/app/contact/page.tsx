// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { Mail, MapPin, Copy, Check, ExternalLink, Send, FileText } from "lucide-react";
import { profileData } from "@/data/profile";

export default function ContactPage() {
  const { contacts } = profileData;
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contacts.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback jika clipboard tidak diizinkan browser
    }
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contacts.email}?subject=${encodeURIComponent(
      subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-6 py-16">
      {/* Header */}
      <div className="max-w-2xl space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Get In Touch
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Let&apos;s Connect & Collaborate
        </h1>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
          Terbuka untuk peluang Internship di bidang Data Analytics/Science, Cybersecurity, maupun Software/Web Engineering. Silakan hubungi saya melalui kanal resmi di bawah ini.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Kiri: Kanal Kontak Langsung (3 Kolom) */}
        <div className="space-y-4 lg:col-span-3">
          {/* Kartu Email dengan Fitur Copy */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/10 p-2.5 text-blue-600 dark:text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase text-slate-400">Primary Email</p>
                  <p className="mt-0.5 font-mono text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {contacts.email}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-300 dark:hover:bg-zinc-800"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Kartu LinkedIn & GitHub */}
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition hover:border-blue-500/50 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase text-slate-400">LinkedIn</span>
                <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-blue-500" />
              </div>
              <p className="mt-4 font-semibold text-slate-900 dark:text-slate-100">
                Professional Network
              </p>
              <p className="mt-1 truncate font-mono text-xs text-slate-500">{contacts.linkedin}</p>
            </a>

            <a
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition hover:border-indigo-500/50 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase text-slate-400">GitHub</span>
                <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-indigo-500" />
              </div>
              <p className="mt-4 font-semibold text-slate-900 dark:text-slate-100">
                Code Repositories
              </p>
              <p className="mt-1 truncate font-mono text-xs text-slate-500">{contacts.github}</p>
            </a>
          </div>

          {/* Lokasi & Unduh CV */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
            <div className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span>Location: {contacts.location}</span>
            </div>

            <a
              href={contacts.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              <FileText className="h-4 w-4" />
              <span>Download Full Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Kanan: Formulir Pesan Cepat (2 Kolom) */}
        <form
          onSubmit={handleMailtoSubmit}
          className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 lg:col-span-2"
        >
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Send a Direct Message
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Formulir ini akan langsung menyiapkan draf email ke aplikasi email Anda.
          </p>

          <div>
            <label className="block font-mono text-xs font-medium text-slate-700 dark:text-slate-300">
              Subject / Role Opportunity
            </label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Data Analyst Internship Opportunity"
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-100"
            />
          </div>

          <div>
            <label className="block font-mono text-xs font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Halo, saya tertarik mendiskusikan..."
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-100"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 font-mono text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-zinc-900 dark:hover:bg-slate-200"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Compose Email</span>
          </button>
        </form>
      </div>
    </div>
  );
}