import assert from "node:assert/strict";
import {
  mkdtemp,
  mkdir,
  readFile,
  rm,
  symlink,
  writeFile,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import { test } from "node:test";
import {
  createFileInsightRepository,
  readEditorialInsights,
} from "../lib/insights/repository";
import { insightMetadataSchema } from "../lib/insights/schema";
import { parseInsightBody } from "../lib/insights/body";
import { escapeXml } from "../lib/insights/presentation";

const cutoff = new Date("2026-10-03T12:00:00Z");
const project = process.cwd();
const requireFromProject = createRequire(path.join(project, "package.json"));

test("article sections have stable unique anchors and code fences preserve examples", () => {
  const body =
    "Intro.\n\n## A decision\nText.\n\n## A decision\n```text\n## Example heading\n:::diagram not-a-real-diagram\n```\n\n:::diagram changing-situation\n\nAfter the diagram.";
  const sections = parseInsightBody(body);
  assert.deepEqual(
    sections.map((section) => section.id),
    ["article-introduction", "section-a-decision", "section-a-decision-2"],
  );
  assert.equal(
    sections[2].blocks.filter((block) => block.type === "diagram").length,
    1,
  );
  const code = sections[2].blocks[0];
  assert.equal(code.type, "markdown");
  if (code.type === "markdown")
    assert.ok(code.text.includes(":::diagram not-a-real-diagram"));
});

test("unknown or repeated diagrams fail content validation", () => {
  assert.throws(() => parseInsightBody(":::diagram missing"), /Unknown/);
  assert.throws(
    () =>
      parseInsightBody(
        ":::diagram changing-situation\n:::diagram changing-situation",
      ),
    /Repeated/,
  );
  assert.throws(() => parseInsightBody(":::diagram __proto__"), /Unknown/);
  assert.equal(
    escapeXml('<title a="b">A & B</title>'),
    "&lt;title a=&quot;b&quot;&gt;A &amp; B&lt;/title&gt;",
  );
});

function metadata(slug: string, overrides: Record<string, unknown> = {}) {
  return {
    slug,
    title: `Article ${slug}`,
    description: "A useful article description.",
    author: "CLVR",
    category: "work",
    status: "published",
    publishedAt: "2026-10-01T12:00:00Z",
    ...overrides,
  };
}

async function workspace(run: (directory: string) => Promise<void>) {
  const directory = await mkdtemp(path.join(os.tmpdir(), "clvr-insights-"));
  try {
    await run(directory);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

async function article(
  directory: string,
  slug: string,
  overrides: Record<string, unknown> = {},
  body = "An article about business workflows.",
) {
  await writeFile(
    path.join(directory, `${slug}.json`),
    JSON.stringify(metadata(slug, overrides)),
  );
  await writeFile(path.join(directory, `${slug}.md`), body);
}

test("empty content repository is valid", async () =>
  workspace(async (directory) => {
    assert.deepEqual(
      await createFileInsightRepository(directory).listPublished(cutoff),
      [],
    );
  }));

test("public reads exclude drafts and future dates, including direct slug access", async () =>
  workspace(async (directory) => {
    await article(
      directory,
      "draft",
      { status: "draft" },
      "PRIVATE DRAFT BODY",
    );
    await article(directory, "future", { publishedAt: "2026-10-04T00:00:00Z" });
    await article(directory, "ready");
    const repo = createFileInsightRepository(directory);
    assert.deepEqual(
      (await repo.listPublished(cutoff)).map((item) => item.slug),
      ["ready"],
    );
    assert.equal(await repo.getPublished("draft", cutoff), null);
    assert.equal(await repo.getPublished("future", cutoff), null);
    assert.equal(await repo.getPublished("unknown", cutoff), null);
    assert.ok(
      (await repo.getPublished("ready", cutoff))?.markdown.includes(
        "business workflows",
      ),
    );
    assert.equal((await readEditorialInsights(directory)).length, 3);
    assert.ok(
      !JSON.stringify(await repo.listPublished(cutoff)).includes("markdown"),
    );
  }));

test("publication cutoff is inclusive and ordering respects timezone offsets", async () =>
  workspace(async (directory) => {
    await article(directory, "earlier", {
      publishedAt: "2026-10-03T12:30:00+01:00",
    });
    await article(directory, "at-cutoff", {
      publishedAt: "2026-10-03T12:00:00Z",
    });
    await article(directory, "one-second-later", {
      publishedAt: "2026-10-03T12:00:01Z",
    });
    const repo = createFileInsightRepository(directory);
    assert.deepEqual(
      (await repo.listPublished(cutoff)).map((item) => item.slug),
      ["at-cutoff", "earlier"],
    );
    assert.equal(
      (await repo.listPublished(new Date("2026-10-03T12:00:01Z")))[0].slug,
      "one-second-later",
    );
    await assert.rejects(repo.listPublished(new Date("invalid")), /cutoff/);
  }));

test("invalid and path-traversal slugs cannot trigger filesystem reads", async () => {
  const repo = createFileInsightRepository("/this-directory-does-not-exist");
  for (const slug of [
    "../private",
    "%2e%2e",
    "/private",
    "a/b",
    "a\\b",
    "",
    "preview",
  ]) {
    assert.equal(await repo.getPublished(slug, cutoff), null);
  }
});

test("metadata requires publishing essentials and rejects malformed fields", () => {
  for (const overrides of [
    { publishedAt: undefined },
    { description: "" },
    { author: "" },
    { publishedAt: "2026-02-30T00:00:00Z" },
    { publishedAt: "2026-10-03" },
    { updatedAt: "2026-09-01T00:00:00Z" },
    { status: "live" },
    { relatedProducts: ["unknown"] },
    { relatedProducts: ["emilia", "emilia"] },
    { coverImage: { src: "/images/../private.png", alt: "Example" } },
    { coverImage: { src: "/images/article.png", alt: "" } },
    { unexpected: "typo" },
  ])
    assert.equal(
      insightMetadataSchema.safeParse(metadata("example", overrides)).success,
      false,
      JSON.stringify(overrides),
    );
  const draft = insightMetadataSchema.parse(
    metadata("example", {
      status: undefined,
      publishedAt: undefined,
      description: "",
    }),
  );
  assert.equal(draft.status, "draft");
});

test("validation rejects missing pairs, mismatched slugs, invalid JSON and empty published bodies", async () => {
  await workspace(async (directory) => {
    await writeFile(path.join(directory, "orphan.md"), "Draft");
    await assert.rejects(readEditorialInsights(directory), /both a .json/);
  });
  await workspace(async (directory) => {
    await article(directory, "file-name", { slug: "another-name" });
    await assert.rejects(
      readEditorialInsights(directory),
      /match its filename/,
    );
  });
  await workspace(async (directory) => {
    await article(directory, "broken");
    await writeFile(path.join(directory, "broken.json"), "{");
    await assert.rejects(readEditorialInsights(directory), /Invalid JSON/);
  });
  await workspace(async (directory) => {
    await article(directory, "empty", {}, "  \n");
    await assert.rejects(
      readEditorialInsights(directory),
      /needs an article body/,
    );
  });
});

test("content symlinks are rejected", async () =>
  workspace(async (directory) => {
    await article(directory, "ordinary");
    await symlink(
      path.join(directory, "ordinary.md"),
      path.join(directory, "linked.md"),
    );
    await assert.rejects(readEditorialInsights(directory), /regular file/);
  }));

test("draft creation creates a valid unpublished pair and refuses to overwrite it", async () =>
  workspace(async (directory) => {
    const command = () =>
      spawnSync(
        process.execPath,
        [
          "--import",
          requireFromProject.resolve("tsx"),
          path.join(project, "scripts/new-insight.ts"),
          "a-new-idea",
          "A new idea",
        ],
        { cwd: directory, encoding: "utf8" },
      );
    assert.equal(command().status, 0);
    const content = path.join(directory, "content", "insights");
    const [draft] = await readEditorialInsights(content);
    assert.equal(draft.status, "draft");
    assert.equal(draft.title, "A new idea");
    assert.deepEqual(
      await createFileInsightRepository(content).listPublished(cutoff),
      [],
    );
    await writeFile(path.join(content, "a-new-idea.md"), "Keep this draft.");
    assert.notEqual(command().status, 0);
    assert.equal(
      await readFile(path.join(content, "a-new-idea.md"), "utf8"),
      "Keep this draft.",
    );
  }));

test("a conflicting body is preserved and a partial metadata file is rolled back", async () =>
  workspace(async (directory) => {
    const content = path.join(directory, "content", "insights");
    await mkdir(content, { recursive: true });
    await writeFile(
      path.join(content, "existing.md"),
      "Preserve existing body.",
    );
    const result = spawnSync(
      process.execPath,
      [
        "--import",
        requireFromProject.resolve("tsx"),
        path.join(project, "scripts/new-insight.ts"),
        "existing",
      ],
      { cwd: directory, encoding: "utf8" },
    );
    assert.notEqual(result.status, 0);
    assert.equal(
      await readFile(path.join(content, "existing.md"), "utf8"),
      "Preserve existing body.",
    );
    await assert.rejects(readFile(path.join(content, "existing.json")), {
      code: "ENOENT",
    });
  }));
