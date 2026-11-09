import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/site-content";
import { ProductPreview } from "./product-preview";
import { ActionLink, ContactSection, PageMasthead } from "./site-elements";
import { Enter } from "@/components/ui-custom/site-motion";

export default function SystemsPage() {
  return (
    <>
      <PageMasthead
        label="Products & projects"
        title={"Tools for the\nwork you do."}
        description="Clinic follow-up, commercial operations, payment controls and global mobility research. Explore each product and the problem it addresses."
        number="01"
      />
      <section className="systems-directory">
        <div className="site-container">
          <nav className="system-jump-nav" aria-label="Jump to a system">
            {products.map((product) => (
              <a href={`#${product.id}`} key={product.id}>
                <span>{product.number}</span>
                {product.name}
                <ArrowUpRight size={15} aria-hidden />
              </a>
            ))}
          </nav>
          {products.map((product) => (
            <article
              className="system-feature"
              id={product.id}
              key={product.id}
            >
              <Enter className="system-feature-copy">
                <span className="eyebrow">
                  {product.number} / {product.category}
                </span>
                <h2>{product.name}</h2>
                {product.status ? (
                  <span className="product-status">
                    <span />
                    {product.status}
                  </span>
                ) : null}
                <h3>{product.headline}</h3>
                <p>{product.description}</p>
                <ul className="capability-list">
                  {product.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
                {product.externalUrl ? (
                  <ActionLink href={product.externalUrl} external>
                    Visit {product.name}
                  </ActionLink>
                ) : (
                  <ActionLink href="/#contact">
                    Ask about this product
                  </ActionLink>
                )}
                {product.id === "verified" ? (
                  <Link
                    className="text-link system-secondary-link"
                    href="/verified"
                  >
                    About payment controls <ArrowUpRight size={15} />
                  </Link>
                ) : null}
                <Link
                  className="text-link system-secondary-link"
                  href={`/approach#${product.id}`}
                >
                  How {product.name} works{" "}
                  <ArrowUpRight size={15} aria-hidden />
                </Link>
              </Enter>
              <Enter className={`system-feature-art artboard-${product.id}`}>
                <span className="artboard-top">
                  CLVR / {product.name.toUpperCase()}
                </span>
                <ProductPreview id={product.id} />
                <span className="artboard-bottom">
                  Interface concept · illustrative data
                </span>
              </Enter>
            </article>
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
