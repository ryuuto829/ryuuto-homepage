import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects 111',
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <article className="prose lg:prose-xl">{children}</article>
}
