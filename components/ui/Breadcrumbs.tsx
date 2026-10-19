import Link from "next/link";

type Crumb = { href?: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-white/60">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last || !item.href ? (
                <span className="text-white" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
