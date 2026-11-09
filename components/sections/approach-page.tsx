import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { products } from "@/lib/site-content";
import { systemStudies } from "@/lib/system-studies";
import { Enter } from "@/components/ui-custom/site-motion";
import { ProductPreview } from "./product-preview";
import { ActionLink, ContactSection, PageMasthead } from "./site-elements";

export default function ApproachPage() {
  return (
    <>
      <PageMasthead
        label="Our approach"
        title={"The decisions\nbehind the software."}
        description="Inside Emilia, MarginFlow, CLVR Verified and Juris Global: the problems, product choices and workflows that shape each one."
        number="02"
      />
      <section className="approach-intro section-space">
        <div className="site-container">
          <Enter className="editorial-split">
            <span className="eyebrow">The details matter</span>
            <div>
              <h2 className="display-heading">
                Look closer.
                <br />
                Build from there.
              </h2>
              <p className="large-copy">
                A booked client should change a follow-up. A reply should change
                a reminder. A payment needs an approval to check against. A
                research answer needs a source. Here is how those details shape
                the products.
              </p>
            </div>
          </Enter>
          <nav
            className="approach-index"
            aria-label="Explore each system in depth"
          >
            {products.map((product) => (
              <a key={product.id} href={`#${product.id}`}>
                <span>{product.number} /</span>
                <strong>{product.name}</strong>
                <small>{product.category}</small>
                <ArrowDown size={18} aria-hidden />
              </a>
            ))}
          </nav>
        </div>
      </section>
      {systemStudies.map((study) => {
        const product = products.find((item) => item.id === study.id)!;
        return (
          <section
            key={study.id}
            id={study.id}
            className={`system-study study-${study.id} section-space`}
            style={{ "--study-accent": product.accent } as CSSProperties}
            aria-labelledby={`study-heading-${study.id}`}
          >
            <div className="site-container">
              <Enter className="section-topline">
                <span className="eyebrow">{study.label}</span>
                <span className="study-product-name">{product.name}</span>
              </Enter>
              <Enter className="study-intro">
                <h2
                  id={`study-heading-${study.id}`}
                  className="display-heading"
                >
                  {study.title}
                </h2>
                <p>{study.summary}</p>
              </Enter>
              <div className="study-layout">
                <div className="study-visual">
                  <div className={`study-artboard artboard-${study.id}`}>
                    <ProductPreview id={study.id} />
                    <span className="artboard-bottom">
                      Interface concept · illustrative data
                    </span>
                  </div>
                  <blockquote>{study.lesson}</blockquote>
                  <Link href={`/systems#${study.id}`} className="text-link">
                    System overview <ArrowUpRight size={16} aria-hidden />
                  </Link>
                </div>
                <div className="study-narrative">
                  <Enter className="study-problem">
                    <span className="eyebrow">The starting point</span>
                    <h3>The problem.</h3>
                    <p>{study.problem}</p>
                  </Enter>
                  <Enter className="study-response">
                    <span className="eyebrow">How we approach it</span>
                    <h3>The product decision.</h3>
                    <p>{study.response}</p>
                  </Enter>
                  <ol className="study-stages">
                    {study.stages.map((stage, index) => (
                      <li key={stage.title}>
                        <span className="study-step-number">0{index + 1}</span>
                        <div>
                          <h4>{stage.title}</h4>
                          <p>{stage.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <Enter className="study-example">
                <span className="eyebrow">An illustrative example</span>
                <dl>
                  {study.example.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </Enter>
              <Enter className="study-outcome">
                <div>
                  <span className="eyebrow">Why it matters</span>
                  <p>{study.outcome}</p>
                </div>
                <ActionLink
                  href={product.externalUrl ?? product.href}
                  external={Boolean(product.externalUrl)}
                >
                  Visit {product.name}
                </ActionLink>
              </Enter>
            </div>
          </section>
        );
      })}
      <ContactSection />
    </>
  );
}
