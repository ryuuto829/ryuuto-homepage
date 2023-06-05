'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import Link from 'next/link'

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
]

const buttonLabelClasses = 'uppercase [writing-mode:vertical-rl]'

export default function Sidebar() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="fixed z-50 top-0 left-0 w-20 h-full bg-black text-white flex flex-col items-center py-8 data-[state=open]:hidden">
          <HamburgerMenuIcon className="animate-fadeInAndScale w-[29px] h-[29px] mb-8" />
          <div className={clsx(buttonLabelClasses)}>Menu</div>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Close asChild>
          <button className="fixed z-50 top-0 left-0 w-20 pointer-events-auto h-full bg-black text-white flex flex-col items-center pt-8">
            <Cross1Icon className="animate-fadeInAndScale w-[29px] h-[29px] mb-8" />
            <div className={clsx(buttonLabelClasses)}>Close</div>
          </button>
        </Dialog.Close>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide fixed inset-0 left-[80px] bg-black/20" />
        <Dialog.Content className="data-[state=open]:animate-sidebarShow data-[state=closed]:animate-sidebarHide fixed top-0 left-[80px] w-[400px] h-full bg-neutral-900 p-8 text-white text-3xl">
          <div className="flex flex-col">
            {navigationLinks.map((link) => (
              <Dialog.Close key={link.href} asChild>
                <Link href={link.href} className="py-4">
                  {link.label}
                </Link>
              </Dialog.Close>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
