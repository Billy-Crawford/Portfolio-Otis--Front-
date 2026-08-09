// src/data/education.ts

export type Education = {
  period: string;
  degree: string;
  school: string;
  description: string;
  skills: string[];
};

export const educations: Education[] = [
  {
    period: "2025 - 2026",
    degree: "Master 1 Intelligence Artificielle",
    school: "Université / École",
    description:
      "Formation spécialisée dans l'intelligence artificielle, le machine learning, le deep learning et le développement de solutions intelligentes.",
    skills: [
      "Intelligence Artificielle",
      "Machine Learning",
      "Deep Learning",
      "Python",
    ],
  },

  {
    period: "2022 - 2025",
    degree: "Licence Informatique",
    school: "Université / École",
    description:
      "Formation en informatique couvrant le développement logiciel, les bases de données, les réseaux et les systèmes.",
    skills: [
      "Programmation",
      "Bases de données",
      "Développement Web",
      "Algorithmique",
    ],
  },
];

