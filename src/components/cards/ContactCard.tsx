// src/components/cards/ContactCard.tsx

import Card from "@/components/ui/Card";
import { portfolio } from "@/data/portfolio";

export default function ContactCard() {
  return (
    <Card
      href="/contact"
      className="
        h-full
        bg-gradient-to-br
        from-red-950
        via-zinc-950
        to-zinc-950
      "
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-red-400">
            Parlons-en
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            CONTACT
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">
            Un projet, une collaboration ou simplement envie
            d'échanger ? Otis est disponible pour discuter.
          </p>
        </div>

        <div className="flex items-end justify-between gap-4 pt-8">
          <span className="truncate text-sm text-zinc-300">
            {portfolio.contact.email}
          </span>

          <span className="shrink-0 font-medium text-red-400">
            Me contacter →
          </span>
        </div>
      </div>
    </Card>
  );
}

