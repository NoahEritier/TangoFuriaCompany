import { color, font } from "@/design/tokens";
import { siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/ui/eyebrow";

/** Dirección 1a — Noche. Cabecera de la página + Reconocimientos / Prensa. */
export function AwardsPressA() {
  return (
    <>
      <div className="px-6 pt-16 pb-10 md:px-14 md:pt-26 md:pb-18" style={{ background: color.nocheDeep, color: color.hueso }}>
        <Eyebrow marginBottom={22}>Prensa y programación</Eyebrow>
        <h1
          style={{
            margin: 0,
            fontFamily: font.display,
            fontWeight: 400,
            fontSize: "clamp(40px, 6vw, 68px)",
            lineHeight: 1.02,
            letterSpacing: "-.01em",
            color: color.hueso,
            maxWidth: 780,
          }}
        >
          Sala de Prensa
        </h1>
        <p style={{ margin: "26px 0 0", maxWidth: 620, fontFamily: font.body, fontSize: 17, lineHeight: 1.7, color: "rgba(243,237,228,.74)" }}>
          Trayectoria, reconocimientos y contacto directo para prensa y programadores — esta no es la
          página de entradas para el público general.
        </p>
      </div>

      <div className="grid gap-16 px-6 pt-14 pb-14 md:gap-24 md:px-14 md:pt-26 md:pb-27 md:grid-cols-[1fr_1.3fr]" style={{ background: color.noche }}>
        <div>
          <Eyebrow marginBottom={40}>Reconocimientos</Eyebrow>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {siteConfig.awards.map((award, i) => (
              <div key={`${award.name}-${award.year}`} style={{ padding: i === 0 ? "0 0 36px" : "36px 0 0", borderTop: i === 0 ? undefined : `1px solid rgba(138,19,50,.3)` }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ marginTop: 12, width: 8, height: 8, flexShrink: 0, background: color.furia }} />
                  <div>
                    <div style={{ fontFamily: font.display, fontSize: "clamp(26px, 6.5vw, 34px)", lineHeight: 1.08, color: color.hueso }}>{award.name}</div>
                    <div style={{ marginTop: 12, fontFamily: font.body, fontSize: 14, lineHeight: 1.6, color: "rgba(243,237,228,.6)" }}>
                      {award.year}{"note" in award && award.note ? ` · ${award.note}` : ""}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow marginBottom={40}>Prensa</Eyebrow>
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
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(19px, 4.5vw, 25px)",
                lineHeight: 1.4,
                color: "rgba(243,237,228,.85)",
              }}
            >
              Todavía no tenemos citas de prensa para publicar acá — se van a sumar a esta sección a
              medida que la compañía reciba cobertura verificada.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
