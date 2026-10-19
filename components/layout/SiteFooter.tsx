import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { company, copyrightYear, footerNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = copyrightYear;

  return (
    <footer className="bg-navy text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo inverted />
            <p className="mt-4 text-sm text-white/65">{company.category}</p>
            <p className="mt-2 max-w-xs text-sm text-white/65">{company.tagline}</p>
          </div>
          <FooterColumn title="Services" items={footerNav.services} />
          <FooterColumn title="Company" items={footerNav.company} />
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {siteConfig.contactEmail ? (
                <li>
                  <a className="hover:text-white" href={`mailto:${siteConfig.contactEmail}`}>
                    {siteConfig.contactEmail}
                  </a>
                </li>
              ) : null}
              {siteConfig.contactPhone ? (
                <li>
                  <a className="hover:text-white" href={`tel:${siteConfig.contactPhone}`}>
                    {siteConfig.contactPhone}
                  </a>
                </li>
              ) : null}
              {siteConfig.contactAddress ? <li>{siteConfig.contactAddress}</li> : null}
              {!siteConfig.contactEmail &&
              !siteConfig.contactPhone &&
              !siteConfig.contactAddress ? (
                <li>
                  Use the{" "}
                  <Link className="text-white underline-offset-2 hover:underline" href="/contact">
                    contact form
                  </Link>{" "}
                  to reach the team. Public email, phone, and address will appear here once they
                  are published.
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold tracking-wide text-white">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            <Link href={item.href} className="text-sm text-white/70 hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
