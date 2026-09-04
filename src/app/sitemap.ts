import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tangofuriacompany.com";

const routes = ["", "/espectaculos", "/elenco", "/historia", "/talleres", "/contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/espectaculos" ? "weekly" : "monthly",
  }));
}
