"use server";

import {
  isDeliveryConfigured,
  parseEnquiry,
  sanitisePlainText,
  type EnquiryResult,
} from "@/lib/contact";
import { enquiryTypes } from "@/lib/content";
import { company } from "@/lib/site";

export async function submitEnquiry(
  raw: Record<string, unknown>,
): Promise<EnquiryResult> {
  const parsed = parseEnquiry(raw);
  if (parsed.fieldErrors || !parsed.data) {
    return {
      ok: false,
      code: "invalid",
      message: "Please check the highlighted fields and try again.",
      fieldErrors: parsed.fieldErrors,
    };
  }

  const data = {
    ...parsed.data,
    name: sanitisePlainText(parsed.data.name),
    email: sanitisePlainText(parsed.data.email),
    company: parsed.data.company
      ? sanitisePlainText(parsed.data.company)
      : undefined,
    message: sanitisePlainText(parsed.data.message),
  };

  if (data.website) {
    return {
      ok: true,
      code: "spam",
      message: "Thank you. Your enquiry has been received.",
    };
  }

  if (!isDeliveryConfigured()) {
    return {
      ok: false,
      code: "not_configured",
      message:
        "The form is working, but email delivery has not been configured yet. Please try again later, or ask the team to set CONTACT_TO_EMAIL and RESEND_API_KEY (or CONTACT_WEBHOOK_URL).",
    };
  }

  const typeLabel =
    enquiryTypes.find((type) => type.value === data.enquiryType)?.label ??
    data.enquiryType;

  const payload = {
    source: company.name,
    name: data.name,
    email: data.email,
    company: data.company ?? "",
    enquiryType: typeLabel,
    message: data.message,
    submittedAt: new Date().toISOString(),
  };

  try {
    const webhook = process.env.CONTACT_WEBHOOK_URL?.trim();
    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Webhook rejected the submission.");
      }
      return {
        ok: true,
        code: "sent",
        message: "Thank you. Your enquiry has been sent.",
      };
    }

    const to = process.env.CONTACT_TO_EMAIL?.trim();
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (to && apiKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL?.trim() || "BEPERT Website <onboarding@resend.dev>",
          to: [to],
          reply_to: data.email,
          subject: `${company.name} enquiry: ${typeLabel}`,
          text: [
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Company: ${data.company || "Not provided"}`,
            `Enquiry type: ${typeLabel}`,
            "",
            data.message,
          ].join("\n"),
        }),
      });
      if (!response.ok) {
        throw new Error("Email provider rejected the submission.");
      }
      return {
        ok: true,
        code: "sent",
        message: "Thank you. Your enquiry has been sent.",
      };
    }

    return {
      ok: false,
      code: "not_configured",
      message:
        "The form is working, but email delivery has not been configured yet.",
    };
  } catch {
    return {
      ok: false,
      code: "server_error",
      message:
        "We could not send your enquiry just now. Please try again in a moment.",
    };
  }
}
