import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
  href?: string;
};

export function Logo({ inverted = false, href = "/" }: LogoProps) {
  const mark = (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`grid h-9 w-9 place-items-center rounded-[10px] ${
          inverted ? "bg-white/10 ring-1 ring-white/15" : "bg-navy"
        }`}
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
          <path
            d="M8 7h9.2c3.4 0 5.8 1.9 5.8 4.7 0 1.9-1.1 3.4-2.9 4.1 2.2.6 3.6 2.3 3.6 4.5 0 3.1-2.6 5.2-6.3 5.2H8V7Z"
            className={inverted ? "fill-white" : "fill-white"}
          />
          <path
            d="M12.1 10.3v3.8h4.4c1.4 0 2.2-.7 2.2-1.9s-.8-1.9-2.2-1.9h-4.4Zm0 6.6v4.8h5c1.6 0 2.6-.8 2.6-2.4s-1-2.4-2.6-2.4h-5Z"
            className={inverted ? "fill-navy/80" : "fill-slate"}
          />
          <circle cx="24.5" cy="9" r="2.1" className="fill-teal" />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`block text-[15px] font-semibold tracking-tight ${
            inverted ? "text-white" : "text-navy"
          }`}
        >
          BEPERT
        </span>
        <span
          className={`block text-[11px] font-medium tracking-[0.14em] uppercase ${
            inverted ? "text-white/70" : "text-muted"
          }`}
        >
          Solutions
        </span>
      </span>
    </span>
  );

  if (!href) return mark;

  return (
    <Link href={href} className="inline-flex rounded-md" aria-label="BEPERT Solutions home">
      {mark}
    </Link>
  );
}
