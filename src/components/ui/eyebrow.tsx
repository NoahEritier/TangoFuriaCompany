import { color as colors, font } from "@/design/tokens";
import type { CSSProperties } from "react";

/**
 * La etiqueta pequeña en mayúsculas que encabeza casi toda sección del
 * sitio ("Temporada 2026", "La compañía", "Reconocimientos"...). Antes cada
 * archivo repetía este mismo objeto de estilos — un solo lugar para
 * ajustar tamaño/tracking en todo el sitio de una vez.
 *
 * Usa font.nav (Archivo) a propósito, no font.body: funciona como remate
 * de título, no como texto de lectura — así el cambio de fuente del cuerpo
 * no la mueve.
 */
export function Eyebrow({
  children,
  color = colors.estrella,
  marginBottom = 18,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  marginBottom?: number;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        fontFamily: font.nav,
        fontSize: 11.5,
        letterSpacing: ".3em",
        textTransform: "uppercase",
        color,
        marginBottom,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
