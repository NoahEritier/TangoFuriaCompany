import type { Metadata } from "next";
import { HeaderA } from "@/components/marketing/header-a";
import { FooterA } from "@/components/marketing/footer-a";
import { CastGridA } from "@/components/marketing/elenco/cast-grid-a";

export const metadata: Metadata = {
  title: "Elenco",
  description:
    "Dirección artística, co-dirección y voz en vivo de Tango Furia Company, la compañía de tango escénico de Mar del Plata.",
};
export default function ElencoPage() {
  return (
    <>
      <HeaderA />
      <CastGridA />
      <FooterA />
    </>
  );
}
