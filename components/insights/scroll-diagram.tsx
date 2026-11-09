"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Check, Pause } from "lucide-react";
import { useSiteMotion } from "@/components/ui-custom/site-motion";
import {
  insightDiagrams,
  type InsightDiagram,
  type InsightDiagramId,
} from "@/lib/insights/diagrams";

export default function ScrollDiagram({ id }: { id: InsightDiagramId }) {
  const diagram: InsightDiagram = insightDiagrams[id];
  const chapters = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  const { reduced } = useSiteMotion();

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 1100px) and (min-height: 760px)",
    );
    const sync = () => setEnhanced(query.matches && !reduced);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [reduced]);

  useEffect(() => {
    if (!enhanced) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      let next = 0;
      chapters.current.forEach((chapter, index) => {
        if (
          chapter &&
          chapter.getBoundingClientRect().top <= window.innerHeight * 0.56
        )
          next = index;
      });
      setActive(next);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [enhanced, id]);

  return (
    <figure
      className={`insight-diagram diagram-${diagram.kind} ${enhanced ? "is-enhanced" : ""}`}
      aria-labelledby={`diagram-${id}`}
      data-active-step={active + 1}
    >
      <div className="diagram-visual">
        <div className="diagram-sheet">
          <div className="diagram-top">
            <span className="eyebrow">A closer look</span>
            <span aria-hidden>
              {enhanced ? `0${active + 1} / 04` : "01 — 04"}
            </span>
          </div>
          <h3 id={`diagram-${id}`}>{diagram.title}</h3>
          <div className="diagram-progress" aria-hidden="true">
            <span
              style={{
                transform: `scaleX(${enhanced ? (active + 1) / diagram.steps.length : 1})`,
              }}
            />
          </div>
          <div className="diagram-map">
            {diagram.kind === "cycle" ? (
              <>
                <svg
                  className="diagram-orbit"
                  viewBox="0 0 400 400"
                  aria-hidden="true"
                >
                  <circle cx="200" cy="200" r="145" />
                  <circle
                    className="orbit-trace"
                    cx="200"
                    cy="200"
                    r="145"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={enhanced ? 1 - (active + 1) / 4 : 0}
                  />
                </svg>
                <span className="diagram-centre" aria-hidden>
                  Built around
                  <br />
                  the work.
                </span>
              </>
            ) : null}
            <ol className="diagram-nodes">
              {diagram.steps.map((step, index) => (
                <li
                  key={step.label}
                  className={`diagram-node ${enhanced && index === active ? "is-current" : ""} ${enhanced && index < active ? "is-complete" : ""}`}
                >
                  <div className="diagram-node-heading">
                    <span className="diagram-number">0{index + 1}</span>
                    <strong>{step.label}</strong>
                    {diagram.kind === "decision" && index === 3 ? (
                      <Check size={15} aria-hidden />
                    ) : (
                      <ArrowRight
                        className="diagram-direction"
                        size={15}
                        aria-hidden
                      />
                    )}
                  </div>
                  <p>{step.detail}</p>
                  {diagram.kind === "decision" && index === 2 ? (
                    <div className="diagram-branches">
                      <span>
                        <Check size={12} aria-hidden /> Still due → review
                      </span>
                      <span
                        className={
                          enhanced && active >= 2 ? "branch-selected" : ""
                        }
                      >
                        <Pause size={12} aria-hidden /> Booked → hold
                      </span>
                    </div>
                  ) : null}
                  {step.path ? (
                    <div className="diagram-lane">
                      {step.path.map((label, i) => (
                        <span key={label}>
                          {i > 0 ? <ArrowRight size={10} aria-hidden /> : null}
                          {label}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
          <div className="diagram-bottom">
            <span>
              {diagram.kind === "systems"
                ? "Different work. Specific decisions."
                : diagram.kind === "cycle"
                  ? "The record informs the next revision."
                  : "The reason stays with the decision."}
            </span>
            {enhanced ? (
              <span>
                <ArrowDown size={12} aria-hidden /> Scroll to follow
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <div className="diagram-chapters">
        {diagram.steps.map((step, index) => (
          <div
            className={`diagram-chapter ${enhanced && index === active ? "is-current" : ""}`}
            key={step.title}
            ref={(element) => {
              chapters.current[index] = element;
            }}
          >
            <span className="eyebrow">
              0{index + 1} / {step.label}
            </span>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <figcaption>{diagram.caption}</figcaption>
    </figure>
  );
}
