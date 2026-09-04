import { color, font } from "@/design/tokens";

/**
 * Stand-in for photography the client still owes us (cast portraits,
 * history archive, workshop shots). Everywhere the design handoff gave a
 * real photo, we use it — this only covers the slots that were empty
 * `<image-slot>` placeholders in the source file.
 */
export function PlaceholderImage({
  label,
  dark = true,
  fill = false,
  className = "",
}: {
  label: string;
  dark?: boolean;
  fill?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        position: fill ? "absolute" : "relative",
        inset: fill ? 0 : undefined,
        width: "100%",
        height: fill ? "100%" : undefined,
        background: dark ? "rgba(243,237,228,.06)" : "rgba(27,21,18,.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        boxSizing: "border-box",
      }}
    >
      <span
        style={{
          fontFamily: font.body,
          fontSize: 11,
          lineHeight: 1.5,
          textAlign: "center",
          color: dark ? "rgba(243,237,228,.4)" : "rgba(27,21,18,.4)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function ExampleBadge({ dark = true }: { dark?: boolean }) {
  return (
    <span
      style={{
        display: "inline-block",
        marginLeft: 10,
        padding: "2px 7px",
        fontFamily: font.nav,
        fontSize: 9,
        fontWeight: 600,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: dark ? color.noche : color.hueso,
        background: color.estrella,
        verticalAlign: "middle",
      }}
    >
      Ejemplo
    </span>
  );
}
