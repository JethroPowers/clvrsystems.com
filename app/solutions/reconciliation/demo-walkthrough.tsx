"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import styles from "./demo-walkthrough.module.css";

const demoUrl = "https://clvr-reconcile-meeting-preview-b0nicswmo.vercel.app/demo/reconcile";

const screens = [
  {
    id: "difference",
    tab: "Find the difference",
    title: "Find the UGX 200,000 difference.",
    detail: "INV-1842 is recorded as paid. The available bank and mobile-money receipts support UGX 1,800,000 of its UGX 2,000,000 total.",
    steps: [
      "Compare the invoice with its linked receipts.",
      "See the amount that still needs evidence.",
      "Keep the source references with the case.",
    ],
    image: "/images/reconcile/investigation.webp",
    width: 666,
    height: 498,
    alt: "Fictional INV-1842 investigation showing a UGX 200,000 difference and linked bank and mobile-money receipt references.",
  },
  {
    id: "investigation",
    tab: "Investigate",
    title: "Give the investigation a next step.",
    detail: "Choose an owner and prepare an editable evidence request. The case keeps the question alongside its source records.",
    steps: [
      "Choose who is responsible for follow-up.",
      "Review the request before simulating a send.",
      "Keep the difference open while evidence is outstanding.",
    ],
    image: "/images/reconcile/evidence-request.webp",
    width: 877,
    height: 441,
    alt: "Demo case actions showing an owner selector, editable evidence request for INV-1842 and a clearly labelled simulated send.",
  },
  {
    id: "review",
    tab: "Finance review",
    title: "Review the evidence. Record the decision.",
    detail: "A supplemental UGX 200,000 receipt brings support for INV-1842 to UGX 2,000,000. The demo manager reviews the evidence and records an approval reason.",
    steps: [
      "Import BANK-008 and run reconciliation.",
      "Review all three customer receipts.",
      "Keep the manager’s decision in the case history.",
    ],
    image: "/images/reconcile/finance-review.webp",
    width: 877,
    height: 671,
    alt: "Fictional finance approval for INV-1842 with the recorded review reason and all three supporting receipts, including BANK-008.",
  },
];

export function DemoWalkthrough() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % screens.length; break;
      case "ArrowLeft": next = (index + screens.length - 1) % screens.length; break;
      case "Home": next = 0; break;
      case "End": next = screens.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className={styles.walkthrough}>
      <div className={styles.tabs} role="tablist" aria-label="Explore the demo investigation">
        {screens.map((screen, index) => (
          <button
            key={screen.id}
            ref={(element) => { tabs.current[index] = element; }}
            id={`demo-tab-${screen.id}`}
            role="tab"
            type="button"
            aria-selected={active === index}
            aria-controls={`demo-panel-${screen.id}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => navigate(event, index)}
          >
            {screen.tab}
          </button>
        ))}
      </div>
      {screens.map((screen, index) => (
        <div
          key={screen.id}
          id={`demo-panel-${screen.id}`}
          role="tabpanel"
          aria-labelledby={`demo-tab-${screen.id}`}
          tabIndex={0}
          hidden={active !== index}
          className={styles.panel}
        >
          <figure className={styles.screen}>
            <a
              href={screen.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${screen.tab.toLowerCase()} screen full size (opens new tab)`}
            >
              <div className={styles.imageFrame}>
                <Image
                  src={screen.image}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  sizes="(max-width: 810px) calc(100vw - 44px), 700px"
                />
              </div>
              <span className={styles.enlarge}>View full-size screen <ArrowUpRight size={14} aria-hidden /></span>
            </a>
          </figure>
          <div className={styles.explanation}>
            <h3>{screen.title}</h3>
            <p>{screen.detail}</p>
            <ul>{screen.steps.map((step) => <li key={step}>{step}</li>)}</ul>
          </div>
        </div>
      ))}
      <div className={styles.footer}>
        <p>Screens from the working demo. All records and communications are fictional.</p>
        <div>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            Explore the interactive demo <ArrowUpRight size={15} aria-hidden />
            <span className="sr-only"> (opens new tab)</span>
          </a>
          <span>Start with INV-1842 under Needs attention. Data stays in your browser.</span>
        </div>
      </div>
    </div>
  );
}
