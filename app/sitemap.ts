import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!process.env.SITE_URL) return [];
  return ["", "/guide", "/privacy", "/terms", "/releases"].map((path) => ({
    url: `${process.env.SITE_URL}${path}`,
    lastModified: "2026-10-26",
    changeFrequency: "monthly",
    priority: path ? 0.6 : 1,
  }));
}
