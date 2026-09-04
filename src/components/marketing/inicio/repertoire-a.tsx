import Image from "next/image";
import Link from "next/link";
import { color, font } from "@/design/tokens";
import { photo } from "@/design/images";
import { getShows } from "@/lib/shows";

const cardImages: Record<string, string> = {
  "tango-furia": photo.ensembleGreenFormal,
  eterno: photo.onStageBluePyramid,
};

const cardTag: Record<string, string> = {
  "tango-furia": "Temporada mensual",
  eterno: "Estreno 2025",
};

/** Dirección 1a — Noche. */
export function RepertoireA() {
  const shows = getShows();

  return (
    <div className="px-6 md:px-14 py-16 md:py-24" style={{ background: color.noche }}>
      <div className="flex-col md:flex-row md:items-baseline md:justify-between" style={{ display: "flex", marginBottom: 40, gap: 16 }}>
        <h2 style={{ margin: 0, fontFamily: font.display, fontWeight: 400, fontSize: "clamp(32px, 7vw, 44px)", lineHeight: 1, letterSpacing: "-.01em", color: color.hueso }}>
          En repertorio
        </h2>
        <Link
          href="/espectaculos"
          style={{
            fontFamily: font.nav,
            fontSize: 11.5,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "rgba(243,237,228,.7)",
            borderBottom: "1px solid rgba(243,237,228,.28)",
            paddingBottom: 5,
            width: "fit-content",
          }}
        >
          Calendario completo
        </Link>
      </div>

      <div className="grid sm:grid-cols-2" style={{ gap: 28 }}>
        {shows.map((show) => (
          <Link key={show.slug} href="/espectaculos" style={{ display: "block" }}>
            <div className="h-[340px] md:h-[420px]" style={{ position: "relative", overflow: "hidden", boxShadow: "0 30px 70px rgba(0,0,0,.5)" }}>
              <Image src={cardImages[show.slug]} alt={show.title} fill style={{ objectFit: "cover" }} sizes="(min-width: 640px) 50vw, 100vw" />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(27,21,18,.85), rgba(27,21,18,0) 55%)",
                }}
              />
              <div style={{ position: "absolute", left: 26, right: 26, bottom: 24 }}>
                <div
                  style={{
                    display: "inline-block",
                    background: color.furia,
                    color: color.hueso,
                    fontFamily: font.body,
                    fontSize: 10.5,
                    fontWeight: 500,
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    padding: "5px 10px",
                    marginBottom: 12,
                  }}
                >
                  {cardTag[show.slug]}
                </div>
                <div style={{ fontFamily: font.display, fontSize: 30, lineHeight: 1.08, color: color.hueso }}>{show.title}</div>
              </div>
            </div>
            <div style={{ marginTop: 16, fontFamily: font.body, fontSize: 13.5, color: "rgba(243,237,228,.55)" }}>
              Teatro Municipal Colón · Mar del Plata
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
