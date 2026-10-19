import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <section className="bg-white" aria-busy="true" aria-live="polite">
      <Container className="py-24">
        <p className="text-sm font-medium text-muted">Loading…</p>
      </Container>
    </section>
  );
}
