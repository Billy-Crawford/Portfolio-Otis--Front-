
import Card from "@/components/ui/Card";
import { portfolio } from "@/data/portfolio";

export default function StackCard() {
  return (
    <Card
      href="/stack"
      className="
        group
        h-full
        min-h-0
        overflow-hidden
        bg-gradient-to-br
        from-zinc-900
        to-zinc-950
      "
    >
      <div className="flex h-full min-h-0 flex-col">
        {/* En-tête */}
        <div className="shrink-0">
          <p className="text-sm uppercase tracking-[0.25em] text-red-500">
            Technologies
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            STACK TECH
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Découvrez toutes les technologies utilisées par Otis.
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {portfolio.skills.slice(0, 1).map((skill) => (
            <span
              key={skill}
              className="
                max-w-full
                truncate
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

        {/* Lien en bas */}
        <div className="mt-auto pt-6">
          <span className="font-medium text-red-500 transition-colors group-hover:text-red-400">
            Voir toute la stack →
          </span>
        </div>
      </div>
    </Card>
  );
}
