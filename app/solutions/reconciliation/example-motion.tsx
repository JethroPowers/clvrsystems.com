"use client";

import { useScroll } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { useSiteMotion } from "@/components/ui-custom/site-motion";
import styles from "./reconciliation.module.css";

export function ExampleMotion({ children }: { children: ReactNode }) {
  const target = useRef<HTMLDivElement>(null);
  const { reduced } = useSiteMotion();
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start 29%", "end 31%"],
  });

  useEffect(() => {
    const element = target.current;
    if (!element || reduced) return;

    const update = (progress: number) => {
      element.style.setProperty("--example-progress", String(progress));
    };
    update(scrollYProgress.get());
    const unsubscribe = scrollYProgress.on("change", update);

    return () => {
      unsubscribe();
      element.style.removeProperty("--example-progress");
    };
  }, [reduced, scrollYProgress]);

  return <div ref={target} className={styles.exampleGrid}>{children}</div>;
}
