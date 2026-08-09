// src/components/cards/ExperienceCard.tsx

import Card from "@/components/ui/Card";

export default function ExperienceCard() {
  return (
    <Card
      href="/experience"
      className="
        h-full
        bg-gradient-to-br
        from-zinc-900
        to-zinc-950
      "
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-red-500">
            Parcours
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            EXPÉRIENCE
          </h2>

          <p className="mt-4 text-sm leading-6 text-zinc-400">
            Découvrez le parcours professionnel et les
            expériences d'Otis.
          </p>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-red-500" />

            <span className="text-sm text-zinc-300">
              Développement Web & IA
            </span>
          </div>

          <span className="mt-5 block font-medium text-red-500">
            Voir le parcours →
          </span>
        </div>
      </div>
    </Card>
  );
}

