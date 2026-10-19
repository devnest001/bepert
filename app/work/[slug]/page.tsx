import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { caseStudies } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

type WorkParams = { slug: string };

export function generateStaticParams() {
  if (caseStudies.length > 0) {
    return caseStudies.map((study) => ({ slug: study.slug }));
  }

  // Cache Components requires at least one param at build time.
  // This placeholder is not a published case study and always 404s.
  return [{ slug: "_" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<WorkParams>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) {
    return createPageMetadata({
      title: "Case study",
      description: "Requested case study is not available.",
      path: `/work/${slug}`,
    });
  }
  return createPageMetadata({
    title: study.title,
    description: study.challenge,
    path: `/work/${study.slug}`,
  });
}

export default function CaseStudyPage({
  params,
}: {
  params: Promise<WorkParams>;
}) {
  return (
    <Suspense fallback={<Container className="py-24">Loading…</Container>}>
      <CaseStudyBody params={params} />
    </Suspense>
  );
}

async function CaseStudyBody({ params }: { params: Promise<WorkParams> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <>
      <PageHero
        eyebrow={study.industry}
        title={study.title}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/work", label: "Work" },
          { label: study.title },
        ]}
      />
      <section className="bg-white">
        <Container className="max-w-3xl py-16">
          <section>
            <h2 className="text-xl font-semibold text-navy">Challenge</h2>
            <p className="mt-3 text-muted">{study.challenge}</p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-navy">Solution</h2>
            <p className="mt-3 text-muted">{study.solution}</p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-navy">Technologies</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-surface px-3 py-1 text-sm text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>
          {study.outcome ? (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-navy">Outcome</h2>
              <p className="mt-3 text-muted">{study.outcome}</p>
            </section>
          ) : null}
          <div className="mt-12">
            <Button href="/contact">Discuss a similar brief</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
