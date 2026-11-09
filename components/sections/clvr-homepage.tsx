import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import HeroScene from "./hero-scene";
import ProductShowcase from "./product-showcase";
import WorkflowScene from "./workflow-scene";
import { ContactSection } from "./site-elements";
import CaseStudies from "./case-studies";
import { Enter } from "@/components/ui-custom/site-motion";
import { siteCopy } from "@/lib/site-content";

export default function ClvrHomepage() {
  return (
    <>
      <HeroScene />
      <section className="introduction-section" id="introduction">
        <div className="site-container">
          <div className="intro-rail">
            <span className="eyebrow">The way we see it</span>
            <Plus size={19} aria-hidden />
          </div>
          <Enter>
            <p className="intro-statement">
              {siteCopy.introduction.lead}
              <br />
              <span>{siteCopy.introduction.emphasis}</span>{" "}
              {siteCopy.introduction.detail}
            </p>
          </Enter>
          <div className="intro-bottom">
            <span>CLVR SYSTEMS</span>
            <p>
              A clinic. A quote. A payment. A research question.
              <br />
              Different work deserves different tools.
            </p>
          </div>
        </div>
      </section>
      <ProductShowcase />
      <WorkflowScene />
      <CaseStudies />
      <section className="company-teaser section-space">
        <div className="site-container">
          <Enter className="section-topline">
            <span className="eyebrow">04 / The company behind the systems</span>
            <Plus size={20} aria-hidden />
          </Enter>
          <Enter className="company-teaser-grid">
            <h2 className="display-heading">
              Room to think.
              <br />
              <span>Reason to build.</span>
            </h2>
            <div>
              <p>
                Founded by Jethro Xavier, CLVR builds operating systems around
                the work a business needs to get done.
              </p>
              <p>
                A follow-up that should stop. A quote that needs an answer. An
                approval someone will need to check. These are the details we
                design for.
              </p>
              <Link href="/company" className="text-link">
                Meet CLVR <ArrowUpRight size={18} aria-hidden />
              </Link>
            </div>
          </Enter>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
