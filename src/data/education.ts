
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
    period: "2022 - 2025",
    degree: "Licence en Informatique — Architecture des logiciels",
    school: "ESGIS Togo",
    description:
      "Formation en informatique, réseaux et télécommunications, avec une spécialisation en architecture des logiciels. Acquisition de compétences en programmation, conception d'applications, développement web et gestion de bases de données.",
    skills: [
      "Programmation",
      "Architecture logicielle",
      "Développement Web",
      "Bases de données",
      "Réseaux et Télécommunications",
    ],
  },

  // {
  //   period: "2020 - 2021",
  //   degree: "Baccalauréat — Série D",
  //   school: "CDBK Kara",
  //   description:
  //     "Formation secondaire générale avec un parcours scientifique, permettant d'acquérir des bases en mathématiques, en sciences et en raisonnement analytique.",
  //   skills: [
  //     "Mathématiques",
  //     "Sciences",
  //     "Raisonnement analytique",
  //   ],
  // },
];
