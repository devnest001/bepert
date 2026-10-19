import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { href?: string; label: string }[];
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="hero-grid border-b border-white/10">
      <Container className="py-16 sm:py-20 lg:py-24">
        {breadcrumbs?.length ? (
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-teal uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl text-[clamp(2.125rem,4vw,3.5rem)] font-bold tracking-tight text-white">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
