// src/app/socials/page.tsx

import Link from "next/link";
import { portfolio } from "@/data/portfolio";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaSnapchatGhost,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    username: "@otis",
    href: portfolio.socials.github,
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    username: "@otis",
    href: portfolio.socials.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    username: "@otis",
    href: portfolio.socials.instagram,
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    username: "@otis",
    href: portfolio.socials.tiktok,
    icon: FaTiktok,
  },
  {
    name: "Facebook",
    username: "Otis",
    href: portfolio.socials.facebook,
    icon: FaFacebook,
  },
  {
    name: "Snapchat",
    username: "@otis",
    href: portfolio.socials.snapchat,
    icon: FaSnapchatGhost,
  },
];

export default function SocialsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* Retour */}
        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-zinc-400
            transition-colors
            hover:text-red-500
          "
        >
          ← Retour au portfolio
        </Link>

        {/* Header */}
        <header className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Réseaux sociaux
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            Retrouvez-moi
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Retrouvez Otis sur ses différents réseaux sociaux
            et plateformes professionnelles.
          </p>
        </header>

        {/* Réseaux sociaux */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-900/50
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-500/50
                  hover:bg-zinc-900
                "
              >
                <div className="flex items-center gap-5">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-zinc-700
                      bg-zinc-950
                      text-zinc-300
                      transition-colors
                      group-hover:border-red-500
                      group-hover:text-red-500
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <h2 className="font-bold text-white">
                      {social.name}
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                      {social.username}
                    </p>
                  </div>
                </div>

                <span className="text-xl text-zinc-600 transition-colors group-hover:text-red-500">
                  ↗
                </span>
              </a>
            );
          })}
        </div>

      </div>
    </main>
  );
}