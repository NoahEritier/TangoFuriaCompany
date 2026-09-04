import type { Metadata } from "next";
import { HeaderA } from "@/components/marketing/header-a";
import { FooterA } from "@/components/marketing/footer-a";
import { FaqA } from "@/components/marketing/contacto/faq-a";
import { BookingSectionA } from "@/components/marketing/contacto/booking-section-a";
import { Eyebrow } from "@/components/ui/eyebrow";
import { color, font } from "@/design/tokens";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Preguntas frecuentes, ubicación del Teatro Municipal Colón y booking internacional de Tango Furia Company.",
};

export default function ContactoPage() {
  return (
    <>
      <HeaderA />
      <div className="px-6 md:px-14 pt-14 pb-8 md:pt-20 md:pb-10" style={{ background: color.noche, color: color.hueso }}>
        <Eyebrow marginBottom={14}>Tango Furia Company</Eyebrow>
        <h1 style={{ margin: 0, fontFamily: font.display, fontWeight: 320, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.04, letterSpacing: "-.01em" }}>
          Contacto
        </h1>
      </div>
      <BookingSectionA />
      <FaqA />
      <FooterA />
    </>
  );
}
