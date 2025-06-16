import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackToTop } from "@/components/back-to-top"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
