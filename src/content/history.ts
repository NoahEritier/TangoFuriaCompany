/**
 * Verified milestones only (press dated 2025-2026, per project brief).
 * No founding year is given anywhere in the brief — don't compute or
 * invent one. Shared by Historia and Sala de Prensa so every page cites
 * the same facts instead of each rewriting them from memory.
 */
export type Milestone = {
  id: string;
  date: string; // ISO date when known, else just the year as "YYYY"
  title: string;
  description: string;
};

export const milestones: Milestone[] = [
  {
    id: "mundial-2020",
    date: "2020",
    title: "Subcampeones del Mundial de Tango",
    description: "Emmanuel Marín y Lola Gutiérrez Rey, subcampeones del Mundial de Tango.",
  },
  {
    id: "estrella-2024",
    date: "2024",
    title: "Premio Estrella de Mar",
    description: "Mejor Espectáculo de Danza, temporada de verano en Mar del Plata.",
  },
  {
    id: "faro-2024",
    date: "2024",
    title: "Premio Faro de Oro",
    description: "Reconocimiento a la trayectoria escénica de la compañía.",
  },
  {
    id: "eterno-2025",
    date: "2025-01-11",
    title: 'Estreno de "Eterno"',
    description: "Nueva producción sumada al repertorio de temporada junto a \"Tango Furia\".",
  },
  {
    id: "mumbai-2025",
    date: "2025-01",
    title: "Festival Mood Indigo, Mumbai",
    description: "Primera gira de la compañía por India.",
  },
  {
    id: "estrella-2026",
    date: "2026",
    title: "Premio Estrella de Mar",
    description: "Mejor Espectáculo de Danza, por segunda vez.",
  },
  {
    id: "interes-cultural-2026",
    date: "2026",
    title: "Declaración de Interés Cultural",
    description: "Embajadores Turísticos de Mar del Plata.",
  },
  {
    id: "polonia-2026",
    date: "2026-05-15",
    title: "Gira por Polonia",
    description:
      "Salida desde el Hotel Hermitage de Mar del Plata hacia Łukowica, Varsovia, Cracovia y Kielce: funciones, milongas y masterclasses.",
  },
  {
    id: "embajada-2026",
    date: "2026-05-25",
    title: "Embajada Argentina en Varsovia",
    description: "Función especial por el 25 de mayo.",
  },
];

export const tourStops = [
  { city: "Mumbai", country: "India", note: "Festival Mood Indigo", year: "2025" },
  { city: "Varsovia", country: "Polonia", note: "Función en la Embajada Argentina", year: "2026" },
  { city: "Cracovia", country: "Polonia", note: "Función y milonga abierta", year: "2026" },
  { city: "Kielce", country: "Polonia", note: "Masterclass dictada por el elenco", year: "2026" },
  { city: "Łukowica", country: "Polonia", note: "Taller y función", year: "2026" },
] as const;
