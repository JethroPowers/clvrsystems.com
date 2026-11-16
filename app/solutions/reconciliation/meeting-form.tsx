"use client";

import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  meetingFields,
  meetingFormats,
  meetingPhonePattern,
  meetingSuccess,
  reconciliationEnquiryPath,
  type MeetingField,
} from "@/lib/reconciliation/site";
import styles from "./reconciliation.module.css";

type FormStatus =
  | { state: "idle" | "sending" | "sent" }
  | { state: "error"; message: string };

type TextFieldProps = {
  field: MeetingField;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  required?: boolean;
};

function TextField({ field, type = "text", autoComplete, required }: TextFieldProps) {
  return (
    <label className={styles.field}>
      <span>{meetingFields[field].label}</span>
      <input
        name={field}
        type={type}
        autoComplete={autoComplete}
        required={required}
        maxLength={meetingFields[field].limit}
        title={type === "tel" ? "Enter a phone number with at least six digits." : undefined}
        pattern={type === "tel" ? meetingPhonePattern : required ? String.raw`.*\S.*` : undefined}
      />
    </label>
  );
}

export default function MeetingForm({ privacyUrl, contactEmail }: {
  privacyUrl: string;
  contactEmail: string;
}) {
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });
  const busy = useRef(false);
  const submissionId = useRef<string | null>(null);
  const confirmation = useRef<HTMLHeadingElement>(null);
  const sendError = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (status.state === "sent") confirmation.current?.focus();
    if (status.state === "error") sendError.current?.focus();
  }, [status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;

    const data = Object.fromEntries(new FormData(event.currentTarget));
    busy.current = true;
    setStatus({ state: "sending" });

    try {
      submissionId.current ??= crypto.randomUUID();
      const response = await fetch(reconciliationEnquiryPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, submissionId: submissionId.current }),
        signal: AbortSignal.timeout(18000),
      });
      const result = await response.json();
      if (response.ok && result.ok === true) {
        setStatus({ state: "sent" });
      } else {
        setStatus({
          state: "error",
          message: typeof result.error === "string"
            ? result.error
            : "We couldn’t confirm your request was sent. Please try again or contact CLVR Systems.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "We couldn’t confirm your request was sent. Please try again or contact CLVR Systems.",
      });
    } finally {
      busy.current = false;
    }
  }

  if (status.state === "sent") {
    return (
      <div className={styles.formPanel}>
        <Check size={30} className={styles.formCheck} aria-hidden />
        <h3 id="meeting-form-title" ref={confirmation} tabIndex={-1}>Meeting request received</h3>
        <p role="status">{meetingSuccess}</p>
        <Link href="/" className={styles.inlineLink}>
          Back to CLVR Systems <ArrowUpRight size={16} aria-hidden />
        </Link>
      </div>
    );
  }

  const sending = status.state === "sending";
  return (
    <div className={styles.formPanel}>
      <h3 id="meeting-form-title" tabIndex={-1}>Request a 20-minute meeting</h3>
      <p id="meeting-form-intro">We’ll email you to arrange a time. No financial records needed.</p>
      <form
        className={styles.form}
        aria-labelledby="meeting-form-title"
        aria-describedby="meeting-form-intro"
        action={reconciliationEnquiryPath}
        method="post"
        onSubmit={submit}
        onInvalidCapture={(event) => {
          const details = (event.target as HTMLElement).closest("details");
          if (details) details.open = true;
        }}
        aria-busy={sending}
      >
        <fieldset className={styles.formFields} disabled={sending}>
          <legend className={styles.fieldLegend}>All fields below are required.</legend>
          <TextField field="fullName" autoComplete="name" required />
          <TextField field="email" type="email" autoComplete="email" required />
          <TextField field="company" autoComplete="organization" required />
          <TextField field="role" autoComplete="organization-title" required />
        </fieldset>
        <details className={styles.optional}>
          <summary>Meeting preferences and context <span>(optional)</span><ChevronDown size={17} aria-hidden /></summary>
          <fieldset className={styles.formFields} disabled={sending}>
            <legend className="sr-only">Optional meeting details</legend>
            <TextField field="phone" type="tel" autoComplete="tel" />
            <TextField field="industry" />
            <label className={styles.field}>
              <span>{meetingFields.format.label}</span>
              <select name="format" defaultValue="">
                <option value="">No preference</option>
                {meetingFormats.map((format) => <option key={format}>{format}</option>)}
              </select>
            </label>
            <TextField field="availability" />
            <label className={`${styles.field} ${styles.wideField}`}>
              <span>{meetingFields.challenge.label}</span>
              <textarea name="challenge" rows={3} maxLength={meetingFields.challenge.limit} aria-describedby="meeting-data-note" />
            </label>
          </fieldset>
        </details>
        <div hidden>
          <label>Leave this field blank<input name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <p className={styles.formNote} id="meeting-data-note">
          Keep your description general and leave out transaction records, account numbers and bank credentials.
        </p>
        <p className={styles.formNote}>
          CLVR uses your details to respond to this enquiry. <a href={privacyUrl}>Privacy notice</a>
        </p>
        <button className={`button button-dark ${styles.submit}`} type="submit" disabled={sending}>
          {sending ? "Sending request…" : "Request a 20-minute meeting"}
          <ArrowUpRight size={16} aria-hidden />
        </button>
      </form>
      <span className="sr-only" role="status">{sending ? "Sending your meeting request." : ""}</span>
      {status.state === "error" && (
        <div className={styles.formError}>
          <p ref={sendError} tabIndex={-1} role="alert">{status.message}</p>
          <a href={`mailto:${contactEmail}`}>Email CLVR Systems</a>
        </div>
      )}
      <noscript>
        <p className={styles.formNote}>Enable JavaScript to send this form, or <a href={`mailto:${contactEmail}`}>email CLVR Systems</a>.</p>
      </noscript>
    </div>
  );
}
