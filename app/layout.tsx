import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { company, getMetadataBase } from "@/lib/site";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${company.name} | ${company.category}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    "BEPERT Solutions",
    "software development",
    "technology consulting",
    "IT staffing",
    "staff augmentation",
  ],
  openGraph: {
    type: "website",
    siteName: company.name,
    title: company.headline,
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: company.headline,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  colorScheme: "light",
};

function HeaderFallback() {
  return <div className="h-16 border-b border-white/10 bg-navy/95 lg:h-[72px]" />;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = organizationJsonLd();

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body
        className="flex min-h-full flex-col font-sans"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Suspense fallback={<HeaderFallback />}>
          <SiteHeader />
        </Suspense>
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
