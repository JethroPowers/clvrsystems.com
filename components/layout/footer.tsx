import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MotionToggle } from "@/components/ui-custom/site-motion";
import { products, siteCopy } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-small-brand">
              CLVR SYSTEMS
            </Link>
            <p>{siteCopy.hero.lines.join(" ")}</p>
            <a
              className="footer-email"
              href={`mailto:${siteCopy.contact.email}`}
            >
              {siteCopy.contact.email}
              <ArrowUpRight size={15} aria-hidden />
            </a>
          </div>
          <nav aria-label="Systems">
            <span className="footer-label">PRODUCTS & PROJECTS</span>
            {products.map((product) => (
              <Link href={product.href} key={product.id}>
                {product.name}
              </Link>
            ))}
          </nav>
          <nav aria-label="Company">
            <span className="footer-label">EXPLORE</span>
            <Link href="/company">Company</Link>
            <Link href="/approach">Our approach</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/#home">Back to home ↑</Link>
          </nav>
        </div>
        <div className="footer-wordmark" aria-hidden>
          CLVR<span>+</span>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CLVR Systems</span>
          <span>Built around the work.</span>
          <MotionToggle />
        </div>
      </div>
    </footer>
  );
}
