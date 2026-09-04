"use client";

import { useState } from "react";
import { font } from "@/design/tokens";

/**
 * Ported from the handoff's ES/EN switcher. No English content exists yet
 * (see brief: structure ready for it, copy still Spanish-only), so this
 * only toggles its own highlight for now — wiring it to real translations
 * is a separate pending decision.
 */
export function LangToggle({ borderColor, textColor }: { borderColor: string; textColor: string }) {
  const [lang, setLang] = useState<"es" | "en">("es");

  const base = {
    padding: "8px 12px",
    border: 0,
    cursor: "pointer",
    background: "transparent",
    color: textColor,
    fontFamily: font.nav,
    fontSize: 10.5,
    letterSpacing: ".2em",
    textTransform: "uppercase" as const,
    transition: "opacity .3s",
  };

  return (
    <div style={{ display: "inline-flex", border: `1px solid ${borderColor}` }}>
      <button type="button" onClick={() => setLang("es")} style={{ ...base, opacity: lang === "es" ? 1 : 0.4 }}>
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        title="Traducción al inglés próximamente"
        style={{ ...base, borderLeft: `1px solid ${borderColor}`, opacity: lang === "en" ? 1 : 0.4 }}
      >
        EN
      </button>
    </div>
  );
}
