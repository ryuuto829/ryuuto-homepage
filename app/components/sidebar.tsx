'use client'
import * as Dialog from '@radix-ui/react-dialog'

export default function Sidebar() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="fixed z-50 top-0 left-0 w-20 h-full bg-slate-300 flex flex-col">
          <span>Menu</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Close asChild>
          <button className="fixed z-50 top-0 left-0 w-20 h-full bg-slate-300">
            button2
          </button>
        </Dialog.Close>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide fixed inset-0 left-[80px] bg-black/20" />
        <Dialog.Content className="data-[state=open]:animate-sidebarShow data-[state=closed]:animate-sidebarHide fixed top-0 left-[80px] w-[540px] h-full bg-slate-400">
          <div>Content</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
