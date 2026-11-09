import "server-only";
import path from "node:path";
import { createFileInsightRepository } from "./repository";

const repository = createFileInsightRepository(
  path.join(process.cwd(), "content", "insights"),
);

// Pages, feeds and sitemaps share this public, filtered interface.
export const listPublishedInsights = repository.listPublished;
export const getPublishedInsight = repository.getPublished;
