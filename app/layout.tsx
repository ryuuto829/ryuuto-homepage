import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import Sidebar from './components/sidebar'

const league_spartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Dmytro Rykhlyk - Homepage',
    template: '%s - Dmytro Rykhlyk',
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
      <body className={league_spartan.className}>
        <Sidebar />
        <main className="ml-[80px]">{children}</main>
      </body>
    </html>
  )
}
