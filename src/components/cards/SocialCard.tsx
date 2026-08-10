// src/components/cards/SocialCard.tsx

import Card from "@/components/ui/Card";

export default function SocialCard() {
  return (
    <Card
      href="/socials"
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
            Réseaux
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            SOCIALS
          </h2>

          <p className="mt-4 text-sm leading-6 text-zinc-400">
            Retrouvez Otis sur ses différents réseaux sociaux
            et plateformes professionnelles.
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {["GitHub", "LinkedIn", "Instagram",].map(
              (social) => (
                <span
                  key={social}
                  className="
                    rounded-full
                    border
                    border-zinc-700
                    bg-zinc-800/70
                    px-3
                    py-0.5
                    text-xs
                    text-zinc-300
                  "
                >
                  {social}
                </span>
              )
            )}
          </div>
        </div>

        <div className="pt-2">
          <span className="font-medium text-red-500">
            Voir mes réseaux →
          </span>
        </div>
      </div>
    </Card>
  );
}