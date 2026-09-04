/**
 * Design tokens ported 1:1 from the Claude Design handoff
 * (`Tango Furia Landing.dc.html`) — exact hex values, exact font stacks.
 * Any component recreating a section from that file should read colors
 * and fonts from here, not hardcode them again.
 */

export const color = {
  noche: "#1B1512",
  nocheDeep: "#0f0b09", // darker alternate used between Noche sections
  hueso: "#F3EDE4",
  furia: "#8A1332",
  ambar: "#B8792E",
  atlantico: "#16454A",
  estrella: "#C9A227",
} as const;

export const font = {
  display: "var(--font-fraunces), Fraunces, serif",
  nav: "var(--font-archivo), Archivo, sans-serif",
  body: "var(--font-plex), 'IBM Plex Sans', sans-serif",
} as const;

export const easing = "cubic-bezier(.2,.7,.2,1)";
