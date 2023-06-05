import clsx from 'clsx'
import type { Metadata } from 'next'
import Image from 'next/image'
import projects from '@/content/projects'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: '',
}

function ProjectItem({
  title,
  description,
  stack,
  format,
}: (typeof projects)[number]) {
  return (
    <article
      className={clsx(
        format === 'landscape' && 'basis-full mt-[10vh]',
        format === 'square' && [
          'basis-full md:basis-1/2 mt-[12vh]',
          'square px-0 sm:px-[10%] md:pl-16 md:pr-4 md:[&:nth-child(even_of_.square)]:pl-4 md:[&:nth-child(even_of_.square)]:pr-16',
        ],
      )}
    >
      <div
        className={clsx(
          format === 'square' &&
            'py-4 md:pl-[5%] border-0 md:border-l border-dashed border-[color:rgb(0,0,0,0.25)]',
        )}
      >
        <Image
          src="/"
          alt={title}
          width={format === 'landscape' ? 350 : 125}
          height={format === 'landscape' ? 350 : 125}
          className={clsx(
            'float-right object-cover bg-slate-500 ml-2',
            format === 'landscape' &&
              'w-[200px] h-[200px] md:w-[290px] md:h-[290px] lg:w-[350px] lg:h-[350px]',
            format === 'square' &&
              'w-[95px] h-[95px] lg:w-[125px] lg:h-[125px]',
          )}
        />
        <div
          className={clsx(
            format === 'landscape' ? 'mb-[2vh] font-medium' : 'hidden',
          )}
        >
          Featured
        </div>
        <Link href={'/'} className="hover:underline">
          <h2
            className={clsx(
              format === 'landscape' ? 'text-7xl' : 'text-3xl',
              'font-bold mb-[2vh]',
            )}
          >
            {title}
          </h2>
        </Link>
        <p
          className={clsx(
            format === 'landscape' ? 'py-6 font-semibold' : 'py-2',
          )}
        >
          {description}
        </p>
        <ul className="flex flex-wrap">
          {stack.split(', ').map((label) => (
            <li
              key={label}
              className="before:content-['•'] before:mx-2 first:before:content-none"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-16">
      <h1 className="font-bold text-5xl py-16">Projects</h1>
      <div className="flex flex-wrap mb-[5vh]">
        {projects.map((item) => (
          <ProjectItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
