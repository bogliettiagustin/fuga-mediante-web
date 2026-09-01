import Image from "next/image";
import { SquarePlay } from "lucide-react";
import VideoGrid from "./VideoGrid";

const YOUTUBE_URL = "https://www.youtube.com/watch?v=PDvyqen36b8";

export default function MainContent() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center px-6 py-16 text-center">
      <Image
        src="/images/logo.svg"
        alt="Fuga Mediante"
        width={213}
        height={47}
        priority
      />

      <h1 className="mt-8 w-full text-center font-display uppercase leading-[0.95] text-ink text-6xl sm:text-7xl">
        <span className="block">No Te</span>
        <span className="block">Confundas</span>
        <span className="block">Más</span>
      </h1>

      <p className="mt-6 w-full text-center text-lg font-bold text-ink">
        Videoclip ya disponible
      </p>

      <div className="mt-6 w-full">
        <VideoGrid />
      </div>

      <a
        href={YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center gap-2 text-lg font-bold text-ink"
      >
        Ver en
        <SquarePlay className="h-5 w-5" strokeWidth={2} />
        <span className="underline underline-offset-4">YouTube</span>
      </a>

      <footer className="mt-16 text-sm text-ink/50">
        Fuga Mediante - 2026
      </footer>
    </main>
  );
}
