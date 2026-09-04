import Image from "next/image";
import Link from "next/link";
import { color, font } from "@/design/tokens";
import { photo } from "@/design/images";
import { siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/ui/eyebrow";

/** Dirección 1a — Noche. Hero full-bleed con overlay oscuro. */
export function HeroA() {
  return (
    <div style={{ position: "relative", height: "clamp(460px, 74vh, 720px)", overflow: "hidden" }}>
      <Image
        src={photo.ensembleStudioLift}
        alt="Elenco de Tango Furia Company en escena"
        fill
        priority
        style={{ objectFit: "cover" }}
        sizes="100vw"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(27,21,18,.94) 0%, rgba(27,21,18,.55) 48%, rgba(27,21,18,.6) 100%)",
        }}
      />
      <div
        className="px-6 md:px-14 bottom-6 md:bottom-12"
        style={{ position: "absolute", left: 0, right: 0, animation: "tfRise 1.1s cubic-bezier(.2,.7,.2,1) both" }}
      >
        <Eyebrow marginBottom={16}>
          Temporada {siteConfig.venue.seasonYear} · Mar del Plata
        </Eyebrow>
        <h1
          style={{
            margin: 0,
            fontFamily: font.display,
            fontWeight: 320,
            fontSize: "clamp(56px, 11vw, 144px)",
            lineHeight: 0.92,
            letterSpacing: ".02em",
            color: color.hueso,
            textTransform: "uppercase",
          }}
        >
          Tango
          <br />
          Furia
        </h1>
        <div className="flex-col md:flex-row md:items-end md:justify-between" style={{ display: "flex", gap: 28, marginTop: 20 }}>
          <p
            style={{
              margin: 0,
              maxWidth: 520,
              fontFamily: font.body,
              fontSize: 17,
              lineHeight: 1.55,
              color: "rgba(243,237,228,.82)",
            }}
          >
            Tango escénico de cuerpo entero. Veinte años llevando el escenario argentino del Atlántico al mundo.
          </p>
          <Link
            href="/espectaculos"
            className="mt-5 md:mt-0 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: color.furia,
              color: color.hueso,
              fontFamily: font.nav,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              padding: "18px 36px",
              whiteSpace: "nowrap",
              boxShadow: "0 22px 50px rgba(138,19,50,.45)",
              display: "inline-block",
              width: "fit-content",
            }}
          >
            Próximas funciones
          </Link>
        </div>
      </div>
    </div>
  );
}
