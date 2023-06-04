import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import site from '../content/site'
import Header from './components/header'

const league_spartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: `${site.title} - Homepage`,
    template: `%s - ${site.title}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.title} - Homepage`,
    description: site.description,
    url: site.url,
    siteName: site.title,
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
    title: site.title,
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
        <div className="flex flex-col px-14 min-h-screen ml-[80px]">
          <Header />
          <main className="flex items-center min-h-[362px] overflow-hidden">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
