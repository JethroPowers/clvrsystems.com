import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import VerifiedPage from "@/components/sections/verified-page"

export const metadata: Metadata = {
  title: "Verified | CLVR Systems",
  description: "Explore CLVR Verified, the record layer for decisions, reviews, actions, and outcomes across CLVR systems.",
  alternates: {
    canonical: "/verified",
  },
  openGraph: {
    title: "Verified | CLVR Systems",
    description: "The record layer for decisions, reviews, actions, and outcomes across CLVR systems.",
    url: "https://clvrsystems.com/verified",
    siteName: "CLVR Systems",
    type: "website",
  },
}

export default function VerifiedRoute() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        <VerifiedPage />
      </main>

      <Footer />
    </div>
  )
}
