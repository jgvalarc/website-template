import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import {
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from '@/lib/constants'
import './globals.css'

const SITE_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: SITE_LOCALE,
    url: '/',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
