"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useSiteMotion } from "@/components/ui-custom/site-motion";
import { siteCopy } from "@/lib/site-content";

export default function HeroScene() {
  const ref = useRef<HTMLElement>(null);
  const { reduced } = useSiteMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.09]);

  return (
    <section
      ref={ref}
      className="clvr-hero"
      aria-labelledby="hero-title"
      id="home"
    >
      <motion.div
        className="hero-art"
        style={reduced ? undefined : { y, scale }}
      >
        <Image
          src="/images/clvr-continuity.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
        />
      </motion.div>
      <div className="hero-shade" aria-hidden />
      <div className="site-container hero-content">
        <div className="hero-topline">
          <span className="signal-dot" />
          {siteCopy.hero.label}
        </div>
        <h1 id="hero-title" className="hero-heading">
          {siteCopy.hero.lines.map((line, index) => (
            <span className="hero-line" key={line}>
              <span style={{ animationDelay: `${index * 110}ms` }}>{line}</span>
            </span>
          ))}
        </h1>
        <div className="hero-description">
          <p>{siteCopy.hero.description}</p>
          <Link href="#systems" className="button button-light">
            Explore our products <ArrowUpRight size={17} aria-hidden />
          </Link>
          <Link href="/approach" className="text-link hero-approach-link">
            See how they work <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
      <div className="site-container hero-foot">
        <a href="#introduction" className="scroll-cue">
          <span className="scroll-circle">
            <ArrowDown size={17} aria-hidden />
          </span>{" "}
          A closer look
        </a>
        <div className="hero-caption">
          <span>CLVR / SOFTWARE & SYSTEMS</span>
          <span>Independent in thought. Precise in practice.</span>
        </div>
        <span className="hero-index">01 — 06</span>
      </div>
    </section>
  );
}
