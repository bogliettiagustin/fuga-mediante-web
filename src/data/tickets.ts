export type Ticket = {
  title: string;
  /** ISO date (YYYY-MM-DD), used for the URL slug. */
  date: string;
  /** Human-readable date shown on the page. */
  dateLabel: string;
  time: string;
  venue: string;
  address: string;
  flyer: string;
  buyUrl: string;
};

export const tickets: Ticket[] = [
  {
    title: "FUGA MEDIANTE + VISTA AL FONDO - ABRE: NEW ROMAN",
    date: "2026-10-09",
    dateLabel: "Viernes 9 de octubre",
    time: "20hs",
    venue: "El Terzo Posto",
    address: "Julián Alvarez 958",
    flyer: "/images/tickets/fuga-mediante-vista-al-fondo.png",
    // TODO: reemplazar por el link real de venta de entradas.
    buyUrl: "#",
  },
];

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** /tickets/titulo-fecha-lugar */
export function getTicketSlug(ticket: Ticket) {
  return slugify(`${ticket.title} ${ticket.date} ${ticket.venue}`);
}

export function getTicketBySlug(slug: string) {
  return tickets.find((ticket) => getTicketSlug(ticket) === slug);
}
