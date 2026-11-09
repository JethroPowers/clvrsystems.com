import path from "node:path";
import { readEditorialInsights } from "../lib/insights/repository";
import { isPublished } from "../lib/insights/schema";

async function main() {
  const articles = await readEditorialInsights(
    path.join(process.cwd(), "content", "insights"),
  );
  const now = new Date();
  const drafts = articles.filter(
    (article) => article.status === "draft",
  ).length;
  const published = articles.filter((article) =>
    isPublished(article, now),
  ).length;
  console.log(
    `Insights valid: ${articles.length} articles (${drafts} drafts, ${published} publishable, ${articles.length - drafts - published} future-dated).`,
  );
}

main().catch((error: unknown) => {
  console.error(
    error instanceof Error ? error.message : "Insight validation failed",
  );
  process.exitCode = 1;
});
