import Link from "next/link";
import { color, font } from "@/design/tokens";
import { siteConfig } from "@/content/site";
import { NewsletterForm } from "./newsletter-form";
import { ExampleBadge } from "@/components/ui/placeholder-image";
import { Logo } from "./logo";

const col = { fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase" as const, color: color.estrella, marginBottom: 22, fontFamily: font.body };
const link = { color: "rgba(243,237,228,.8)", fontSize: 15 };

export function FooterA() {
  return (
    <footer style={{ padding: "80px 24px 40px", background: color.nocheDeep, color: color.hueso }} className="md:!px-14">
      <div className="grid gap-14 pb-18 md:grid-cols-[1.4fr_1fr_1fr_1fr]" style={{ paddingBottom: 72 }}>
        <div className="min-w-0">
          <Logo size={30} />
          <div style={{ marginTop: 14, fontFamily: font.body, fontSize: 13, color: "rgba(243,237,228,.5)" }}>
            Compañía de tango escénico · {siteConfig.company.city}
          </div>
        </div>

        <div className="min-w-0">
          <div style={col}>Público</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: font.body }}>
            <Link href="/espectaculos" style={link}>Entradas y funciones</Link>
            <Link href="/contacto" style={link}>Preguntas frecuentes</Link>
            <span style={{ ...link, color: "rgba(243,237,228,.45)", fontSize: 13 }}>
              Reservas por Instagram: {siteConfig.social.instagramHandle}
            </span>
          </div>
        </div>

        <div className="min-w-0">
          <div style={col}>Prensa y booking</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: font.body }}>
            <span style={link}>
              prensa@tangofuria.com
              <ExampleBadge />
            </span>
            <Link href="/contacto" style={link}>Booking internacional</Link>
            <Link href="/prensa" style={link}>Sala de prensa · Rider técnico</Link>
          </div>
        </div>

        <div className="min-w-0">
          <div style={col}>Newsletter</div>
          <NewsletterForm borderColor="rgba(243,237,228,.35)" textColor={color.hueso} />
          <div style={{ display: "flex", gap: 22, marginTop: 30, fontFamily: font.body, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase" }}>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(243,237,228,.7)" }}>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: font.body, fontSize: 12, color: "rgba(243,237,228,.4)" }}>
        <div>© {new Date().getFullYear()} Tango Furia Company. Sitio por Codice.</div>
      </div>
    </footer>
  );
}
