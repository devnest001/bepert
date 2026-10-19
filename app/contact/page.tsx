import { Suspense } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { EnquiryType } from "@/lib/content";
import { enquiryTypes } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact BEPERT Solutions to discuss software development, technology consulting, IT staffing, or another enquiry.",
  path: "/contact",
});

const helpItems = [
  {
    title: "Software development",
    body: "Custom software, web and mobile applications, integrations, AI-enabled features, automation, and support.",
  },
  {
    title: "Technology consulting",
    body: "Architecture, planning, and practical guidance before or during delivery.",
  },
  {
    title: "IT staffing",
    body: "Staff augmentation and specialist resource conversations for client teams.",
  },
];

function isEnquiryType(value: string | undefined): value is EnquiryType {
  return enquiryTypes.some((type) => type.value === value);
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let’s talk about what you want to build"
        description="Use the form to tell us about a software, consulting, staffing, or general enquiry. We will only claim a message has been sent when delivery is actually configured."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "Contact" },
        ]}
      />
      <section className="bg-white">
        <Container className="grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading title="How can we help?" />
            <ul className="mt-8 space-y-5">
              {helpItems.map((item) => (
                <li key={item.title}>
                  <h2 className="font-semibold text-navy">{item.title}</h2>
                  <p className="mt-1 text-sm text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-[12px] border border-line bg-surface p-5 text-sm text-muted">
              <h2 className="font-semibold text-navy">Direct contact details</h2>
              {siteConfig.contactEmail ||
              siteConfig.contactPhone ||
              siteConfig.contactAddress ? (
                <ul className="mt-3 space-y-1">
                  {siteConfig.contactEmail ? (
                    <li>
                      Email:{" "}
                      <a
                        className="text-action"
                        href={`mailto:${siteConfig.contactEmail}`}
                      >
                        {siteConfig.contactEmail}
                      </a>
                    </li>
                  ) : null}
                  {siteConfig.contactPhone ? (
                    <li>
                      Phone:{" "}
                      <a
                        className="text-action"
                        href={`tel:${siteConfig.contactPhone}`}
                      >
                        {siteConfig.contactPhone}
                      </a>
                    </li>
                  ) : null}
                  {siteConfig.contactAddress ? (
                    <li>Address: {siteConfig.contactAddress}</li>
                  ) : null}
                </ul>
              ) : (
                <p className="mt-3">
                  A public email address, phone number, and office location have
                  not been published yet. Use the form and we will follow up.
                </p>
              )}
            </div>
          </div>
          <div className="rounded-[16px] border border-line bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-navy">Send us a message</h2>
            <p className="mt-2 mb-6 text-sm text-muted">
              Required fields are marked. We use your details only to respond to
              this enquiry.
            </p>
            <Suspense fallback={<p className="text-sm text-muted">Loading form…</p>}>
              <ContactFormLoader searchParams={searchParams} />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}

async function ContactFormLoader({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const defaultType = isEnquiryType(params.type)
    ? params.type
    : "software-development";
  return <ContactForm defaultType={defaultType} />;
}
