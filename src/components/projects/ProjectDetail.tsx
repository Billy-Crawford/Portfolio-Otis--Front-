// src/components/projects/ProjectDetail.tsx

import Image from "next/image";
import Link from "next/link";

type ProjectDetailProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];

  github?: string;
  demo?: string;
};

export default function ProjectDetail({
  title,
  category,
  description,
  image,
  technologies,
  github,
  demo,
}: ProjectDetailProps) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">

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
        <div className="mt-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            {category}
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="relative mt-12 aspect-video overflow-hidden rounded-3xl border border-zinc-800">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Technologies */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Technologies utilisées
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-zinc-800
                  bg-zinc-900
                  px-4
                  py-2
                  text-sm
                  text-zinc-300
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Liens */}
        {(github || demo) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  text-black
                  transition-transform
                  hover:scale-105
                "
              >
                Voir le code
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  bg-red-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition-transform
                  hover:scale-105
                "
              >
                Voir le projet
              </a>
            )}
          </div>
        )}

      </div>
    </main>
  );
}