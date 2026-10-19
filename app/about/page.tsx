import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pillars, values } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";
import { company } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "BEPERT Solutions is a technology services and consulting company focused on software delivery, practical advice, and staffing support.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BEPERT"
        title="Technology. Expertise. Partnership."
        description="We exist to help businesses turn technology goals into practical outcomes — through software, consulting, and, where it fits, additional people on the team."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "About" },
        ]}
      />

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            title="Who we are"
            description={`${company.name} is a ${company.category.toLowerCase()} company. ${company.tagline}`}
          />
          <div className="mt-8 max-w-3xl space-y-4 text-muted">
            <p>
              Our purpose is straightforward: understand the problem, choose an
              approach that can actually be delivered, and work with the client
              until the result is usable.
            </p>
            <p>
              We do not operate as a training academy, and we do not present
              unverified history, team size, office locations, or awards. What
              we will share here is how we work and the capabilities we can
              discuss.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-20">
          <SectionHeading
            title="What we bring"
            description="Three capabilities, kept in balance: delivery, advice, and team support."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.slug}
                className="rounded-[12px] border border-line bg-white p-6"
              >
                <h2 className="text-lg font-semibold text-navy">{pillar.title}</h2>
                <p className="mt-3 text-muted">{pillar.summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            title="How we collaborate"
            description="We work with client stakeholders, not around them. The aim is a solution the organisation can understand, use, and continue."
          />
          <ul className="mt-8 max-w-3xl space-y-3 text-muted">
            <li>Start with the business context and constraints.</li>
            <li>Make scope, risks, and trade-offs visible.</li>
            <li>Keep communication regular and specific.</li>
            <li>Leave behind software or advice that can be owned internally.</li>
          </ul>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-20">
          <SectionHeading title="Values we work by" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[12px] border border-line bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-muted">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Let’s build what’s next"
        description="If you have a software, consulting, or staffing brief, we are ready to listen."
        secondaryHref="/careers"
        secondaryLabel="Careers"
      />
    </>
  );
}
