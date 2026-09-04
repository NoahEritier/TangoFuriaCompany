/**
 * Show + season content. This is the "CMS": a typed data file Codice edits
 * directly and redeploys. `src/lib/shows.ts` wraps access to this file behind
 * accessor functions — if the client later needs to self-edit the season
 * without a developer, swap those accessors for a headless CMS client
 * (e.g. Sanity) without touching any page or component.
 */

export type Show = {
  slug: string;
  title: string;
  kind: "insignia" | "estreno";
  premiereDate?: string; // ISO date, only set when confirmed by press
  tagline: string;
  synopsis: string;
};

export const shows: Show[] = [
  {
    slug: "tango-furia",
    title: "Tango Furia",
    kind: "insignia",
    tagline: "El espectáculo insignia de la compañía",
    synopsis:
      "La obra que da nombre a la compañía, en cartel recurrente en cada temporada del Teatro Municipal Colón y eje del repertorio que Tango Furia Company llevó a escenarios de Europa y Asia.",
  },
  {
    slug: "eterno",
    title: "Eterno",
    kind: "estreno",
    premiereDate: "2025-01-11",
    tagline: "Estrenado el 11 de enero de 2025",
    synopsis:
      "La producción más reciente de la compañía, sumada al repertorio de temporada junto a \"Tango Furia\".",
  },
];

export type SeasonBlock = {
  id: string;
  showSlug: string;
  month: string;
  year: number;
  venue: string;
  address: string;
  // Exact days/times per month are not yet confirmed by the client — see
  // pending decisions. Keep this field null until real dates land; the UI
  // must not render a fabricated date.
  exactDates: string[] | null;
  ticketingUrl: string | null;
};

// Recurring monthly season at Teatro Municipal Colón — confirmed for
// mayo/junio/julio 2026 by press, exact calendar days not yet public.
export const seasonBlocks: SeasonBlock[] = [
  {
    id: "2026-05",
    showSlug: "tango-furia",
    month: "Mayo",
    year: 2026,
    venue: "Teatro Municipal Colón",
    address: "Hipólito Yrigoyen 1665, Mar del Plata",
    exactDates: null,
    ticketingUrl: null,
  },
  {
    id: "2026-06",
    showSlug: "tango-furia",
    month: "Junio",
    year: 2026,
    venue: "Teatro Municipal Colón",
    address: "Hipólito Yrigoyen 1665, Mar del Plata",
    exactDates: null,
    ticketingUrl: null,
  },
  {
    id: "2026-07",
    showSlug: "tango-furia",
    month: "Julio",
    year: 2026,
    venue: "Teatro Municipal Colón",
    address: "Hipólito Yrigoyen 1665, Mar del Plata",
    exactDates: null,
    ticketingUrl: null,
  },
];
