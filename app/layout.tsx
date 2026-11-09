import type React from "react";
import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./site.css";
import "./stories.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteMotionProvider } from "@/components/ui-custom/site-motion";
import { pageMetadata } from "@/lib/site-metadata";
import { siteCopy } from "@/lib/site-content";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  ...pageMetadata(
    "/",
    "CLVR Systems | Operating Systems for Business Workflows",
    `${siteCopy.hero.lines.join(" ")} Explore Emilia, MarginFlow, CLVR Verified and Juris Global.`,
  ),
  metadataBase: new URL("https://clvrsystems.com"),
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteMotionProvider>{children}</SiteMotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
