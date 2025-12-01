import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "tw-animate-css"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  metadataBase: new URL('https://maven-green-energy.vercel.app'),
  title: "AR Energy - Sustainable Solar Plants",
  description: "Leading provider of residential, commercial, and industrial solar plant solutions. Harness the power of the sun with AR Energy for a sustainable future.",
  generator: "AR Energy",
  keywords: ["solar energy", "renewable energy", "solar plants", "green energy", "sustainable energy", "solar solutions"],
  authors: [{ name: "AR Energy" }],
  openGraph: {
    title: "AR Energy - Sustainable Solar Plants",
    description: "Transform your energy future with our innovative solar plant solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
