import { enquiryTypes, type EnquiryType } from "@/lib/content";

export type EnquiryPayload = {
  name: string;
  email: string;
  company?: string;
  enquiryType: EnquiryType;
  message: string;
  website?: string;
};

export type FieldErrors = Partial<Record<keyof EnquiryPayload, string>>;

export type EnquiryResult = {
  ok: boolean;
  code: "sent" | "invalid" | "not_configured" | "server_error" | "spam";
  message: string;
  fieldErrors?: FieldErrors;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isUsableEnvValue(value: string | undefined) {
  const trimmed = value?.trim() ?? "";
  if (!trimmed) return false;
  const lower = trimmed.toLowerCase();
  if (lower.startsWith("your_") || lower.includes("your-webhook") || lower.includes("example.com")) {
    return false;
  }
  return true;
}

export function isDeliveryConfigured() {
  const to = process.env.CONTACT_TO_EMAIL;
  const resend = process.env.RESEND_API_KEY;
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  return Boolean(
    (isUsableEnvValue(to) && isUsableEnvValue(resend)) || isUsableEnvValue(webhook),
  );
}

export function parseEnquiry(input: Record<string, unknown>): {
  data?: EnquiryPayload;
  fieldErrors?: FieldErrors;
} {
  const name = String(input.name ?? "").trim();
  const email = String(input.email ?? "").trim();
  const company = String(input.company ?? "").trim();
  const enquiryType = String(input.enquiryType ?? "").trim() as EnquiryType;
  const message = String(input.message ?? "").trim();
  const website = String(input.website ?? "").trim();

  const fieldErrors: FieldErrors = {};

  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  if (name.length > 80) fieldErrors.name = "Please keep the name under 80 characters.";
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (company.length > 120) {
    fieldErrors.company = "Please keep the company name under 120 characters.";
  }
  if (!enquiryTypes.some((type) => type.value === enquiryType)) {
    fieldErrors.enquiryType = "Please choose an enquiry type.";
  }
  if (message.length < 20) {
    fieldErrors.message = "Please share a little more detail (at least 20 characters).";
  }
  if (message.length > 4000) {
    fieldErrors.message = "Please keep the message under 4,000 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  return {
    data: {
      name,
      email,
      company: company || undefined,
      enquiryType,
      message,
      website: website || undefined,
    },
  };
}

export function sanitisePlainText(value: string) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim();
}
