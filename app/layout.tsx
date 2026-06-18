import type React from "react"
import type { Metadata } from "next"
import { Manrope, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://clvrsystems.com"),
  title: "CLVR Systems | Operating Systems for Real-World Business Workflows",
  description:
    "CLVR Systems builds operating systems that help businesses control follow-up, decisions, execution, and recorded outcomes across important workflows.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CLVR Systems",
    description: "Operating systems for real-world business workflows.",
    url: "https://clvrsystems.com",
    siteName: "CLVR Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLVR Systems | Operating Systems",
    description: "CLVR builds systems that help businesses control important workflows.",
  },
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
