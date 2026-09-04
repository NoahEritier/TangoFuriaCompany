import Image from "next/image";
import { color, font } from "@/design/tokens";
import { photo } from "@/design/images";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

/**
 * Dirección 1a — Noche. Sin video real todavía (ver pendientes de la
 * página): muestra el poster y un botón de play inerte hasta que el
 * cliente entregue el reel final.
 */
export function ReelA() {
  return (
    <div className="px-6 md:px-14 lg:px-20 py-16 md:py-24" style={{ background: color.nocheDeep }}>
      <div className="mx-auto max-w-[1320px]">
        <div className="flex-col md:flex-row md:items-baseline md:justify-between" style={{ display: "flex", marginBottom: 26, gap: 8 }}>
          <Eyebrow marginBottom={0}>Reel · Tango Furia Company</Eyebrow>
          <div style={{ fontFamily: font.body, fontSize: 12.5, color: "rgba(243,237,228,.5)" }}>Video final pendiente</div>
        </div>
        <Reveal>
          <div
            className="group cursor-pointer"
            style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden", boxShadow: "0 50px 110px rgba(0,0,0,.65)" }}
          >
            <Image
              src={photo.vintageLineRedBrick}
              alt="La compañía en escena"
              fill
              className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(138,19,50,.25), rgba(27,21,18,.4))" }} />
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
              <div
                className="transition-transform duration-300 ease-out group-hover:scale-110"
                style={{
                  width: 92,
                  height: 92,
                  borderRadius: "50%",
                  background: color.furia,
                  boxShadow: "0 20px 50px rgba(138,19,50,.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: 0, height: 0, marginLeft: 4, borderTop: "9px solid transparent", borderBottom: "9px solid transparent", borderLeft: `14px solid ${color.hueso}` }} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
