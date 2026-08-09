// src/components/cards/ProjectsCard.tsx

import Card from "@/components/ui/Card";

export default function ProjectsCard() {
  return (
    <Card
      href="/projects"
      className="
        h-full
        bg-gradient-to-br
        from-zinc-900
        to-zinc-950
      "
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest text-red-500">
            Portfolio
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            MES PROJETS
          </h2>

          <p className="mt-4 text-zinc-400">
            Découvrez toutes mes réalisations,
            applications web, projets IA et expérimentations.
          </p>
        </div>

        <div>
          <span className="font-medium text-red-500">
            Voir les projets →
          </span>
        </div>
      </div>
    </Card>
  );
}