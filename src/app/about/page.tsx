// src/app/about/page.tsx

import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">

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

        {/* En-tête */}
        <section className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px] lg:items-center">
          
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              À propos de moi
            </p>

            <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
              {portfolio.name}
            </h1>

            <p className="mt-4 text-xl text-zinc-300">
              {portfolio.role}
            </p>

            <p className="mt-8 max-w-2xl whitespace-pre-line text-lg leading-8 text-zinc-400">
              {portfolio.bio}
            </p>
          </div>

          {/* Photo */}
          <div
            className="
              relative
              mx-auto
              h-72
              w-72
              overflow-hidden
              rounded-[2rem]
              border
              border-zinc-800
              bg-zinc-900
              lg:mx-0
            "
          >
            <Image
              src="/images/profil.jpg"
              alt={`Photo de ${portfolio.name}`}
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Stack */}
        <section className="mt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Technologies
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Ce que j'utilise
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {portfolio.skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  border
                  border-zinc-800
                  bg-zinc-900
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-zinc-300
                  transition-colors
                  hover:border-red-500/50
                  hover:text-red-400
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Philosophie */}
        <section className="mt-24 grid gap-6 md:grid-cols-2">

          <div
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900/50
              p-8
            "
          >
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Ma vision
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Créer avec intention.
            </h2>

            <p className="mt-5 leading-7 text-zinc-400">
              Je cherche à concevoir des produits numériques
              utiles, modernes et agréables à utiliser, en
              combinant une bonne expérience utilisateur avec
              une architecture technique solide.
            </p>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900/50
              p-8
            "
          >
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Mon approche
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Apprendre. Construire. Améliorer.
            </h2>

            <p className="mt-5 leading-7 text-zinc-400">
              Chaque projet est une occasion d'apprendre,
              d'expérimenter et d'améliorer mes compétences.
              J'aime transformer une idée en une solution
              concrète et fonctionnelle.
            </p>
          </div>

        </section>

        {/* CTA */}
        <section
          className="
            mt-24
            rounded-[2rem]
            border
            border-red-500/20
            bg-red-950/10
            p-8
            md:p-12
          "
        >
          <p className="text-sm uppercase tracking-[0.25em] text-red-500">
            Un projet ?
          </p>

          <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Construisons quelque chose ensemble.
              </h2>

              <p className="mt-3 max-w-xl text-zinc-400">
                Une idée, une collaboration ou une opportunité ?
                N'hésitez pas à me contacter.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-red-600
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                hover:bg-red-500
                hover:shadow-lg
                hover:shadow-red-950
              "
            >
              Me contacter →
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}