"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { color, font } from "@/design/tokens";
import { navLinks } from "@/components/layout/nav-links";
import { LangToggle } from "./lang-toggle";
import { Logo } from "./logo";

/**
 * Dirección 1a — Noche. Ported from the handoff header, with two
 * necessary adaptations for a real multi-page site (the mockup was a
 * single fixed-width canvas): a solid translucent backdrop instead of
 * fully transparent (so it stays legible on pages that open on a light
 * section), and a mobile menu.
 */
export function HeaderA() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "26px 24px",
        background: "rgba(27,21,18,.88)",
        backdropFilter: "blur(10px)",
        fontFamily: font.nav,
      }}
      className="md:!px-14"
    >
      <Logo size={27} />

      <nav className="hidden lg:flex" style={{ gap: 28, fontSize: 12, letterSpacing: ".15em", textTransform: "uppercase" }}>
        {navLinks.map((link) => {
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                position: "relative",
                color: color.hueso,
                opacity: active ? 1 : 0.7,
                paddingBottom: 4,
                borderBottom: active ? `2px solid ${color.furia}` : "2px solid transparent",
                transition: "opacity .3s",
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden lg:flex" style={{ alignItems: "center", gap: 22 }}>
        <LangToggle borderColor="rgba(243,237,228,.3)" textColor={color.hueso} />
        <Link
          href="/espectaculos"
          style={{
            border: `1px solid ${color.furia}`,
            padding: "11px 20px",
            fontSize: 11.5,
            fontWeight: 600,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: color.hueso,
            background: color.furia,
          }}
        >
          Entradas
        </Link>
      </div>

      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden"
        style={{ color: color.hueso, background: "transparent", border: 0, fontFamily: font.nav, fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase" }}
      >
        {open ? "Cerrar" : "Menú"}
      </button>

      {open && (
        <div
          className="lg:hidden"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: color.nocheDeep,
            padding: "8px 24px 28px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                padding: "14px 0",
                borderBottom: "1px solid rgba(243,237,228,.12)",
                color: color.hueso,
                fontSize: 13,
                letterSpacing: ".15em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/espectaculos"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 20,
              border: `1px solid ${color.furia}`,
              background: color.furia,
              padding: "13px 20px",
              textAlign: "center",
              fontSize: 11.5,
              fontWeight: 600,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: color.hueso,
            }}
          >
            Entradas
          </Link>
        </div>
      )}
    </header>
  );
}
