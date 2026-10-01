export type Ticket = {
  title: string;
  /** ISO date (YYYY-MM-DD), used for the URL slug. */
  date: string;
  /** Human-readable date shown on the page. */
  dateLabel: string;
  time: string;
  venue: string;
  venueUrl?: string;
  address: string;
  addressUrl?: string;
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
    venueUrl: "https://www.instagram.com/elterzoposto/",
    address: "Julián Alvarez 958",
    addressUrl: "https://maps.app.goo.gl/GdZvcNSy4X3cDZtBA",
    flyer: "/images/tickets/fuga-mediante-vista-al-fondo.png",
    buyUrl:
      "https://www.terzoposto.club/entradas/show-de-fuga-mediante-2026-10-09?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  },
];

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
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
