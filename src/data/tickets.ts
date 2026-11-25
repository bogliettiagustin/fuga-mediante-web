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

export const tickets: Ticket[] = [];

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
