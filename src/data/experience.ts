// src/data/experience.ts
import { ExperienceItem, ResearchItem, CertificateItem } from "@/types/portfolio";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "[Placeholder Role — Misal: Head of Department / Core Member]",
    organization: "[Placeholder Organisasi — Misal: Himpunan Mahasiswa Teknik Informatika / Komunitas Developer]",
    type: "Organization",
    period: "[Placeholder: 2025 — 2026]",
    description:
      "Memimpin inisiatif kolaborasi eksternal, pengembangan program kerja teknologi, serta koordinasi lintas divisi.",
    highlights: [
      "Mengelola program kolaborasi strategis dan kunjungan industri teknologi.",
      "Menginisiasi digitalisasi sistem administrasi atau pembayaran kegiatan organisasi.",
    ],
  },
  {
    id: "exp-2",
    role: "[Placeholder Role — Misal: Data / Software Engineering Intern]",
    organization: "[Placeholder Nama Perusahaan / Instansi]",
    type: "Internship",
    period: "[Placeholder: Bulan Tahun — Bulan Tahun]",
    description:
      "Placeholder untuk pengalaman magang atau proyek industri yang pernah atau sedang Anda jalani.",
    highlights: [
      "Berpartisipasi dalam pengolahan dataset internal dan pembuatan laporan visualisasi berkala.",
      "Membantu pengujian fungsionalitas dan keamanan modul aplikasi web.",
    ],
  },
];

export const researchData: ResearchItem[] = [
  {
    id: "res-1",
    title: "[Placeholder Research 01 — Misal: Analisis Perbandingan Algoritma Machine Learning untuk Deteksi Phishing / Sentimen]",
    category: "Academic Research",
    date: "2026",
    abstract:
      "Placeholder abstrak riset akademik: Penelitian ini mengeksplorasi ekstraksi fitur dan evaluasi performa algoritma klasifikasi beserta interpretabilitas model (Explainable AI) pada dataset dunia nyata.",
    methodology: ["Data Preprocessing", "Feature Extraction", "Model Training & Cross-Validation", "Evaluation Metrics Analysis"],
    keyFindings:
      "[Placeholder Temuan] Menunjukkan perbandingan akurasi, presisi, dan efisiensi komputasi antar metode yang diuji.",
    documentUrl: "#",
  },
  {
    id: "res-2",
    title: "[Placeholder Research 02 — Misal: Eksperimen Keamanan Aplikasi Web & Analisis Log Anomali]",
    category: "Technical Publication",
    date: "2026",
    abstract:
      "Placeholder publikasi teknis atau dokumentasi eksperimen laboratorium mengenai pola serangan aplikasi web dan teknik mitigasinya.",
    methodology: ["Traffic Capture", "Signature Analysis", "Rule Configuration", "Patch Benchmarking"],
    keyFindings:
      "[Placeholder Temuan] Merumuskan konfigurasi pertahanan optimal untuk mereduksi false-positive pada pemantauan sistem.",
    documentUrl: "#",
  },
];

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-1",
    title: "[Placeholder Certificate 01 — Data Analytics / SQL / BI]",
    issuer: "[Placeholder Penerbit — Misal: Google / Coursera / Dicoding]",
    date: "2026",
    credentialUrl: "#",
    domain: "data-science",
  },
  {
    id: "cert-2",
    title: "[Placeholder Certificate 02 — Cybersecurity / Network Defense]",
    issuer: "[Placeholder Penerbit — Misal: Cisco / CompTIA / EC-Council]",
    date: "2026",
    credentialUrl: "#",
    domain: "cybersecurity",
  },
  {
    id: "cert-3",
    title: "[Placeholder Certificate 03 — Full-Stack Web Development]",
    issuer: "[Placeholder Penerbit — Misal: Meta / Vercel / Udemy]",
    date: "2026",
    credentialUrl: "#",
    domain: "web-dev",
  },
];