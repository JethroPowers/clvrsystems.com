import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ApproachPage from "@/components/sections/approach-page";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata(
  "/approach",
  "Our Approach | CLVR Systems",
  "Inside Emilia, MarginFlow, CLVR Verified and Juris Global: the problems, product decisions and workflows behind each one.",
);

export default function ApproachRoute() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <ApproachPage />
      </main>
      <Footer />
    </div>
  );
}
