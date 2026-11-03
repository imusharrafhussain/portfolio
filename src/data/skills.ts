import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", active: true },
      { name: "JavaScript (ES6+)", active: true },
      { name: "TypeScript", active: true },
      { name: "Java" },
      { name: "C / C++" },
      { name: "Dart", active: true }
    ]
  },
  {
    title: "Web & Frameworks",
    skills: [
      { name: "React / Next.js", active: true },
      { name: "Node.js & Express", active: true },
      { name: "Django", active: true },
      { name: "Flutter", active: true },
      { name: "Tailwind CSS", active: true },
      { name: "HTML5 / CSS3" },
      { name: "Bootstrap" },
      { name: "Tkinter" }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "Cloudflare R2", active: true },
      { name: "Cloudflare Workers", active: true },
      { name: "FFmpeg (HLS)", active: true },
      { name: "Vercel", active: true },
      { name: "Render", active: true },
      { name: "Firebase (Realtime DB & Auth)", active: true }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", active: true },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQLite", active: true },
      { name: "Firebase Firestore" }
    ]
  },
  {
    title: "Data Science & Tools",
    skills: [
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Git & GitHub", active: true },
      { name: "VS Code", active: true },
      { name: "Android Studio" },
      { name: "Ubuntu / Linux", active: true }
    ]
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms", active: true },
      { name: "System Design", active: true },
      { name: "Object-Oriented Programming (OOP)", active: true },
      { name: "Role-Based Access Control (RBAC)", active: true },
      { name: "Secure Media Streaming (HLS)", active: true },
      { name: "Cost Optimization & Scalability", active: true }
    ]
  }
];
