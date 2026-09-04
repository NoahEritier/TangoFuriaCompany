# Tango Furia Company — sitio web

Sitio institucional de Tango Furia Company (Mar del Plata), construido en Next.js 16 (App Router) + TypeScript + Tailwind v4. Proyecto de [Codice](https://github.com/) a partir de un handoff de diseño de Claude Design (`.design-handoff/`, no se commitea al repo final).

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** para breakpoints responsive; el resto de los estilos vive en objetos `style={{}}` inline portados 1:1 del diseño (ver `src/design/tokens.ts`)
- **next/font** con Fraunces (display), Archivo (nav/botones), IBM Plex Sans (cuerpo)

## Estructura

- `src/app/` — una carpeta por página del sitemap (Inicio, Espectáculos, Elenco, Historia, Sala de Prensa, Talleres, Contacto — Booking vive dentro de Contacto)
- `src/components/marketing/` — secciones de cada página, agrupadas por carpeta
- `src/content/` — datos verificados (shows, sitio, hitos de historia) — la "capa de CMS" liviana del proyecto; ver comentarios en cada archivo sobre qué está confirmado y qué falta
- `src/lib/` — accesores sobre `content/` (`getShows`, `getSeasonBlocks`, `getTicketingCta`) — pensados para poder cambiarse por un CMS real sin tocar componentes
- `src/design/tokens.ts` — colores y tipografías de marca
- `public/tour-map.html`, `public/venue-map.html` — mapas interactivos (D3 / Leaflet) embebidos vía `<iframe>`

## Desarrollo

```bash
npm run dev      # servidor de desarrollo (Turbopack)
npm run build    # build de producción
npx tsc --noEmit # chequeo de tipos
npx eslint src --max-warnings=0
```

## Pendiente de contenido real (no técnico)

Ver los comentarios "Pendiente"/`ExampleBadge` distribuidos en los componentes — cubren cosas como: fechas exactas de temporada, elenco completo (nombres y fotos), rider técnico, citas de prensa reales, plataforma de ticketing a conectar, y el logo/isotipo definitivo de la compañía (hoy el favicon y el wordmark del header son un placeholder tipográfico, no el logo real).
