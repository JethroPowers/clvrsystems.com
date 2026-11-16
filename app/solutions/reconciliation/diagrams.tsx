import { CircleAlert, FileSpreadsheet, Landmark, Smartphone, type LucideIcon } from "lucide-react";
import styles from "./diagrams.module.css";

const recordSources = [
  { Icon: Landmark, className: styles.bankRecord },
  { Icon: Smartphone, className: styles.mobileRecord, exception: true },
  { Icon: FileSpreadsheet, className: styles.ledgerRecord },
];

export function RecordScanDiagram() {
  return (
    <div className={styles.recordScan} aria-hidden="true" data-chapter-diagram="records">
      <div className={styles.records}>
        {recordSources.map(({ Icon, className, exception }) => (
          <div className={`${styles.record} ${className}`} key={className}>
            <Icon size={15} />
            <div className={styles.recordFields}><span /><span /><span /></div>
            <span className={styles.recordStatus}>
              {exception && <CircleAlert size={15} />}
            </span>
          </div>
        ))}
      </div>
      <span className={styles.scanLine} />
    </div>
  );
}

export function FlowDiagram({
  sources,
  destination: Destination,
  review,
}: {
  sources: LucideIcon[];
  destination: LucideIcon;
  review?: boolean;
}) {
  return (
    <div className={`${styles.flow} ${review ? styles.review : ""}`} aria-hidden="true" data-chapter-diagram="flow">
      <div className={styles.sources}>
        {sources.map((Icon, index) => (
          <span className={styles.diagramIcon} key={index}><Icon size={15} /></span>
        ))}
      </div>
      <div className={styles.flowLine}><span /></div>
      <span className={`${styles.diagramIcon} ${styles.destination}`}><Destination size={17} /></span>
    </div>
  );
}
