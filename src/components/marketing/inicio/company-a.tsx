import Image from "next/image";
import { color, font } from "@/design/tokens";
import { photo } from "@/design/images";
import { siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { value: "20", label: "Años" },
  { value: String(siteConfig.cast.touringCoreSize), label: "En gira" },
  { value: `${siteConfig.cast.largeProductionSize}+`, label: "En producciones grandes" },
];

/** Dirección 1a — Noche. */
export function CompanyA() {
  return (
    <div className="grid md:grid-cols-[.82fr_1fr]" style={{ background: color.noche }}>
      <div className="min-h-[300px] md:min-h-0 overflow-hidden" style={{ position: "relative" }}>
        <Image
          src={photo.coupleDramatic}
          alt="Pareja en movimiento, Tango Furia Company"
          fill
          className="transition-transform duration-[1200ms] ease-out hover:scale-105"
          style={{ objectFit: "cover" }}
          sizes="(min-width: 768px) 40vw, 100vw"
        />
      </div>
      <div className="px-6 md:px-16 lg:px-20 py-16 md:py-24">
        <Reveal>
          <Eyebrow marginBottom={28}>La compañía</Eyebrow>
          <h2 style={{ margin: 0, maxWidth: 480, fontFamily: font.display, fontWeight: 320, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.1, letterSpacing: "-.01em", color: color.hueso }}>
            Veinte años, un escenario que no para de crecer
          </h2>
          <p style={{ margin: "28px 0 18px", maxWidth: 480, fontFamily: font.body, fontSize: 16, lineHeight: 1.7, color: "rgba(243,237,228,.74)" }}>
            Dirigida por Emmanuel Marín, con co-dirección de Lola Gutiérrez Rey —subcampeones del
            Mundial de Tango 2020—, la compañía construyó un lenguaje propio en Mar del Plata:
            el tango de pista llevado a la escala del gran teatro.
          </p>
          <p style={{ margin: 0, maxWidth: 480, fontFamily: font.body, fontSize: 16, lineHeight: 1.7, color: "rgba(243,237,228,.74)" }}>
            De la temporada marplatense a las giras por India (Festival Mood Indigo, 2025) y
            Polonia (2026), reconocidos con el Premio Estrella de Mar a Mejor Espectáculo de
            Danza en 2024 y 2026.
          </p>
          <div className="grid grid-cols-3 gap-4 md:gap-7" style={{ marginTop: 48, maxWidth: 480 }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 34, lineHeight: 1, color: color.estrella }}>{s.value}</div>
                <div style={{ marginTop: 10, fontFamily: font.body, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(243,237,228,.55)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
