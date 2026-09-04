import { color, font } from "@/design/tokens";
import { siteConfig } from "@/content/site";

const faqs = [
  { q: "¿Dónde son las funciones?", a: `${siteConfig.venue.name} — ${siteConfig.venue.address}.` },
  { q: "¿Cómo llego y hay estacionamiento?", a: "A confirmar con el teatro." },
  { q: "¿Cuánto dura la función?", a: "A confirmar con el teatro." },
  { q: "¿Hay límite de edad?", a: "A confirmar con el teatro." },
  { q: "¿Dónde compro entradas?", a: `Por ahora, exclusivamente por Instagram (${siteConfig.social.instagramHandle}).` },
  { q: "¿Cómo me entero de las próximas funciones?", a: "Instagram es la vía más actualizada; acá sumamos fechas a medida que el teatro las confirma." },
  { q: "¿Sos prensa o programador?", a: "Ver Sala de Prensa, o la sección de Booking más abajo." },
];

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.venue.name}, ${siteConfig.venue.address}`
)}`;

/** Dirección 1a — Noche. FAQ arriba (info práctica + preguntas del espectador), mapa grande debajo. */
export function FaqA() {
  return (
    <div style={{ background: color.noche, color: color.hueso }}>
      <div className="px-6 md:px-14 pt-16 pb-12 md:pt-24 md:pb-16">
        <h1 style={{ margin: "0 0 32px", fontFamily: font.display, fontWeight: 400, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.04, letterSpacing: "-.01em" }}>
          Contacto
        </h1>

        <div className="max-w-3xl" style={{ borderTop: `1px solid ${color.furia}` }}>
          {faqs.map((item) => (
            <div key={item.q} style={{ padding: "22px 0", borderBottom: "1px solid rgba(138,19,50,.3)" }}>
              <div style={{ fontFamily: font.display, fontSize: 19, lineHeight: 1.3, marginBottom: 8 }}>{item.q}</div>
              <div style={{ fontFamily: font.body, fontSize: 15, lineHeight: 1.6, color: "rgba(243,237,228,.7)" }}>{item.a}</div>
            </div>
          ))}
        </div>

        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
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

      <div className="px-6 md:px-14 pb-16 md:pb-24">
        <div className="h-[420px] md:h-[560px]" style={{ position: "relative", overflow: "hidden", boxShadow: "0 30px 70px rgba(0,0,0,.45)" }}>
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
              padding: "18px 22px",
              boxShadow: "0 18px 40px rgba(27,21,18,.2)",
            }}
          >
            <div style={{ fontFamily: font.display, fontSize: 20, lineHeight: 1.1, color: color.noche }}>{siteConfig.venue.name}</div>
            <div style={{ marginTop: 6, fontFamily: font.body, fontSize: 12.5, color: "rgba(27,21,18,.6)" }}>{siteConfig.venue.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
