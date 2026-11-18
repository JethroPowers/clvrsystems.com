"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { scrollInfo } from "framer-motion";
import { useSiteMotion } from "@/components/ui-custom/site-motion";
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
  const { reduced } = useSiteMotion();
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const runway = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const currentStage = useRef(0);
  const requestedStage = useRef<number | null>(null);
  const anchorRestored = useRef(false);

  useEffect(() => {
    const frame = viewport.current;
    const track = runway.current;
    if (!frame || !track) return;

    const measure = () => {
      const panels = Array.from(frame.querySelectorAll<HTMLElement>("[data-active]"));
      const height = Math.ceil(panels[0].offsetTop + Math.max(...panels.map((panel) => panel.offsetHeight)));
      track.style.setProperty("--deck-height", `${height}px`);
      setReady(true);
      setScrollEnabled(!reduced && height + 32 <= window.innerHeight);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      track.style.removeProperty("--deck-height");
    };
  }, [reduced]);

  useEffect(() => {
    const element = root.current;
    const track = runway.current;
    const frame = viewport.current;
    if (!element || !track || !frame || reduced || !scrollEnabled) return;

    let progress = 0;
    let focusFrame = 0;
    const update = (value: number) => {
      progress = value;
      element.style.setProperty("--demo-progress", value.toFixed(3));
      const next = Math.min(screens.length - 1, Math.floor(value * screens.length));
      const focusedPanel = frame.querySelector('[role="tabpanel"][aria-hidden="false"]');
      if (focusedPanel?.contains(document.activeElement)) return;

      if (requestedStage.current !== null) {
        if (next !== requestedStage.current) return;
        requestedStage.current = null;
      }
      if (next !== currentStage.current) {
        currentStage.current = next;
        setActive(next);
      }
    };
    const stop = scrollInfo(({ y }) => update(y.progress), {
      target: track,
      offset: ["start start", "end end"],
    });
    const releaseRequest = () => { requestedStage.current = null; };
    const releaseForScrollKey = (event: globalThis.KeyboardEvent) => {
      if (!event.defaultPrevented &&
          ["PageUp", "PageDown", "Home", "End", "ArrowUp", "ArrowDown", " "].includes(event.key)) {
        releaseRequest();
      }
    };
    const resumeAfterFocus = () => {
      cancelAnimationFrame(focusFrame);
      focusFrame = requestAnimationFrame(() => update(progress));
    };

    window.addEventListener("resize", releaseRequest);
    window.addEventListener("wheel", releaseRequest, { passive: true });
    window.addEventListener("touchstart", releaseRequest, { passive: true });
    window.addEventListener("pointerdown", releaseRequest, { passive: true });
    window.addEventListener("keydown", releaseForScrollKey);
    frame.addEventListener("focusout", resumeAfterFocus);

    return () => {
      stop();
      cancelAnimationFrame(focusFrame);
      element.style.removeProperty("--demo-progress");
      requestedStage.current = null;
      window.removeEventListener("resize", releaseRequest);
      window.removeEventListener("wheel", releaseRequest);
      window.removeEventListener("touchstart", releaseRequest);
      window.removeEventListener("pointerdown", releaseRequest);
      window.removeEventListener("keydown", releaseForScrollKey);
      frame.removeEventListener("focusout", resumeAfterFocus);
    };
  }, [reduced, scrollEnabled]);

  // Keep incoming links aligned after the static story becomes the scroll sequence.
  useEffect(() => {
    if (!ready || anchorRestored.current) return;
    const fragment = window.location.hash;
    let target: HTMLElement | null;
    try {
      target = document.getElementById(decodeURIComponent(fragment.slice(1)));
    } catch {
      return;
    }
    const walkthrough = root.current;
    if (!target || !walkthrough ||
        target.getBoundingClientRect().top < walkthrough.getBoundingClientRect().bottom) {
      anchorRestored.current = true;
      return;
    }

    let frame = 0;
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
      anchorRestored.current = true;
      cancelAnimationFrame(frame);
    };
    document.fonts.ready.then(() => {
      if (cancelled) return;
      frame = requestAnimationFrame(() => {
        if (!cancelled && window.location.hash === fragment) {
          target.scrollIntoView({ block: "start", behavior: "instant" });
          anchorRestored.current = true;
        }
      });
    });
    const inputs = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
    inputs.forEach((event) => window.addEventListener(event, cancel, { passive: true }));
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      inputs.forEach((event) => window.removeEventListener(event, cancel));
    };
  }, [ready]);

  function selectStage(index: number) {
    currentStage.current = index;
    setActive(index);
    const track = runway.current;
    if (!scrollEnabled || reduced || !track) return;

    requestedStage.current = index;
    const range = track.offsetHeight - window.innerHeight;
    const stagePosition = (index + 0.5) / screens.length;
    window.scrollTo({
      top: window.scrollY + track.getBoundingClientRect().top + range * stagePosition,
      behavior: "smooth",
    });
  }

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
    selectStage(next);
    tabs.current[next]?.focus({ preventScroll: true });
  }

  return (
    <div
      ref={root}
      className={styles.walkthrough}
      data-demo-scroll
      data-ready={ready}
      data-motion={reduced ? "reduced" : "full"}
      data-scroll={scrollEnabled && !reduced ? "on" : "off"}
    >
      <div ref={runway} className={styles.runway} data-demo-runway>
        <div ref={viewport} className={styles.viewport}>
          <div className={styles.tabs} role={ready ? "tablist" : "group"} aria-label="Explore the demo investigation">
            {screens.map((screen, index) => (
              <button
                key={screen.id}
                ref={(element) => { tabs.current[index] = element; }}
                id={`demo-tab-${screen.id}`}
                role={ready ? "tab" : undefined}
                type="button"
                disabled={!ready}
                aria-selected={ready ? active === index : undefined}
                aria-controls={ready ? `demo-panel-${screen.id}` : undefined}
                tabIndex={ready ? (active === index ? 0 : -1) : undefined}
                onClick={() => selectStage(index)}
                onKeyDown={(event) => navigate(event, index)}
              >
                {screen.tab}
              </button>
            ))}
          </div>
          <div className={styles.panels}>
            {screens.map((screen, index) => (
              <div
                key={screen.id}
                id={`demo-panel-${screen.id}`}
                role={ready ? "tabpanel" : "group"}
                aria-labelledby={`demo-tab-${screen.id}`}
                tabIndex={ready ? (active === index ? 0 : -1) : undefined}
                aria-hidden={ready ? active !== index : undefined}
                data-active={active === index}
                className={styles.panel}
              >
                <figure className={styles.screen}>
                  <a
                    href={screen.image}
                    tabIndex={ready ? (active === index ? 0 : -1) : undefined}
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
                        loading="eager"
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
          </div>
        </div>
      </div>
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
