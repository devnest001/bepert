"use client";

import { useMemo, useState, useTransition, type FormEvent } from "react";
import Link from "next/link";
import { submitEnquiry } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import {
  areaClassName,
  fieldClassName,
  FormField,
} from "@/components/ui/FormField";
import { enquiryTypes, type EnquiryType } from "@/lib/content";
import { parseEnquiry, type FieldErrors } from "@/lib/contact";

type ContactFormProps = {
  defaultType?: EnquiryType;
  submitLabel?: string;
};

export function ContactForm({
  defaultType = "software-development",
  submitLabel = "Send message",
}: ContactFormProps) {
  const [pending, startTransition] = useTransition();
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<{
    tone: "success" | "error" | "warning";
    message: string;
  } | null>(null);

  const types = useMemo(() => enquiryTypes, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const raw = Object.fromEntries(formData.entries());
    const parsed = parseEnquiry(raw);
    if (parsed.fieldErrors) {
      setFieldErrors(parsed.fieldErrors);
      setStatus({
        tone: "error",
        message: "Please check the highlighted fields and try again.",
      });
      return;
    }

    setFieldErrors({});
    setStatus(null);

    startTransition(async () => {
      const result = await submitEnquiry(raw);
      if (result.fieldErrors) setFieldErrors(result.fieldErrors);
      if (result.ok && result.code === "sent") {
        setStatus({ tone: "success", message: result.message });
        form.reset();
        return;
      }
      if (result.ok && result.code === "spam") {
        setStatus({ tone: "success", message: result.message });
        form.reset();
        return;
      }
      setStatus({
        tone: result.code === "not_configured" ? "warning" : "error",
        message: result.message,
      });
    });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <FormField id="name" label="Name" required error={fieldErrors.name}>
        <input
          id="name"
          name="name"
          autoComplete="name"
          maxLength={80}
          className={fieldClassName}
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
        />
      </FormField>
      <FormField id="email" label="Email" required error={fieldErrors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          className={fieldClassName}
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
        />
      </FormField>
      <FormField id="company" label="Company" error={fieldErrors.company}>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          maxLength={120}
          className={fieldClassName}
          aria-invalid={Boolean(fieldErrors.company)}
          aria-describedby={fieldErrors.company ? "company-error" : undefined}
        />
      </FormField>
      <FormField
        id="enquiryType"
        label="Enquiry type"
        required
        error={fieldErrors.enquiryType}
      >
        <select
          id="enquiryType"
          name="enquiryType"
          defaultValue={defaultType}
          className={fieldClassName}
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.enquiryType)}
          aria-describedby={
            fieldErrors.enquiryType ? "enquiryType-error" : undefined
          }
        >
          {types.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </FormField>
      <FormField
        id="message"
        label="Message"
        required
        error={fieldErrors.message}
        hint="Share the problem, timeline, or the kind of support you need."
      >
        <textarea
          id="message"
          name="message"
          maxLength={4000}
          className={areaClassName}
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={
            fieldErrors.message ? "message-error" : "message-hint"
          }
        />
      </FormField>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="text-sm text-muted">
        By sending this form you agree that BEPERT Solutions may use the details
        provided to respond to your enquiry. See our{" "}
        <Link className="font-medium text-action hover:text-hover" href="/privacy">
          privacy notice
        </Link>
        .
      </p>
      {status ? (
        <div
          role="status"
          className={`rounded-[10px] px-4 py-3 text-sm font-medium ${
            status.tone === "success"
              ? "bg-success-bg text-success"
              : status.tone === "warning"
                ? "bg-surface text-ink ring-1 ring-line"
                : "bg-danger-bg text-danger"
          }`}
        >
          {status.message}
        </div>
      ) : null}
      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}

export function StaffingEnquiryForm() {
  return (
    <ContactForm defaultType="staffing" submitLabel="Share staffing needs" />
  );
}
