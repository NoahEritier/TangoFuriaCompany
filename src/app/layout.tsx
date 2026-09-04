import type { Metadata } from "next";
import { Fraunces, Archivo, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// El dominio real todavía no está definido — placeholder hasta que el
// cliente confirme el dominio de producción. Sin esto, las URLs de Open
// Graph no resuelven a rutas absolutas.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tangofuriacompany.com";
const description =
  "Compañía de tango escénico de Mar del Plata dirigida por Emmanuel Marín, con co-dirección de Lola Gutiérrez Rey. Temporada en el Teatro Municipal Colón y giras internacionales.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tango Furia Company",
    template: "%s · Tango Furia Company",
  },
  description,
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Tango Furia Company",
    title: "Tango Furia Company",
    description,
    images: [{ url: "/images/Tango-Furia-1.webp", width: 1200, height: 800, alt: "Elenco de Tango Furia Company en escena" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tango Furia Company",
    description,
    images: ["/images/Tango-Furia-1.webp"],
  },
};

// JSON-LD: solo hechos verificados (ver src/content/site.ts). Sin fechas de
// funciones acá — Event schema pide startDate, y no se inventa uno hasta
// que el teatro confirme el calendario (ver src/content/shows.ts).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "PerformingArtsOrganization",
  name: "Tango Furia Company",
  url: siteUrl,
  description,
  foundingLocation: { "@type": "Place", name: "Mar del Plata, Argentina" },
  location: {
    "@type": "Place",
    name: "Teatro Municipal Colón",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hipólito Yrigoyen 1665",
      addressLocality: "Mar del Plata",
      addressCountry: "AR",
    },
  },
  sameAs: ["https://instagram.com/tangofuriacompany"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${archivo.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
