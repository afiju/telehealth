import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { NetworkStatusProvider } from "@/components/network-status-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HealthWise Sierra Leone - Maternal Health Education",
  description: "Improving health literacy and maternal health outcomes in Sierra Leone",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <NetworkStatusProvider>
            {children}
            <Toaster />
          </NetworkStatusProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
