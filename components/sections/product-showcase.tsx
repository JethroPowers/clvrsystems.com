"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { products, siteCopy, type Product } from "@/lib/site-content";
import { ProductPreview } from "./product-preview";
import { Enter, useSiteMotion } from "@/components/ui-custom/site-motion";

function PortfolioArtwork({ product }: { product: Product }) {
  return (
    <div className={`product-artboard artboard-${product.id}`}>
      <div className="artboard-top">
        <span>{product.category}</span>
        <span>{product.number} / 04</span>
      </div>
      <div className="product-scene">
        <ProductPreview id={product.id} />
      </div>
      <div className="artboard-bottom">
        <span>Interface concept · illustrative data</span>
        <span className="artboard-brand">
          CLVR / {product.name.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const [selected, setSelected] = useState(0);
  const [pinned, setPinned] = useState(false);
  const chapters = useRef<(HTMLElement | null)[]>([]);
  const { reduced } = useSiteMotion();

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 960px) and (min-height: 800px)",
    );
    const sync = () => setPinned(query.matches && !reduced);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [reduced]);

  useEffect(() => {
    if (!pinned) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = window.innerHeight * 0.48;
      let next = 0;
      // Position-based selection also handles fast scrolls and reverse scrolling.
      chapters.current.forEach((chapter, index) => {
        if (chapter && chapter.getBoundingClientRect().top <= readingLine)
          next = index;
      });
      setSelected(next);
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
  }, [pinned]);

  return (
    <section
      className={`portfolio-section portfolio-scroll section-space ${pinned ? "is-scroll-active" : ""}`}
      id="systems"
      aria-labelledby="portfolio-title"
      data-active-product={products[selected].id}
    >
      <div className="site-container">
        <Enter className="section-topline">
          <span className="eyebrow">01 / {siteCopy.portfolio.label}</span>
          <Link href="/systems" className="text-link">
            All systems <ArrowUpRight size={17} aria-hidden />
          </Link>
        </Enter>
        <Enter className="portfolio-intro">
          <h2 id="portfolio-title" className="display-heading">
            {siteCopy.portfolio.title}
          </h2>
          <p className="section-description">
            {siteCopy.portfolio.description}
          </p>
        </Enter>
        <div className="portfolio-layout">
          <div className="portfolio-stories">
            {products.map((product, index) => (
              <article
                key={product.id}
                id={`portfolio-${product.id}`}
                ref={(element) => {
                  chapters.current[index] = element;
                }}
                className={`portfolio-chapter ${selected === index ? "is-current" : ""}`}
                style={{ "--product-accent": product.accent } as CSSProperties}
                aria-labelledby={`portfolio-heading-${product.id}`}
              >
                <div className="portfolio-chapter-copy">
                  <span className="eyebrow">
                    {product.number} / {product.category}
                  </span>
                  <h3 id={`portfolio-heading-${product.id}`}>{product.name}</h3>
                  {product.status ? (
                    <span className="product-status">
                      <span />
                      {product.status}
                    </span>
                  ) : null}
                  <p>{product.description}</p>
                  <Link href={product.href} className="text-link">
                    Explore {product.name}{" "}
                    <ArrowUpRight size={17} aria-hidden />
                  </Link>
                </div>
                <div className="portfolio-inline-art">
                  <PortfolioArtwork product={product} />
                </div>
              </article>
            ))}
          </div>
          <aside className="portfolio-sticky" aria-hidden="true">
            <div className="product-panels">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`product-stage ${selected === index ? "is-active" : ""}`}
                >
                  <PortfolioArtwork product={product} />
                  <div className="product-caption">
                    <h3>{product.headline}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="portfolio-scroll-cue">
              <span>
                <ArrowDown size={14} /> Scroll to explore
              </span>
              <div>
                {products.map((product, index) => (
                  <span
                    key={product.id}
                    className={index === selected ? "is-active" : ""}
                  />
                ))}
              </div>
              <span>{products[selected].number} / 04</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
