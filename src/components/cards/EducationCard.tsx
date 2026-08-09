// src/components/cards/EducationCard.tsx

import Card from "@/components/ui/Card";

export default function EducationCard() {
  return (
    <Card
      href="/education"
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
            Parcours académique
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            FORMATION
          </h2>

          <p className="mt-4 text-sm leading-6 text-zinc-400">
            Découvrez le parcours académique et les domaines
            de formation d'Otis.
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm text-zinc-300">
            Master • Informatique • IA
          </p>

          <span className="mt-5 block font-medium text-red-500">
            Voir la formation →
          </span>
        </div>
      </div>
    </Card>
  );
}

