"use client";

export default function GlobalError({ retry }: { retry: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#0b1220",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <title>Something went wrong | BEPERT Solutions</title>
          <h1 style={{ fontSize: "2rem", margin: "0 0 0.75rem" }}>
            Something went wrong
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: 420 }}>
            The site could not finish loading. Try again, or come back shortly.
          </p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              marginTop: 24,
              height: 48,
              padding: "0 20px",
              border: 0,
              borderRadius: 10,
              background: "#ffffff",
              color: "#0b1220",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
