import type { InsightMetadata } from "@/lib/insights/schema";

export function InsightArtwork({
  category,
}: {
  category: InsightMetadata["category"];
}) {
  return (
    <div className={`insight-artwork artwork-${category}`} aria-hidden="true">
      <div className="artwork-label">
        <span>CLVR / FIELD NOTES</span>
        <span>
          {category === "work" ? "01" : category === "building" ? "02" : "03"}
        </span>
      </div>
      <svg viewBox="0 0 600 320" fill="none">
        {category === "work" ? (
          <>
            <path d="M65 160H220Q265 160 265 115V90Q265 60 300 60H520M265 115V235Q265 265 305 265H520" />
            <path
              className="artwork-accent"
              d="M65 160H220Q265 160 265 205V235Q265 265 305 265H520"
            />
            <circle cx="95" cy="160" r="21" />
            <circle cx="265" cy="160" r="38" />
            <circle cx="490" cy="60" r="20" />
            <circle cx="490" cy="265" r="20" className="artwork-filled" />
            <text x="66" y="214">
              SIGNAL
            </text>
            <text x="229" y="100">
              REVIEW
            </text>
            <text x="365" y="245">
              A DIFFERENT NEXT STEP
            </text>
          </>
        ) : category === "building" ? (
          <>
            {[65, 128, 191, 254].map((y, i) => (
              <g key={y}>
                <path d={`M65 ${y}H530`} />
                <path
                  className="artwork-accent"
                  d={`M${150 + i * 72} ${y}h85`}
                />
                <circle cx="65" cy={y} r="13" />
                <rect
                  x={150 + i * 72}
                  y={y - 19}
                  width="85"
                  height="38"
                  rx="19"
                />
                <circle cx="530" cy={y} r="7" className="artwork-filled" />
              </g>
            ))}
          </>
        ) : (
          <>
            <circle cx="300" cy="160" r="117" />
            <circle cx="300" cy="160" r="78" />
            <path
              className="artwork-accent"
              d="M300 43a117 117 0 0 1 117 117M300 277a117 117 0 0 1-117-117"
            />
            {[
              [300, 43],
              [417, 160],
              [300, 277],
              [183, 160],
            ].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="15"
                className={i === 3 ? "artwork-filled" : ""}
              />
            ))}
            <text x="252" y="156">
              BUILT AROUND
            </text>
            <text x="264" y="178">
              THE WORK
            </text>
          </>
        )}
      </svg>
      <span className="artwork-foot">
        {category === "work"
          ? "Observe the work."
          : category === "building"
            ? "Look inside the decision."
            : "Give the idea a purpose."}
      </span>
    </div>
  );
}
