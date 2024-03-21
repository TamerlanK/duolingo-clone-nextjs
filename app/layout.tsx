import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"
import { ExitModal } from "@/components/modals/exit-modal"
import { HeartsModal } from "@/components/modals/hearts-modal"
import { PracticeModal } from "@/components/modals/practice-modal"

const font = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lingo",
  description: "Language Learning Platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
