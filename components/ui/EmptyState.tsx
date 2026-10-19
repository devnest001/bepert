import { Button } from "@/components/ui/Button";

type EmptyStateProps = {
  title: string;
  description: string;
  href?: string;
  actionLabel?: string;
};

export function EmptyState({
  title,
  description,
  href = "/contact",
  actionLabel = "Discuss a project",
}: EmptyStateProps) {
  return (
    <div className="rounded-[12px] border border-dashed border-line bg-white px-6 py-14 text-center">
      <h3 className="text-xl font-semibold text-navy">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-muted">{description}</p>
      <div className="mt-6">
        <Button href={href}>{actionLabel}</Button>
      </div>
    </div>
  );
}
