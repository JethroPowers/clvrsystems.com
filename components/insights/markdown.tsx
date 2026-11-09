import ReactMarkdown from "react-markdown";

export function safeInsightUrl(value: string): string {
  if (/^(\/(?!\/)|#)/.test(value) && !value.includes("\\")) return value;
  try {
    const url = new URL(value);
    if (["https:", "http:", "mailto:"].includes(url.protocol)) return value;
  } catch {
    /* Unsupported relative paths remain unlinked. */
  }
  return "";
}

export function InsightMarkdown({ text }: { text: string }) {
  return (
    <div className="insight-prose">
      <ReactMarkdown
        skipHtml
        urlTransform={safeInsightUrl}
        allowedElements={[
          "p",
          "h3",
          "h4",
          "strong",
          "em",
          "a",
          "ul",
          "ol",
          "li",
          "blockquote",
          "code",
          "pre",
          "hr",
          "br",
        ]}
        components={{
          a: ({ href, children }) => <a href={href || undefined}>{children}</a>,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
