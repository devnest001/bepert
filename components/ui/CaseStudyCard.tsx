import Link from "next/link";
import type { CaseStudy } from "@/lib/content";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="overflow-hidden rounded-[12px] border border-line bg-white">
      <div className="h-40 bg-slate" aria-hidden="true" />
      <div className="p-6">
        <p className="text-xs font-semibold tracking-[0.12em] text-action uppercase">
          {study.industry}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-navy">{study.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm text-muted">{study.challenge}</p>
        <Link
          href={`/work/${study.slug}`}
          className="mt-5 inline-flex text-sm font-semibold text-action hover:text-hover"
        >
          Read case study
        </Link>
      </div>
    </article>
  );
}
