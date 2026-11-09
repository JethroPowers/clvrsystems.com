import { isDiagramId, type InsightDiagramId } from "./diagrams";

export type InsightBlock =
  | { type: "markdown"; text: string }
  | { type: "diagram"; id: InsightDiagramId };
export type InsightSection = {
  id: string;
  title?: string;
  blocks: InsightBlock[];
};

// Only explicit top-level headings and diagram directives affect layout.
// Fenced code remains Markdown, including any examples of this syntax.
export function parseInsightBody(markdown: string): InsightSection[] {
  const sections: InsightSection[] = [
    { id: "article-introduction", blocks: [] },
  ];
  const usedIds = new Set(["article-introduction"]);
  const diagrams = new Set<string>();
  let buffer: string[] = [];
  let fence: { character: string; length: number } | undefined;
  const current = () => sections[sections.length - 1];
  const flush = () => {
    const text = buffer.join("\n").trim();
    if (text) current().blocks.push({ type: "markdown", text });
    buffer = [];
  };
  for (const line of markdown.split(/\r?\n/)) {
    const boundary = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (boundary) {
      const marker = boundary[1];
      if (!fence) fence = { character: marker[0], length: marker.length };
      else if (
        marker[0] === fence.character &&
        marker.length >= fence.length &&
        !boundary[2].trim()
      )
        fence = undefined;
      buffer.push(line);
      continue;
    }
    if (fence) {
      buffer.push(line);
      continue;
    }
    const heading = line.match(/^## (.+?)\s*$/);
    if (heading) {
      flush();
      const title = heading[1];
      const base =
        "section-" +
        (title
          .toLowerCase()
          .normalize("NFKD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "") || "heading");
      let id = base;
      for (let suffix = 2; usedIds.has(id); suffix++) id = `${base}-${suffix}`;
      usedIds.add(id);
      sections.push({ id, title, blocks: [] });
      continue;
    }
    if (line.startsWith(":::diagram")) {
      flush();
      const id = line.slice(":::diagram".length).trim();
      if (!isDiagramId(id)) throw new Error(`Unknown insight diagram: ${id}`);
      if (diagrams.has(id)) throw new Error(`Repeated insight diagram: ${id}`);
      diagrams.add(id);
      current().blocks.push({ type: "diagram", id });
      continue;
    }
    buffer.push(line);
  }
  flush();
  return sections.filter((section) => section.title || section.blocks.length);
}
