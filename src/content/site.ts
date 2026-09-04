/**
 * Site-wide facts. Edited directly by Codice; every field here is sourced
 * from press dated 2025-2026 (see project brief) — do not add unverified data.
 */

export const siteConfig = {
  company: {
    name: "Tango Furia Company",
    director: "Emmanuel Marín",
    coDirector: "Lola Gutiérrez Rey",
    city: "Mar del Plata, Argentina",
  },

  venue: {
    name: "Teatro Municipal Colón",
    address: "Hipólito Yrigoyen 1665, Mar del Plata",
    // Recurring monthly season, not one-off shows.
    seasonMonths: ["mayo", "junio", "julio"] as const,
    seasonYear: 2026,
  },

  cast: {
    largeProductionSize: 30,
    touringCoreSize: 15,
    featuredSinger: "Anastasia Romanova",
  },

  awards: [
    { name: "Estrella de Mar — Mejor Espectáculo de Danza", year: 2024 },
    { name: "Estrella de Mar — Mejor Espectáculo de Danza", year: 2026 },
    { name: "Faro de Oro", year: 2024 },
    { name: "Declaración de Interés Cultural / Embajadores Turísticos", year: 2026 },
    { name: "Subcampeones, Mundial de Tango", year: 2020, note: "Emmanuel Marín y Lola Gutiérrez Rey" },
  ],

  social: {
    instagram: "https://instagram.com/tangofuriacompany",
    instagramHandle: "@tangofuriacompany",
  },

  contact: {
    // No dedicated inboxes confirmed yet — Instagram is the only channel today.
    // Pending: client to provide separate emails for prensa/booking vs. público general.
    generalNote: "Consultas generales por Instagram",
    pressBookingNote: "Prensa y booking: a confirmar con el cliente",
  },
} as const;
