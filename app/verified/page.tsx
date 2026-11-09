import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import VerifiedPage from "@/components/sections/verified-page";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata(
  "/verified",
  "CLVR Verified | Payment Controls",
  "Payment-control software designed to connect payment requests, approvals and verification records. Explore the CLVR Verified workflow.",
);

export default function VerifiedRoute() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        <VerifiedPage />
      </main>

      <Footer />
    </div>
  );
}
