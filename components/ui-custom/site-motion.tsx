"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { MotionConfig } from "framer-motion";
import { Pause, Play } from "lucide-react";

const MotionContext = createContext({
  reduced: false,
  systemReduced: false,
  toggle: () => {},
});

export function SiteMotionProvider({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const [systemReduced, setSystemReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setSystemReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    try {
      setPaused(localStorage.getItem("clvr-motion-v1") === "reduced");
    } catch {
      /* Motion remains optional when storage is unavailable. */
    }
    return () => query.removeEventListener("change", sync);
  }, []);

  const reduced = paused || systemReduced;
  useEffect(() => {
    document.documentElement.dataset.motion = reduced ? "reduced" : "full";
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [reduced]);
  const toggle = () => {
    if (systemReduced) return;
    const next = !paused;
    setPaused(next);
    try {
      localStorage.setItem("clvr-motion-v1", next ? "reduced" : "full");
    } catch {
      /* Session preference still works. */
    }
  };

  return (
    <MotionContext.Provider value={{ reduced, systemReduced, toggle }}>
      <MotionConfig reducedMotion={reduced ? "always" : "never"}>
        <div
          className="site-experience"
          data-motion={reduced ? "reduced" : "full"}
        >
          {children}
        </div>
      </MotionConfig>
    </MotionContext.Provider>
  );
}

export function useSiteMotion() {
  return useContext(MotionContext);
}

export function MotionToggle() {
  const { reduced, systemReduced, toggle } = useSiteMotion();
  return (
    <button
      className="motion-toggle"
      onClick={toggle}
      disabled={systemReduced}
      aria-pressed={reduced}
      aria-label={
        systemReduced
          ? "Reduced motion follows your device setting"
          : reduced
            ? "Enable page motion"
            : "Reduce page motion"
      }
    >
      {reduced ? (
        <Play size={13} aria-hidden />
      ) : (
        <Pause size={13} aria-hidden />
      )}
      {systemReduced
        ? "Reduced motion · device setting"
        : reduced
          ? "Reduced motion"
          : "Full motion"}
    </button>
  );
}

// Content is always visible without JavaScript. Animation progressively enhances it.
export function Enter({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { reduced } = useSiteMotion();
  useEffect(() => {
    const element = ref.current;
    if (!element || reduced || !window.IntersectionObserver || !element.animate)
      return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animation = element.animate(
          [
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 700,
            delay,
            easing: "cubic-bezier(.22,1,.36,1)",
            fill: "backwards",
          },
        );
        observer.disconnect();
      },
      { threshold: 0.08 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
    };
  }, [reduced, delay]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
