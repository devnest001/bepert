import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHero } from "@/components/ui/PageHero";
import { caseStudies } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Work",
  description:
    "Case studies from BEPERT Solutions will be published here when verified project material is available.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Real solutions. Measurable impact — when we can show it."
        description="This page is the home for project write-ups that can be published with accurate context. We do not invent clients, screenshots, or results."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "Work" },
        ]}
      />
      <section className="bg-white">
        <Container className="py-20">
          {caseStudies.length === 0 ? (
            <EmptyState
              title="Work examples coming soon"
              description="When a project can be described honestly — including the challenge, the solution, the technologies used, and any verified outcome — it will be added here. Until then, we would rather talk about your brief."
              actionLabel="Discuss your project"
            />
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          )}
        </Container>
      </section>
      <CTASection
        title="Have a project in mind?"
        description="Tell us about the problem, the users, and any systems already in place."
      />
    </>
  );
}
