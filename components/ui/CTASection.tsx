import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Let’s Talk",
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="bg-navy">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="section-title text-white">{title}</h2>
            <p className="mt-4 max-w-2xl text-white/75">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href={primaryHref} variant="inverse">
              {primaryLabel}
            </Button>
            {secondaryHref && secondaryLabel ? (
              <Button href={secondaryHref} variant="outline">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
