
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
    title: "Développeur Backend & IA",
    company: "Projets personnels",
    description:
      "Conception d'API REST avec Python et Django REST Framework. Développement de solutions de vérification de documents d'identité avec OCR et OpenCV, ainsi que d'applications intégrant la gestion et l'analyse de données.",
    technologies: [
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "OpenCV",
      "OCR",
    ],
  },

  {
    period: "2025",
    title: "Développeur Web Full Stack",
    company: "Projets personnels",
    description:
      "Développement d'applications web et mobiles, avec conception d'API REST, gestion de bases de données et intégration frontend-backend. Réalisation de ThesisFinder, une plateforme de recherche académique, et participation à plusieurs projets applicatifs.",
    technologies: [
      "Python",
      "Django",
      "React",
      "PostgreSQL",
      "Flutter",
    ],
  },

  {
    period: "2022 – 2025",
    title: "Formation en informatique",
    company: "ESGIS Togo",
    description:
      "Formation en informatique, réseaux et télécommunications, spécialité architecture des logiciels. Acquisition de compétences en programmation, conception logicielle, bases de données et développement d'applications.",
    technologies: [
      "Python",
      "JavaScript",
      "SQL",
      "Développement Web",
      "Architecture logicielle",
    ],
  },
];
