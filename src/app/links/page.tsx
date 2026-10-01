import type { Metadata } from "next";
import LinkCard from "@/components/LinkCard";
import SiteNav from "@/components/SiteNav";
import { links } from "@/data/links";

export const metadata: Metadata = {
  title: "Links — Fuga Mediante",
  description: "Todos los links de Fuga Mediante: música, notas, entradas y videos.",
};

export default function LinksPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#f4eee2] px-6 pt-[33px] pb-12 text-black">
      <SiteNav />

      <h1 className="mt-10 text-center text-[40px] font-bold leading-[0.9]">
        Links
      </h1>

      <ul className="mx-auto mt-[50px] grid w-full max-w-[1104px] flex-1 grid-cols-1 content-start justify-items-center gap-[50px] sm:grid-cols-2">
        {links.map((link, index) => (
          <li key={link.title} className="w-full max-w-[527px]">
            <LinkCard {...link} eager={index < 2} />
          </li>
        ))}
      </ul>

      <footer className="mt-16 text-center text-xs font-bold leading-[0.9] text-[#8e8e8e]">
        Fuga Mediante - 2026
      </footer>
    </main>
  );
}
