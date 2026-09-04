import { color, font } from "@/design/tokens";
import { siteConfig } from "@/content/site";
import { PlaceholderImage, ExampleBadge } from "@/components/ui/placeholder-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

// Horarios reales de clase, provistos directamente por el cliente (no son
// dato de prensa, pero tampoco están inventados).
const schedule = [
  { days: "Lunes, miércoles y viernes", time: "18:00", place: "Club Mitre" },
  { days: "Sábados", time: "18:30", place: "Club Náutico" },
  { days: "Martes · Tango Escenario", time: "17:00" },
];

/**
 * Dirección 1a — Noche. Sección "Talleres y formación" del handoff
 * (líneas ~386-407). Dos columnas: texto + CTA a la izquierda, collage a la
 * derecha — la celda grande es la lista de horarios (dato real del
 * cliente), las otras dos son `<image-slot>` sin fotografía asignada
 * todavía.
 */
export function WorkshopsA() {
  return (
    <div className="grid md:grid-cols-2" style={{ background: color.noche, color: color.hueso }}>
      <div
        className="px-6 py-20 md:px-14 lg:px-20 md:py-28"
        style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <Reveal>
          <Eyebrow color={color.ambar} marginBottom={22}>
            Talleres y formación · Mar del Plata
          </Eyebrow>
          <h1
            style={{
              margin: 0,
              fontFamily: font.display,
              fontWeight: 320,
              fontSize: "clamp(30px, 4.2vw, 44px)",
              lineHeight: 1.02,
              letterSpacing: "-.01em",
            }}
          >
            Aprendé con quienes lo bailan cada noche
          </h1>
          <p
            style={{
              margin: "30px 0 0",
              maxWidth: 500,
              fontFamily: font.body,
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(243,237,228,.76)",
            }}
          >
            Masterclasses y talleres dictados por el elenco, formado en la escuela de Emmanuel Marín.
            Los mismos talleres que dimos en la gira por Polonia, ahora en Mar del Plata.
          </p>
          <div className="flex-wrap" style={{ display: "flex", alignItems: "center", gap: 30, marginTop: 40 }}>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: color.ambar,
                color: color.noche,
                boxShadow: "0 22px 50px rgba(184,121,46,.3)",
                fontFamily: font.nav,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                padding: "19px 36px",
                whiteSpace: "nowrap",
              }}
            >
              Consultar por Instagram
            </a>
            <div style={{ fontFamily: font.body, fontSize: 13.5, color: "rgba(243,237,228,.6)" }}>
              {siteConfig.social.instagramHandle}
            </div>
          </div>
          <div style={{ marginTop: 26, fontFamily: font.body, fontSize: 13, color: "rgba(243,237,228,.4)" }}>
            talleres@tangofuria.com · WhatsApp +54 223 000 0000
            <ExampleBadge />
          </div>
        </Reveal>
      </div>
      <div className="flex items-center justify-center p-6 md:p-10">
        <Reveal delay={150} className="grid grid-cols-2 gap-5 md:gap-6" style={{ width: "100%", maxWidth: 560 }}>
          <div
            className="row-span-2 flex flex-col justify-center"
            style={{ padding: "30px 26px", background: color.nocheDeep, border: "1px solid rgba(243,237,228,.12)" }}
          >
            <Eyebrow color={color.ambar} marginBottom={22}>
              Horarios
            </Eyebrow>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {schedule.map((item, i) => (
                <div
                  key={item.days}
                  style={{ padding: i === 0 ? "0 0 22px" : "22px 0", borderTop: i === 0 ? undefined : "1px solid rgba(243,237,228,.12)" }}
                >
                  <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 24, lineHeight: 1.05, color: color.hueso }}>
                    {item.time}
                  </div>
                  <div style={{ marginTop: 7, fontFamily: font.body, fontSize: 13.5, lineHeight: 1.5, color: "rgba(243,237,228,.65)" }}>
                    {item.days}
                    {item.place ? ` · ${item.place}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <PlaceholderImage label="Pies en el piso de madera" dark fill />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <PlaceholderImage label="Clase en ronda, corrección de postura" dark fill />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
