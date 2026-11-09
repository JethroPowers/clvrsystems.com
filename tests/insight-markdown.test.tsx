import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import assert from "node:assert/strict";
import { test } from "node:test";
import {
  InsightMarkdown,
  safeInsightUrl,
} from "../components/insights/markdown";

// tsx uses the project's preserve JSX setting; Next handles JSX in production.
Object.assign(globalThis, { React });

test("Markdown renders semantic content and excludes executable HTML and links", () => {
  const html = renderToStaticMarkup(
    <InsightMarkdown
      text={
        'A **useful** [product](/systems#emilia).\n\n<script>alert(1)</script>\n\n[unsafe](javascript:alert%281%29)\n\n<iframe src="https://example.com"></iframe>\n\n- First item\n- Second item'
      }
    />,
  );
  assert.ok(html.includes("<strong>useful</strong>"));
  assert.ok(html.includes('href="/systems#emilia"'));
  assert.ok(html.includes("<ul>"));
  assert.ok(!html.includes("<script"));
  assert.ok(!html.includes("<iframe"));
  assert.ok(!html.includes("javascript:"));
});

test("URL policy rejects executable and protocol-relative destinations", () => {
  for (const value of [
    "javascript:alert(1)",
    "data:text/html,hello",
    "//example.com",
    "/\\example.com",
    "file:///private/file",
  ])
    assert.equal(safeInsightUrl(value), "");
  for (const value of [
    "/approach#emilia",
    "#section-example",
    "https://jurisglobal.org",
    "mailto:hello@clvrsystems.com",
  ])
    assert.equal(safeInsightUrl(value), value);
});
