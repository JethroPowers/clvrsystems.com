import { parseInsightBody } from "@/lib/insights/body";
import { Enter } from "@/components/ui-custom/site-motion";
import { InsightMarkdown } from "./markdown";
import ScrollDiagram from "./scroll-diagram";

export function ArticleBody({ markdown }: { markdown: string }) {
  const sections = parseInsightBody(markdown);
  return (
    <div className="site-container insight-reading-layout" id="article-content">
      <aside className="insight-contents">
        <span className="eyebrow">In this article</span>
        <nav aria-label="Article contents">
          {sections
            .filter((section) => section.title)
            .map((section, index) => (
              <a key={section.id} href={`#${section.id}`}>
                <span>0{index + 1}</span>
                {section.title}
              </a>
            ))}
        </nav>
        <a href="/insights/feed.xml" className="insight-rss">
          Follow via RSS ↗
        </a>
      </aside>
      <div className="insight-body">
        {sections.map((section) => (
          <section
            id={section.id}
            className="insight-body-section"
            key={section.id}
          >
            {section.title ? (
              <Enter className="insight-section-heading">
                <h2>{section.title}</h2>
              </Enter>
            ) : null}
            {section.blocks.map((block, index) =>
              block.type === "diagram" ? (
                <ScrollDiagram key={block.id} id={block.id} />
              ) : (
                <InsightMarkdown key={index} text={block.text} />
              ),
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
