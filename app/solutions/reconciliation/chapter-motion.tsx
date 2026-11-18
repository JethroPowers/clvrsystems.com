"use client";

import { scrollInfo } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { useSiteMotion } from "@/components/ui-custom/site-motion";

type ScrollOffset = NonNullable<Parameters<typeof scrollInfo>[1]>["offset"];

function trackProgress(target: HTMLElement, property: string, offset: ScrollOffset) {
  let previous = "";
  const stop = scrollInfo(({ y }) => {
    const value = y.progress.toFixed(3);
    if (value === previous) return;
    target.style.setProperty(property, value);
    previous = value;
  }, { target, offset });

  return () => {
    stop();
    target.style.removeProperty(property);
  };
}

export function ChapterMotion({ children }: { children: ReactNode }) {
  const main = useRef<HTMLElement>(null);
  const { reduced } = useSiteMotion();

  useEffect(() => {
    const element = main.current;
    if (!element || reduced) return;

    const chapters = Array.from(element.querySelectorAll<HTMLElement>("[data-chapter]"));
    const diagrams = Array.from(element.querySelectorAll<HTMLElement>("[data-chapter-diagram]"));
    const reveals = Array.from(element.querySelectorAll<HTMLElement>("[data-scroll-reveal]"));
    const workflow = element.querySelector<HTMLElement>("[data-chapter-track]");
    const cleanup = [
      ...reveals.map((target) => trackProgress(target, "--reveal-progress", ["start 93%", "start 58%"])),
      ...chapters.map((target) => trackProgress(target, "--chapter-progress", ["start end", "end start"])),
      ...diagrams.map((target) => trackProgress(
        target,
        "--diagram-progress",
        target.dataset.chapterDiagram === "milestones" ? ["start 86%", "end 58%"] : ["start 88%", "start 43%"],
      )),
    ];
    if (workflow) cleanup.push(trackProgress(workflow, "--workflow-progress", ["start 78%", "start 33%"]));

    return () => cleanup.forEach((stop) => stop());
  }, [reduced]);

  return <main id="main-content" ref={main} tabIndex={-1}>{children}</main>;
}
