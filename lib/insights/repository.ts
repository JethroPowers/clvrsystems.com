import "server-only";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { parseInsightBody } from "./body";
import { insightDiagrams } from "./diagrams";
import {
  insightMetadataSchema,
  insightSlugSchema,
  isPublished,
  type Insight,
  type InsightSummary,
  type PublishedInsight,
} from "./schema";

export interface InsightRepository {
  listPublished(now?: Date): Promise<InsightSummary[]>;
  getPublished(slug: string, now?: Date): Promise<PublishedInsight | null>;
}

// Editorial access is kept separate from the public repository contract.
// Nothing in this directory is served from /public or exported to client components.
export async function readEditorialInsights(
  directory: string,
): Promise<Insight[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = entries.filter((entry) => /\.(json|md)$/.test(entry.name));
  const names = new Set(files.map((entry) => entry.name));
  for (const entry of files) {
    if (!entry.isFile())
      throw new Error(`Insight content must be a regular file: ${entry.name}`);
    const slug = entry.name.replace(/\.(json|md)$/, "");
    insightSlugSchema.parse(slug);
    if (!names.has(`${slug}.json`) || !names.has(`${slug}.md`)) {
      throw new Error(
        `Insight ${slug} needs both a .json metadata file and a .md body`,
      );
    }
  }

  return Promise.all(
    files
      .filter((entry) => entry.name.endsWith(".json"))
      .map(async (entry) => {
        const slug = entry.name.slice(0, -5);
        const [json, body] = await Promise.all([
          readFile(path.join(directory, entry.name), "utf8"),
          readFile(path.join(directory, `${slug}.md`), "utf8"),
        ]);
        let raw: unknown;
        try {
          raw = JSON.parse(json);
        } catch {
          throw new Error(`Invalid JSON in insight ${slug}`);
        }
        const result = insightMetadataSchema.safeParse(raw);
        if (!result.success) {
          const errors = result.error.issues
            .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
            .join("; ");
          throw new Error(`Invalid insight ${slug}: ${errors}`);
        }
        if (result.data.slug !== slug)
          throw new Error(`Insight slug must match its filename: ${slug}`);
        const markdown = body.trim();
        if (result.data.status === "published" && !markdown)
          throw new Error(`Published insight ${slug} needs an article body`);
        const sections = parseInsightBody(markdown);
        const diagramText = sections
          .flatMap((section) => section.blocks)
          .flatMap((block) =>
            block.type === "diagram"
              ? insightDiagrams[block.id].steps.map(
                  (step) => `${step.title} ${step.description}`,
                )
              : [],
          )
          .join(" ");
        const words = `${markdown} ${diagramText}`.match(/\S+/g)?.length ?? 0;
        return {
          ...result.data,
          markdown,
          readingMinutes: Math.max(1, Math.ceil(words / 220)),
        };
      }),
  );
}

export function createFileInsightRepository(
  directory: string,
): InsightRepository {
  async function published(now = new Date()): Promise<PublishedInsight[]> {
    if (!Number.isFinite(now.getTime()))
      throw new Error("Invalid publication cutoff date");
    const all = await readEditorialInsights(directory);
    return all
      .filter((article) => isPublished(article, now))
      .sort(
        (a, b) =>
          Date.parse(b.publishedAt) - Date.parse(a.publishedAt) ||
          a.slug.localeCompare(b.slug),
      );
  }
  return {
    async listPublished(now) {
      return (await published(now)).map(
        ({ markdown: _markdown, ...summary }) => summary,
      );
    },
    async getPublished(slug, now) {
      if (!insightSlugSchema.safeParse(slug).success) return null;
      return (
        (await published(now)).find((article) => article.slug === slug) ?? null
      );
    },
  };
}
