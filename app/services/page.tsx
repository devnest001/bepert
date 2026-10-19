import {
  Bot,
  Code2,
  Headset,
  Layers,
  MonitorSmartphone,
  Puzzle,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Software development, technology consulting, integrations, AI-enabled features, automation, and ongoing support from BEPERT Solutions.",
  path: "/services",
});

const icons = {
  "custom-software": <Code2 className="h-5 w-5" aria-hidden="true" />,
  "web-applications": <Layers className="h-5 w-5" aria-hidden="true" />,
  "mobile-applications": (
    <Smartphone className="h-5 w-5" aria-hidden="true" />
  ),
  "ai-automation": <Bot className="h-5 w-5" aria-hidden="true" />,
  "api-integration": <Puzzle className="h-5 w-5" aria-hidden="true" />,
  consulting: <MonitorSmartphone className="h-5 w-5" aria-hidden="true" />,
  maintenance: <Headset className="h-5 w-5" aria-hidden="true" />,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Technology solutions built around your business"
        description="We design, build, and support digital solutions, and we provide consulting when the first need is clarity. IT staffing is available as a separate engagement when teams need additional capacity."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "Services" },
        ]}
      >
        <Button href="/contact" variant="inverse">
          Let’s Talk
        </Button>
      </PageHero>

      <section className="bg-white">
        <Container className="py-20">
          <SectionHeading
            title="What we offer"
            description="Each service below can be discussed as a standalone piece of work or as part of a broader delivery plan."
          />
          <div className="mt-12 space-y-8">
            {services.map((service) => (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 rounded-[12px] border border-line bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="mb-4 grid h-11 w-11 place-items-center rounded-[10px] bg-white text-action ring-1 ring-line">
                      {icons[service.slug]}
                    </div>
                    <h2 className="text-2xl font-semibold text-navy">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-muted">{service.description}</p>
                    <p className="mt-4 text-sm font-medium text-ink">
                      Business value: {service.value}
                    </p>
                  </div>
                  <Button href={service.href} className="shrink-0">
                    Discuss this service
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-20">
          <div className="rounded-[16px] bg-navy px-6 py-10 sm:px-10">
            <h2 className="text-2xl font-semibold text-white">
              Need a custom combination of services?
            </h2>
            <p className="mt-3 max-w-2xl text-white/75">
              Many briefs sit across development, consulting, and team support.
              Tell us what you are trying to achieve and we will help shape the
              right conversation.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="inverse">
                Start a conversation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to discuss a solution?"
        description="Share the outcome you need. We will use that as the starting point, not a pre-packaged product pitch."
        secondaryHref="/staffing"
        secondaryLabel="IT staffing"
      />
    </>
  );
}
