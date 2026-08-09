// src/app/skills/page.tsx

import Link from "next/link";

const skills = [
  {
    title: "Développement Web",
    description:
      "Conception d'applications web modernes, performantes et responsives.",
    items: [
      "Frontend",
      "Backend",
      "API REST",
      "Applications full-stack",
      "Interfaces responsives",
    ],
  },

  {
    title: "Intelligence Artificielle",
    description:
      "Conception et intégration de solutions basées sur l'intelligence artificielle.",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Traitement des données",
      "Modèles prédictifs",
    ],
  },

  {
    title: "Développement Mobile",
    description:
      "Création d'applications mobiles modernes pour différentes plateformes.",
    items: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Jetpack Compose",
      "Applications Android",
    ],
  },

  {
    title: "Bases de données",
    description:
      "Conception, manipulation et gestion de bases de données.",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Modélisation",
      "SQL",
    ],
  },

  {
    title: "DevOps & outils",
    description:
      "Outils et pratiques utilisés pour développer et déployer des applications.",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "CI/CD",
    ],
  },

  {
    title: "Conception & Architecture",
    description:
      "Organisation et conception d'applications robustes et maintenables.",
    items: [
      "Architecture logicielle",
      "API REST",
      "Design patterns",
      "Clean Code",
      "Applications modulaires",
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
            inline-flex
            items-center
            gap-2
            text-sm
            text-zinc-400
            transition-colors
            hover:text-red-500
          "
        >
          ← Retour au portfolio
        </Link>

        {/* Header */}
        <header className="mt-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Expertise
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            Mes compétences
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Découvrez les différents domaines dans lesquels Otis
            développe ses compétences et construit ses projets.
          </p>
        </header>

        {/* Compétences */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/50
                p-6
                transition-all
                duration-300
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
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

                    {item}
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

