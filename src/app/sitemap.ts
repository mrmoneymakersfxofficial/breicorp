import type { MetadataRoute } from "next";
import { industryPages } from "@/lib/data/industry-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://breicorp.com";
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/plataforma`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/empresa`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/modulos`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/app-movil`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contacto`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/seguridad`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/clientes`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/rubros`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/planes`, lastModified, changeFrequency: "weekly", priority: 0.9 },
  ];

  // Industry SEO pages (dynamic)
  const industryRoutes: MetadataRoute.Sitemap = industryPages.map((page) => ({
    url: `${base}/${page.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...industryRoutes];
}