import { color, font } from "@/design/tokens";
import { getSeasonBlocks, getShow } from "@/lib/shows";
import { getTicketingCta } from "@/lib/ticketing";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

/**
 * Dirección 1a — Noche. Una columna por mes de temporada (getSeasonBlocks()),
 * separadas por líneas verticales en vez de filas apiladas con líneas
 * horizontales. exactDates es null hasta que el cliente confirme el
 * calendario — nunca se inventa un día puntual, solo se muestra la nota
 * "a confirmar".
 */
export function SeasonA() {
  const blocks = getSeasonBlocks();

  return (
    <div className="px-6 md:px-14 lg:px-20 pt-20 pb-24 md:pt-28 md:pb-32" style={{ background: color.noche }}>
      <div className="mx-auto max-w-[1320px]">
        <div style={{ marginBottom: 40, maxWidth: 620 }}>
          <Eyebrow>Calendario</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: font.display, fontWeight: 320, fontSize: "clamp(26px, 3.4vw, 38px)", lineHeight: 1.08, letterSpacing: "-.01em", color: color.hueso }}>
            Funciones por mes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ borderTop: `1px solid ${color.furia}`, borderBottom: `1px solid ${color.furia}` }}>
          {blocks.map((block, i) => {
            const show = getShow(block.showSlug);
            const cta = getTicketingCta(block);
            return (
              <div
                key={block.id}
                className={`py-8 px-0 sm:px-8 ${i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""}`}
                style={i > 0 ? { borderColor: "rgba(138,19,50,.5)" } : undefined}
              >
                <Reveal delay={i * 100}>
                  <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 30, lineHeight: 1, color: color.estrella }}>
                    {block.month}
                    <span style={{ fontSize: 15, marginLeft: 8, color: "rgba(243,237,228,.4)" }}>{block.year}</span>
                  </div>

                  <div style={{ marginTop: 18 }}>
                    <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 19, lineHeight: 1.15, color: color.hueso }}>
                      {show?.title ?? block.showSlug}
                    </div>
                    <div style={{ marginTop: 6, fontFamily: font.body, fontSize: 14, color: "rgba(243,237,228,.58)" }}>
                      {block.venue} · {block.address}
                    </div>
                    <div style={{ marginTop: 6, fontFamily: font.body, fontSize: 12.5, fontStyle: "italic", color: "rgba(243,237,228,.4)" }}>
                      Fechas exactas a confirmar
                    </div>
                  </div>

                  <a
                    href={cta.url}
                    target={cta.mode === "instagram" ? "_blank" : undefined}
                    rel={cta.mode === "instagram" ? "noopener noreferrer" : undefined}
                    className="mt-6 px-6 py-3.5 inline-block transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      width: "fit-content",
                      border: `1px solid ${color.furia}`,
                      background: color.furia,
                      fontFamily: font.nav,
                      fontSize: 11.5,
                      fontWeight: 600,
                      letterSpacing: ".18em",
                      textTransform: "uppercase",
                      color: color.hueso,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {cta.label}
                  </a>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
