import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="font-bold text-5xl py-16">Blog</h1>
      <div className="grid grid-cols-12 border-t border-solid border-[color:rgb(0,0,0,0.25)]">
        <h2 className="col-span-3 text-2xl font-extrabold py-4">2021</h2>
        <ul className="col-span-9 text-xl">
          {[
            'Multi-language (i18n) Gatsby app with Hooks',
            'Setup in-memory database for testing Node.js and Mongoose',
          ].map((title, i) => (
            <li
              key={i}
              className="border-b border-dashed border-[color:rgb(0,0,0,0.25)] last:border-none"
            >
              <Link href={'/'} className="py-4 flex justify-between">
                <span className="font-semibold">{title}</span>
                <time
                  className="min-w-[7rem] font-light text-right"
                  dateTime="2021-03-08"
                >
                  March 8th
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
