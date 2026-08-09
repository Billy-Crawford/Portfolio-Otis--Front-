// src/components/cards/PhotoCard.tsx

import Image from "next/image";
import Card from "@/components/ui/Card";
import { portfolio } from "@/data/portfolio";

export default function PhotoCard() {
  return (
    <Card
      href="/about"
      className="
        relative
        h-full
        overflow-hidden
        p-0
      "
    >
      <Image
        src="/images/profil.jpg"
        alt={`Photo de ${portfolio.name}`}
        fill
        priority
        className="
          object-cover
          transition-transform
          duration-500
          hover:scale-105
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-6
        "
      >
        <p className="text-sm uppercase tracking-[0.25em] text-red-400">
          Portrait
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          {portfolio.name}
        </h2>
      </div>
    </Card>
  );
}

