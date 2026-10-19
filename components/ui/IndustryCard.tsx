import type { ReactNode } from "react";

type IndustryCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export function IndustryCard({ title, description, icon }: IndustryCardProps) {
  return (
    <article className="h-full rounded-[12px] border border-line bg-white p-6">
      {icon ? (
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-[10px] bg-surface text-action">
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
