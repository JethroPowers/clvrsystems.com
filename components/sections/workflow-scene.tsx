"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CheckCheck,
  CircleDot,
  Fingerprint,
  UserRound,
} from "lucide-react";
import {
  siteCopy,
  workflowSteps,
  paymentWorkflowSteps,
} from "@/lib/site-content";
import { Enter, useSiteMotion } from "@/components/ui-custom/site-motion";

const scenarios = {
  clinic: {
    ...siteCopy.workflow,
    steps: workflowSteps,
    brand: "EMILIA",
    recordType: "CLIENT FOLLOW-UP",
    reference: "EM—024",
    recordTitle: "Review Alex’s\nfollow-up.",
    owner: "Clinic operator",
    footnote: "Review recorded. No message sent.",
    caption:
      "Illustrative clinic review. Live sending is not enabled in the clinic portal.",
  },
  payment: {
    label: "The payment workflow",
    title: "From request\nto record.",
    description:
      "An illustrated payment review showing how Verified is designed to keep a supplier request, its approval and the verification result together.",
    steps: paymentWorkflowSteps,
    brand: "CLVR VERIFIED",
    recordType: "SUPPLIER PAYMENT",
    reference: "VR—024",
    recordTitle: "Review a supplier\npayment.",
    owner: "Finance reviewer",
    footnote: "Request, approval and check in one record.",
    caption:
      "Illustrative product workflow. No payment is processed in this example.",
  },
};

export default function WorkflowScene({
  compact = false,
  scenario = "clinic",
}: {
  compact?: boolean;
  scenario?: keyof typeof scenarios;
}) {
  const [active, setActive] = useState(0);
  const stepsRef = useRef<(HTMLElement | null)[]>([]);
  const { reduced } = useSiteMotion();
  const content = scenarios[scenario];
  const steps = content.steps;
  const step = steps[active];
  useEffect(() => {
    if (compact || reduced || !window.IntersectionObserver) return;
    const query = window.matchMedia("(min-width: 960px)");
    let observer: IntersectionObserver | undefined;
    const observe = () => {
      observer?.disconnect();
      if (!query.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting);
          if (visible.length)
            setActive(Number((visible[0].target as HTMLElement).dataset.step));
        },
        { rootMargin: "-30% 0px -45% 0px", threshold: 0 },
      );
      stepsRef.current.forEach(
        (element) => element && observer?.observe(element),
      );
    };
    observe();
    query.addEventListener("change", observe);
    return () => {
      observer?.disconnect();
      query.removeEventListener("change", observe);
    };
  }, [compact, reduced]);
  const selectStep = (index: number) => {
    setActive(index);
    if (!compact && !reduced && window.matchMedia("(min-width: 960px)").matches)
      stepsRef.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };
  return (
    <section
      className={`workflow-section section-space ${compact ? "workflow-compact" : ""}`}
      id="approach"
      aria-labelledby="workflow-title"
    >
      <div className="site-container">
        <Enter className="section-topline">
          <span className="eyebrow">02 / {content.label}</span>
          <Link className="text-link workflow-approach-link" href="/approach">
            Explore the approach <ArrowUpRight size={17} aria-hidden />
          </Link>
        </Enter>
        <Enter className="workflow-intro">
          <h2 id="workflow-title" className="display-heading">
            {content.title}
          </h2>
          <p className="section-description">{content.description}</p>
        </Enter>
        <div className="workflow-layout">
          <div className="workflow-sticky">
            <div className="workflow-console">
              <div className="console-top">
                <span className="console-brand">
                  <Fingerprint size={19} /> {content.brand}
                </span>
                <span className="console-indicator">Illustrative workflow</span>
              </div>
              <div className="console-path" aria-label="Workflow stages">
                {steps.map((item, index) => (
                  <button
                    key={item.title}
                    aria-label={`Show ${item.title} stage`}
                    aria-current={active === index ? "step" : undefined}
                    onClick={() => selectStep(index)}
                    className={index <= active ? "is-reached" : ""}
                  >
                    <span>
                      {index < active ? <Check size={13} /> : `0${index + 1}`}
                    </span>
                    <strong>{item.title}</strong>
                  </button>
                ))}
              </div>
              <div className="console-record">
                <div className="record-meta">
                  <span>{content.recordType}</span>
                  <span>{content.reference}</span>
                </div>
                <h3>{content.recordTitle}</h3>
                <div className="record-owner">
                  <span className="owner-avatar">
                    <UserRound size={16} />
                  </span>
                  <div>
                    <span>Assigned to</span>
                    <strong>{content.owner}</strong>
                  </div>
                  <span className="record-example">Example</span>
                </div>
                <div
                  className="record-status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <span>WORKFLOW STATUS</span>
                  <motion.strong
                    key={step.state}
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <CircleDot size={16} />
                    {step.state}
                  </motion.strong>
                </div>
                <div className="record-next">
                  <span>NEXT ACTION</span>
                  <strong>
                    {step.action}
                    <ArrowUpRight size={16} />
                  </strong>
                </div>
              </div>
              <div className="record-history">
                <div>
                  <span>REVIEW HISTORY</span>
                  <span>
                    {String(active + 1).padStart(2, "0")}{" "}
                    {active === 0 ? "ENTRY" : "ENTRIES"}
                  </span>
                </div>
                {steps.map((item, index) => (
                  <div
                    key={item.title}
                    className={`history-row ${index <= active ? "is-recorded" : ""}`}
                  >
                    <CheckCheck size={14} />
                    <span>
                      {index <= active ? item.event : "Awaiting next stage"}
                    </span>
                    <span>0{index + 1}</span>
                  </div>
                ))}
              </div>
              <div className="console-bottom">
                <span>
                  <span className="signal-dot" />{" "}
                  {active === steps.length - 1
                    ? content.footnote
                    : "Illustrative review in progress."}
                </span>
                <Fingerprint size={16} />
              </div>
            </div>
            <p className="scene-caption">{content.caption}</p>
          </div>
          <div className="workflow-chapters">
            {steps.map((item, index) => (
              <article
                ref={(el) => {
                  stepsRef.current[index] = el;
                }}
                data-step={index}
                key={item.title}
                className={`workflow-chapter ${active === index ? "is-current" : ""}`}
              >
                <button
                  className="chapter-selector"
                  aria-label={`Show ${item.title} in the workflow example`}
                  aria-pressed={active === index}
                  onClick={() => selectStep(index)}
                >
                  <span>0{index + 1}</span>
                  <ArrowDown size={16} />
                </button>
                <span className="eyebrow">{item.kicker}</span>
                <h3>{item.title}.</h3>
                <p>{item.description}</p>
                <div className="chapter-rule">
                  <motion.span
                    animate={{ scaleX: active === index ? 1 : 0 }}
                    transition={{ duration: reduced ? 0 : 0.55 }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
