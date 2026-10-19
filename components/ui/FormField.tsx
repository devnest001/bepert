import type { ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
};

export function FormField({
  id,
  label,
  error,
  hint,
  required,
  children,
}: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy">
        {label}
        {required ? (
          <span className="ml-1 font-medium text-danger" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1 font-normal text-muted">(optional)</span>
        )}
      </label>
      {children}
      {hint && !error ? (
        <p id={hintId} className="mt-1.5 text-sm text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm font-medium text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const fieldClassName =
  "h-12 w-full rounded-[10px] border border-line bg-white px-3.5 text-[0.975rem] text-ink outline-none transition-shadow placeholder:text-slate-400 focus:border-action focus:ring-2 focus:ring-action/20";

export const areaClassName =
  "min-h-36 w-full rounded-[10px] border border-line bg-white px-3.5 py-3 text-[0.975rem] text-ink outline-none transition-shadow placeholder:text-slate-400 focus:border-action focus:ring-2 focus:ring-action/20";
