import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { createPageMetadata } from "@/lib/seo";
import { company } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy",
  description: `How ${company.name} handles information submitted through this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy notice"
        description="This notice describes the information collected through the website forms. It will be expanded with verified legal entity details when those are available."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { label: "Privacy" },
        ]}
      />
      <section className="bg-white">
        <Container className="max-w-3xl space-y-8 py-16 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-navy">Who we are</h2>
            <p className="mt-3">
              {company.name} operates this website to describe our technology
              services and to receive enquiries. Registered company details,
              a data protection officer, and a postal address will be added
              here once they are confirmed.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-navy">
              Information we collect
            </h2>
            <p className="mt-3">
              Contact, staffing, and career forms collect name, email address,
              optional company name, enquiry type, and message. A hidden
              anti-spam field may also be submitted by automated tools.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-navy">How we use it</h2>
            <p className="mt-3">
              We use form submissions to understand and respond to the enquiry.
              We do not sell this information. Delivery of form messages depends
              on the email or webhook configuration set by the site operator.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-navy">Retention</h2>
            <p className="mt-3">
              Retention periods will follow the operator&apos;s chosen email or
              webhook provider until an internal policy is published.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-navy">Your choices</h2>
            <p className="mt-3">
              If you need a submission updated or removed, use the contact form
              and say so in the message. Do not include sensitive personal data
              in an enquiry unless it is essential.
            </p>
          </section>
        </Container>
      </section>
    </>
  );
}
