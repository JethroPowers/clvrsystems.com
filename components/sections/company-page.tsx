import Image from "next/image";
import {
  ActionLink,
  ContactSection,
  PageMasthead,
  Principles,
} from "./site-elements";
import { Enter } from "@/components/ui-custom/site-motion";
import { siteCopy } from "@/lib/site-content";

export default function CompanyPage() {
  return (
    <>
      <PageMasthead
        label="The company"
        title={siteCopy.hero.lines.join("\n")}
        description="Founded by Jethro Xavier, CLVR builds focused systems for the work behind a business: the follow-up, the quote, the approval and the record."
        number="03"
      />
      <section className="section-space company-story">
        <div className="site-container">
          <Enter className="editorial-split">
            <span className="eyebrow">The company behind the work</span>
            <div>
              <h2 className="display-heading">
                Independent by choice.
                <br />
                Specific by design.
              </h2>
              <p className="large-copy">
                CLVR brings Emilia, MarginFlow and CLVR Verified together:
                products for clinic follow-up, commercial operations and payment
                controls.
              </p>
              <p>
                This site also features Juris Global, the residency and
                citizenship research platform co-founded by Jethro. Each product
                has its own purpose and a dedicated site where you can explore
                it further.
              </p>
              <p>
                Our starting point is a task someone needs to complete. We look
                at the information they need, the choices they face and what
                another person will need to know later. Those details shape the
                software.
              </p>
            </div>
          </Enter>
        </div>
      </section>
      <section className="company-art-section">
        <Image
          src="/images/clvr-continuity.jpg"
          alt="Emerald glass and brushed metal forming a continuous sculptural loop."
          width={1536}
          height={1024}
          sizes="100vw"
        />
        <div className="site-container">
          <span className="eyebrow">The ambition</span>
          <p>
            Think with range.
            <br />
            Build with focus.
          </p>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container">
          <Enter className="section-topline">
            <span className="eyebrow">How we think</span>
            <span className="meta-note">Three working principles</span>
          </Enter>
          <Principles />
        </div>
      </section>
      <section className="company-portfolio section-space">
        <div className="site-container editorial-split">
          <Enter>
            <span className="eyebrow">Explore the work</span>
            <h2 className="display-heading">
              Four products.
              <br />
              Each with a purpose.
            </h2>
          </Enter>
          <Enter>
            <p className="large-copy">
              See the products side by side, or read the Approach page for the
              decisions behind them. For product enquiries, contact CLVR
              directly.
            </p>
            <ActionLink href="/systems">Explore our products</ActionLink>
          </Enter>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
