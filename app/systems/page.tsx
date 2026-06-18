import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import SystemsPage from "@/components/sections/systems-page"

export const metadata: Metadata = {
  title: "Systems | CLVR Systems",
  description: "Explore the CLVR Core, applied systems, and CLVR Verified record layer.",
  alternates: {
    canonical: "/systems",
  },
  openGraph: {
    title: "Systems | CLVR Systems",
    description: "Explore the CLVR Core, applied systems, and CLVR Verified record layer.",
    url: "https://clvrsystems.com/systems",
    siteName: "CLVR Systems",
    type: "website",
  },
}

export default function SystemsRoute() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        <SystemsPage />
      </main>

      <Footer />
    </div>
  )
}
