// src/components/cards/GithubCard.tsx

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { portfolio } from "@/data/portfolio";

export default function GithubCard() {
  return (
    <Card
      href={portfolio.socials.github}
      external
      className="
        h-full
        bg-gradient-to-br
        from-zinc-900
        to-zinc-950
      "
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <SectionTitle title="Github" />

          <p className="mt-4 text-zinc-400">
            Découvrez mes projets open source,
            contributions et expérimentations.
          </p>
        </div>

        <div>
          <span className="font-medium text-red-500">
            Voir mon profil →
          </span>
        </div>
      </div>
    </Card>
  );
}

