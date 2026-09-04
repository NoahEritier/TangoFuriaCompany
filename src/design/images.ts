/**
 * Real company photography — no stock, no placeholders. Mapped to
 * semantic keys so section components don't hardcode filenames.
 * Everything else (cast portraits, history archive, workshop photos) is
 * still owed by the client — see PlaceholderImage usages for those.
 */
export const photo = {
  // Primer lote (handoff de diseño)
  ensembleStudioLift: "/images/Tango-Furia-1.webp", // full cast, studio, lift pose
  coupleDramatic: "/images/whatsapp_image_2026-01-16_at_10.51.18_0.webp", // lead couple, vertical
  onStageWithMusicians: "/images/Furia-Triunfal-1024x671.webp", // live performance, red stage
  ensembleGreenFormation: "/images/Tango-furia-1200x802.webp", // studio, green dresses
  onStageBluePyramid: "/images/tangofuria-300x200.webp", // stage, blue light, pyramid

  // Segundo lote — capturas de Instagram Stories, recortadas (se les quitó
  // la interfaz de IG: contador de historia, avatares, ícono de mute) con
  // sharp antes de subirlas. Todas panorámicas (~2.65:1).
  ensembleGreenFormal: "/images/ensemble-green-formal.jpg", // elenco en escena, vestidos verdes, formación amplia
  vintageLinePastel: "/images/vintage-line-pastel.jpg", // número de época, vestidos pastel, pared de ladrillo
  vintageLineRedBrick: "/images/vintage-line-red-brick.jpg", // número de época, fila tomados de la mano, luz roja
  embraceRedBrick: "/images/embrace-red-brick.jpg", // pareja central, abrazo dramático, luz roja
  ensembleBlueLift: "/images/ensemble-blue-lift.jpg", // elenco en escena, luz azul
  dipDramatic: "/images/dip-dramatic.jpg", // pareja sola, quebrada dramática, fondo negro
} as const;
