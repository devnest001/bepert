import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaffingEnquiryForm } from "@/components/forms/ContactForm";
import { staffingProcess, staffingRoles } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "IT Staffing & Staff Augmentation",
  description:
    "IT staff augmentation and specialist resource support from BEPERT Solutions, discussed against your project requirements.",
  path: "/staffing",
});

export default function StaffingPage() {
  return (
    <>
      <PageHero
        eyebrow="IT staffing & staff augmentation"
        title="Access the right talent when you need it"
        description="When a client technology team needs additional developers or specialists, we can discuss staff augmentation aligned with the project. Availability, skills, and timing are confirmed only after we understand the requirement."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "Staffing" },
        ]}
      >
        <Button href="#staffing-enquiry" variant="inverse">
          Share a requirement
        </Button>
      </PageHero>

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            title="How staffing support can help"
            description="This offering exists to support client teams. It is not the whole of BEPERT Solutions, and it is not a training, hire-train-deploy, or campus programme."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "IT staff augmentation",
                body: "Additional technology capacity for a defined period, working with your existing ways of working.",
              },
              {
                title: "Support for client teams",
                body: "Help when an in-house team needs extra hands for delivery, support, or a specific workstream.",
              },
              {
                title: "Developer and specialist requests",
                body: "Role briefs can cover developers and other technology specialists. We do not guarantee coverage of every skill in advance.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[12px] border border-line bg-surface p-6"
              >
                <h2 className="text-lg font-semibold text-navy">{item.title}</h2>
                <p className="mt-3 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-20">
          <SectionHeading
            title="Roles we can discuss"
            description="The list below is a starting point for conversations. It is not a live bench or a promise that a named skill is immediately available."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {staffingRoles.map((role) => (
              <article
                key={role.title}
                className="rounded-[12px] border border-line bg-white p-6"
              >
                <h3 className="font-semibold text-navy">{role.title}</h3>
                <p className="mt-2 text-sm text-muted">{role.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            title="Requirement discussion process"
            description="We keep the process simple: understand the brief, be clear about what we can and cannot help with, then agree next steps only if there is a fit."
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {staffingProcess.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[12px] border border-line bg-surface p-6"
              >
                <p className="text-sm font-semibold text-action">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="staffing-enquiry" className="scroll-mt-24 bg-surface">
        <Container className="py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              title="Share your staffing needs"
              description="Tell us about the role, the project context, and any constraints you already know. We will use the form to start the conversation, not to confirm a placement."
            />
            <div className="rounded-[16px] border border-line bg-white p-6 sm:p-8">
              <StaffingEnquiryForm />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Need software delivery instead of staffing?"
        description="If the better fit is a delivered solution rather than extra people on your team, start with our services."
        primaryHref="/services"
        primaryLabel="Explore services"
        secondaryHref="/contact"
        secondaryLabel="General enquiry"
      />
    </>
  );
}
