// src/components/cards/ProfileCard.tsx

import Image from "next/image";
import Card from "@/components/ui/Card";
import { portfolio } from "@/data/portfolio";

export default function ProfileCard() {
  return (
    <Card
      href="#"
      className="
        relative
        h-full
        overflow-hidden
        bg-gradient-to-br
        from-zinc-950
        via-black
        to-red-950
      "
    >
      {/* Halo rouge */}
      <div
        className="
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-red-600/30
          blur-3xl
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Nom */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-red-500">
            Portfolio 
          </p>

          <h2 className="mt-3 text-5xl font-extrabold text-white">
            {portfolio.name}
          </h2>

          <p className="mt-3 text-lg text-zinc-300">
            {portfolio.role}
          </p>
        </div>

        {/* Skills */}
        <ul className="mt-8 space-y-3">
          {portfolio.skills.slice(0, 4).map((skill) => (
            <li
              key={skill}
              className="font-medium text-red-400"
            >
              • {skill}
            </li>
          ))}
        </ul>

        {/* Photo */}
        <div className="mt-auto flex justify-center">
          <div
            className="
              relative
              h-48
              w-48
              overflow-hidden
              rounded-full
              border-4
              border-red-500
              shadow-lg
              shadow-red-500/20
            "
          >
            <Image
              src="/images/profil.jpg"
              alt={`Photo de ${portfolio.name}`}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}