import type { Metadata } from "next";
import { company, getMetadataBase } from "@/lib/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageSeo): Metadata {
  const urlPath = path === "/" ? "/" : path;
  return {
    title,
    description,
    alternates: { canonical: urlPath },
    openGraph: {
      title: `${title} | ${company.name}`,
      description,
      url: urlPath,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.name}`,
      description,
    },
  };
}

export function organizationJsonLd() {
  const metadataBase = getMetadataBase();
  const origin = metadataBase.origin;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    description: company.description,
    url: origin,
    logo: `${origin}/assets/logo.svg`,
    areaServed: "Worldwide",
    serviceType: [
      "Software Development",
      "Technology Consulting",
      "IT Staffing",
    ],
  };
}
