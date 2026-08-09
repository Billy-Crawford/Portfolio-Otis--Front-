// src/data/stack.ts

export type StackCategory = {
  title: string;
  description: string;
  technologies: string[];
};

export const stack: StackCategory[] = [
  {
    title: "Frontend",
    description: "Technologies utilisées pour créer des interfaces web modernes.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },

  {
    title: "Backend",
    description: "Technologies utilisées pour développer des API et applications serveur.",
    technologies: [
      "Node.js",
      "Python",
      "Django",
      "Flask",
      "FastAPI",
    ],
  },

  {
    title: "Base de données",
    description: "Systèmes de gestion de données utilisés dans ses projets.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },

  {
    title: "Intelligence artificielle",
    description: "Technologies utilisées pour le machine learning et le deep learning.",
    technologies: [
      "Python",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },

  {
    title: "Mobile",
    description: "Technologies utilisées pour le développement d'applications mobiles.",
    technologies: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Jetpack Compose",
    ],
  },

  {
    title: "DevOps & outils",
    description: "Outils utilisés pour le développement, le déploiement et la collaboration.",
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Vercel",
    ],
  },
];

