import './globals.css'
import type { Metadata } from 'next'
import {
  Noto_Serif,
  Inter,
  Noto_Serif_Display,
  Noto_Serif_JP,
} from 'next/font/google'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import site from '../content/site'
import Header from './components/header'

const noto_serif = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-noto-serif',
})
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
      <body className={`${noto_serif.variable} ${inter.variable} bg-[#d7d6d2]`}>
        {/* <Sidebar /> */}
        {/* <div className="flex flex-col px-14 min-h-screen ml-[80px]"> */}
        {/* <Header /> */}
        {/* <main className="flex items-center min-h-[362px] overflow-hidden"> */}
        {children}
        {/* </main> */}
        {/* <Footer /> */}
        {/* </div> */}
      </body>
    </html>
  )
}
