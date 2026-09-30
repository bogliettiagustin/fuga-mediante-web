import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTicketBySlug, getTicketSlug, tickets } from "@/data/tickets";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return tickets.map((ticket) => ({ slug: getTicketSlug(ticket) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ticket = getTicketBySlug((await params).slug);
  if (!ticket) return {};

  return {
    title: `${ticket.title} — Entradas — Fuga Mediante`,
    description: `${ticket.dateLabel}, ${ticket.time} en ${ticket.venue} (${ticket.address}).`,
  };
}

export default async function TicketPage({ params }: Props) {
  const ticket = getTicketBySlug((await params).slug);
  if (!ticket) notFound();

  return (
    <article className="mx-auto flex w-full max-w-[1247px] flex-col items-start gap-8 md:flex-row md:gap-[31px]">
      <Image
        src={ticket.flyer}
        alt={ticket.title}
        width={592}
        height={724}
        sizes="(min-width: 768px) 592px, 100vw"
        priority
        className="h-auto w-full md:w-[47.5%] md:shrink-0"
      />

      <div className="flex w-full flex-col items-start gap-[30px]">
        <h2 className="text-[40px] font-bold leading-[0.9] sm:text-[50px]">
          {ticket.title}
        </h2>

        <dl className="flex w-full flex-col gap-5 text-xl font-bold leading-[0.9]">
          <dt className="sr-only">Fecha</dt>
          <dd>{ticket.dateLabel}</dd>
          <dt className="sr-only">Hora</dt>
          <dd>{ticket.time}</dd>
          <dt className="sr-only">Lugar</dt>
          <dd>{ticket.venue}</dd>
          <dt className="sr-only">Ubicación</dt>
          <dd>{ticket.address}</dd>
        </dl>

        <a
          href={ticket.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[5px] bg-black px-[10px] py-5 text-xl font-bold leading-[0.9] text-[#f4eee2] transition-opacity hover:opacity-80"
        >
          Comprar
        </a>
      </div>
    </article>
  );
}
