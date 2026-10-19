"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function ErrorPage({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <section className="bg-white">
      <Container className="py-24 text-center">
        <p className="text-sm font-semibold tracking-[0.16em] text-action uppercase">
          Something went wrong
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy">
          This page could not be loaded
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          Please try again. If the problem continues, use the contact form and
          we will follow up.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button type="button" onClick={() => retry()}>
            Try again
          </Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
