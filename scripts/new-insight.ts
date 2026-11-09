import { mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  insightMetadataSchema,
  insightSlugSchema,
} from "../lib/insights/schema";

async function main() {
  const [slugInput, ...titleWords] = process.argv.slice(2);
  const slug = insightSlugSchema.parse(slugInput);
  const metadata = insightMetadataSchema.parse({
    slug,
    title: titleWords.join(" ") || "Untitled insight",
    author: "CLVR",
    category: "work",
    status: "draft",
  });
  const directory = path.join(process.cwd(), "content", "insights");
  await mkdir(directory, { recursive: true });
  const metadataPath = path.join(directory, `${slug}.json`);
  await writeFile(metadataPath, JSON.stringify(metadata, null, 2) + "\n", {
    flag: "wx",
  });
  try {
    await writeFile(path.join(directory, `${slug}.md`), "", { flag: "wx" });
  } catch (error) {
    await unlink(metadataPath);
    throw error;
  }
  console.log(`Created draft: content/insights/${slug}.json and ${slug}.md`);
}

main().catch((error: unknown) => {
  console.error(
    error instanceof Error ? error.message : "Could not create draft",
  );
  console.error('Usage: pnpm insights:new article-slug "Article title"');
  process.exitCode = 1;
});
