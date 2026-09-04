import { HeaderA } from "@/components/marketing/header-a";
import { FooterA } from "@/components/marketing/footer-a";
import { HeroA } from "@/components/marketing/inicio/hero-a";
import { RepertoireA } from "@/components/marketing/inicio/repertoire-a";
import { ReelA } from "@/components/marketing/inicio/reel-a";
import { CompanyA } from "@/components/marketing/inicio/company-a";
import { InstagramA } from "@/components/marketing/inicio/instagram-a";
import { BookingSectionA } from "@/components/marketing/contacto/booking-section-a";

export default function Home() {
  return (
    <>
      <HeaderA />
      <HeroA />
      <RepertoireA />
      <ReelA />
      <CompanyA />
      <InstagramA />
      <BookingSectionA />
      <FooterA />
    </>
  );
}
