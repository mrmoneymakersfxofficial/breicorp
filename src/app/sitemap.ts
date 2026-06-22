import type { MetadataRoute } from "next";
import { industryPages } from "@/lib/data/industry-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://breicorp.com";
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/plataforma`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/empresa`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Industry SEO pages
  for (const page of industryPages) {
    routes.push({
      url: `${base}/${page.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return routes;
}
