// src/app/education/page.tsx

import Link from "next/link";
import { educations } from "@/data/education";

export default function EducationPage() {
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
            Parcours académique
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            Formation
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Découvrez le parcours académique et les domaines
            de formation d'Otis.
          </p>
        </header>

        {/* Formations */}
        <div className="mt-16 space-y-6">
          {educations.map((education) => (
            <article
              key={`${education.period}-${education.degree}`}
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
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-wider text-red-500">
                    {education.period}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white">
                    {education.degree}
                  </h2>

                  <p className="mt-1 text-zinc-400">
                    {education.school}
                  </p>

                  <p className="mt-5 leading-7 text-zinc-400">
                    {education.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                  {education.skills.map((skill) => (
                    <span
                      key={skill}
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
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}

