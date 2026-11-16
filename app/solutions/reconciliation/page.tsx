import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ChevronDown, FileText, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/site-metadata";
import { siteCopy } from "@/lib/site-content";
import { reconciliationConfig, reconciliationIsIndexable } from "@/lib/reconciliation/config";
import {
  reconciliationDescription,
  reconciliationOrigin,
  reconciliationPath,
  reconciliationTitle,
  reconciliationUrl,
} from "@/lib/reconciliation/site";
import {
  capabilities, engagements, kampalaMeetingNote, problems, questions,
  reconciliationHeadline, reconciliationImageAlt, sectors, stages,
} from "./content";
import { ChapterMotion } from "./chapter-motion";
import { FlowDiagram, RecordScanDiagram } from "./diagrams";
import MeetingForm from "./meeting-form";
import { PracticalExample, ReceiptPreview } from "./receipt-example";
import styles from "./reconciliation.module.css";

const image = {
  url: `${reconciliationPath}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: reconciliationImageAlt,
};

const baseMetadata = pageMetadata(reconciliationPath, reconciliationTitle, reconciliationDescription);
const indexable = reconciliationIsIndexable();
export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(reconciliationOrigin),
  openGraph: { ...baseMetadata.openGraph, url: reconciliationUrl, images: [image] },
  twitter: { ...baseMetadata.twitter, images: [image] },
  robots: { index: indexable, follow: true },
};

// Refresh the visit note on an ongoing basis so it can expire after the trip.
export const revalidate = 3600;

const navigation = [
  ["#overview", "Overview"],
  ["#how-it-works", "How it works"],
  ["#use-cases", "Use cases"],
  ["#faqs", "FAQs"],
];

function MeetingLink({ children = "Request a 20-minute meeting" }: { children?: string }) {
  return (
    <a className={`button button-light ${styles.primary}`} href="#meeting-form-title">
      {children} <ArrowUpRight size={17} aria-hidden />
    </a>
  );
}

export default function ReconciliationPage() {
  const config = reconciliationConfig();
  const visitNote = kampalaMeetingNote();
  const contactEmail = siteCopy.contact.email;

  return (
    <div className={styles.page}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className={styles.header}>
        <div className={`site-container ${styles.headerInner}`}>
          <Link className={`brand ${styles.brand}`} href="/" aria-label="CLVR. Reconcile | CLVR Systems home">
            <span>CLVR<span className="brand-period">.</span></span>
            <span className="brand-descriptor">Reconcile</span>
          </Link>
          <nav className={styles.navigation} aria-label="Reconciliation page">
            {navigation.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className={`header-contact ${styles.headerContact}`} href="#meeting-form-title">
            Request a meeting <ArrowUpRight size={15} aria-hidden />
          </a>
        </div>
      </header>

      <ChapterMotion>
        <section className={`${styles.hero} ${styles.chapter}`} id="overview" aria-labelledby="reconcile-heading" data-chapter>
          <div className={`site-container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <div className={styles.heroMeta}>
                <span className="eyebrow">CLVR Reconcile / Financial operations</span>
                <span className={styles.pilot}><span className="signal-dot" aria-hidden /> Pilot discovery</span>
              </div>
              <h1 id="reconcile-heading">{reconciliationHeadline[0]} <span>{reconciliationHeadline[1]}</span></h1>
              <p>CLVR Reconcile is being developed to match bank and mobile-money receipts to invoices and help finance teams investigate the differences.</p>
              <div className={styles.heroActions}>
                <MeetingLink />
                <a href="#how-it-works" className={styles.secondary}>See how it works <ArrowDown size={16} aria-hidden /></a>
              </div>
            </div>
            <ReceiptPreview />
            <div className={styles.location}>
              <MapPin size={17} aria-hidden />
              <div>
                <p>Exploring pilot opportunities with finance teams in Uganda.</p>
                {visitNote && <p>{visitNote}</p>}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.chapter} ${styles.problemSection}`} aria-labelledby="problem-heading" data-chapter>
          <div className={`site-container ${styles.problemLayout}`}>
            <div className={styles.sectionLead} data-chapter-lead>
              <div>
                <p className={`eyebrow ${styles.kicker}`}>The business problem</p>
                <h2 id="problem-heading">Payments arrive.<br />Records don’t always agree.</h2>
              </div>
              <p>Finance teams need to establish who paid, what the payment relates to, whether a balance remains outstanding and whether the transaction was recorded correctly.</p>
              <RecordScanDiagram />
            </div>
            <ul className={styles.problemList}>
              {problems.map(({ icon: Icon, title, detail }) => (
                <li key={title}>
                  <Icon size={23} aria-hidden />
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${styles.section} ${styles.chapter} ${styles.exampleSection}`} id="how-it-works" aria-labelledby="example-heading" tabIndex={-1} data-chapter>
          <div className="site-container">
            <div className={`${styles.sectionLead} ${styles.centeredLead}`} data-chapter-lead>
              <div>
                <p className={`eyebrow ${styles.kicker}`}>A worked example</p>
                <h2 id="example-heading">One invoice, two payments.</h2>
              </div>
            </div>
            <PracticalExample />
          </div>
        </section>

        <section className={`${styles.section} ${styles.chapter} ${styles.workflowSection}`} aria-labelledby="workflow-heading" data-chapter>
          <div className="site-container">
            <div className={`${styles.sectionLead} ${styles.centeredLead}`} data-chapter-lead>
              <div>
                <p className={`eyebrow ${styles.kicker}`}>Proposed workflow</p>
                <h2 id="workflow-heading">From scattered transactions to a clear resolution process.</h2>
              </div>
            </div>
            <ol className={`${styles.steps} ${styles.workflowSteps}`} data-chapter-track>
              {stages.map(({ title, detail, diagramSources, diagramDestination, review }, index) => (
                <li key={title}>
                  <span className={styles.stepNumber} aria-hidden>{String(index + 1).padStart(2, "0")}</span>
                  <FlowDiagram sources={diagramSources} destination={diagramDestination} review={review} />
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </li>
              ))}
            </ol>
            <div className={styles.workflowEnd}>
              <p><strong>Finance reviews the evidence.</strong> Matching rules compare source records. AI could suggest candidate matches or explanations for finance staff to verify before approving any changes.</p>
              <MeetingLink />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.chapter} ${styles.capabilitySection}`} aria-labelledby="capabilities-heading" data-chapter>
          <div className={`site-container ${styles.capabilityLayout}`}>
            <div className={styles.sectionLead} data-chapter-lead>
              <div>
                <p className={`eyebrow ${styles.kicker}`}>Intended capabilities</p>
                <h2 id="capabilities-heading">Built around the work finance teams actually do.</h2>
              </div>
            </div>
            <ul className={styles.capabilityGrid}>
              {capabilities.map(({ icon: Icon, title, detail }) => (
                <li key={title}>
                  <Icon size={23} aria-hidden />
                  <div><h3>{title}</h3><p>{detail}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${styles.section} ${styles.chapter} ${styles.sectorSection}`} id="use-cases" aria-labelledby="sectors-heading" data-chapter>
          <div className="site-container">
            <div className={`${styles.sectionLead} ${styles.centeredLead}`} data-chapter-lead>
              <div>
                <p className={`eyebrow ${styles.kicker}`}>Use cases</p>
                <h2 id="sectors-heading">Designed for businesses managing complex collections.</h2>
              </div>
            </div>
            <ul className={`${styles.cardGrid} ${styles.sectorGrid}`}>
              {sectors.map(({ icon: Icon, relatedIcon, title, detail }) => (
                <li key={title}>
                  <FlowDiagram sources={[Icon, relatedIcon]} destination={FileText} />
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </li>
              ))}
            </ul>
            <p className={styles.sectorNote}>We’re also exploring whether the approach could help private healthcare and pharmacy groups that collect payments across multiple channels.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.chapter} ${styles.engagementSection}`} aria-labelledby="engagement-heading" data-chapter>
          <div className={`site-container ${styles.engagementLayout}`}>
            <div className={styles.sectionLead} data-chapter-lead>
              <div>
                <p className={`eyebrow ${styles.kicker}`}>Working with CLVR</p>
                <h2 id="engagement-heading">Start with your existing reconciliation process.</h2>
              </div>
              <p>We’re speaking with finance and operations teams in Uganda to understand how their collections process works, where discrepancies occur and whether a focused pilot would create measurable value.</p>
            </div>
            <div>
              <ol className={`${styles.steps} ${styles.engagementSteps}`} data-chapter-diagram="milestones">
                {engagements.map(({ title, detail }, index) => (
                  <li key={title}>
                    <span className={styles.stepNumber} aria-hidden>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </li>
                ))}
              </ol>
              <div className={styles.engagementAction}><MeetingLink>Discuss your reconciliation process</MeetingLink></div>
            </div>
          </div>
        </section>

        <section className={`${styles.company} ${styles.chapter}`} aria-labelledby="company-heading" data-chapter>
          <div className={`site-container ${styles.companyInner}`}>
            <h2 id="company-heading" data-chapter-lead>Developed by CLVR Systems.</h2>
            <div>
              <p>CLVR Systems develops software that connects fragmented workflows, improves visibility and helps organisations act on reliable information. CLVR Reconcile applies that approach to incoming payments and financial exception management.</p>
              <Link href="/" className={styles.inlineLink}>Visit CLVR Systems <ArrowUpRight size={16} aria-hidden /></Link>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.chapter} ${styles.faqSection}`} id="faqs" aria-labelledby="faq-heading" data-chapter>
          <div className={`site-container ${styles.faqGrid}`}>
            <div data-chapter-lead>
              <p className={`eyebrow ${styles.kicker}`}>FAQs</p>
              <h2 id="faq-heading">Frequently asked questions.</h2>
            </div>
            <div className={styles.questions}>
              {questions.map(({ question, answer }) => (
                <details key={question}>
                  <summary>{question}<ChevronDown size={18} aria-hidden /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.meeting} ${styles.chapter}`} id="meeting" aria-labelledby="meeting-heading" tabIndex={-1} data-chapter>
          <div className={`site-container ${styles.meetingGrid}`}>
            <div data-chapter-lead>
              <p className={`eyebrow ${styles.kicker}`}>20-minute discovery meeting</p>
              <h2 id="meeting-heading">Let’s understand where reconciliation is costing your team time.</h2>
              <p className={styles.meetingDescription}>Tell us how your business manages customer collections. We’ll discuss your current workflow and whether a focused reconciliation solution could help.</p>
              <p className={styles.meetingLocation}><MapPin size={17} aria-hidden /> {visitNote ? "Meeting finance and operations teams in Kampala." : "Speaking with finance and operations teams in Uganda."}</p>
            </div>
            {config ? (
              <MeetingForm privacyUrl={config.privacyUrl} contactEmail={contactEmail} />
            ) : (
              <div className={styles.formPanel}>
                <h3 id="meeting-form-title" tabIndex={-1}>Request a 20-minute meeting</h3>
                <p>Send CLVR a brief note about your role, company and availability to arrange a conversation.</p>
                <a href={`mailto:${contactEmail}?subject=CLVR%20Reconcile%20meeting%20request`} className={`button button-light ${styles.primary}`}>
                  Email CLVR Systems <ArrowUpRight size={17} aria-hidden />
                </a>
              </div>
            )}
          </div>
        </section>
      </ChapterMotion>

      <footer className={styles.footer}>
        <div className={`site-container ${styles.footerInner}`}>
          <Link href="/">CLVR Systems <ArrowUpRight size={14} aria-hidden /></Link>
          {config && <a href={config.privacyUrl}>Privacy notice</a>}
        </div>
      </footer>
    </div>
  );
}
