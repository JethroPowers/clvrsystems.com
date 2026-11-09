import { listPublishedInsights } from "@/lib/insights/server";
import { insightCategories } from "@/lib/insights/schema";
import { escapeXml } from "@/lib/insights/presentation";

export const dynamic = "force-static";

export async function GET() {
  const articles = await listPublishedInsights();
  const items = articles
    .map((article) => {
      const url = `https://clvrsystems.com/insights/${article.slug}`;
      return `<item><title>${escapeXml(article.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><description>${escapeXml(article.description)}</description><pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate><dc:creator>${escapeXml(article.author)}</dc:creator><category>${escapeXml(insightCategories[article.category])}</category></item>`;
    })
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"><channel><title>CLVR Insights</title><link>https://clvrsystems.com/insights</link><description>How work works, inside the build and company notes from CLVR.</description><language>en-GB</language><atom:link href="https://clvrsystems.com/insights/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
