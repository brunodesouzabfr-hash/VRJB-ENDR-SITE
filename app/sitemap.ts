import type { MetadataRoute } from "next";
import { routeIndex } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vrjb-endr.romeufranco.chatgpt.site";
  return routeIndex.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/endr" || path === "/solicitar-diagnostico" ? 0.9 : 0.7,
  }));
}
