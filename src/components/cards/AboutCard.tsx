// src/components/cards/AboutCard.tsx

import Card from "@/components/ui/Card";
import { portfolio } from "@/data/portfolio";

export default function AboutCard() {
  return (
    <Card
      href="/about"
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
            Profil
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            À PROPOS
          </h2>

          <p className="mt-4 text-sm leading-6 text-zinc-400">
            {portfolio.bio}
          </p>
        </div>

        <div className="pt-6">
          <span className="font-medium text-red-500">
            En savoir plus →
          </span>
        </div>
      </div>
    </Card>
  );
}

