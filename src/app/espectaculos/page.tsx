import type { Metadata } from "next";
import { HeaderA } from "@/components/marketing/header-a";
import { FooterA } from "@/components/marketing/footer-a";
import { RepertoireA } from "@/components/marketing/espectaculos/repertoire-a";
import { SeasonA } from "@/components/marketing/espectaculos/season-a";

export const metadata: Metadata = {
  title: "Espectáculos",
  description: "Repertorio y calendario de temporada de Tango Furia Company en el Teatro Municipal Colón, Mar del Plata.",
};
export default function EspectaculosPage() {
  return (
    <>
      <HeaderA />
      <RepertoireA />
      <SeasonA />
      <FooterA />
    </>
  );
}
