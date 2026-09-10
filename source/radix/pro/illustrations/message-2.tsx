import { SmilePlus } from "lucide-react"
import Image from "next/image"

const SHADCN_AVATAR = "https://avatars.githubusercontent.com/u/124599?v=4"

export const Message2Illustration = () => (
  <div aria-hidden className="min-w-xs">
    <div className="grid grid-cols-[auto_1fr] gap-2.5">
      <div className="relative size-9 overflow-hidden rounded-full shadow-md shadow-black/6.5 before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/20">
        <Image src={SHADCN_AVATAR} alt="shadcn" width={56} height={56} />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-end gap-1">
          <div className="text-sm font-medium [text-trim:both]">Shadcn</div>
          <div className="border border-transparent text-xs text-foreground/50 [text-trim:both]">
            6:32 pm
          </div>
        </div>
        <div>
          <div className="text-sm/6 text-foreground/65">
            Hey team, I've been thinking about the new dashboard redesign.
          </div>
          <div className="mt-3 flex gap-2 text-muted-foreground *:cursor-pointer">
            <div className="flex h-7 items-center gap-1 rounded-full bg-foreground/5 px-2 hover:bg-foreground/6.5">
              <span className="text-base">🔥</span>
              <span className="text-xs font-medium">2</span>
            </div>
            <div className="flex h-7 items-center gap-1 rounded-full bg-foreground/5 px-2 hover:bg-foreground/6.5">
              <span className="text-base">🚀</span>
              <span className="text-xs font-medium">12</span>
            </div>
            <div className="flex h-7 items-center gap-1 rounded-full bg-foreground/5 px-2 hover:bg-foreground/6.5">
              <SmilePlus className="size-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Message2Illustration
