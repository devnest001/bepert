import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  value?: string;
  cta?: string;
  icon?: ReactNode;
};

export function ServiceCard({
  title,
  description,
  href,
  value,
  cta = "Learn more",
  icon,
}: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[12px] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      {icon ? (
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-[10px] bg-surface text-action">
          {icon}
        </div>
      ) : null}
      <h3 className="text-xl font-semibold tracking-tight text-navy">{title}</h3>
      <p className="mt-3 flex-1 text-[0.975rem] text-muted">{description}</p>
      {value ? (
        <p className="mt-4 text-sm font-medium text-ink">{value}</p>
      ) : null}
      <div className="mt-6">
        <Button href={href} variant="ghost" className="h-auto px-0">
          {cta}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </article>
  );
}
