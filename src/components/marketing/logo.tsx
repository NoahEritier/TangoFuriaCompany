import Link from "next/link";
import { color, font } from "@/design/tokens";

/**
 * Wordmark: "Tango" + "Furia" en Fraunces itálica, sobre fondos oscuros en
 * toda la web (header/footer son siempre Noche) — así que el texto va en
 * Hueso, no en rojo Furia: a 1.91:1 de contraste, Furia como texto sobre
 * Noche es prácticamente ilegible (ver decisión de acentos). El rojo vive
 * en la línea inferior, que no necesita contraste de texto.
 */
export function Logo({ size = 20, dark = true }: { size?: number; dark?: boolean }) {
  const textColor = dark ? color.hueso : color.noche;
  return (
    <Link
      href="/"
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: 4,
        width: "fit-content",
      }}
    >
      <span
        style={{
          fontFamily: font.display,
          fontWeight: 600,
          fontSize: size,
          lineHeight: 1,
          color: textColor,
          whiteSpace: "nowrap",
        }}
      >
        Tango<span style={{ fontStyle: "italic", fontWeight: 500 }}>Furia</span>
      </span>
      <span style={{ width: "60%", height: 2, background: color.furia }} />
    </Link>
  );
}
