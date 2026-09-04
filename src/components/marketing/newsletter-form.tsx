"use client";

import { useState, type FormEvent } from "react";
import { font } from "@/design/tokens";

/**
 * UI only — no email provider wired up yet (Mailchimp/Brevo/etc. is a
 * pending decision). Submitting just confirms locally.
 */
export function NewsletterForm({ borderColor, textColor }: { borderColor: string; textColor: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", borderBottom: `1px solid ${borderColor}` }}>
      <input
        type="email"
        required
        placeholder="Tu email"
        style={{
          flex: 1,
          minWidth: 0,
          background: "transparent",
          border: 0,
          padding: "10px 0",
          color: textColor,
          fontFamily: font.body,
          fontSize: 15,
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          background: "transparent",
          border: 0,
          color: textColor,
          fontFamily: font.nav,
          fontSize: 11,
          letterSpacing: ".2em",
          textTransform: "uppercase",
          cursor: "pointer",
          padding: "0 0 0 12px",
        }}
      >
        {sent ? "Listo" : "Suscribirme"}
      </button>
    </form>
  );
}
