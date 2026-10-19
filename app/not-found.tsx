import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-white">
      <Container className="py-24 text-center">
        <p className="text-sm font-semibold tracking-[0.16em] text-action uppercase">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          The page you requested is not part of this website. Check the address
          or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
