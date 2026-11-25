import Image from "next/image";
import { Download } from "lucide-react";
import type { ComponentType } from "react";
import SiteNav from "./SiteNav";
import LoopVideo from "./LoopVideo";
import { AppleMusicIcon, SpotifyIcon, YouTubeIcon } from "./StreamingIcons";

const streamingLinks: {
  service: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
}[] = [
  {
    service: "Spotify",
    href: "https://open.spotify.com/track/08PIE5ZnyUeavmc4of9shx?utm_source=copy-link&utm_medium=social&utm_content=link_in_bio",
    Icon: SpotifyIcon,
  },
  {
    service: "Apple Music",
    href: "https://music.apple.com/ar/album/disimular-single/6830963458",
    Icon: AppleMusicIcon,
  },
  {
    service: "YouTube",
    href: "https://youtu.be/Gnhm5AQTsHg?si=EmQoaqwi3HTAjQKd",
    Icon: YouTubeIcon,
  },
];

export default function DisimularContent() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center px-6 pt-[33px] pb-16 text-center">
      <SiteNav />

      <Image
        src="/images/logo.svg"
        alt="Fuga Mediante"
        width={213}
        height={47}
        priority
        className="mt-10"
      />

      <h1 className="mt-8 w-full text-center font-display uppercase leading-[0.95] text-ink text-6xl sm:text-7xl">
        Disimular
      </h1>

      <p className="mt-6 w-full text-center text-lg font-bold leading-7 text-ink">
        Single ya disponible
      </p>

      <div className="mt-2.5 w-full">
        <LoopVideo src="/videos/disimular.mp4" label="Fuga Mediante — Disimular" />
      </div>

      <ul className="mt-2.5 flex flex-col items-center gap-[15px]">
        {streamingLinks.map(({ service, href, Icon }) => (
          <li
            key={service}
            className="flex items-center gap-2 text-lg font-bold leading-7 text-ink"
          >
            Escuchar en
            <Icon className="h-5 w-5 shrink-0" />
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
            >
              {service}
            </a>
          </li>
        ))}
        <li className="flex items-center gap-2 text-lg font-bold leading-7 text-ink">
          <Download className="h-5 w-5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
          <a
            href="/press/fuga-mediante-dossier-de-prensa.pdf"
            download="fuga-mediante-dossier-de-prensa.pdf"
            className="underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
          >
            Ver Dossier
            <span className="sr-only"> (descarga PDF, 1,5 MB)</span>
          </a>
        </li>
      </ul>

      <footer className="mt-16 text-sm text-ink/50">Fuga Mediante - 2026</footer>
    </main>
  );
}
