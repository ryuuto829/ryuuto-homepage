import type { Metadata } from 'next'
import clsx from 'clsx'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Projects',
}

const PROJECTS_LIST = [
  {
    title: 'Kotonoha',
    description: 'Japanese dictionary & learning tool',
    stack: 'Next.js, Tailwindcss, RxDB, Radix UI',
    isHero: true,
    index: 1,
  },
  {
    title: 'Kotonoha 1',
    description: 'Japanese dictionary & learning tool',
    stack: 'Next.js, Tailwindcss, RxDB, Radix UI',
    index: 3,
  },
  {
    title: 'Kotonoha 2',
    description: 'Japanese dictionary & learning tool',
    stack: 'Next.js, Tailwindcss, RxDB, Radix UI',
    index: 4,
  },
  {
    title: 'Kotonoha 3',
    description: 'Japanese dictionary & learning tool',
    stack: 'Next.js, Tailwindcss, RxDB, Radix UI',
    index: 5,
  },
  {
    title: 'Kotonoha 4',
    description: 'Japanese dictionary & learning tool',
    stack: 'Next.js, Tailwindcss, RxDB, Radix UI',
    index: 6,
  },
]

const StackList = ({ stack }: { stack: string }) => {
  return (
    <ul className="flex flex-wrap gap-1">
      {stack.split(', ').map((label) => (
        <li key={label} className="pr-2 last-of-type:pr-0">
          {label}
        </li>
      ))}
    </ul>
  )
}

const ProjectItem = ({
  title,
  description,
  stack,
  isHero,
  index,
}: {
  title: string
  description: string
  stack: string
  isHero?: boolean
  index: number
}) => {
  const isEven = index % 2 === 0 && 'pl-4 pr-16'
  const isOdd = index % 2 !== 0 && 'pl-16 pr-9'

  return (
    <article
      className={clsx(
        isHero && 'basis-full mt-[10vh]',
        !isHero && 'basis-1/2 mt-[12vh]',
        !isHero && (isEven || isOdd),
      )}
    >
      <div
        className={clsx(
          !isHero &&
            'py-4 pl-[5%] border-l border-dashed border-[color:rgb(0,0,0,0.25)]',
        )}
      >
        <Image
          src="/"
          alt={title}
          width={isHero ? 350 : 125}
          height={isHero ? 350 : 125}
          className=" float-right object-cover bg-slate-500 ml-2"
        />
        <div className={clsx(isHero ? 'mb-[2vh] font-medium' : 'hidden')}>
          Featured
        </div>
        <h2
          className={clsx(
            isHero ? 'text-7xl' : 'text-3xl',
            'font-bold mb-[2vh]',
          )}
        >
          {title}
        </h2>
        <p className={clsx(isHero ? 'py-6 font-semibold' : 'py-2')}>
          {description}
        </p>
        <StackList stack={stack} />
      </div>
    </article>
  )
}

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto">
      <h1 className="font-bold text-5xl py-16">Projects</h1>
      <div className="flex flex-wrap mb-[5vh]">
        {PROJECTS_LIST.map((item) => (
          <ProjectItem key={item.index} {...item} />
        ))}
      </div>
    </section>
  )
}
