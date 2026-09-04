import { color, font } from "@/design/tokens";
import { siteConfig } from "@/content/site";
import { PlaceholderImage, ExampleBadge } from "@/components/ui/placeholder-image";
import { Eyebrow } from "@/components/ui/eyebrow";

/**
 * Dirección 1a — Noche. Sección "Talleres y formación" del handoff
 * (líneas ~386-407). Dos columnas: texto + CTA a la izquierda, collage
 * de fotos 2x2 a la derecha. Las tres fotos son `<image-slot>` vacíos en
 * el mockup — no hay fotografía real asignada todavía.
 */
export function WorkshopsA() {
  return (
    <div className="grid md:grid-cols-2" style={{ background: color.noche, color: color.hueso }}>
      <div
        className="px-6 py-16 md:px-14 md:py-24"
        style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <Eyebrow color={color.ambar} marginBottom={22}>
          Talleres y formación · Mar del Plata
        </Eyebrow>
        <h1
          style={{
            margin: 0,
            fontFamily: font.display,
            fontWeight: 400,
            fontSize: "clamp(36px, 5vw, 56px)",
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
            fontSize: 17.5,
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
      </div>
      <div className="grid grid-cols-2 gap-2 p-2">
        <div className="relative row-span-2">
          <PlaceholderImage label="Manos en el abrazo, luz de ventana" dark fill />
        </div>
        <div className="relative aspect-square">
          <PlaceholderImage label="Pies en el piso de madera" dark fill />
        </div>
        <div className="relative aspect-square">
          <PlaceholderImage label="Clase en ronda, corrección de postura" dark fill />
        </div>
      </div>
    </div>
  );
}
