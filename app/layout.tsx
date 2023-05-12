import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Dmytro Rykhlyk - Homepage',
    template: '&s - Dmytro Rykhlyk',
  },
  description: 'Developer, artist and creator.',
  openGraph: {
    title: 'Dmytro Rykhlyk - Homepage',
    description: 'Developer, artist and creator.',
    url: 'https://dmytrorykhlyk.com',
    siteName: 'Dmytro Rykhlyk',
    images: [
      {
        /** @todo Add image */
        url: 'https://dmytrorykhlyk.com/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Dmytro Rykhlyk',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={''}>
        <main>{children}</main>
      </body>
    </html>
  )
}
