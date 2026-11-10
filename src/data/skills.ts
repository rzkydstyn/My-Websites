// src/data/skills.ts
import { SkillGroup } from "@/types/portfolio";

export const skillsData: SkillGroup[] = [
  {
    id: "data-science",
    title: "Data Science & Analytics",
    subtitle: "Data Analysis, Preprocessing & Machine Learning",
    description:
      "Mengolah dataset mentah melalui proses data cleaning, exploratory data analysis (EDA), feature engineering, hingga visualisasi dan pemodelan prediktif.",
    subcategories: [
      {
        name: "Programming & Query",
        skills: ["Python (Intermediate)", "SQL", "PostgreSQL", "MySQL"],
      },
      {
        name: "Data Processing & ML",
        skills: [
          "Pandas (Intermediate)",
          "Data Cleaning (Intermediate)",
          "Exploratory Data Analysis (Intermediate)",
          "NumPy",
          "Feature Engineering",
          "Scikit-learn",
        ],
      },
      {
        name: "Visualization & Reporting",
        skills: ["Matplotlib", "Seaborn", "Statistical Analysis", "Analytical Insights"],
      },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & System Architecture",
    subtitle: "Security Fundamentals, Networks & Cloud Interest",
    description:
      "Menganalisis keamanan aplikasi web, memahami organisasi sistem komputer, serta menerapkan prinsip pertahanan siber dan validasi input.",
    subcategories: [
      {
        name: "Security & Coursework Foundations",
        skills: [
          "Cyber Security Fundamentals",
          "Web Security Testing",
          "Vulnerability Assessment",
          "OWASP Top 10 Awareness",
        ],
      },
      {
        name: "Systems & Infrastructure",
        skills: [
          "Computer Organization & Architecture",
          "Digital Systems",
          "Linux & CLI Environment",
          "Cloud Computing Concepts",
        ],
      },
      {
        name: "AI-Assisted Productivity & Analysis",
        skills: ["Google Gemini (Advanced)", "ChatGPT (Advanced)", "Claude", "Perplexity"],
      },
    ],
  },
  {
    id: "web-dev",
    title: "Web & Software Development",
    subtitle: "Full-Stack Concepts, Databases & Modern Web Tech",
    description:
      "Merancang antarmuka web responsif, mengelola basis data relasional, dan berkolaborasi menggunakan kontrol versi Git & GitHub.",
    subcategories: [
      {
        name: "Front-End & Languages",
        skills: [
          "HTML5 & CSS3 (Advanced)",
          "JavaScript",
          "TypeScript",
          "React & Next.js",
          "Tailwind CSS",
          "Java (Basic)",
        ],
      },
      {
        name: "Database & Low-Code Platforms",
        skills: ["PostgreSQL", "MySQL", "Oracle APEX", "Database Systems Design"],
      },
      {
        name: "Tools, UI/UX & Version Control",
        skills: ["Git & GitHub (Advanced)", "VS Code (Intermediate)", "Figma (UI/UX)"],
      },
    ],
  },
];