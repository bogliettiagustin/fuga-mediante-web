import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTicketSlug, tickets } from "@/data/tickets";

export const metadata: Metadata = {
  title: "Entradas — Fuga Mediante",
  description: "Todas las fechas y entradas de Fuga Mediante.",
};

export default function TicketsPage() {
  return (
    <ul className="mx-auto grid w-full max-w-[1246px] grid-cols-1 justify-items-center gap-[50px] sm:grid-cols-2 lg:grid-cols-3">
      {tickets.map((ticket) => (
        <li key={getTicketSlug(ticket)} className="w-full max-w-[382px]">
          <Link
            href={`/tickets/${getTicketSlug(ticket)}`}
            className="block transition-transform duration-200 hover:-translate-y-1"
          >
            <Image
              src={ticket.flyer}
              alt={ticket.title}
              width={382}
              height={467}
              sizes="(min-width: 640px) 382px, 100vw"
              className="h-auto w-full"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
