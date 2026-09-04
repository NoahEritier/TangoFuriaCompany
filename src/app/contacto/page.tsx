import type { Metadata } from "next";
import { HeaderA } from "@/components/marketing/header-a";
import { FooterA } from "@/components/marketing/footer-a";
import { FaqA } from "@/components/marketing/contacto/faq-a";
import { BookingSectionA } from "@/components/marketing/contacto/booking-section-a";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Preguntas frecuentes, ubicación del Teatro Municipal Colón y booking internacional de Tango Furia Company.",
};
export default function ContactoPage() {
  return (
    <>
      <HeaderA />
      <FaqA />
      <BookingSectionA />
      <FooterA />
    </>
  );
}
