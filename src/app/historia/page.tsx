import type { Metadata } from "next";
import { HeaderA } from "@/components/marketing/header-a";
import { FooterA } from "@/components/marketing/footer-a";
import { TimelineA } from "@/components/marketing/historia/timeline-a";
import { TourA } from "@/components/marketing/historia/tour-a";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "Hitos verificados de Tango Furia Company: torneos, estrenos, premios y las giras internacionales que llevaron a la compañía de Mar del Plata a India y Polonia.",
};
export default function HistoriaPage() {
  return (
    <>
      <HeaderA />
      <TimelineA />
      <TourA />
      <FooterA />
    </>
  );
}
