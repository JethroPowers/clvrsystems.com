import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  getPublishedInsight,
  listPublishedInsights,
} from "@/lib/insights/server";
import { insightCategories } from "@/lib/insights/schema";
import { insightDate } from "@/lib/insights/presentation";
import { products } from "@/lib/site-content";
import { pageMetadata } from "@/lib/site-metadata";
import { Enter } from "@/components/ui-custom/site-motion";
import { ArticleBody } from "@/components/insights/article-body";

type Props = { params: { slug: string } };
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await listPublishedInsights()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getPublishedInsight(params.slug);
  if (!article)
    return {
      title: "Insight not found | CLVR",
      robots: { index: false, follow: false },
    };
  const base = pageMetadata(
    `/insights/${article.slug}`,
    `${article.seoTitle ?? article.title} | CLVR Insights`,
    article.seoDescription ?? article.description,
  );
  const images = article.coverImage
    ? [{ url: article.coverImage.src, alt: article.coverImage.alt }]
    : undefined;
  return {
    ...base,
    authors: [{ name: article.author }],
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      section: insightCategories[article.category],
      tags: article.tags,
      ...(images ? { images } : {}),
    },
    twitter: { ...base.twitter, ...(images ? { images } : {}) },
  };
}

export default async function InsightArticle({ params }: Props) {
  const article = await getPublishedInsight(params.slug);
  if (!article) notFound();
  const related = products.filter((product) =>
    article.relatedProducts.includes(product.id),
  );
  const more = (await listPublishedInsights())
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
    author: {
      "@type": article.author === "CLVR" ? "Organization" : "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "CLVR Systems",
      url: "https://clvrsystems.com",
    },
    mainEntityOfPage: `https://clvrsystems.com/insights/${article.slug}`,
    image: `https://clvrsystems.com${article.coverImage?.src ?? "/images/clvr-continuity.jpg"}`,
  };
  return (
    <>
      <article className={`insight-article category-${article.category}`}>
        <header className="insight-article-head">
          <div className="site-container">
            <Link href="/insights" className="insight-back">
              <ArrowLeft size={15} aria-hidden /> All insights
            </Link>
            <Enter>
              <span className="eyebrow">
                {insightCategories[article.category]}
              </span>
              <h1>{article.title}</h1>
              <p className="insight-deck">{article.description}</p>
            </Enter>
            <div className="insight-byline">
              <span>By {article.author}</span>
              <time dateTime={article.publishedAt}>
                {insightDate(article.publishedAt)}
              </time>
              <span>{article.readingMinutes} min read</span>
              {article.updatedAt ? (
                <span>
                  Updated{" "}
                  <time dateTime={article.updatedAt}>
                    {insightDate(article.updatedAt)}
                  </time>
                </span>
              ) : null}
            </div>
            <div className="insight-article-head-foot">
              <span>CLVR / Field notes</span>
              <a href="#article-content">Start reading ↓</a>
            </div>
          </div>
        </header>
        {article.coverImage ? (
          <div className="site-container insight-cover">
            <Image
              src={article.coverImage.src}
              alt={article.coverImage.alt}
              width={1360}
              height={800}
              sizes="100vw"
            />
          </div>
        ) : null}
        <ArticleBody markdown={article.markdown} />
        <footer className="site-container insight-article-footer">
          <span className="eyebrow">The work behind the words</span>
          <h2>Explore the products.</h2>
          <div className="insight-product-links">
            {related.map((product) => (
              <Link key={product.id} href={product.href}>
                <span>{product.name}</span>
                <small>{product.category}</small>
                <ArrowUpRight size={18} aria-hidden />
              </Link>
            ))}
          </div>
          <p>
            Written by CLVR from its product studies and design perspective.
            Examples and diagrams are illustrative.
          </p>
        </footer>
      </article>
      <section className="insight-next">
        <div className="site-container">
          <span className="eyebrow">Continue reading</span>
          <div>
            {more.map((item) => (
              <Link key={item.slug} href={`/insights/${item.slug}`}>
                <span>{insightCategories[item.category]}</span>
                <h2>{item.title}</h2>
                <ArrowUpRight size={24} aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
