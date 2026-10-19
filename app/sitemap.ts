import type { MetadataRoute } from "next";
import { getMetadataBase } from "@/lib/site";
import { caseStudies } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getMetadataBase().origin;
  const routes = [
    "",
    "/services",
    "/staffing",
    "/industries",
    "/work",
    "/about",
    "/careers",
    "/contact",
    "/privacy",
  ];

  return [
    ...routes.map((path) => ({
      url: `${base}${path || "/"}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...caseStudies.map((study) => ({
      url: `${base}/work/${study.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
