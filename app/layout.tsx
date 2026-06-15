import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteShell } from '@/components/site-shell'
import { CustomCursor } from '@/components/custom-cursor'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://nextgenlabs.sn'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NextGen Labs — Transforming Ideas Into Digital Solutions',
    template: '%s | NextGen Labs',
  },
  description:
    'NextGen Labs is a Senegalese technology startup specializing in web development, mobile applications, artificial intelligence, and innovative software solutions.',
  keywords: [
    'NextGen Labs',
    'Senegal tech startup',
    'web development',
    'mobile development',
    'artificial intelligence',
    'digital transformation',
    'software development',
    'Dakar',
    'ISEP Diamniadio',
  ],
  authors: [{ name: 'NextGen Labs' }],
  openGraph: {
    type: 'website',
    siteName: 'NextGen Labs',
    title: 'NextGen Labs — Transforming Ideas Into Digital Solutions',
    description:
      'Web development, mobile applications, artificial intelligence, and innovative software solutions from Senegal.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextGen Labs',
    description: 'Transforming Ideas Into Digital Solutions.',
  },
  icons: {
    icon: '/images/nextgen-labs-logo.png',
    shortcut: '/images/nextgen-labs-logo.png',
    apple: '/images/nextgen-labs-logo.png',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <CustomCursor />
        <SiteShell>{children}</SiteShell>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
