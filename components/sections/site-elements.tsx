import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { Enter } from "@/components/ui-custom/site-motion";
import { siteCopy } from "@/lib/site-content";

export function ActionLink({
  href,
  children,
  light = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`button ${light ? "button-light" : "button-dark"}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden />
    </Link>
  );
}
export function PageMasthead({
  label,
  title,
  description,
  number,
}: {
  label: string;
  title: string;
  description: string;
  number: string;
}) {
  return (
    <section className="page-masthead">
      <div className="masthead-art" aria-hidden>
        <Image src="/images/clvr-continuity.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="site-container">
        <span className="eyebrow">CLVR / {label}</span>
        <h1>{title}</h1>
        <div className="masthead-bottom">
          <p>{description}</p>
          <span>{number} / CLVR SYSTEMS</span>
        </div>
      </div>
    </section>
  );
}
export function ContactSection() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="site-container">
        <Enter className="section-topline">
          <span className="eyebrow">05 / {siteCopy.contact.label}</span>
          <Plus size={20} aria-hidden />
        </Enter>
        <Enter className="contact-layout">
          <h2 id="contact-title">{siteCopy.contact.title}</h2>
          <div>
            <p>{siteCopy.contact.description}</p>
            <a
              href={`mailto:${siteCopy.contact.email}`}
              className="contact-action"
            >
              Email CLVR{" "}
              <span>
                <ArrowUpRight size={27} aria-hidden />
              </span>
            </a>
            <a
              className="contact-email"
              href={`mailto:${siteCopy.contact.email}`}
            >
              {siteCopy.contact.email}
            </a>
          </div>
        </Enter>
      </div>
    </section>
  );
}
export function Principles({ dark = false }: { dark?: boolean }) {
  const principles = [
    [
      "Start with a specific problem.",
      "Know who needs the product and what they need to do. Let that task shape the features, language and interface.",
    ],
    [
      "Give judgment room.",
      "Make the choices clear and the reasons visible. In Emilia, that includes recognising when a follow-up should stop.",
    ],
    [
      "Make the work explainable.",
      "Keep the material a decision depends on within reach: the original quote, a payment approval or the source behind a research answer.",
    ],
  ];
  return (
    <div className={`principles-list ${dark ? "principles-dark" : ""}`}>
      {principles.map(([title, description], index) => (
        <Enter className="principle-row" key={title}>
          <span>0{index + 1}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </Enter>
      ))}
    </div>
  );
}
