import { ImageResponse } from "next/og";
import {
  difference, illustration, reconciliationHeadline, reconciliationImageAlt, ugx,
} from "./content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = reconciliationImageAlt;

export default function ReconciliationSocialImage() {
  return new ImageResponse(
    (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        backgroundColor: "#101612",
        border: "2px solid #405344",
        color: "#f4f3ed",
        padding: "52px 60px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 27 }}>
          <span style={{ fontSize: 42, fontWeight: 700, color: "#c6e1c9" }}>CLVR.</span>
          <span style={{ width: 1, height: 32, backgroundColor: "#57715d" }} />
          <span>Reconcile</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 34 }}>
          <div style={{ display: "flex", flexDirection: "column", width: 600, fontSize: 62, lineHeight: 1.04, letterSpacing: -2 }}>
            <span>{reconciliationHeadline[0]}</span>
            <span style={{ color: "#c6e1c9", marginTop: 9 }}>{reconciliationHeadline[1]}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 424, alignItems: "center" }}>
            <span style={{ color: "#b1bcb3", fontSize: 14, alignSelf: "flex-end", marginBottom: 9 }}>ILLUSTRATIVE DATA</span>
            <div style={{ display: "flex", width: "100%", gap: 12 }}>
              {illustration.receipts.map((receipt) => (
                <div key={receipt.reference} style={{
                  display: "flex", flexDirection: "column", flex: 1, gap: 4,
                  padding: "11px 13px", border: "1px solid #57715d", background: "#1b281f",
                }}>
                  <span style={{ color: "#c6e1c9", fontSize: 16 }}>{receipt.name}</span>
                  <span style={{ fontSize: 23, fontWeight: 700 }}>{ugx(receipt.amount)}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "50%" }}>
              <span style={{ width: "100%", height: 14, border: "1px solid #7f9f85", borderTopWidth: 0 }} />
              <span style={{ width: 1, height: 14, background: "#7f9f85" }} />
            </div>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              width: "87%", padding: "12px 14px", border: "1px solid #718e78", background: "#233428",
            }}>
              <span style={{ fontSize: 16 }}>Invoice {illustration.invoice}</span>
              <span style={{ fontSize: 21, fontWeight: 700 }}>{ugx(illustration.expected)}</span>
            </div>
            <span style={{ width: 1, height: 16, background: "#9f7853" }} />
            <div style={{
              display: "flex", flexDirection: "column", gap: 2, width: "87%", padding: "10px 14px",
              border: "1px solid #9f7853", borderLeft: "3px solid #f1c58e",
              background: "#292118", color: "#f1c58e",
            }}>
              <span style={{ fontSize: 25, fontWeight: 700 }}>{ugx(difference)} to review</span>
              <span style={{ color: "#dfcdbb", fontSize: 17 }}>Assigned to {illustration.owner}</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 11, color: "#c6e1c9", fontSize: 23 }}>
          <span style={{ width: 7, height: 7, borderRadius: 7, backgroundColor: "#c6e1c9" }} />
          Pilot discovery in Uganda
        </div>
      </div>
    ),
    size,
  );
}
