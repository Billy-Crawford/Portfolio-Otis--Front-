// src/components/cards/StackCard.tsx

import Card from "@/components/ui/Card";
import { portfolio } from "@/data/portfolio";

export default function StackCard() {
  return (
    <Card
      href="/stack"
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
            Technologies
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            STACK TECH
          </h2>

          <p className="mt-3 text-sm text-zinc-400">
            Découvrez toutes les technologies utilisées par Otis.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {portfolio.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-zinc-700
                bg-zinc-800/70
                px-3
                py-2
                text-xs
                font-medium
                text-zinc-300
                transition-colors
                group-hover:border-red-500
                group-hover:text-red-400
              "
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <span className="font-medium text-red-500">
            Voir toute la stack →
          </span>
        </div>
      </div>
    </Card>
  );
}