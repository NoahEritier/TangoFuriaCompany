import { color, font } from "@/design/tokens";
import { milestones } from "@/content/history";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const monthNames = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

/** "2025-01-11" -> { year: "2025", precise: "11 de enero" }; "2020" -> { year: "2020", precise: null }. */
function parseMilestoneDate(date: string): { year: string; precise: string | null } {
  const [year, month, day] = date.split("-");
  if (!month) return { year, precise: null };
  const monthName = monthNames[Number(month) - 1];
  return { year, precise: day ? `${Number(day)} de ${monthName}` : monthName };
}

/**
 * Dirección 1a — Noche. Página /historia: encabezado + los 9 hitos
 * verificados de src/content/history.ts (no los hitos de ejemplo del
 * mockup — ver comentario en ese archivo).
 */
export function TimelineA() {
  return (
    <div className="px-6 md:px-14 lg:px-20 py-20 md:py-28" style={{ background: color.hueso, color: color.noche }}>
      <div className="mx-auto max-w-[1320px]">
        <Eyebrow color={color.furia}>Tango Furia Company</Eyebrow>
        <h1
          style={{
            margin: 0,
            fontFamily: font.display,
            fontWeight: 320,
            fontSize: "clamp(32px, 4.5vw, 50px)",
            lineHeight: 1.02,
            letterSpacing: "-.01em",
            color: color.noche,
          }}
        >
          Historia
        </h1>
        <p style={{ margin: "26px 0 0", maxWidth: 640, fontFamily: font.body, fontSize: 16, lineHeight: 1.7, color: "rgba(27,21,18,.65)" }}>
          Veinte años de trayectoria escénica en Mar del Plata, condensados en los hitos verificados
          de la compañía: torneos, estrenos, premios y las primeras giras internacionales.
        </p>

        <div className="grid gap-x-6 gap-y-10 sm:gap-y-14 mt-10 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m, i) => {
            const { year, precise } = parseMilestoneDate(m.date);
            return (
              <Reveal key={m.id} delay={i * 80}>
                <div className="group" style={{ position: "relative", paddingTop: 34, borderTop: "1px solid rgba(27,21,18,.18)" }}>
                  <div style={{ position: "absolute", left: 0, top: -4, width: 7, height: 7, borderRadius: "50%", background: color.furia }} />
                  <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 32, lineHeight: 1, color: color.furia }}>{year}</div>
                  {precise && (
                    <div style={{ marginTop: 8, fontFamily: font.body, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(27,21,18,.45)" }}>
                      {precise}
                    </div>
                  )}
                  <div
                    className="transition-transform duration-500 ease-out group-hover:-translate-y-1"
                    style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", margin: "22px 0 18px" }}
                  >
                    <PlaceholderImage fill dark={false} label="Foto de archivo — pendiente" />
                  </div>
                  <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 19, lineHeight: 1.2 }}>{m.title}</div>
                  <p style={{ margin: "10px 0 0", fontFamily: font.body, fontSize: 13, lineHeight: 1.6, color: "rgba(27,21,18,.65)" }}>
                    {m.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
