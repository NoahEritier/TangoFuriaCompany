import { color, font } from "@/design/tokens";
import { siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const faqs = [
  { q: "¿Dónde son las funciones?", a: `${siteConfig.venue.name} — ${siteConfig.venue.address}.` },
  { q: "¿Cómo llego y hay estacionamiento?", a: "A confirmar con el teatro." },
  { q: "¿Cuánto dura la función?", a: "A confirmar con el teatro." },
  { q: "¿Hay límite de edad?", a: "A confirmar con el teatro." },
  { q: "¿Dónde compro entradas?", a: `Por ahora, exclusivamente por Instagram (${siteConfig.social.instagramHandle}).` },
  { q: "¿Cómo me entero de las próximas funciones?", a: "Instagram es la vía más actualizada; acá sumamos fechas a medida que el teatro las confirma." },
  { q: "¿Sos prensa o programador?", a: "Completá el formulario de Booking, más arriba, o escribinos por Instagram." },
];

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.venue.name}, ${siteConfig.venue.address}`
)}`;

/** Preguntas frecuentes + mapa. Sección secundaria de /contacto (el formulario va primero). */
export function FaqA() {
  return (
    <div style={{ background: color.noche, color: color.hueso }}>
      <div className="px-6 md:px-14 lg:px-20 pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[1320px]">
          <Eyebrow marginBottom={14}>Antes de venir</Eyebrow>
          <h2 style={{ margin: "0 0 32px", fontFamily: font.display, fontWeight: 320, fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1.06, letterSpacing: "-.01em" }}>
            Preguntas frecuentes
          </h2>

          <div className="max-w-3xl" style={{ borderTop: `1px solid ${color.furia}` }}>
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={Math.min(i * 60, 240)}>
                <div className="group transition-colors duration-300" style={{ padding: "20px 0", borderBottom: "1px solid rgba(138,19,50,.3)" }}>
                  <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 17, lineHeight: 1.3, marginBottom: 8 }}>{item.q}</div>
                  <div style={{ fontFamily: font.body, fontSize: 14.5, lineHeight: 1.6, color: "rgba(243,237,228,.7)" }}>{item.a}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:!text-[#F3EDE4]"
            style={{
              display: "inline-block",
              marginTop: 28,
              fontFamily: font.nav,
              fontSize: 11.5,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: color.estrella,
              borderBottom: "1px solid rgba(201,162,39,.4)",
              paddingBottom: 5,
            }}
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>

      <div className="px-6 md:px-14 lg:px-20 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="h-[380px] md:h-[480px]" style={{ position: "relative", overflow: "hidden", boxShadow: "0 30px 70px rgba(0,0,0,.45)" }}>
            <iframe
              src="/venue-map.html"
              title="Ubicación del Teatro Colón"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
            <div
              style={{
                position: "absolute",
                left: 24,
                bottom: 24,
                background: "rgba(243,237,228,.94)",
                padding: "16px 20px",
                boxShadow: "0 18px 40px rgba(27,21,18,.2)",
              }}
            >
              <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 18, lineHeight: 1.1, color: color.noche }}>{siteConfig.venue.name}</div>
              <div style={{ marginTop: 6, fontFamily: font.body, fontSize: 12, color: "rgba(27,21,18,.6)" }}>{siteConfig.venue.address}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
