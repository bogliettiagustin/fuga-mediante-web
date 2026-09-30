import type { ReactNode } from "react";
import Link from "next/link";

export default function TicketsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#f4eee2] px-6 pt-[50px] pb-12 text-black">
      <Link href="/tickets">
        <h1 className="text-center text-5xl font-bold leading-[0.9] sm:text-[60px]">
          Entradas
        </h1>
      </Link>

      <div className="mt-16 w-full flex-1 sm:mt-[80px]">{children}</div>

      <footer className="mt-16 text-center text-xs font-bold leading-[0.9] text-[#8e8e8e]">
        Fuga Mediante - 2026
      </footer>
    </main>
  );
}
