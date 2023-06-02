import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import Sidebar from './components/sidebar'
import site from '../content/site'

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
        <div className="flex flex-col min-h-screen ml-[80px]">
          <header className="py-8 text-xl">{site.title}</header>
          <main>{children}</main>
          <footer>
            <p>
              &copy;
              <time dateTime={site.builtTime.toISOString()}>
                {site.builtTime.getFullYear()}
              </time>
              <a href={site.url} rel="home" className="hover:underline">
                {site.author}
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  )
}
