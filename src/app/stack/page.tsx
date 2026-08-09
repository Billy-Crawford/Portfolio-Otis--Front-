// src/app/stack/page.tsx

import Link from "next/link";
import { stack } from "@/data/stack";

export default function StackPage() {
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
            Technologies
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            Ma Stack
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Les technologies, frameworks et outils utilisés par Otis
            pour concevoir ses projets.
          </p>
        </header>

        {/* Catégories */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((category) => (
            <section
              key={category.title}
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
                {category.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-zinc-700
                      bg-zinc-950
                      px-3
                      py-2
                      text-sm
                      font-medium
                      text-zinc-300
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </main>
  );
}

