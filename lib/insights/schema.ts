import { z } from "zod";
import type { ProductId } from "../site-content";

export const insightCategories = {
  work: "How work works",
  building: "Inside the build",
  company: "Company notes",
} as const;

export const insightSlugSchema = z
  .string()
  .max(100)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use a lowercase, hyphenated slug")
  .refine(
    (slug) => !["feed", "rss", "preview"].includes(slug),
    "Reserved slug",
  );

const productIds = [
  "emilia",
  "marginflow",
  "verified",
  "juris",
] as const satisfies readonly ProductId[];
const timestamp = z.string().datetime({ offset: true });

export const insightMetadataSchema = z
  .object({
    slug: insightSlugSchema,
    title: z.string().trim().min(1).max(180),
    description: z.string().trim().max(320).default(""),
    author: z.string().trim().min(1).max(100),
    category: z.enum(["work", "building", "company"]),
    status: z.enum(["draft", "published"]).default("draft"),
    publishedAt: timestamp.optional(),
    updatedAt: timestamp.optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string().trim().min(1).max(50)).max(10).default([]),
    relatedProducts: z.array(z.enum(productIds)).max(4).default([]),
    coverImage: z
      .object({
        src: z
          .string()
          .regex(/^\/images\/[a-zA-Z0-9/_\-.]+$/)
          .refine(
            (src) => !src.split("/").includes(".."),
            "Image path cannot traverse directories",
          ),
        alt: z.string().trim().min(1).max(240),
      })
      .strict()
      .optional(),
    seoTitle: z.string().trim().min(1).max(180).optional(),
    seoDescription: z.string().trim().min(1).max(320).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    if (value.status === "published") {
      if (!value.publishedAt)
        ctx.addIssue({
          code: "custom",
          path: ["publishedAt"],
          message: "Published articles need a publication date",
        });
      if (!value.description)
        ctx.addIssue({
          code: "custom",
          path: ["description"],
          message: "Published articles need a description",
        });
    }
    if (
      value.publishedAt &&
      value.updatedAt &&
      Date.parse(value.updatedAt) < Date.parse(value.publishedAt)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["updatedAt"],
        message: "Updated date cannot precede publication",
      });
    }
    if (new Set(value.relatedProducts).size !== value.relatedProducts.length) {
      ctx.addIssue({
        code: "custom",
        path: ["relatedProducts"],
        message: "Related products must be unique",
      });
    }
  });

export type InsightMetadata = z.infer<typeof insightMetadataSchema>;
export type Insight = InsightMetadata & {
  markdown: string;
  readingMinutes: number;
};
export type PublishedInsight = Insight & {
  status: "published";
  publishedAt: string;
};
export type InsightSummary = Omit<PublishedInsight, "markdown">;

export function isPublished(
  insight: Insight,
  now: Date,
): insight is PublishedInsight {
  return (
    insight.status === "published" &&
    Boolean(insight.publishedAt) &&
    Date.parse(insight.publishedAt!) <= now.getTime()
  );
}
