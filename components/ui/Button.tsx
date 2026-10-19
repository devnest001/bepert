import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

const variants = {
  primary:
    "bg-action text-white hover:bg-hover focus-visible:outline-offset-2 disabled:bg-slate/40 disabled:text-white/80",
  secondary:
    "bg-white text-navy ring-1 ring-line hover:bg-surface disabled:text-muted",
  inverse:
    "bg-white text-navy hover:bg-surface disabled:bg-white/70",
  outline:
    "bg-transparent text-white ring-1 ring-white/30 hover:bg-white/10",
  ghost: "bg-transparent text-action hover:text-hover",
} as const;

type Common = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
};

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common & {
  href: string;
  type?: never;
  disabled?: boolean;
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = `inline-flex h-12 items-center justify-center gap-2 rounded-[10px] px-5 text-[0.9375rem] font-semibold transition-colors ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, disabled, ...rest } = props;
    if (disabled) {
      return (
        <span className={`${classes} pointer-events-none opacity-60`} aria-disabled="true">
          {children}
        </span>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
