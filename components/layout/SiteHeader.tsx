"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuId = useId();

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Logo inverted />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const current = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link relative px-3 py-2 text-sm font-medium transition-colors hover:text-white ${
                  current ? "text-white" : "text-white/80"
                }`}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-teal transition-transform ${
                    current ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Button href="/contact" className="h-10 px-4 text-white">
            Let’s Talk
          </Button>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </Container>
      {open ? (
        <div
          id={menuId}
          className="border-t border-white/10 bg-navy lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const current = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-3 text-base font-medium ${
                    current ? "bg-white/10 text-white" : "text-white/80"
                  }`}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href="/contact" className="mt-3">
              Let’s Talk
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
