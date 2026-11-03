export interface Project {
  slug: string;
  title: string;
  category: 'Web' | 'Mobile' | 'Infra' | 'Full Stack';
  hook: string;
  oneLiner: string;
  proof: string;
  stack: string[];
  image: string;
  status: 'Production' | 'Live Revenue' | 'Concept / Scalable' | 'In Development';
  featured: boolean;
  confidential?: boolean;
  problem: string;
  constraints: string[];
  solution: string;
  architecture: {
    steps: string[];
    description: string;
  };
  tradeoffs: string[];
  results: { metric: string; value: string; label: string }[];
  improvements: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  type: 'work' | 'education' | 'leadership';
}

export interface CertificateItem {
  title: string;
  issuer: string;
  platform: string;
  skills: string;
  url?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string; active?: boolean }[];
}
