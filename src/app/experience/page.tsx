// src/app/experience/page.tsx

import Link from "next/link";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

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
            Parcours
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            Expérience
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Découvrez le parcours professionnel, les projets
            et les expériences d'Otis.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Ligne verticale */}
          <div className="absolute bottom-0 left-3 top-0 w-px bg-zinc-800" />

          <div className="space-y-10">
            {experiences.map((experience) => (
              <article
                key={`${experience.period}-${experience.title}`}
                className="relative pl-10"
              >
                {/* Point */}
                <div
                  className="
                    absolute
                    left-0
                    top-2
                    h-7
                    w-7
                    rounded-full
                    border-4
                    border-zinc-950
                    bg-red-500
                  "
                />

                <div
                  className="
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-900/50
                    p-6
                    transition-all
                    duration-300
                    hover:border-red-500/50
                  "
                >
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-red-500">
                        {experience.period}
                      </p>

                      <h2 className="mt-2 text-2xl font-bold text-white">
                        {experience.title}
                      </h2>

                      <p className="mt-1 text-zinc-400">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-zinc-400">
                    {experience.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-zinc-700
                          bg-zinc-950
                          px-3
                          py-1.5
                          text-xs
                          font-medium
                          text-zinc-300
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}

