import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Enter } from "@/components/ui-custom/site-motion";
import { ActionLink } from "./site-elements";
import { ProductPreview } from "./product-preview";

export default function CaseStudies() {
  return (
    <section
      className="evidence-section section-space"
      id="case-studies"
      aria-label="Selected product case studies"
    >
      <div className="site-container">
        <Enter className="section-topline">
          <span className="eyebrow">03 / Closer to the work</span>
          <Link href="/approach" className="text-link">
            Inside the systems <ArrowUpRight size={17} aria-hidden />
          </Link>
        </Enter>
        <article
          className="evidence-layout"
          aria-labelledby="emilia-case-title"
        >
          <Enter className="evidence-copy">
            <span className="evidence-type">
              PRODUCT CASE STUDY 01 / EMILIA
            </span>
            <h2 id="emilia-case-title" className="display-heading">
              When to follow up.
              <br />
              When to stop.
            </h2>
            <p>
              A client may be due to return and already have a booking. Emilia
              brings those details into the review, alongside replies and
              contact preferences. Explore why holding a message can be the
              right decision.
            </p>
            <div className="evidence-details">
              <div>
                <span>THE WORK</span>
                <strong>Clinic follow-up</strong>
              </div>
              <div>
                <span>THE DESIGN DECISION</span>
                <strong>Check before contacting</strong>
              </div>
            </div>
            <ActionLink href="/approach#emilia">
              Read the Emilia story
            </ActionLink>
          </Enter>
          <Enter className="evidence-visual">
            <div className="evidence-image">
              <Image
                src="/images/emilia-dashboard.png"
                alt="Emilia demonstration dashboard showing follow-up review, clinic health and work queues with sample data."
                width={1668}
                height={1029}
                sizes="(max-width: 959px) 92vw, 58vw"
              />
            </div>
            <div className="evidence-caption">
              <span>Emilia / Clinic workspace</span>
              <span>Demo workspace · sample data</span>
            </div>
          </Enter>
        </article>
        <article
          className="evidence-layout evidence-juris"
          aria-labelledby="juris-case-title"
        >
          <Enter className="evidence-copy">
            <span className="evidence-type">
              PRODUCT CASE STUDY 02 / JURIS GLOBAL
            </span>
            <h2 id="juris-case-title" className="display-heading">
              A shortlist
              <br />
              you can explain.
            </h2>
            <p>
              Three programmes may look promising for different reasons. Juris
              Global brings their details into one comparison, with sources to
              revisit and questions to take to an adviser. See how the research
              becomes a brief you can use.
            </p>
            <div className="evidence-details">
              <div>
                <span>THE WORK</span>
                <strong>Global mobility research</strong>
              </div>
              <div>
                <span>THE DESIGN DECISION</span>
                <strong>Keep the sources in view</strong>
              </div>
            </div>
            <ActionLink href="/approach#juris">Read the Juris story</ActionLink>
          </Enter>
          <Enter className="evidence-visual">
            <div className="juris-case-art">
              <ProductPreview id="juris" />
            </div>
            <div className="evidence-caption">
              <span>Juris Global / Research journey</span>
              <span>Interface illustration</span>
            </div>
          </Enter>
        </article>
      </div>
    </section>
  );
}
