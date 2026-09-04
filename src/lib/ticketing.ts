/**
 * Ticketing is not integrated yet — reservations run through Instagram DM.
 * This resolver is the single seam to connect a platform later
 * (Passline / All Access / Central Ticket / Vivex, client's call).
 * Every "comprar entradas" CTA in the UI must call this instead of
 * hardcoding a URL, so wiring a real platform is a one-file change.
 */
import type { SeasonBlock } from "@/content/shows";
import { siteConfig } from "@/content/site";

export type TicketingCta =
  | { mode: "buy"; url: string; label: string }
  | { mode: "instagram"; url: string; label: string };

export function getTicketingCta(block: SeasonBlock): TicketingCta {
  if (block.ticketingUrl) {
    return { mode: "buy", url: block.ticketingUrl, label: "Comprar entradas" };
  }
  return {
    mode: "instagram",
    url: siteConfig.social.instagram,
    label: "Reservar por Instagram",
  };
}
