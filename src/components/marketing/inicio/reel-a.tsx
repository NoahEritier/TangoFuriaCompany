import Image from "next/image";
import { color, font } from "@/design/tokens";
import { photo } from "@/design/images";
import { Eyebrow } from "@/components/ui/eyebrow";

/**
 * Dirección 1a — Noche. Sin video real todavía (ver pendientes de la
 * página): muestra el poster y un botón de play inerte hasta que el
 * cliente entregue el reel final.
 */
export function ReelA() {
  return (
    <div className="px-6 md:px-14 py-14 md:py-20" style={{ background: color.nocheDeep }}>
      <div className="flex-col md:flex-row md:items-baseline md:justify-between" style={{ display: "flex", marginBottom: 26, gap: 8 }}>
        <Eyebrow marginBottom={0}>Reel · Tango Furia Company</Eyebrow>
        <div style={{ fontFamily: font.body, fontSize: 12.5, color: "rgba(243,237,228,.5)" }}>Video final pendiente</div>
      </div>
      <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden", boxShadow: "0 50px 110px rgba(0,0,0,.65)" }}>
        <Image src={photo.vintageLineRedBrick} alt="La compañía en escena" fill style={{ objectFit: "cover" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(138,19,50,.25), rgba(27,21,18,.4))" }} />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: color.furia,
            boxShadow: "0 20px 50px rgba(138,19,50,.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 0, height: 0, marginLeft: 4, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${color.hueso}` }} />
        </div>
      </div>
    </div>
  );
}
