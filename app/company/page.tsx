import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import CompanyPage from "@/components/sections/company-page"

export const metadata: Metadata = {
  title: "Company | CLVR Systems",
  description: "Learn how CLVR Systems builds operating systems for workflow control, human review, and recorded outcomes.",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "Company | CLVR Systems",
    description: "CLVR Systems builds operating systems for workflow control, human review, and recorded outcomes.",
    url: "https://clvrsystems.com/company",
    siteName: "CLVR Systems",
    type: "website",
  },
}

export default function CompanyRoute() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        <CompanyPage />
      </main>

      <Footer />
    </div>
  )
}
