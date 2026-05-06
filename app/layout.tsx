import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ChichiLounge — Fulda',
  description: "Fulda's premier nightclub. Afrobeats, Hip-Hop & R&B. Every Saturday.",
  openGraph: {
    title: 'ChichiLounge — Fulda',
    description: "Fulda's premier nightclub. Every Saturday.",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
