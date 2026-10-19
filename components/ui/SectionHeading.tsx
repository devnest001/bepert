type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.16em] uppercase ${
            inverted ? "text-teal" : "text-action"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`section-title ${inverted ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base sm:text-lg ${inverted ? "text-white/75" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
