import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Handshake,
  Layers3,
  LineChart,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { EmptyState } from "@/components/ui/EmptyState";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { industryIcons } from "@/components/content/industryIcons";
import {
  approachSteps,
  caseStudies,
  industries,
  pillars,
  services,
  whyPoints,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";
import { company } from "@/lib/site";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";

export const metadata = createPageMetadata({
  title: "Technology Services & Consulting",
  description: company.description,
  path: "/",
});

const pillarIcons = {
  "software-development": <Code2 className="h-5 w-5" aria-hidden="true" />,
  "technology-consulting": (
    <MessagesSquare className="h-5 w-5" aria-hidden="true" />
  ),
  "it-staffing": (
    <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
  ),
};

const whyIcons = [
  <Handshake className="h-5 w-5" key="h" aria-hidden="true" />,
  <Layers3 className="h-5 w-5" key="l" aria-hidden="true" />,
  <LineChart className="h-5 w-5" key="c" aria-hidden="true" />,
  <ShieldCheck className="h-5 w-5" key="s" aria-hidden="true" />,
];

export default function HomePage() {
  return (
    <>
      <section className="hero-grid">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-teal uppercase">
              {company.category}
            </p>
            <h1 className="display-title text-white">{company.headline}</h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              {company.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="inverse">
                Let’s Talk
              </Button>
              <Button href="/services" variant="outline">
                Explore Our Services
              </Button>
            </div>
          </div>
          <HeroVisual />
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Introduction"
            title="Technology services with a practical delivery mindset"
            description="BEPERT Solutions is a technology services and consulting company. We help organisations plan, build, and support digital solutions, and we can augment client teams when additional technology capacity is needed."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <ServiceCard
                key={pillar.slug}
                title={pillar.title}
                description={pillar.summary}
                href={pillar.href}
                icon={pillarIcons[pillar.slug]}
                cta="View details"
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Why BEPERT"
            title="How we work with clients"
            description="We keep the focus on the problem to be solved, the software or support required, and a collaboration model that stays easy to follow."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {whyPoints.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[12px] border border-line bg-white p-6"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-[10px] bg-surface text-action">
                  {whyIcons[index]}
                </div>
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Services"
            title="A closer look at how we can help"
            description="Software development is our core delivery capability. Consulting and staffing sit alongside it so clients can choose the support that fits the work."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                href={`/services#${service.slug}`}
                cta="Read more"
              />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/services" variant="secondary">
              See all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Industries"
            title="Sectors we can support"
            description="These are target industries and potential areas of technology support. They are not claims of verified client experience."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 6).map((industry) => (
              <IndustryCard
                key={industry.slug}
                title={industry.title}
                description={industry.description}
                icon={industryIcons[industry.slug]}
              />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/industries" variant="secondary">
              View industries
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Work"
            title="Selected work"
            description="Case studies will appear here once verified project material is available to publish."
          />
          <div className="mt-10">
            {caseStudies.length === 0 ? (
              <EmptyState
                title="Work examples coming soon"
                description="We are not publishing project results, client names, or screenshots until they can be shared accurately. If you have a brief to discuss, we would rather start with your requirements."
                actionLabel="Talk about a project"
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {caseStudies.map((study) => (
                  <CaseStudyCard key={study.slug} study={study} />
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-navy">
        <Container className="py-20">
          <SectionHeading
            inverted
            eyebrow="Approach"
            title="Understand the requirement. Deliver the solution."
            description="A straightforward sequence we use to move from an initial conversation to useful software, advice, or team support."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[12px] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-semibold text-teal">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CTASection
        title="Let’s talk about what you want to build"
        description="Share a software, consulting, or staffing requirement and we will follow up to understand the work."
        secondaryHref="/services"
        secondaryLabel="Browse services"
      />
    </>
  );
}
