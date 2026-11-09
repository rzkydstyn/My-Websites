// src/data/projects.ts
import { ProjectItem } from "@/types/portfolio";

export const projectsData: ProjectItem[] = [
  {
    id: "proj-data-1",
    slug: "enterprise-customer-retention-bi-analytics",
    title: "[Placeholder Data 01] Customer Retention & Booking Demand Analytics",
    category: "data-science",
    categoryLabel: "Data Analytics & Science",
    shortDescription:
      "Eksplorasi data mendalam (EDA), pemodelan metrik pembatalan pesanan, dan pembuatan dashboard interaktif untuk optimasi retensi pelanggan.",
    thumbnailPlaceholder: "DATA_BI_DASHBOARD_PREVIEW",
    techStack: ["Python", "SQL", "Pandas", "NumPy", "Power BI", "Matplotlib"],
    githubUrl: "https://github.com/username-placeholder/data-analytics-project",
    liveDemoUrl: "https://example.com/dashboard-demo",
    featured: true,
    date: "2026",
    overview:
      "[Placeholder Overview] Proyek ini menganalisis lebih dari 100.000 baris data historis transaksi untuk menemukan pola utama penyebab pembatalan pesanan dan penurunan retensi pelanggan.",
    background:
      "Tingginya tingkat pembatalan transaksi berdampak langsung pada akurasi proyeksi pendapatan bulanan dan efisiensi alokasi kapasitas layanan.",
    problemStatement:
      "Tim operasional belum memiliki visibilitas terukur mengenai variabel apa saja (lead time, segmen pasar, atau tipe deposit) yang paling memicu pembatalan.",
    objectives: [
      "Membersihkan dan menormalisasi dataset mentah menggunakan Python (Pandas & NumPy).",
      "Mengidentifikasi korelasi antar fitur melalui Exploratory Data Analysis (EDA) dan query SQL.",
      "Merancang dashboard Power BI interaktif untuk memantau KPI secara berkala.",
    ],
    methodologyGeneral:
      "Menggunakan alur CRISP-DM mulai dari Data Understanding, Data Preparation (imputasi missing values & outlier handling), analisis statistik deskriptif, hingga penyusunan visualisasi dashboard.",
    implementationSummary:
      "Pipeline pembersihan data ditulis dalam Jupyter Notebook, menghasilkan tabel bersih yang kemudian dihubungkan ke model data star-schema di Power BI.",
    resultsSummary:
      "Berhasil memetakan 3 faktor risiko utama pembatalan dan memberikan rekomendasi kebijakan deposit yang diproyeksikan menurunkan rasio pembatalan sebesar [X]%.",
    challenges: [
      "Menangani tingginya persentase nilai kosong (missing values) pada kolom agen perjalanan.",
      "Menyamakan format tanggal dan anomali nilai ekstrem pada variabel lead time.",
    ],
    lessonsLearned: [
      "Pentingnya validasi domain bisnis sebelum menghapus outlier agar tidak menghilangkan pola musiman yang valid.",
    ],
    dataDetails: {
      datasetInfo: "[Placeholder Dataset] 119,390 baris × 32 atribut transaksi historis (Format CSV & SQL Database).",
      preprocessingSteps: [
        "Deduplikasi data dan penanganan missing values menggunakan median/mode imputation.",
        "Feature Engineering: Membuat variabel rasio pembatalan historis dan kategori durasi menginap.",
        "Agregasi kueri SQL menggunakan CTE dan Window Functions untuk analisis kohort bulanan.",
      ],
      metrics: [
        { label: "Records Processed", value: "119.3K+", description: "Total baris data bersih yang dianalisis" },
        { label: "Key Risk Factor", value: "Lead Time > 90d", description: "Korelasi tertinggi terhadap pembatalan" },
        { label: "Data Completeness", value: "99.4%", description: "Skor integritas pasca-cleaning" },
      ],
      visualizations: [
        {
          title: "Cancellation Rate by Lead Time & Market Segment",
          caption: "Distribusi peningkatan risiko pembatalan seiring bertambahnya jarak waktu pemesanan.",
          placeholderLabel: "CHART_01: Multi-Axis Bar & Line Visualization",
        },
        {
          title: "Executive BI Dashboard Overview",
          caption: "Tampilan interaktif Power BI untuk pemantauan ADR (Average Daily Rate) dan Occupancy.",
          placeholderLabel: "CHART_02: Power BI Interactive Canvas",
        },
      ],
      actionableInsights: [
        "Pemesanan dengan lead time di atas 90 hari tanpa deposit memiliki rasio pembatalan 2.4x lebih tinggi dibanding segmen reguler.",
        "Penerapan kebijakan pengingat otomatis pada H-14 sebelum jadwal kedatangan direkomendasikan untuk segmen Online Travel Agent.",
      ],
    },
  },
  {
    id: "proj-cyber-1",
    slug: "web-infrastructure-vulnerability-assessment-remediation",
    title: "[Placeholder Cyber 01] Web Application Vulnerability Assessment & Defensive Hardening",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity",
    shortDescription:
      "Asesmen kerentanan sistem berizin, analisis log lalu lintas jaringan, serta implementasi patch mitigasi berbasis standar OWASP Top 10.",
    thumbnailPlaceholder: "SECURITY_ASSESSMENT_REPORT",
    techStack: ["Linux", "OWASP Top 10", "Wireshark", "Burp Suite", "Log Analysis", "Secure Coding"],
    githubUrl: "https://github.com/username-placeholder/cybersecurity-defensive-lab",
    featured: true,
    date: "2026",
    overview:
      "[Placeholder Overview] Studi kasus pengujian keamanan terotorisasi dan penguatan pertahanan (system hardening) pada lingkungan laboratorium aplikasi web internal.",
    background:
      "Aplikasi web yang dibangun tanpa validasi input dan konfigurasi akses yang ketat rentan terhadap eksploitasi injeksi basis data dan pengambilalihan sesi.",
    problemStatement:
      "Bagaimana mengidentifikasi titik lemah arsitektur melalui analisis trafik dan log server, lalu menutup celah tersebut pada level kode dan konfigurasi jaringan?",
    objectives: [
      "Melakukan Vulnerability Assessment menyeluruh pada lingkungan lab berizin sesuai standar OWASP.",
      "Menganalisis anomali paket jaringan dan log autentikasi menggunakan Wireshark dan Linux CLI.",
      "Menyusun dokumentasi Remediation Patch untuk memperbaiki kerentanan SQL Injection dan Broken Access Control.",
    ],
    methodologyGeneral:
      "Mengikuti tahapan NIST / OWASP Testing Guide: Reconnaissance & Asset Mapping, Vulnerability Scanning, Log & Packet Inspection, Risk Scoring, dan Code Remediation.",
    implementationSummary:
      "Pengujian dilakukan di dalam jaringan terisolasi (sandbox lab). Setiap temuan dianalisis penyebab utamanya (root cause) pada kode sumber dan diperbaiki menggunakan parameterized queries serta aturan firewall.",
    resultsSummary:
      "Mengidentifikasi dan memitigasi [X] temuan kerentanan kritis dan tinggi, serta menyusun aturan deteksi log untuk mencegah serangan brute-force berulang.",
    challenges: [
      "Membedakan trafik anomali otomatis dari aktivitas pengguna normal di dalam file log berukuran besar.",
      "Memastikan patch keamanan tidak merusak fungsionalitas kueri pencarian dinamis yang sudah ada.",
    ],
    lessonsLearned: [
      "Keamanan yang efektif membutuhkan pendekatan berlapis (Defense in Depth): memperbaiki kode aplikasi sekaligus memperketat konfigurasi server.",
    ],
    cyberDetails: {
      authorizationScope:
        "AUTHORIZED LAB ENVIRONMENT ONLY: Seluruh pengujian, analisis paket, dan simulasi kerentanan dalam dokumentasi ini dilakukan secara eksklusif pada infrastruktur laboratorium lokal/akademik yang memiliki izin resmi untuk tujuan edukasi dan pertahanan sistem.",
      threatModelOrScope:
        "Target Scope: Modul Autentikasi Pengguna, Endpoint Pencarian Database, dan Layanan Upload Dokumen pada Web Server berbasis Linux.",
      methodology: [
        "Threat Modeling & Attack Surface Mapping",
        "HTTP/HTTPS Traffic Inspection via Burp Suite & Wireshark",
        "Server Access & Error Log Analysis (Linux grep/awk)",
        "Source Code Review & Secure Patch Verification",
      ],
      findings: [
        {
          title: "Improper Input Neutralization Leading to SQL Injection",
          severity: "Critical",
          analysis:
            "Parameter pencarian menggabungkan string input pengguna secara langsung ke dalam interpreter SQL tanpa sanitasi, memungkinkan manipulasi logika kueri.",
          remediation:
            "Mengganti penggabungan string (string concatenation) dengan Prepared Statements / Parameterized Queries dan menerapkan strict allow-list validation.",
          codePatch: {
            vulnerable: `// VULNERABLE CODE (Direct String Concatenation)\nconst query = "SELECT * FROM users WHERE username = '" + req.body.user + "'";\ndb.execute(query);`,
            secure: `// REMEDIATED CODE (Parameterized Query)\nconst query = "SELECT id, username, role FROM users WHERE username = ?";\ndb.execute(query, [req.body.user]);`,
          },
        },
        {
          title: "Missing Rate Limiting on Authentication Endpoint",
          severity: "High",
          analysis:
            "Analisis log server menunjukkan ribuan permintaan POST beruntun dari satu alamat IP ke endpoint login tanpa mekanisme pembatasan (throttling).",
          remediation:
            "Mengimplementasikan middleware Rate Limiting berbasis IP/Session, kebijakan account lockout sementara, dan pemantauan log otomatis.",
        },
      ],
    },
  },
  {
    id: "proj-web-1",
    slug: "modular-academic-portal-management-system",
    title: "[Placeholder Web 01] Full-Stack Academic & Resource Management Portal",
    category: "web-dev",
    categoryLabel: "Web & Software Dev",
    shortDescription:
      "Aplikasi web full-stack modern dengan arsitektur modular, manajemen basis data relasional, filter pencarian dinamis, dan kontrol akses berbasis peran.",
    thumbnailPlaceholder: "WEB_APP_INTERFACE_PREVIEW",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "PostgreSQL", "Prisma ORM"],
    githubUrl: "https://github.com/username-placeholder/fullstack-web-portal",
    liveDemoUrl: "https://example.com/web-portal-demo",
    featured: true,
    date: "2026",
    overview:
      "[Placeholder Overview] Platform web terintegrasi untuk mengelola data akademik, penjadwalan, dan pelaporan secara real-time dengan antarmuka responsif.",
    background:
      "Pengelolaan data menggunakan spreadsheet terpisah sering menimbulkan duplikasi data, keterlambatan pencarian informasi, dan kurangnya histori audit.",
    problemStatement:
      "Dibutuhkan aplikasi berbasis web yang cepat, memiliki skema database terstruktur, dan mudah digunakan baik di perangkat desktop maupun mobile.",
    objectives: [
      "Membangun antarmuka pengguna yang bersih dan responsif menggunakan Next.js, TypeScript, dan Tailwind CSS.",
      "Merancang skema database relasional yang ternormalisasi di PostgreSQL dengan Prisma ORM.",
      "Menyediakan RESTful API / Server Actions dengan validasi skema input yang ketat.",
    ],
    methodologyGeneral:
      "Pengembangan dilakukan secara iteratif meliputi perancangan ERD, pembuatan wireframe UI/UX, implementasi API & autentikasi, hingga pengujian responsivitas.",
    implementationSummary:
      "Menggunakan arsitektur Next.js App Router dengan pemisahan Server Components untuk pengambilan data cepat dan Client Components untuk tabel interaktif.",
    resultsSummary:
      "Menghasilkan sistem manajemen data terpusat dengan waktu muat halaman di bawah 1 detik dan kemudahan pencarian multi-filter secara instan.",
    challenges: [
      "Mengoptimalkan performa query pencarian dan pagination ketika jumlah baris data terus bertambah.",
      "Menjaga konsistensi state UI antara komponen filter, URL search params, dan tabel data.",
    ],
    lessonsLearned: [
      "Menyimpan state filter di dalam URL Search Params jauh lebih baik untuk UX dan kemampuan berbagi tautan (shareable links) dibanding state lokal semata.",
    ],
    webDetails: {
      keyFeatures: [
        {
          title: "Role-Based Dashboard & Access Control",
          description: "Tampilan dan hak akses operasi CRUD yang menyesuaikan peran pengguna (Admin, Staff, Viewer).",
        },
        {
          title: "Server-Side Filtering & Pagination",
          description: "Pencarian multi-kriteria instan yang disinkronkan dengan parameter URL dan indeks database.",
        },
        {
          title: "Automated Data Validation",
          description: "Validasi tipe data dua arah di sisi klien (form) dan server sebelum disimpan ke PostgreSQL.",
        },
      ],
      systemArchitecture: {
        description:
          "Arsitektur tiga lapis modern: Next.js React Client/Server Layer -> API & Validation Middleware -> Prisma ORM -> PostgreSQL Database.",
        diagramPlaceholder: "SYSTEM_ARCHITECTURE_DIAGRAM: Client <-> Next.js App Router <-> Prisma <-> PostgreSQL",
      },
      databaseDesign: {
        ormOrDb: "PostgreSQL + Prisma ORM",
        schemaDescription:
          "Skema relasional yang terdiri dari tabel Users, Profiles, Categories, Records, dan AuditLogs dengan indeks komposit pada kolom pencarian utama.",
        erdPlaceholder: "ERD_SCHEMA_DIAGRAM: Users (1:N) Records (N:1) Categories",
      },
      uiUxHighlights: [
        "Desain tabel data dengan sticky header dan indikator status berwarna semantik.",
        "Dukungan penuh Dark Mode dan navigasi keyboard (accessibility-friendly).",
      ],
    },
  },
];