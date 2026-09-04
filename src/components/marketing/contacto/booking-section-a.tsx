"use client";

import { useState, type FormEvent } from "react";
import { color, font } from "@/design/tokens";
import { getShows } from "@/lib/shows";
import { siteConfig } from "@/content/site";
import { ExampleBadge } from "@/components/ui/placeholder-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

/** Booking, condensado dentro de Contacto — y reutilizado al final de Inicio. */
export function BookingSectionA() {
  const shows = getShows();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const labelStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: 8,
    fontFamily: font.body,
    fontSize: 11,
    letterSpacing: ".2em",
    textTransform: "uppercase" as const,
    color: "rgba(243,237,228,.6)",
  };

  const inputStyle = {
    background: "transparent",
    border: 0,
    borderBottom: "1px solid rgba(243,237,228,.35)",
    padding: "10px 0",
    color: color.hueso,
    fontFamily: font.body,
    fontSize: 16,
    outline: "none",
    width: "100%",
  };
  const inputClass = "transition-colors duration-300 focus:!border-b-[#F3EDE4]";

  return (
    <div className="grid md:grid-cols-2" style={{ background: color.furia, color: color.hueso }}>
      <div className="px-6 md:px-14 lg:px-20 py-16 md:py-24" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 40 }}>
        <Reveal>
          <Eyebrow color="rgba(243,237,228,.6)" marginBottom={14}>
            Booking internacional
          </Eyebrow>
          <h2 style={{ margin: 0, maxWidth: 420, fontFamily: font.display, fontWeight: 320, fontSize: "clamp(24px, 3.2vw, 34px)", lineHeight: 1.08, letterSpacing: "-.01em" }}>
            Llevá Tango Furia a tu escenario
          </h2>
        </Reveal>

        <div className="grid grid-cols-2" style={{ gap: "22px 32px" }}>
          {shows.map((show) => (
            <div key={show.slug}>
              <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 19, lineHeight: 1.1 }}>{show.title}</div>
              <div style={{ marginTop: 5, fontFamily: font.body, fontSize: 12, color: "rgba(243,237,228,.6)" }}>
                Duración y elenco (a confirmar)
              </div>
            </div>
          ))}
          <div>
            <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 19, lineHeight: 1.1 }}>Contacto directo</div>
            <div style={{ marginTop: 5, fontFamily: font.body, fontSize: 12, color: "rgba(243,237,228,.6)" }}>
              Instagram: {siteConfig.social.instagramHandle}
            </div>
            <div style={{ marginTop: 2, fontFamily: font.body, fontSize: 12, color: "rgba(243,237,228,.6)" }}>
              booking@tangofuria.com
              <ExampleBadge />
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="px-6 md:px-14 lg:px-20 py-16 md:py-24"
        style={{ background: "rgba(27,21,18,.22)", display: "flex", flexDirection: "column", gap: 20 }}
      >
        {sent ? (
          <div style={{ fontFamily: font.display, fontWeight: 320, fontSize: 26, lineHeight: 1.15 }}>
            Gracias. Recibimos tu solicitud y te contactaremos a la brevedad.
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2" style={{ gap: 20 }}>
              <label style={labelStyle}>
                Organización
                <input required className={inputClass} style={inputStyle} />
              </label>
              <label style={labelStyle}>
                Nombre y cargo
                <input required className={inputClass} style={inputStyle} />
              </label>
              <label style={labelStyle}>
                Email
                <input type="email" required className={inputClass} style={inputStyle} />
              </label>
              <label style={labelStyle}>
                País y ciudad
                <input className={inputClass} style={inputStyle} />
              </label>
              <label style={labelStyle}>
                Fechas estimadas
                <input placeholder="Ej. octubre 2026" className={inputClass} style={inputStyle} />
              </label>
              <label style={labelStyle}>
                Producción de interés
                <select className={inputClass} style={inputStyle}>
                  {shows.map((show) => (
                    <option key={show.slug} style={{ color: color.noche }}>
                      {show.title}
                    </option>
                  ))}
                  <option style={{ color: color.noche }}>A definir</option>
                </select>
              </label>
            </div>
            <label style={labelStyle}>
              Sala, aforo y contexto
              <textarea rows={3} className={inputClass} style={{ ...inputStyle, lineHeight: 1.5, resize: "vertical" }} />
            </label>
            <button
              type="submit"
              className="sm:w-fit transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: color.hueso,
                color: color.furia,
                border: 0,
                fontFamily: font.nav,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                padding: "18px 36px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Solicitar propuesta
            </button>
          </>
        )}
      </form>
    </div>
  );
}
