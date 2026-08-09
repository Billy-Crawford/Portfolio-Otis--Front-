// src/components/layout/Header.tsx

export default function Header() {
    return (
        <header className="border-b border-zinc-800">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                <h1 className="text-3xl font-bold text-white">
                    OTIS
                </h1>

                <nav className="flex gap-8 text-white">
                    <a href="#">Acceuil</a>
                    <a href="#">Projets</a>
                    <a href="#">Compétences</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
        </header>
    );
}