import Link from "next/link";

export default function InsightNotFound() {
  return (
    <section className="insights-masthead insight-not-found">
      <div className="site-container">
        <span className="eyebrow">CLVR / Insights</span>
        <h1>Article not found.</h1>
        <p>This article is unavailable or has not been published.</p>
        <Link className="button button-light" href="/insights">
          Back to Insights ↗
        </Link>
      </div>
    </section>
  );
}
