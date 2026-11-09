import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SystemsPage from "@/components/sections/systems-page";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata(
  "/systems",
  "Systems | CLVR Systems",
  "Explore Emilia, MarginFlow, CLVR Verified and Juris Global: clinic follow-up, commercial operations, payment controls and global mobility research.",
);

export default function SystemsRoute() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        <SystemsPage />
      </main>

      <Footer />
    </div>
  );
}
