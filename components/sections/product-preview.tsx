import {
  ArrowUpRight,
  Check,
  CheckCheck,
  ChevronRight,
  FileText,
  LayoutDashboard,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { ProductId } from "@/lib/site-content";
import Image from "next/image";

// Illustrative interface components; these are not connected to customer data.
export function ProductPreview({ id }: { id: ProductId }) {
  if (id === "emilia")
    return (
      <div className="product-interface emilia-interface">
        <div className="interface-sidebar">
          <span className="emilia-wordmark">Emilia</span>
          <span className="interface-sidebar-label">YOUR WORKSPACE</span>
          <span className="is-active">
            <LayoutDashboard size={14} /> Overview
          </span>
          <span>
            <Users size={14} /> Clients
          </span>
          <span>
            <Mail size={14} /> Follow-ups
          </span>
          <span className="interface-sidebar-bottom">
            Clinic workspace <ChevronRight size={12} />
          </span>
        </div>
        <div className="interface-main">
          <div className="interface-topbar">
            <span>Overview</span>
            <span className="avatar">E</span>
          </div>
          <div className="interface-body">
            <span className="interface-eyebrow">CLINIC FOLLOW-UP</span>
            <h3>
              Follow-ups
              <br />
              to review.
            </h3>
            <div className="interface-summary">
              <span>Follow-up workspace</span>
              <span className="soft-tag">Operator review</span>
            </div>
            <div className="client-row">
              <span className="client-avatar">AC</span>
              <div>
                <strong>Alex C.</strong>
                <span>Routine follow-up</span>
              </div>
              <span className="client-status">Ready to review</span>
            </div>
            <div className="message-preview">
              <Mail size={16} />
              <p>
                “Hi Alex, it’s been a little while.
                <br />
                Would you like to find a time for your next visit?”
              </p>
              <span>Draft · waiting for your review</span>
            </div>
            <div className="interface-bottom">
              <span>
                <ShieldCheck size={13} /> Draft only · not sent
              </span>
              <span className="interface-action">
                Review follow-up <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  if (id === "marginflow")
    return (
      <div className="product-interface margin-interface">
        <div className="ledger-header">
          <strong>MarginFlow</strong>
          <span>QUOTE WORKSPACE</span>
        </div>
        <div className="ledger-body">
          <span className="interface-eyebrow">ENQUIRY MF-024</span>
          <h3>
            Kitchen
            <br />
            refurbishment.
          </h3>
          <div className="job-line">
            <div className="job-icon">
              <FileText size={21} />
            </div>
            <div>
              <strong>Kitchen refurbishment</strong>
              <span>Example enquiry · MF-024</span>
            </div>
            <span className="soft-tag">Awaiting reply</span>
          </div>
          <div className="job-stages">
            {["Enquiry received", "Quote prepared", "Follow-up due"].map(
              (text, i) => (
                <div key={text}>
                  <span
                    className={i < 2 ? "stage-check completed" : "stage-check"}
                  >
                    {i < 2 ? <Check size={14} /> : "03"}
                  </span>
                  <span>{text}</span>
                  <span>{i < 2 ? "Complete" : "Next step"}</span>
                </div>
              ),
            )}
          </div>
          <div className="ledger-next">
            <span>NEXT ACTION</span>
            <strong>
              Check for a reply <ArrowUpRight size={15} />
            </strong>
          </div>
        </div>
      </div>
    );
  if (id === "verified")
    return (
      <div className="product-interface verified-interface">
        <div className="ledger-header">
          <strong>
            CLVR <span>VERIFIED</span>
          </strong>
          <ShieldCheck size={19} />
        </div>
        <div className="ledger-body">
          <span className="interface-eyebrow">PAYMENT REVIEW</span>
          <h3>
            Supplier payment.
            <br />
            Approval attached.
          </h3>
          <div className="verification-stamp">
            <CheckCheck size={26} />
            <div>
              <strong>Example verification record</strong>
              <span>Illustrative workflow · VR-024</span>
            </div>
          </div>
          <div className="proof-lines">
            {[
              "Supplier request",
              "Approval reference",
              "Payment reference",
              "Verification result",
            ].map((text, i) => (
              <div key={text}>
                <span>0{i + 1}</span>
                <strong>{text}</strong>
                <Check size={14} />
              </div>
            ))}
          </div>
          <div className="record-footnote">
            <span className="signal-dot" /> Request and approval available for
            review.
          </div>
        </div>
      </div>
    );
  return (
    <div className="product-interface juris-interface">
      <div className="ledger-header">
        <strong>
          JURIS<span>GLOBAL</span>
        </strong>
        <span>PROGRAMME RESEARCH</span>
      </div>
      <div className="juris-atlas-scene">
        <Image src="/images/juris-globe.svg" alt="" width={600} height={600} />
        <div className="juris-atlas-copy">
          <span className="interface-eyebrow">RESIDENCY & CITIZENSHIP</span>
          <h3>
            Explore programmes.
            <br />
            Compare the details.
          </h3>
          <span className="juris-atlas-marker">
            Explore the atlas <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
      <div className="juris-research-strip">
        {[
          ["01", "Explore", "Programme dossiers"],
          ["02", "Compare", "Up to three programmes"],
          ["03", "Research", "Answers with sources"],
        ].map(([number, title, detail]) => (
          <div key={number}>
            <span>{number}</span>
            <strong>{title}</strong>
            <small>{detail}</small>
          </div>
        ))}
      </div>
      <div className="juris-interface-foot">
        <span className="signal-dot" /> Keep your shortlist and sources
        together.
      </div>
    </div>
  );
}
