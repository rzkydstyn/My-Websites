// src/types/portfolio.ts
export type DomainCategory = "data-science" | "cybersecurity" | "web-dev";

export interface SkillGroup {
  id: DomainCategory;
  title: string;
  subtitle: string;
  description: string;
  subcategories: {
    name: string;
    skills: string[];
  }[];
}

export interface DataScienceDetails {
  datasetInfo: string;
  preprocessingSteps: string[];
  metrics: { label: string; value: string; description: string }[];
  visualizations: { title: string; caption: string; placeholderLabel: string }[];
  actionableInsights: string[];
}

export interface CybersecurityDetails {
  authorizationScope: string;
  threatModelOrScope: string;
  methodology: string[];
  findings: {
    title: string;
    severity: "Low" | "Medium" | "High" | "Critical";
    analysis: string;
    remediation: string;
    codePatch?: { vulnerable: string; secure: string };
  }[];
}

export interface WebDevDetails {
  keyFeatures: { title: string; description: string }[];
  systemArchitecture: { description: string; diagramPlaceholder: string };
  databaseDesign: { ormOrDb: string; schemaDescription: string; erdPlaceholder: string };
  uiUxHighlights: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: DomainCategory;
  categoryLabel: "Data Analytics & Science" | "Cybersecurity" | "Web & Software Dev";
  shortDescription: string;
  thumbnailPlaceholder: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  date: string;
  overview: string;
  background: string;
  problemStatement: string;
  objectives: string[];
  methodologyGeneral: string;
  implementationSummary: string;
  resultsSummary: string;
  challenges: string[];
  lessonsLearned: string[];
  dataDetails?: DataScienceDetails;
  cyberDetails?: CybersecurityDetails;
  webDetails?: WebDevDetails;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: "Internship" | "Organization" | "Academic" | "Competition" | "Freelance";
  period: string;
  description: string;
  highlights: string[];
}

export interface ResearchItem {
  id: string;
  title: string;
  category: "Academic Research" | "ML Experiment" | "Technical Publication";
  date: string;
  abstract: string;
  methodology: string[];
  keyFindings: string;
  documentUrl: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  domain: DomainCategory;
}