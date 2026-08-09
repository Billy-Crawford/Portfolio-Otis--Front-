// src/components/ui/Card.tsx

import Link from "next/link";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
};

export default function Card({
  children,
  className = "",
  href,
  external = false,
}: CardProps) {
  const cardContent = (
    <div
      className={`
        h-full
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-red-500
        hover:shadow-red-500/20
        hover:shadow-xl
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </div>
  );

  if (!href) {
    return cardContent;
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={href}>
      {cardContent}
    </Link>
  );
}


