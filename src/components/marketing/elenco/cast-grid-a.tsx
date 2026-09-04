import { color, font } from "@/design/tokens";
import { siteConfig } from "@/content/site";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Eyebrow } from "@/components/ui/eyebrow";

const cast = [
  {
    name: siteConfig.company.director,
    role: "Director",
    placeholderLabel: `Retrato — ${siteConfig.company.director} (pendiente)`,
  },
  {
    name: siteConfig.company.coDirector,
    role: "Co-dirección",
    placeholderLabel: `Retrato — ${siteConfig.company.coDirector} (pendiente)`,
  },
  {
    name: siteConfig.cast.featuredSinger,
    role: "Cantante",
    placeholderLabel: `Retrato — ${siteConfig.cast.featuredSinger} (pendiente)`,
  },
];

/** Dirección 1a — Noche. */
export function CastGridA() {
  return (
    <div className="px-6 md:px-14 py-20 md:py-28" style={{ background: color.nocheDeep }}>
      <div style={{ maxWidth: 680, marginBottom: 64 }}>
        <Eyebrow>La compañía</Eyebrow>
        <h1 style={{ margin: 0, fontFamily: font.display, fontWeight: 400, fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 1.02, letterSpacing: "-.01em", color: color.hueso }}>
          Elenco
        </h1>
        <p style={{ margin: "26px 0 0", fontFamily: font.body, fontSize: 17.5, lineHeight: 1.72, color: "rgba(243,237,228,.7)" }}>
          Dirección artística, co-dirección y la voz que abre cada función.
        </p>
      </div>

      <div className="grid md:grid-cols-3" style={{ gap: 24 }}>
        {cast.map((member) => (
          <div key={member.name}>
            <div
              className="grayscale contrast-125 transition-[filter] duration-500 hover:grayscale-0 hover:contrast-100"
              style={{ position: "relative", aspectRatio: "3 / 4", overflow: "hidden" }}
            >
              <PlaceholderImage label={member.placeholderLabel} dark fill />
            </div>
            <div style={{ marginTop: 16, width: 28, height: 3, background: color.furia }} />
            <div style={{ marginTop: 14, fontFamily: font.display, fontSize: 23, lineHeight: 1.1, color: color.hueso }}>
              {member.name}
            </div>
            <div style={{ marginTop: 7, fontFamily: font.body, fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(243,237,228,.5)" }}>
              {member.role}
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 640, marginTop: 56, paddingTop: 28, borderTop: `1px solid ${color.furia}` }}>
        <p style={{ margin: 0, fontFamily: font.body, fontSize: 15, lineHeight: 1.7, color: "rgba(243,237,228,.6)" }}>
          Estos tres son los que podemos nombrar y mostrar hoy. Sobre el escenario, la compañía
          sostiene <span style={{ color: color.estrella }}>+{siteConfig.cast.largeProductionSize}</span>{" "}
          artistas en sus producciones más grandes, con un núcleo de{" "}
          <span style={{ color: color.estrella }}>{siteConfig.cast.touringCoreSize}</span> en gira
          internacional constante.
        </p>
      </div>
    </div>
  );
}
