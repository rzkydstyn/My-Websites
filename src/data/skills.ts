// src/data/skills.ts
import { SkillGroup } from "@/types/portfolio";

export const skillsData: SkillGroup[] = [
  {
    id: "data-science",
    title: "Data Analytics & Data Science",
    subtitle: "Option A1 — Core Analytics & Business Intelligence",
    description:
      "Mengekstrak, membersihkan, dan memvisualisasikan data menjadi wawasan bisnis yang terukur.",
    subcategories: [
      {
        name: "Languages & Query",
        skills: ["Python", "SQL (PostgreSQL / MySQL)"],
      },
      {
        name: "Data Manipulation & EDA",
        skills: ["Pandas", "NumPy", "SciPy", "Data Cleaning", "Exploratory Data Analysis"],
      },
      {
        name: "Visualization & BI",
        skills: ["Matplotlib", "Seaborn", "Power BI", "Tableau", "Looker Studio"],
      },
      {
        name: "Workflow & Environment",
        skills: ["Jupyter Notebook", "Google Colab", "Excel / Spreadsheets", "Machine Learning Fundamentals"],
      },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    subtitle: "Option B2 — Security Analysis & Defensive Operations",
    description:
      "Mengidentifikasi risiko, menganalisis log & lalu lintas jaringan, serta menerapkan mitigasi keamanan sistem.",
    subcategories: [
      {
        name: "Core Security Concepts",
        skills: ["Vulnerability Assessment", "Threat Modeling", "Risk Analysis", "Log Analysis", "OWASP Top 10"],
      },
      {
        name: "System & Network Defense",
        skills: ["Networking Fundamentals (TCP/IP, DNS)", "Linux Administration", "Firewall & Access Control", "Wireshark", "Burp Suite"],
      },
      {
        name: "Remediation & Hardening",
        skills: ["Secure Coding Practices", "Input Validation", "Patch Management", "Web Security Testing"],
      },
    ],
  },
  {
    id: "web-dev",
    title: "Web & Software Development",
    subtitle: "Option C1 — Modern JavaScript / TypeScript Stack",
    description:
      "Merancang dan membangun aplikasi web full-stack yang responsif, modular, dan mudah dikembangkan.",
    subcategories: [
      {
        name: "Front-End Engineering",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      },
      {
        name: "Back-End & API",
        skills: ["Node.js", "Next.js API Routes", "RESTful API", "Python / Java Fundamentals"],
      },
      {
        name: "Database & Deployment",
        skills: ["PostgreSQL", "MySQL", "Prisma / Drizzle ORM", "Git & GitHub", "Vercel"],
      },
    ],
  },
];