import { CircleAlert, FileText, Landmark, Smartphone, UserRound } from "lucide-react";
import { difference, evidenced, illustration, ugx } from "./content";
import { ExampleMotion } from "./example-motion";
import styles from "./reconciliation.module.css";

export function ReceiptPreview() {
  return (
    <figure className={styles.preview}>
      <figcaption className={styles.previewCaption}>
        <span>From receipts to review</span>
        <span>Illustrative data</span>
      </figcaption>

      <ul className={styles.receipts} aria-label="Receipts matched to the invoice">
        {illustration.receipts.map((receipt, index) => {
          const Icon = index === 0 ? Landmark : Smartphone;
          return (
            <li key={receipt.reference}>
              <span className={styles.receiptLabel}><Icon size={17} aria-hidden />{receipt.name}</span>
              <strong>{ugx(receipt.amount)}</strong>
            </li>
          );
        })}
      </ul>
      <div className={styles.receiptConnector} aria-hidden />

      <div className={styles.invoice}>
        <span className={styles.invoiceLabel}>
          <FileText size={18} aria-hidden /> Invoice <strong>{illustration.invoice}</strong>
        </span>
        <dl className={styles.invoiceTotals}>
          <div><dt>Invoiced</dt><dd>{ugx(illustration.expected)}</dd></div>
          <div><dt>Matched</dt><dd>{ugx(evidenced)}</dd></div>
        </dl>
      </div>

      <div className={styles.caseConnector} aria-hidden />
      <div className={styles.casePanel}>
        <p className={styles.caseAmount}>
          <CircleAlert size={21} aria-hidden />
          <span><strong>{ugx(difference)}</strong> to review</span>
        </p>
        <p className={styles.caseOwner}><UserRound size={15} aria-hidden /> Assigned to {illustration.owner}</p>
      </div>
    </figure>
  );
}

export function PracticalExample() {
  return (
    <ExampleMotion>
      <figure className={styles.ledger}>
        <figcaption>Illustrative workflow. Figures are fictional.</figcaption>
        <dl>
          <div><dt>Expected for {illustration.invoice}</dt><dd>{ugx(illustration.expected)}</dd></div>
          {illustration.receipts.map((receipt) => (
            <div className={styles.receiptEntry} key={receipt.reference}>
              <dt>{receipt.name}</dt><dd>{ugx(receipt.amount)}</dd>
            </div>
          ))}
          <div className={styles.ledgerTotal}><dt>Total evidenced receipts</dt><dd>{ugx(evidenced)}</dd></div>
          <div className={styles.ledgerDifference}><dt>Outstanding difference</dt><dd>{ugx(difference)}</dd></div>
        </dl>
        <p>Mobile-money settlement transfers are excluded from the customer receipt total.</p>
      </figure>
      <div className={styles.exampleConnector} aria-hidden="true">
        <div className={styles.flowTrack}>
          <span className={`${styles.flowBranch} ${styles.bankBranch}`}><span className={styles.flowSignal} /></span>
          <span className={`${styles.flowBranch} ${styles.mobileBranch}`}><span className={styles.flowSignal} /></span>
          <span className={styles.flowOutput}><span className={styles.flowSignal} /></span>
        </div>
      </div>
      <div className={styles.investigation}>
        <div className={styles.investigationHeader}>
          <span className={styles.reviewLabel}><CircleAlert size={16} aria-hidden /> Needs review</span>
          <span>Case {illustration.case}</span>
        </div>
        <h3>{ugx(difference)} difference</h3>
        <p className={styles.caseOwner}><UserRound size={15} aria-hidden /> Assigned to {illustration.owner}</p>
        <ol>
          <li>Check authorised records for another matching receipt.</li>
          <li>Flag the difference if it remains unresolved.</li>
          <li>Open an investigation case.</li>
          <li>Assign the case to the person responsible for follow-up.</li>
          <li>Record the evidence and the finance-approved resolution.</li>
        </ol>
      </div>
    </ExampleMotion>
  );
}
