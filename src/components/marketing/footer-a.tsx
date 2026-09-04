import Link from "next/link";
import { color, font } from "@/design/tokens";
import { siteConfig } from "@/content/site";
import { NewsletterForm } from "./newsletter-form";

const col = { fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase" as const, color: color.estrella, marginBottom: 22, fontFamily: font.nav };
const link = { color: "rgba(243,237,228,.8)", fontSize: 15, transition: "color .25s" };

export function FooterA() {
  return (
    <footer style={{ padding: "72px 24px 36px", background: color.nocheDeep, color: color.hueso }} className="md:!px-16">
      <div className="grid gap-14 pb-14 sm:grid-cols-2" style={{ maxWidth: 640 }}>
        <div className="min-w-0">
          <div style={col}>Público</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: font.body }}>
            <Link href="/espectaculos" className="hover:!text-[#F3EDE4]" style={link}>Entradas y funciones</Link>
            <Link href="/contacto" className="hover:!text-[#F3EDE4]" style={link}>Preguntas frecuentes</Link>
            <span style={{ ...link, color: "rgba(243,237,228,.45)", fontSize: 13 }}>
              Reservas por Instagram: {siteConfig.social.instagramHandle}
            </span>
          </div>
        </div>

        <div className="min-w-0">
          <div style={col}>Newsletter</div>
          <NewsletterForm borderColor="rgba(243,237,228,.35)" textColor={color.hueso} />
          <div style={{ display: "flex", gap: 22, marginTop: 30, fontFamily: font.nav, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase" }}>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:!text-[#F3EDE4]"
              style={{ color: "rgba(243,237,228,.7)", transition: "color .25s" }}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "rgba(243,237,228,.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", fontFamily: font.body, fontSize: 12, color: "rgba(243,237,228,.4)" }}>
        <div>© {new Date().getFullYear()} Tango Furia Company. Sitio por Codice.</div>
      </div>
    </footer>
  );
}
