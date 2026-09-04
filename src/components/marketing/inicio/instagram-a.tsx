import Image from "next/image";
import { color, font } from "@/design/tokens";
import { photo } from "@/design/images";
import { siteConfig } from "@/content/site";
import { ExampleBadge } from "@/components/ui/placeholder-image";
import { Eyebrow } from "@/components/ui/eyebrow";

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
    <div className="px-6 md:px-14 py-16 md:py-24" style={{ background: color.nocheDeep, color: color.hueso }}>
      <div className="flex-col md:flex-row md:items-end md:justify-between" style={{ display: "flex", marginBottom: 40, gap: 20 }}>
        <div>
          <Eyebrow>{siteConfig.social.instagramHandle}</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: font.display, fontWeight: 400, fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.02, letterSpacing: "-.01em", maxWidth: 560 }}>
            Seguí la función desde adentro
          </h2>
        </div>
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: `1px solid ${color.furia}`,
            background: color.furia,
            color: color.hueso,
            fontFamily: font.nav,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            padding: "16px 28px",
            whiteSpace: "nowrap",
            width: "fit-content",
          }}
        >
          Seguir en Instagram
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: 8 }}>
        {tiles.map((src, i) => (
          <a
            key={i}
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ position: "relative", display: "block", aspectRatio: "1 / 1", overflow: "hidden" }}
          >
            <Image src={src} alt="Publicación de Instagram" fill style={{ objectFit: "cover" }} sizes="25vw" />
          </a>
        ))}
      </div>
      <div style={{ marginTop: 22, fontFamily: font.body, fontSize: 13, color: "rgba(243,237,228,.6)" }}>
        Vista previa con fotos reales
        <ExampleBadge />
        — el feed en vivo se conecta cuando el cliente elija proveedor de embed.
      </div>
    </div>
  );
}
