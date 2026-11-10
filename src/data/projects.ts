// src/data/projects.ts
import { ProjectItem } from "@/types/portfolio";

export const projectsData: ProjectItem[] = [
  {
    id: "proj-data-student",
    slug: "student-performance-analysis",
    title: "Student Performance Analysis",
    category: "data-science",
    categoryLabel: "Data Analytics & Science",
    shortDescription:
      "Exploratory Data Analysis (EDA) dan analisis fitur menggunakan Python untuk mengidentifikasi faktor-faktor utama yang memengaruhi capaian akademik siswa.",
    thumbnailPlaceholder: "STUDENT_PERFORMANCE_EDA_VISUALIZATION",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    githubUrl: "https://github.com/rzkydstyn/student-performance-analysis",
    featured: true,
    date: "2025 — 2026",
    overview:
      "Proyek analisis data komprehensif yang bertujuan mengeksplorasi dan memetakan variabel akademik, demografis, dan kebiasaan belajar yang berkorelasi erat dengan performa nilai siswa.",
    background:
      "Capaian akademik siswa dipengaruhi oleh berbagai faktor multidimensional. Tanpa analisis berbasis data, institusi pendidikan kesulitan menentukan intervensi belajar yang paling berdampak.",
    problemStatement:
      "Faktor spesifik apa saja yang memiliki hubungan paling signifikan terhadap nilai akhir siswa, dan bagaimana pola distribusinya jika dilihat melalui visualisasi statistik?",
    objectives: [
      "Melakukan data cleaning dan preprocessing untuk memastikan dataset bebas dari anomali dan missing values.",
      "Melakukan Exploratory Data Analysis (EDA) dan analisis korelasi antar fitur menggunakan Pandas dan NumPy.",
      "Membuat visualisasi informatif dengan Matplotlib dan Seaborn untuk mengomunikasikan pola hubungan variabel.",
      "Merumuskan analytical insights berbasis bukti untuk rekomendasi peningkatan akademik.",
    ],
    methodologyGeneral:
      "Menggunakan alur kerja Data Science terstruktur: inspeksi struktur data, pembersihan dan transformasi fitur, analisis statistik univariat & multivariat, visualisasi distribusi, serta persiapan pemodelan dengan Scikit-learn.",
    implementationSummary:
      "Seluruh eksperimen diimplementasikan menggunakan Python di dalam lingkungan Jupyter Notebook, memanfaatkan Pandas untuk manipulasi dataframe serta Seaborn/Matplotlib untuk pemetaan grafik distribusi dan heatmap korelasi.",
    resultsSummary:
      "Berhasil mengidentifikasi variabel kunci yang mendorong peningkatan skor ujian siswa serta menyajikan visualisasi tren yang mudah diinterpretasikan oleh pemangku kepentingan.",
    challenges: [
      "Menangani keberagaman tipe data kategorikal dan numerik agar siap dianalisis secara statistik.",
      "Memilih jenis representasi visual yang paling tepat agar pola multivariat tidak menimbulkan bias interpretasi.",
    ],
    lessonsLearned: [
      "Tahap Exploratory Data Analysis (EDA) dan pembersihan data yang teliti sangat menentukan kualitas insight sebelum melangkah ke tahap pemodelan Scikit-learn.",
    ],
    dataDetails: {
      datasetInfo:
        "Student Academic Performance Dataset — mencakup variabel demografis, persiapan ujian, kebiasaan belajar, serta skor evaluasi akademik.",
      preprocessingSteps: [
        "Pemeriksaan tipe data, deduplikasi baris, dan penanganan nilai kosong (missing value handling).",
        "Encoding variabel kategorikal dan normalisasi fitur numerik menggunakan Scikit-learn & Pandas.",
        "Analisis matriks korelasi untuk menyaring fitur yang paling berpengaruh terhadap skor target.",
      ],
      metrics: [
        { label: "Core Workflow", value: "EDA & Feature Analysis", description: "Eksplorasi pola & korelasi multivariat" },
        { label: "Primary Stack", value: "Python + Seaborn", description: "Pemrosesan & visualisasi statistik" },
        { label: "Data Integrity", value: "100% Cleaned", description: "Dataset tervalidasi tanpa missing values" },
      ],
      visualizations: [
        {
          title: "Feature Correlation & Score Distribution",
          caption: "Visualisasi hubungan antar faktor kebiasaan belajar dan distribusi skor menggunakan Seaborn & Matplotlib.",
          placeholderLabel: "SEABORN_HEATMAP_AND_DISTRIBUTION_PLOT",
        },
        {
          title: "Categorical Impact Comparison",
          caption: "Perbandingan rata-rata capaian nilai berdasarkan kategori persiapan dan latar belakang akademik.",
          placeholderLabel: "MATPLOTLIB_MULTI_VARIABLE_BOXPLOT",
        },
      ],
      actionableInsights: [
        "Konsistensi persiapan ujian dan keterlibatan akademik menunjukkan korelasi positif paling kuat terhadap kenaikan nilai rata-rata.",
        "Visualisasi distribusi membantu mendeteksi kelompok siswa yang membutuhkan pendampingan belajar lebih awal.",
      ],
    },
  },
  {
    id: "proj-data-nvidia",
    slug: "nvidia-stock-price-analysis",
    title: "NVIDIA Stock Price Analysis & Prediction",
    category: "data-science",
    categoryLabel: "Data Analytics & Science",
    shortDescription:
      "Analisis data historis saham NVIDIA, feature engineering deret waktu, dan pengembangan model regresi Machine Learning untuk memprediksi harga penutupan (closing price).",
    thumbnailPlaceholder: "NVIDIA_STOCK_PREDICTION_PLOT",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    githubUrl: "https://github.com/rzkydstyn/NVIDIA-Stock-Price-Prediction",
    featured: true,
    date: "2026",
    overview:
      "Studi analitik dan pemodelan Machine Learning pada data pergerakan harga saham historis NVIDIA untuk mengidentifikasi tren pasar serta memprediksi harga penutupan (closing price).",
    background:
      "Pergerakan saham sektor teknologi dan semikonduktor seperti NVIDIA memiliki volatilitas dan tren pertumbuhan yang dinamis, sehingga membutuhkan pendekatan kuantitatif berbasis data historis.",
    problemStatement:
      "Bagaimana mengekstrak pola dari data historis harga (Open, High, Low, Volume) melalui feature engineering dan membangun model regresi yang akurat untuk memprediksi harga penutupan?",
    objectives: [
      "Menganalisis tren historis dan pola volatilitas harga saham NVIDIA menggunakan Pandas dan Matplotlib.",
      "Melakukan data cleaning, exploratory data analysis (EDA), dan feature engineering pada data deret waktu.",
      "Membangun dan melatih model Machine Learning berbasis Scikit-learn untuk memprediksi harga penutupan.",
      "Mengevaluasi performa model menggunakan metrik evaluasi regresi standar.",
    ],
    methodologyGeneral:
      "Meliputi pengumpulan data historis OHLCV (Open, High, Low, Close, Volume), pembersihan dan pengurutan kronologis, pembuatan fitur teknikal, pembagian data latih/uji, pelatihan model regresi Scikit-learn, dan evaluasi error.",
    implementationSummary:
      "Menggunakan NumPy dan Pandas untuk kalkulasi indikator pergerakan harga, Scikit-learn untuk pipeline pemodelan regresi, serta Matplotlib untuk membandingkan grafik harga aktual vs prediksi.",
    resultsSummary:
      "Model mampu menangkap arah tren pergerakan harga penutupan saham NVIDIA dengan tingkat kesalahan prediksi yang terukur pada metrik regresi.",
    challenges: [
      "Menjaga urutan kronologis saat membagi data training dan testing agar tidak terjadi data leakage pada data time-series.",
      "Menghadapi lonjakan harga ekstrem akibat sentimen pasar AI global pada periode terbaru.",
    ],
    lessonsLearned: [
      "Kualitas feature engineering pada data historis dan pemilihan metrik evaluasi regresi yang tepat sangat krusial dalam pemodelan finansial.",
    ],
    dataDetails: {
      datasetInfo:
        "NVIDIA Historical Stock Market Dataset — mencakup atribut Date, Open, High, Low, Close, Adjusted Close, dan Trading Volume.",
      preprocessingSteps: [
        "Konversi indeks datetime, pengurutan kronologis, dan validasi kelengkapan nilai transaksi harian.",
        "Feature Engineering: ekstraksi fitur pergerakan harga, selisih harian, dan tren rata-rata bergerak.",
        "Pembagian dataset latih dan uji serta penskalaan fitur numerik untuk stabilitas model regresi.",
      ],
      metrics: [
        { label: "Model Task", value: "Closing Price Regression", description: "Prediksi nilai kontinu harga penutupan" },
        { label: "ML Framework", value: "Scikit-learn", description: "Implementasi & evaluasi metrik regresi" },
        { label: "Feature Scope", value: "Historical OHLCV", description: "Analisis tren & volatilitas pasar" },
      ],
      visualizations: [
        {
          title: "Historical Price Trend & Volume Analysis",
          caption: "Grafik pertumbuhan harga saham NVIDIA dari waktu ke waktu beserta dinamika volume perdagangan.",
          placeholderLabel: "TIME_SERIES_TREND_VISUALIZATION",
        },
        {
          title: "Actual vs Predicted Closing Price",
          caption: "Kurva perbandingan nilai penutupan aktual dengan hasil prediksi model regresi Scikit-learn.",
          placeholderLabel: "REGRESSION_ACTUAL_VS_PREDICTED_CHART",
        },
      ],
      actionableInsights: [
        "Kombinasi fitur harga pembukaan dan rentang harian (High-Low) memberikan kontribusi kuat dalam mengestimasi harga penutupan harian.",
        "Evaluasi residual membantu mengidentifikasi periode volatilitas tinggi di mana model membutuhkan kalibrasi fitur tambahan.",
      ],
    },
  },
  {
    id: "proj-web-portfolio",
    slug: "multidisciplinary-engineering-web-portfolio",
    title: "Multidisciplinary Informatics Engineering Portfolio & Web System",
    category: "web-dev",
    categoryLabel: "Web & Software Dev",
    shortDescription:
      "Pengembangan aplikasi web modern berbasis Next.js, TypeScript, dan Tailwind CSS dengan arsitektur data modular serta integrasi manajemen database.",
    thumbnailPlaceholder: "MODERN_WEB_ARCHITECTURE_PREVIEW",
    techStack: ["Next.js", "TypeScript", "HTML5 & CSS3", "JavaScript", "Tailwind CSS", "PostgreSQL / MySQL"],
    githubUrl: "https://github.com/rzkydstyn/My-Websites",
    liveDemoUrl: "https://website-portfolio-firstcommit.vercel.app",
    featured: true,
    date: "2026",
    overview:
      "Platform web portofolio rekayasa perangkat lunak yang dirancang dengan arsitektur modular untuk mendokumentasikan studi kasus Data Science, Cybersecurity, dan Web Development secara terstruktur.",
    background:
      "Mahasiswa Teknik Informatika dengan keahlian lintas disiplin membutuhkan platform web yang tidak hanya estetis, tetapi juga membuktikan kemampuan rekayasa front-end, struktur data, dan manajemen kode Git.",
    problemStatement:
      "Bagaimana merancang arsitektur web yang cepat, responsif, mendukung mode gelap/terang, dan memisahkan lapisan data dari antarmuka pengguna agar mudah dikembangkan?",
    objectives: [
      "Menerapkan arsitektur komponen reusable menggunakan React, Next.js App Router, dan TypeScript.",
      "Merancang desain antarmuka minimalis modern dengan Tailwind CSS dan Figma.",
      "Mengintegrasikan manajemen kontrol versi GitHub dan deployment otomatis di Vercel.",
    ],
    methodologyGeneral:
      "Mengikuti tahapan Software Development Life Cycle (SDLC): perencanaan strategi konten, perancangan information architecture, pembuatan sistem desain UI/UX, hingga implementasi kode dan deployment.",
    implementationSummary:
      "Menggunakan Dynamic Routing Next.js (`[slug]`) dengan Static Site Generation (SSG) dan skema TypeScript ketat untuk merender studi kasus lintas bidang secara otomatis.",
    resultsSummary:
      "Menghasilkan aplikasi web berkinerja tinggi yang terhubung langsung dengan workflow GitHub dan siap digunakan untuk kebutuhan profesional maupun akademik.",
    challenges: [
      "Menyatukan tiga bidang teknis yang berbeda ke dalam satu hierarki visual yang tetap bersih dan konsisten.",
      "Memastikan struktur tipe data TypeScript fleksibel untuk menampung metrik data, laporan keamanan, dan diagram sistem.",
    ],
    lessonsLearned: [
      "Pemisahan Single Source of Truth pada lapisan data membuat proses pembaruan konten portofolio menjadi jauh lebih cepat dan bebas bug.",
    ],
    webDetails: {
      keyFeatures: [
        {
          title: "Dynamic Case Study Engine",
          description: "Merender komponen visual berbeda secara otomatis untuk proyek Data Science, Cybersecurity, dan Web Dev.",
        },
        {
          title: "Interactive Domain Filtering",
          description: "Filter instan berdasarkan kategori keahlian dan pencarian kata kunci teknologi.",
        },
        {
          title: "Responsive Dark/Light Theme",
          description: "Sistem tema adaptif dengan kontras tipografi yang nyaman di perangkat desktop maupun mobile.",
        },
      ],
      systemArchitecture: {
        description:
          "Next.js App Router Architecture: TypeScript Data Layer -> Server/Client Modular Components -> Static Generation -> Vercel Edge Network.",
        diagramPlaceholder: "NEXTJS_APP_ROUTER_MODULAR_ARCHITECTURE",
      },
      databaseDesign: {
        ormOrDb: "TypeScript Structured Schema / SQL Ready (PostgreSQL & MySQL)",
        schemaDescription:
          "Struktur entitas terpisah untuk Profile, Categorized Skills, Polymorphic Project Details, Experience, dan Research.",
        erdPlaceholder: "PORTFOLIO_ENTITY_SCHEMA_DIAGRAM",
      },
      uiUxHighlights: [
        "Swiss-Grid Minimalist layout dengan aksen warna semantik per domain keahlian.",
        "Navigasi intuitif yang dirancang khusus untuk memudahkan pemindaian oleh Technical Recruiter.",
      ],
    },
  },
  {
    id: "proj-cyber-lab",
    slug: "web-application-security-assessment-lab",
    title: "Web Application Security & Vulnerability Analysis Lab",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity",
    shortDescription:
      "Eksplorasi dan analisis kerentanan keamanan aplikasi web pada lingkungan laboratorium berizin, meliputi pengujian autentikasi, injeksi SQL, dan rekomendasi mitigasi kode.",
    thumbnailPlaceholder: "WEB_SECURITY_LAB_ASSESSMENT",
    techStack: ["Cyber Security", "Web Security", "SQL", "Python", "Linux", "OWASP Top 10"],
    githubUrl: "https://github.com/rzkydstyn",
    featured: true,
    date: "2026",
    overview:
      "Dokumentasi pembelajaran dan pengujian laboratorium keamanan siber yang berfokus pada identifikasi celah keamanan aplikasi web serta penerapan langkah-langkah perbaikan (remediation) di sisi kode dan database.",
    background:
      "Pemahaman mendalam mengenai bagaimana celah keamanan muncul pada proses autentikasi dan kueri basis data sangat penting bagi seorang engineer untuk membangun perangkat lunak yang tangguh.",
    problemStatement:
      "Bagaimana mengenali pola serangan umum pada aplikasi web (seperti manipulasi kueri SQL dan kelemahan validasi input) serta mengamankan arsitektur aplikasi dari risiko tersebut?",
    objectives: [
      "Menganalisis mekanisme kerentanan web berdasarkan prinsip keamanan siber dan standar OWASP.",
      "Menguji skenario keamanan pada lingkungan laboratorium akademik yang terisolasi dan berizin.",
      "Merumuskan solusi secure coding dan validasi database untuk menutup celah yang ditemukan.",
    ],
    methodologyGeneral:
      "Melakukan analisis permukaan aplikasi (attack surface) di lingkungan lab, mengidentifikasi titik input yang tidak tervalidasi, mendokumentasikan akar masalah, dan menyusun patch perbaikan kode.",
    implementationSummary:
      "Mengombinasikan pemahaman pemrograman Python, manajemen database SQL (MySQL/PostgreSQL), dan arsitektur web untuk mengevaluasi keamanan endpoint aplikasi secara menyeluruh.",
    resultsSummary:
      "Menghasilkan dokumentasi teknis mengenai pencegahan serangan injeksi basis data, penguatan kontrol autentikasi, dan pembatasan upload file berbahaya.",
    challenges: [
      "Menganalisis respons server untuk membedakan perilaku kesalahan normal dengan indikasi celah keamanan.",
      "Menyusun validasi input yang ketat tanpa menghambat pengalaman pengguna yang sah.",
    ],
    lessonsLearned: [
      "Aspek keamanan harus diintegrasikan sejak tahap perancangan database dan penulisan kode awal (Security by Design).",
    ],
    cyberDetails: {
      authorizationScope:
        "AUTHORIZED ACADEMIC LAB ONLY: Seluruh kegiatan analisis dan pengujian dalam proyek ini dilakukan secara eksklusif di dalam lingkungan laboratorium pembelajaran terisolasi untuk tujuan edukasi Teknik Informatika dan penguatan pertahanan sistem.",
      threatModelOrScope:
        "Fokus evaluasi meliputi modul autentikasi login, parameter pencarian database SQL, dan mekanisme validasi input formulir web.",
      methodology: [
        "Input Validation & SQL Query Inspection",
        "Authentication Flow & Session Security Analysis",
        "File Upload Restriction & MIME-Type Verification",
        "Secure Coding Remediation & Patching",
      ],
      findings: [
        {
          title: "Unvalidated SQL Query Input (SQL Injection Risk)",
          severity: "Critical",
          analysis:
            "Penggabungan input pengguna secara langsung ke dalam string kueri SQL memungkinkan penyerang memanipulasi kondisi logika pembacaan data.",
          remediation:
            "Terapkan Prepared Statements / Parameterized Queries pada seluruh interaksi database PostgreSQL/MySQL serta validasi tipe data di sisi server.",
          codePatch: {
            vulnerable: `// Vulnerable Query Construction\nSELECT * FROM users WHERE username = '$user_input' AND password = '$password_input';`,
            secure: `// Secure Parameterized Query\nPREPARE stmt FROM 'SELECT id, username FROM users WHERE username = ? AND password_hash = ?';\nEXECUTE stmt USING @user_input, @password_hash;`,
          },
        },
        {
          title: "Weak Authentication Rate Control",
          severity: "High",
          analysis:
            "Endpoint autentikasi yang tidak memiliki pembatasan percobaan login berisiko terhadap pengujian kredensial otomatis (brute-force).",
          remediation:
            "Implementasikan pembatasan jumlah request (rate limiting), penundaan progresif, dan pencatatan log aktivitas mencurigakan.",
        },
      ],
    },
  },
];