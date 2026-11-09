import type { Metadata } from "next";

export function pageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  const image = "/images/clvr-continuity.jpg";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: new URL(path, "https://clvrsystems.com").href,
      siteName: "CLVR Systems",
      type: "website",
      images: [
        {
          url: image,
          width: 1536,
          height: 1024,
          alt: "CLVR Systems — an emerald glass and brushed-metal loop",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
