import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CompanyPage from "@/components/sections/company-page";
import { pageMetadata } from "@/lib/site-metadata";
import { siteCopy } from "@/lib/site-content";

export const metadata: Metadata = pageMetadata(
  "/company",
  "Company | CLVR Systems",
  `${siteCopy.hero.lines.join(" ")} Meet CLVR, founded by Jethro Xavier, and explore the thinking behind its products.`,
);

export default function CompanyRoute() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        <CompanyPage />
      </main>

      <Footer />
    </div>
  );
}
