// src/data/experience.ts

export type Experience = {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    period: "2026",
    title: "Développeur Full Stack",
    company: "Projet personnel",
    description:
      "Conception et développement d'applications web modernes avec une attention particulière portée à l'expérience utilisateur et à l'architecture logicielle.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },

  {
    period: "2025",
    title: "Développeur Web",
    company: "Projet personnel",
    description:
      "Développement d'applications web et d'API avec différentes technologies frontend et backend.",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
    ],
  },
];

