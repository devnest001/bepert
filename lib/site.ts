export const company = {
  name: "BEPERT Solutions",
  shortName: "BEPERT",
  category: "Technology Services & Consulting",
  tagline: "Build Technology. Solve Problems. Move Forward.",
  headline:
    "We Build Digital Solutions. We Bring the Expertise to Move You Forward.",
  description:
    "From custom software delivery to specialist technology consulting and staffing support, BEPERT Solutions helps businesses turn technology goals into practical outcomes.",
} as const;

export const siteConfig = {
  name: company.name,
  tagline: company.tagline,
  description: company.description,
  get siteUrl() {
    return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "";
  },
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || "",
  contactAddress: process.env.NEXT_PUBLIC_CONTACT_ADDRESS?.trim() || "",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/staffing", label: "Staffing" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export const copyrightYear = 2026;

export const footerNav = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#custom-software", label: "Software Development" },
    { href: "/services#consulting", label: "Technology Consulting" },
    { href: "/staffing", label: "IT Staffing" },
    { href: "/industries", label: "Industries" },
  ],
  legal: [{ href: "/privacy", label: "Privacy" }],
} as const;

export function getMetadataBase(): URL {
  return new URL(siteConfig.siteUrl || "http://localhost:3000");
}
