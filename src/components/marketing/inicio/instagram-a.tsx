import Image from "next/image";
import { color, font } from "@/design/tokens";
import { photo } from "@/design/images";
import { siteConfig } from "@/content/site";
import { ExampleBadge } from "@/components/ui/placeholder-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const tiles = [
  photo.coupleDramatic,
  photo.onStageBluePyramid,
  photo.dipDramatic,
  photo.ensembleGreenFormation,
  photo.vintageLinePastel,
  photo.ensembleStudioLift,
  photo.embraceRedBrick,
  photo.ensembleBlueLift,
];

/**
 * Dirección 1a — Noche. Grilla estática con fotos reales, no un embed en
 * vivo (ver pendientes de la página sobre qué proveedor conectar).
 */
export function InstagramA() {
  return (
    <div className="px-6 md:px-14 lg:px-20 py-20 md:py-28" style={{ background: color.nocheDeep, color: color.hueso }}>
      <div className="mx-auto max-w-[1320px]">
        <div className="flex-col md:flex-row md:items-end md:justify-between" style={{ display: "flex", marginBottom: 36, gap: 20 }}>
          <div>
            <Eyebrow>{siteConfig.social.instagramHandle}</Eyebrow>
            <h2 style={{ margin: 0, fontFamily: font.display, fontWeight: 320, fontSize: "clamp(24px, 3.4vw, 34px)", lineHeight: 1.05, letterSpacing: "-.01em", maxWidth: 480 }}>
              Seguí la función desde adentro
            </h2>
          </div>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03]"
            style={{
              border: `1px solid ${color.furia}`,
              background: color.furia,
              color: color.hueso,
              fontFamily: font.nav,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              padding: "14px 24px",
              whiteSpace: "nowrap",
              width: "fit-content",
            }}
          >
            Seguir en Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: 8 }}>
          {tiles.map((src, i) => (
            <Reveal key={i} delay={i * 60}>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                style={{ position: "relative", display: "block", aspectRatio: "1 / 1", overflow: "hidden" }}
              >
                <Image
                  src={src}
                  alt="Publicación de Instagram"
                  fill
                  className="transition-transform duration-500 ease-out group-hover:scale-110"
                  style={{ objectFit: "cover" }}
                  sizes="25vw"
                />
              </a>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 22, fontFamily: font.body, fontSize: 13, color: "rgba(243,237,228,.6)" }}>
          Vista previa con fotos reales
          <ExampleBadge />
          — el feed en vivo se conecta cuando el cliente elija proveedor de embed.
        </div>
      </div>
    </div>
  );
}
