// src/data/experience.ts
import { ExperienceItem, ResearchItem, CertificateItem } from "@/types/portfolio";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-himti-head",
    role: "Head of External Department (Kepala Departemen Eksternal)",
    organization: "HIMTI UIN Syarif Hidayatullah Jakarta",
    type: "Organization",
    period: "August 2026 — Present",
    description:
      "Memimpin Departemen Hubungan Eksternal sebagai representasi utama HIMTI dalam membangun kemitraan strategis, hubungan masyarakat, dan dampak sosial berbasis teknologi.",
    highlights: [
      "Strategic Leadership: Memimpin strategi kemitraan eksternal dan public relations organisasi mahasiswa Teknik Informatika.",
      "Community & Social Impact: Mengawasi dan mengeksekusi program pengabdian masyarakat yang menerapkan ilmu komputer bagi kemanfaatan publik.",
      "Partnership & Collaboration: Membangun jejaring kolaborasi dengan institusi eksternal, komunitas teknologi, dan pemangku kepentingan umum.",
    ],
  },
  {
    id: "exp-himped-chair",
    role: "Committee Chair (Ketua Pelaksana) — HIMPED X MELATI 26",
    organization: "HIMTI UIN Syarif Hidayatullah Jakarta",
    type: "Organization",
    period: "February 2026",
    description:
      "Memimpin seluruh jajaran kepanitiaan mulai dari tahap perencanaan strategis hingga pelaksanaan program kolaboratif HIMPED X MELATI 2026.",
    highlights: [
      "Mengelola distribusi tugas, timeline persiapan, dan eksekusi operasional kegiatan secara menyeluruh.",
      "Mengkoordinasikan komunikasi lintas divisi untuk memastikan seluruh rangkaian acara berjalan efektif dan tepat sasaran.",
    ],
  },
  {
    id: "exp-himti-social",
    role: "Staff of Social Affairs Division, External Department",
    organization: "HIMTI UIN Syarif Hidayatullah Jakarta",
    type: "Organization",
    period: "June 2025 — July 2026",
    description:
      "Mendukung perancangan dan pelaksanaan program-program sosial kemasyarakatan serta kolaborasi eksternal yang diselenggarakan oleh HIMTI.",
    highlights: [
      "Berkolaborasi dalam tim untuk mengoordinasikan aktivitas program sosial dan inisiatif organisasi.",
      "Memfasilitasi komunikasi serta koordinasi dengan pihak internal maupun mitra eksternal.",
    ],
  },
  {
    id: "exp-binary-studibanding",
    role: "Event Staff — Binary 25 & Studi Banding 25",
    organization: "HIMTI UIN Syarif Hidayatullah Jakarta",
    type: "Organization",
    period: "December 2025",
    description:
      "Berperan dalam divisi acara untuk mendukung persiapan konsep, teknis kegiatan, dan kelancaran eksekusi program Binary 25 serta Studi Banding 25.",
    highlights: [
      "Menyusun persiapan teknis acara dan berkolaborasi lintas divisi agar seluruh agenda berjalan sesuai rencana.",
    ],
  },
  {
    id: "exp-iot-coord",
    role: "Equipment Division Coordinator — IOT 25",
    organization: "HIMTI UIN Syarif Hidayatullah Jakarta",
    type: "Organization",
    period: "October 2025 — November 2025",
    description:
      "Mengkoordinasikan kebutuhan, persiapan, dan distribusi perlengkapan selama rangkaian program pelatihan organisasi IOT 2025.",
    highlights: [
      "Mengelola inventaris peralatan dan memastikan kesiapan sarana pendukung di setiap sesi kegiatan.",
      "Bekerja sama dengan tim operasional untuk menyelesaikan kebutuhan teknis di lapangan secara cepat.",
    ],
  },
  {
    id: "exp-devup-coord",
    role: "Logistics Division Coordinator — DEV-UP HIMTI 25",
    organization: "HIMTI UIN Syarif Hidayatullah Jakarta",
    type: "Organization",
    period: "October 2025",
    description:
      "Bertanggung jawab atas perencanaan dan kesiapan logistik untuk mendukung kelancaran acara pengembangan teknologi DEV-UP HIMTI 2025.",
    highlights: [
      "Mengatur perencanaan kebutuhan logistik, inventaris peralatan, dan kesiapan operasional lintas divisi.",
    ],
  },
  {
    id: "exp-kir-head",
    role: "Head of Scientific Writing Extracurricular Program",
    organization: "SMAN 1 Bojonggede",
    type: "Academic",
    period: "August 2022 — July 2023",
    description:
      "Memimpin kegiatan ekstrakurikuler Karya Ilmiah Remaja (KIR) dan mengoordinasikan pengembangan riset serta penulisan ilmiah siswa.",
    highlights: [
      "Merancang agenda pembelajaran metodologi ilmiah dan proyek penulisan kolaboratif.",
      "Membimbing anggota dalam menyusun struktur karya tulis ilmiah yang sistematis dan analitis.",
    ],
  },
];

export const researchData: ResearchItem[] = [
  {
    id: "res-data-ml",
    title: "Exploratory Data Analysis & Predictive Regression Modeling on Real-World Datasets",
    category: "ML Experiment",
    date: "2025 — 2026",
    abstract:
      "Eksperimen analitik data dan pemodelan Machine Learning menggunakan Python (Pandas, NumPy, Scikit-learn) yang diterapkan pada evaluasi faktor performa akademik serta pergerakan data historis pasar saham teknologi.",
    methodology: [
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Feature Engineering",
      "Regression & Statistical Visualization",
    ],
    keyFindings:
      "Mengintegrasikan alur pembersihan data terstruktur dan evaluasi metrik regresi untuk menghasilkan insight yang dapat divalidasi secara kuantitatif.",
    documentUrl: "https://github.com/rzkydstyn",
  },
  {
    id: "res-scientific-writing",
    title: "Scientific Writing & Structured Research Methodology Initiatives",
    category: "Academic Research",
    date: "2022 — Present",
    abstract:
      "Pengembangan kerangka berpikir ilmiah, penyusunan rumusan masalah, serta dokumentasi riset teknologi mulai dari program Karya Ilmiah hingga studi akademik Teknik Informatika.",
    methodology: [
      "Problem Formulation",
      "Literature Review",
      "Quantitative Data Analysis",
      "Technical Documentation",
    ],
    keyFindings:
      "Membangun fondasi komunikasi teknis dan penulisan laporan analitis yang terstruktur untuk mendukung proyek Data Science dan rekayasa perangkat lunak.",
    documentUrl: "https://linkedin.com/in/mrizkydestyanto",
  },
];

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-data",
    title: "Data Science & Exploratory Data Analysis Portfolio Projects",
    issuer: "Python, Pandas, NumPy & Scikit-learn Implementation",
    date: "2026",
    credentialUrl: "https://github.com/rzkydstyn/student-performance-analysis",
    domain: "data-science",
  },
  {
    id: "cert-cyber",
    title: "Cyber Security & Computer Architecture Academic Competency",
    issuer: "Informatics Engineering — UIN Syarif Hidayatullah Jakarta",
    date: "2025 — 2026",
    credentialUrl: "https://linkedin.com/in/mrizkydestyanto",
    domain: "cybersecurity",
  },
  {
    id: "cert-web",
    title: "Modern Web Development, Database Systems & Oracle APEX",
    issuer: "Full-Stack Web & Relational Database Track",
    date: "2025 — 2026",
    credentialUrl: "https://website-portfolio-firstcommit.vercel.app",
    domain: "web-dev",
  },
];