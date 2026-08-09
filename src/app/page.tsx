// src/app/page.tsx

import Header from "@/components/layout/Header";
import PortfolioGrid from "@/components/layout/PortfolioGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <PortfolioGrid />
    </main>
  );
}

