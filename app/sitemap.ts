import type { MetadataRoute } from "next";
import { listPublishedInsights } from "@/lib/insights/server";
import { reconciliationIsIndexable } from "@/lib/reconciliation/config";
import { reconciliationUrl } from "@/lib/reconciliation/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await listPublishedInsights();
  return [
    ...["", "/systems", "/approach", "/verified", "/company", "/insights"].map(
      (path) => ({ url: `https://clvrsystems.com${path}` }),
    ),
    ...(reconciliationIsIndexable() ? [{ url: reconciliationUrl }] : []),
    ...articles.map((article) => ({
      url: `https://clvrsystems.com/insights/${article.slug}`,
      lastModified: article.updatedAt ?? article.publishedAt,
    })),
  ];
}
