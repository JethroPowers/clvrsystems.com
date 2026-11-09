import { ArrowUpRight } from "lucide-react";
import { ActionLink, ContactSection, PageMasthead } from "./site-elements";
import WorkflowScene from "./workflow-scene";
import { Enter } from "@/components/ui-custom/site-motion";

export default function VerifiedPage() {
  return (
    <>
      <PageMasthead
        label="CLVR Verified / Payment controls"
        title={"Keep payments\ntied to approvals."}
        description="Payment-control software designed to connect what was requested, what was approved and what the payment record shows."
        number="02"
      />
      <section className="verified-intro section-space">
        <div className="site-container">
          <Enter className="editorial-split">
            <span className="eyebrow">The question behind the check</span>
            <div>
              <h2 className="display-heading">
                Does the payment match
                <br />
                what was approved?
              </h2>
              <p className="large-copy">
                An invoice, an approval and a payment reference can each tell
                part of the story. Verified is designed to bring them together,
                so a reviewer can compare the payment with the original
                decision.
              </p>
            </div>
          </Enter>
          <div className="record-principles">
            {[
              [
                "Request",
                "The recipient, amount, purpose and supporting invoice.",
              ],
              [
                "Approval",
                "Who reviewed the request and the details they authorised.",
              ],
              [
                "Verification",
                "The check against the approval, with any differences recorded.",
              ],
            ].map(([title, description], i) => (
              <Enter key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </Enter>
            ))}
          </div>
        </div>
      </section>
      <WorkflowScene scenario="payment" />
      <section className="verified-specialist section-space">
        <div className="site-container">
          <Enter className="specialist-panel">
            <div>
              <span className="eyebrow">The dedicated product site</span>
              <h2>Take a closer look at Verified.</h2>
              <p>
                Explore the proposed payment workflow and contact the product
                team about your requirements and current availability.
              </p>
              <ActionLink href="https://verified.clvrautomations.com/" external>
                Visit CLVR Verified
              </ActionLink>
            </div>
            <ArrowUpRight
              className="specialist-arrow"
              strokeWidth={0.8}
              aria-hidden
            />
          </Enter>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
