import { color, font } from "@/design/tokens";
import { siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

/** Dirección 1a — Noche. Cabecera de la página + Reconocimientos / Prensa. */
export function AwardsPressA() {
  return (
    <>
      <div className="px-6 pt-16 pb-10 md:px-14 lg:px-20 md:pt-32 md:pb-24" style={{ background: color.nocheDeep, color: color.hueso }}>
        <div className="mx-auto max-w-[1320px]">
          <Eyebrow marginBottom={22}>Prensa y programación</Eyebrow>
          <h1
            style={{
              margin: 0,
              fontFamily: font.display,
              fontWeight: 320,
              fontSize: "clamp(32px, 4.5vw, 48px)",
              lineHeight: 1.02,
              letterSpacing: "-.01em",
              color: color.hueso,
              maxWidth: 780,
            }}
          >
            Sala de Prensa
          </h1>
          <p style={{ margin: "26px 0 0", maxWidth: 620, fontFamily: font.body, fontSize: 15.5, lineHeight: 1.7, color: "rgba(243,237,228,.74)" }}>
            Trayectoria, reconocimientos y contacto directo para prensa y programadores — esta no es la
            página de entradas para el público general.
          </p>
        </div>
      </div>

      <div className="px-6 pt-14 pb-14 md:px-14 lg:px-20 md:pt-32 md:pb-33" style={{ background: color.noche }}>
        <div className="mx-auto max-w-[1320px] grid gap-16 md:gap-24 md:grid-cols-[1fr_1.3fr]">
          <div>
            <Eyebrow marginBottom={40}>Reconocimientos</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {siteConfig.awards.map((award, i) => (
                <Reveal key={`${award.name}-${award.year}`} delay={i * 90}>
                  <div
                    className="group"
                    style={{ padding: i === 0 ? "0 0 36px" : "36px 0 0", borderTop: i === 0 ? undefined : `1px solid rgba(138,19,50,.3)` }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <span
                        className="transition-transform duration-300 ease-out group-hover:scale-125"
                        style={{ marginTop: 12, width: 8, height: 8, flexShrink: 0, background: color.furia }}
                      />
                      <div>
                        <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: "clamp(22px, 5vw, 28px)", lineHeight: 1.08, color: color.hueso }}>{award.name}</div>
                        <div style={{ marginTop: 12, fontFamily: font.body, fontSize: 14, lineHeight: 1.6, color: "rgba(243,237,228,.6)" }}>
                          {award.year}{"note" in award && award.note ? ` · ${award.note}` : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow marginBottom={40}>Prensa</Eyebrow>
            <Reveal>
              <div
                className="px-6 py-8 md:px-9 md:py-10"
                style={{
                  border: "1px dashed rgba(243,237,228,.25)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: font.display,
                    fontWeight: 320,
                    fontSize: "clamp(20px, 4.5vw, 25px)",
                    lineHeight: 1.4,
                    color: "rgba(243,237,228,.85)",
                  }}
                >
                  Todavía no tenemos citas de prensa para publicar acá — se van a sumar a esta sección a
                  medida que la compañía reciba cobertura verificada.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
