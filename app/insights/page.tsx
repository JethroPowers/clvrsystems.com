import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { listPublishedInsights } from "@/lib/insights/server";
import { insightCategories } from "@/lib/insights/schema";
import { insightDate } from "@/lib/insights/presentation";
import { pageMetadata } from "@/lib/site-metadata";
import { Enter } from "@/components/ui-custom/site-motion";
import { InsightArtwork } from "@/components/insights/artwork";

export const metadata = {
  ...pageMetadata(
    "/insights",
    "Insights | CLVR Systems",
    "How work works, the decisions inside our products and notes from CLVR. Explore articles on follow-up, product design and operating systems for business workflows.",
  ),
  alternates: {
    canonical: "/insights",
    types: { "application/rss+xml": "/insights/feed.xml" },
  },
};

export default async function InsightsPage() {
  const articles = await listPublishedInsights();
  const featured = articles.find((article) => article.featured) ?? articles[0];
  const rest = articles.filter((article) => article.slug !== featured?.slug);
  return (
    <>
      <header className="insights-masthead">
        <div className="site-container">
          <Enter>
            <span className="eyebrow">CLVR / Insights</span>
            <h1>
              A closer look
              <br />
              <span>at the work.</span>
            </h1>
            <p>
              How businesses work. The decisions inside our products. And what
              we’re building at CLVR.
            </p>
          </Enter>
          <div className="insights-masthead-foot">
            <span>Ideas worth examining.</span>
            <span>
              Notes from CLVR / {articles.length.toString().padStart(2, "0")}{" "}
              articles
            </span>
          </div>
        </div>
      </header>
      <div className="site-container insights-index">
        <div className="insight-strands">
          {Object.entries(insightCategories).map(([key, label], index) => (
            <div key={key}>
              <span>0{index + 1}</span>
              <strong>{label}</strong>
              <p>
                {key === "work"
                  ? "Start with an everyday situation."
                  : key === "building"
                    ? "Understand the choice behind the feature."
                    : "Follow the thinking behind CLVR."}
              </p>
            </div>
          ))}
        </div>
        {featured ? (
          <Enter>
            <article className="insight-featured">
              <Link
                href={`/insights/${featured.slug}`}
                className="insight-featured-art"
                aria-label={`Read ${featured.title}`}
              >
                <InsightArtwork category={featured.category} />
              </Link>
              <div className="insight-featured-copy">
                <span className="eyebrow">
                  Featured / {insightCategories[featured.category]}
                </span>
                <h2>
                  <Link href={`/insights/${featured.slug}`}>
                    {featured.title}
                  </Link>
                </h2>
                <p>{featured.description}</p>
                <div className="insight-byline">
                  <span>{featured.author}</span>
                  <time dateTime={featured.publishedAt}>
                    {insightDate(featured.publishedAt)}
                  </time>
                  <span>{featured.readingMinutes} min read</span>
                </div>
                <Link href={`/insights/${featured.slug}`} className="text-link">
                  Read the article <ArrowUpRight size={18} aria-hidden />
                </Link>
              </div>
            </article>
          </Enter>
        ) : (
          <p className="insight-empty">
            The first notes are being prepared. Explore{" "}
            <Link href="/approach">our approach</Link> in the meantime.
          </p>
        )}
        {rest.length ? (
          <section className="insight-more">
            <div className="section-topline">
              <h2 className="eyebrow">Keep exploring</h2>
              <span className="meta-note">
                Different perspectives on the work.
              </span>
            </div>
            <div className="insight-card-grid">
              {rest.map((article) => (
                <Enter key={article.slug}>
                  <article className="insight-card">
                    <Link
                      href={`/insights/${article.slug}`}
                      aria-label={`Read ${article.title}`}
                    >
                      <InsightArtwork category={article.category} />
                    </Link>
                    <span className="eyebrow">
                      {insightCategories[article.category]}
                    </span>
                    <h3>
                      <Link href={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p>{article.description}</p>
                    <div className="insight-byline">
                      <time dateTime={article.publishedAt}>
                        {insightDate(article.publishedAt)}
                      </time>
                      <span>{article.readingMinutes} min read</span>
                    </div>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="text-link"
                    >
                      Read the article <ArrowUpRight size={16} aria-hidden />
                    </Link>
                  </article>
                </Enter>
              ))}
            </div>
          </section>
        ) : null}
        <div className="insights-index-foot">
          <p>See the thinking in practice.</p>
          <Link href="/approach" className="text-link">
            Explore our approach <ArrowUpRight size={17} aria-hidden />
          </Link>
          <a href="/insights/feed.xml" className="text-link">
            RSS feed <ArrowUpRight size={17} aria-hidden />
          </a>
        </div>
      </div>
    </>
  );
}
