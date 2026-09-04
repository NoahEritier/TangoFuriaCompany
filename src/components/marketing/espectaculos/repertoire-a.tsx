import Image from "next/image";
import { color, font } from "@/design/tokens";
import { photo } from "@/design/images";
import { siteConfig } from "@/content/site";
import { getShows } from "@/lib/shows";
import type { Show } from "@/content/shows";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const cardImages: Record<string, string> = {
  "tango-furia": photo.ensembleGreenFormal,
  eterno: photo.onStageBluePyramid,
};

const kindLabel: Record<Show["kind"], string> = {
  insignia: "Espectáculo insignia",
  estreno: "Estreno",
};

function premiereLabel(show: Show): string | null {
  if (!show.premiereDate) return null;
  const [y, m, d] = show.premiereDate.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
}

/** Dirección 1a — Noche. Página completa de repertorio (no es el teaser de Inicio). */
export function RepertoireA() {
  const shows = getShows();

  return (
    <div className="px-6 md:px-14 lg:px-20 py-20 md:py-28 lg:py-32" style={{ background: color.nocheDeep }}>
      <div className="mx-auto max-w-[1320px]">
        <div style={{ maxWidth: 620, marginBottom: 56 }}>
          <Eyebrow>Temporada {siteConfig.venue.seasonYear}</Eyebrow>
          <h1 style={{ margin: 0, fontFamily: font.display, fontWeight: 320, fontSize: "clamp(34px, 4.5vw, 52px)", lineHeight: 1.04, letterSpacing: "-.01em", color: color.hueso }}>
            Espectáculos
          </h1>
          <p style={{ margin: "22px 0 0", fontFamily: font.body, fontSize: 16, lineHeight: 1.7, color: "rgba(243,237,228,.7)" }}>
            {siteConfig.venue.name}, {siteConfig.company.city}.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {shows.map((show, i) => {
            const premiere = premiereLabel(show);
            return (
              <Reveal key={show.slug} delay={i * 100}>
                <div>
                  <div
                    className="h-[360px] sm:h-[420px] lg:h-[460px]"
                    style={{ position: "relative", overflow: "hidden", boxShadow: "0 30px 70px rgba(0,0,0,.5)" }}
                  >
                    <Image
                      src={cardImages[show.slug]}
                      alt={show.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(27,21,18,.88), rgba(27,21,18,0) 55%)",
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
                        {kindLabel[show.kind]}
                        {premiere ? ` · ${premiere}` : ""}
                      </div>
                      <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 27, lineHeight: 1.08, color: color.hueso }}>{show.title}</div>
                    </div>
                  </div>
                  <div style={{ marginTop: 18, fontFamily: font.body, fontSize: 13.5, color: "rgba(243,237,228,.55)" }}>
                    {siteConfig.venue.name} · {siteConfig.company.city}
                  </div>
                  <p style={{ margin: "10px 0 0", fontFamily: font.body, fontSize: 15.5, lineHeight: 1.65, color: "rgba(243,237,228,.62)" }}>
                    {show.synopsis}
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
