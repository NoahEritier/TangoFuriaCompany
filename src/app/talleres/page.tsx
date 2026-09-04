import type { Metadata } from "next";
import { HeaderA } from "@/components/marketing/header-a";
import { FooterA } from "@/components/marketing/footer-a";
import { WorkshopsA } from "@/components/marketing/talleres/workshops-a";

export const metadata: Metadata = {
  title: "Talleres",
  description:
    "Talleres y masterclasses de tango dictados por el elenco de Tango Furia Company en Mar del Plata.",
};
export default function Talleres() {
  return (
    <>
      <HeaderA />
      <WorkshopsA />
      <FooterA />
    </>
  );
}
