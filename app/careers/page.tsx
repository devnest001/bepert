import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { jobOpenings } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Careers",
  description:
    "Explore working with BEPERT Solutions. Current vacancies are listed only when they have been verified.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build useful skills. Do meaningful work."
        description="BEPERT Solutions is a technology services company. If you are interested in software delivery, consulting, or supporting client teams, you can introduce yourself even when a specific vacancy is not listed."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "Careers" },
        ]}
      />

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            title="Working with BEPERT Solutions"
            description="We look for people who communicate clearly, take practical ownership, and care about the quality of what they ship. We will not invent a culture story, benefits list, or office location here."
          />
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-20">
          <SectionHeading
            title="Open positions"
            description={
              jobOpenings.length === 0
                ? "Roles appear here only after they are confirmed. There are currently no verified vacancies to publish."
                : "Roles appear here only after they are confirmed."
            }
          />
          <div className="mt-10">
            {jobOpenings.length === 0 ? (
              <EmptyState
                title="No current openings"
                description="We are not listing roles at the moment. If you would like to be considered for future conversations, send a career enquiry with a short note about the work you do."
                href="#career-enquiry"
                actionLabel="Send a career enquiry"
              />
            ) : (
              <ul className="space-y-4">
                {jobOpenings.map((job) => (
                  <li
                    key={job.slug}
                    className="rounded-[12px] border border-line bg-white p-6"
                  >
                    <h3 className="text-lg font-semibold text-navy">{job.title}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {job.team} · {job.location} · {job.type}
                    </p>
                    <p className="mt-3 text-muted">{job.summary}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </section>

      <section id="career-enquiry" className="scroll-mt-24 bg-white">
        <Container className="py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <SectionHeading
              title="General career enquiry"
              description="Share your background and the kind of work you want to do. This is an introduction, not an application to a listed role, and it is not an offer of employment."
            />
            <div className="rounded-[16px] border border-line bg-surface p-6 sm:p-8">
              <ContactForm defaultType="careers" submitLabel="Send career enquiry" />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Don’t see a perfect fit?"
        description="You can still start a conversation. If there is nothing we can help with right now, we will say so clearly."
        primaryHref="/contact"
        primaryLabel="Contact the team"
      />
    </>
  );
}
