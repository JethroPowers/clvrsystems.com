# Insights publishing

Insights uses files in this repository. Ask Codex to draft, edit or prepare an article; no CMS account, database or admin dashboard is required. The local site now includes `/insights`, three complete articles, diagrams, an RSS feed and sitemap entries. The three opening articles are marked published for the local build. Nothing has been deployed to the live website by this task.

## Article files

Each article has two files in `content/insights`, outside `public`:

- `article-slug.json` holds the title, description, author, category, publication status and optional dates, tags, related products, cover image and search descriptions.
- `article-slug.md` holds the Markdown body. This is text content, not executable MDX. The renderer ignores raw HTML, allows a small set of semantic elements and restricts link protocols. Cover images belong in metadata; inline Markdown images are not rendered.

The filename and metadata slug must match. Slugs use lowercase letters, numbers and hyphens. Keep a published slug stable so its future URL stays consistent.

## Create and review

Run `pnpm insights:new article-slug "Article title"` from the project root. This creates an empty draft with CLVR as the default author and refuses to overwrite existing files. Attribute an article to a named person only when that authorship is agreed.

Write the body and description, then select a category: `work` for How work works, `building` for Inside the build, or `company` for Company notes. Related product IDs are `emilia`, `marginflow`, `verified` and `juris`. Cover images use a local `/images/` path and require descriptive alternative text. Place only publication-ready assets in `public`; files there are publicly accessible regardless of article status.

Run `pnpm insights:validate` to check all articles, including drafts. Validation also runs before every `pnpm build`. Run `pnpm test:insights` for the content and publication tests.

## Publication rules

New articles default to `draft`. Publication requires `status: "published"`, a nonempty description and body, and an explicit ISO timestamp such as `2026-10-03T12:00:00Z` in `publishedAt`. An optional `updatedAt` cannot precede publication. Optional `featured` controls future editorial placement; it does not override publication rules.

The server content functions return only published articles whose publication time has arrived. Drafts and future-dated articles are excluded from both lists and direct slug lookups. Article routes return 404 for unavailable slugs. Public lists omit article bodies. The index, article generation, RSS feed and sitemap all use the same filtered functions.

There is no scheduler or live publishing service. Article pages, RSS and sitemap are statically generated. File changes require a new build and deployment to update a deployed site; a future-dated article requires a build after its publication time to appear. Changing a file locally does not publish it online. No preview or admin endpoints are exposed.

## Headings and diagrams

Start with an introductory paragraph and use plain-text `##` headings for the article sections. The table of contents and unique section anchors are generated from those headings. Standard paragraphs, emphasis, links, lists, quotes, code and lower-level headings are supported. Body text stays static; section headings reveal as they enter view.

Place a standalone directive such as `:::diagram changing-situation` between paragraphs to insert a diagram. The registered diagrams are `changing-situation`, `four-product-decisions` and `from-task-to-system`. Their labelled steps and explanations live in `lib/insights/diagrams.ts`. Unknown or repeated diagram references fail validation. Fenced code examples retain their literal contents.

On screens at least 1100 pixels wide and 760 pixels tall, diagrams use native scrolling to select a stage beside a sticky illustration. Reverse scrolling and large jumps select the matching stage without moving keyboard focus. Progress lines and highlights transition between stages. On smaller screens, with reduced motion or without JavaScript, diagrams and every explanatory step remain in normal flow. Both device preference and the site's saved motion setting apply. Diagrams are native HTML/SVG, with visible labels and explanatory captions.

## Public content integration

Server-rendered pages, metadata, feeds and sitemaps import `listPublishedInsights` and `getPublishedInsight` from `lib/insights/server.ts`. Keep using these functions so publication rules stay consistent. The filesystem loader and editorial validator are marked server-only and must not be imported into client components.

Article metadata, structured data and related product links come from validated fields. RSS is at `/insights/feed.xml`; the sitemap is at `/sitemap.xml`. Content is read during static generation. If request-time content loading is introduced for a serverless or standalone deployment, include `content/insights` in its runtime bundle. Hosted draft previews would require a separate authenticated design.

The content contract is isolated behind `InsightRepository`. A future storage provider could implement its two methods without changing article metadata or public consumers. No CMS integration is installed or required.
