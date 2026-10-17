
 // src/app/skills/page.tsx

import Link from "next/link";

const skills = [
  {
    title: "Développement Backend",
    description:
      "Conception de la logique métier, d'API REST et de services backend pour des applications web.",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "API REST",
      "Authentification et gestion des données",
    ],
  },

  {
    title: "Développement Frontend",
    description:
      "Création d'interfaces web modernes, interactives et adaptées aux différents écrans.",
    items: [
      "JavaScript",
      "React.js",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Interfaces responsives",
    ],
  },

  {
    title: "Intelligence Artificielle & Vision",
    description:
      "Exploration de solutions de traitement d'images et d'automatisation intégrables aux applications.",
    items: [
      "OCR",
      "OpenCV",
      "Computer Vision",
      "Traitement d'images",
      "Intégration de fonctionnalités IA",
    ],
  },

  {
    title: "Bases de données",
    description:
      "Conception, organisation et exploitation des données pour des applications fiables.",
    items: [
      "PostgreSQL",
      "SQL",
      "Modélisation des données",
      "Relations entre tables",
      "Intégration avec Django",
    ],
  },

  {
    title: "Développement Mobile",
    description:
      "Développement d'applications mobiles connectées à des API backend.",
    items: [
      "Flutter",
      "Dart",
      "Consommation d'API REST",
      "Intégration frontend-backend",
    ],
  },

  {
    title: "Outils & Déploiement",
    description:
      "Utilisation des outils de développement et des services nécessaires à la mise en ligne des applications.",
    items: [
      "Git",
      "GitHub",
      "Render",
      "Vercel",
      "Neon & Cloudinary",
    ],
  },

  {
    title: "Architecture logicielle",
    description:
      "Structuration des applications pour faciliter leur évolution, leur maintenance et leur réutilisation.",
    items: [
      "Architecture logicielle",
      "Conception d'API",
      "Séparation frontend-backend",
      "Organisation du code",
      "Principes de maintenabilité",
    ],
  },

  {
    title: "Data & Analyse",
    description:
      "Développement progressif de compétences pour manipuler, explorer et analyser des données.",
    items: [
      "Python pour la data",
      "NumPy — apprentissage",
      "Pandas — apprentissage",
      "Nettoyage des données",
      "Analyse exploratoire — apprentissage",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Retour */}
        <Link
          href="/"
          className="
            inline-flex items-center gap-2
            text-sm text-zinc-400
            transition-colors hover:text-red-500
          "
        >
          ← Retour au portfolio
        </Link>

        {/* En-tête */}
        <header className="mt-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Expertise
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            Mes compétences
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Développeur Web Full Stack orienté Python, Backend et
            Intelligence Artificielle, je conçois des applications,
            développe des API et explore des solutions de traitement
            d'images et d'analyse de données.
          </p>
        </header>

        {/* Cartes de compétences */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="
                rounded-3xl border border-zinc-800
                bg-zinc-900/50 p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-red-500/50
              "
            >
              <h2 className="text-2xl font-bold text-white">
                {skill.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {skill.description}
              </p>

              <ul className="mt-6 space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
