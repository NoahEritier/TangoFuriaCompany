import type { Metadata } from "next";
import { HeaderA } from "@/components/marketing/header-a";
import { FooterA } from "@/components/marketing/footer-a";
import { AwardsPressA } from "@/components/marketing/prensa/awards-press-a";

export const metadata: Metadata = {
  title: "Sala de Prensa",
  description:
    "Reconocimientos, trayectoria y recursos de contacto para prensa y programadores de festivales de Tango Furia Company.",
};

export default function Prensa() {
  return (
    <>
      <HeaderA />
      <AwardsPressA />
      <FooterA />
    </>
  );
}
