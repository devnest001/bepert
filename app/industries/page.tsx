import { industryIcons } from "@/components/content/industryIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Industries",
  description:
    "Target industries BEPERT Solutions can support with software development, consulting, and staffing — without unverified claims of prior client work.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology solutions for a range of sectors"
        description="The categories below are areas where technology services are commonly needed. They are presented as potential areas of support, not as a record of completed client programmes."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "Industries" },
        ]}
      />

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            title="Sectors we can discuss"
            description="Each category is kept as a content module so it can be added, edited, or removed as the business focus changes."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.slug}
                title={industry.title}
                description={industry.description}
                icon={industryIcons[industry.slug]}
              />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            If your sector is not listed, that does not mean we cannot help.
            Share the problem and the systems involved.
          </p>
          <div className="mt-6">
            <Button href="/contact">Discuss your context</Button>
          </div>
        </Container>
      </section>

      <CTASection
        title="Not sure which solution fits?"
        description="Start with the outcome you need. We can help you decide whether the work is delivery, consulting, staffing, or a mix."
        secondaryHref="/services"
        secondaryLabel="View services"
      />
    </>
  );
}
