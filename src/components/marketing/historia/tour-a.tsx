"use client";

import { useEffect, useRef, useState } from "react";
import { color, font } from "@/design/tokens";
import { tourStops } from "@/content/history";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

/**
 * Dirección 1a — Noche. "Gira internacional": estadísticas calculadas a
 * partir de tourStops (no los 2/3/6 del mockup, que eran placeholders del
 * diseño) + el mapa interactivo (public/tour-map.html) + el listado de
 * ciudades. Sur América es la base de operaciones y no cuenta como
 * continente "de gira" — de ahí que continentes quede fijo en 2 (Asia,
 * por India, y Europa, por Polonia).
 *
 * El mapa embebido tiene un viewBox SVG fijo pensado para una columna de
 * ~1328px (mapa mundial a la izquierda + inset de Polonia a la derecha) y
 * se vuelve ilegible si simplemente se lo achica a lo ancho de un celular.
 * Acá medimos el ancho real del wrapper y, por debajo de 700px, le pedimos
 * a tour-map.html un layout apilado (mapa arriba, inset de Polonia abajo)
 * pensado para ese ancho — ver el query param `layout=mobile` en el iframe
 * y la rama correspondiente dentro del script D3.
 */
export function TourA() {
  const countries = new Set(tourStops.map((s) => s.country)).size;
  const cities = new Set(tourStops.map((s) => s.city)).size;
  const stats = [
    { value: "2", label: "Continentes" },
    { value: String(countries), label: "Países" },
    { value: String(cities), label: "Ciudades" },
  ];

  const mapRef = useRef<HTMLDivElement>(null);
  const [mobileMap, setMobileMap] = useState(true);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const update = () => setMobileMap(el.clientWidth < 700);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="px-6 md:px-14 lg:px-20 py-20 md:py-28" style={{ background: color.nocheDeep, color: color.hueso }}>
      <div className="mx-auto max-w-[1320px]">
        <div className="md:flex md:items-end md:justify-between gap-16 mb-10">
          <div>
            <Eyebrow>Gira internacional</Eyebrow>
            <h2
              style={{
                margin: 0,
                fontFamily: font.display,
                fontWeight: 320,
                fontSize: "clamp(24px, 3.2vw, 36px)",
                lineHeight: 1.02,
                letterSpacing: "-.01em",
                maxWidth: 720,
              }}
            >
              De Mar del Plata a dos continentes
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6 md:gap-11 mt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 34, lineHeight: 1, color: color.estrella }}>{s.value}</div>
                <div style={{ marginTop: 10, fontFamily: font.body, fontSize: 10.5, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(243,237,228,.6)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Reveal>
          <div ref={mapRef} style={{ position: "relative", aspectRatio: mobileMap ? "400 / 650" : "1328 / 560" }}>
            <iframe
              src={`/tour-map.html?theme=dark${mobileMap ? "&layout=mobile" : ""}`}
              title="Mapa de gira"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, background: "transparent" }}
            />
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mt-9">
          {tourStops.map((s, i) => (
            <Reveal key={s.city} delay={i * 70}>
              <div>
                <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 19 }}>{s.city}</div>
                <div style={{ marginTop: 6, fontFamily: font.body, fontSize: 12, lineHeight: 1.5, color: "rgba(243,237,228,.6)" }}>{s.note}</div>
                <div style={{ marginTop: 2, fontFamily: font.body, fontSize: 11, lineHeight: 1.5, color: "rgba(243,237,228,.4)" }}>
                  {s.country} · {s.year}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
