import { Suspense } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Hero from "@/components/sections/hero"
import WhatWeDo from "@/components/sections/what-we-do"
import HowWeDoIt from "@/components/sections/how-we-do-it"
import Products from "@/components/sections/products"
import TechStack from "@/components/sections/tech-stack"
import Security from "@/components/sections/security"
import Comparison from "@/components/sections/comparison"
import Vision from "@/components/sections/vision"
import Faq from "@/components/sections/faq"
import BlogTeaser from "@/components/sections/blog-teaser"
import FinalCta from "@/components/sections/final-cta"
import LoadingFallback from "@/components/ui-custom/loading-fallback"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 relative">
        <Suspense fallback={<LoadingFallback />}>
          <div className="relative z-10">
            <Hero />
          </div>
          <div className="relative z-0">
            <WhatWeDo />
          </div>
          <div className="relative z-1">
            <HowWeDoIt />
            <Products />
            <TechStack />
            <Security />
            <Comparison />
            <Vision />
            <Faq />
            <BlogTeaser />
            <FinalCta />
          </div>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
