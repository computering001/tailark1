import { Plus } from "lucide-react"
import Image from "next/image"
const SHADCN_AVATAR = "https://avatars.githubusercontent.com/u/124599?v=4"

export const EmailIllustration = () => (
  <div aria-hidden className="relative min-w-92 mask-b-from-75% px-4 pt-2">
    <div className="ring-border-illustration rounded-2xl bg-card p-6 pt-2 pb-16 shadow-xl ring-1 shadow-black/6.5">
      <div className="divide-y border-b text-xs *:flex *:h-10 *:items-center *:py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-foreground/50">To:</span>
            <div className="bg-illustration ring-border-illustration flex cursor-pointer gap-1 rounded-full p-0.5 pr-2.5 shadow-md ring-1 shadow-black/6.5">
              <div className="relative size-4 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/20">
                <Image
                  src={SHADCN_AVATAR}
                  alt="Shadcn"
                  width={20}
                  height={20}
                />
              </div>
              <span className="text-xs font-medium">Shadcn</span>
            </div>
          </div>
          <div className="flex size-6 rounded-full border bg-foreground/10">
            <Plus className="m-auto size-3.5" strokeWidth={3} />
          </div>
        </div>
        <div className="flex gap-1">
          <span className="text-foreground/50">Cc:</span>
        </div>
        <div className="flex gap-1">
          <span className="text-foreground/50">Subject:</span>
        </div>
        <div className="flex gap-1">
          <span className="text-foreground/50">From:</span>
        </div>
      </div>
      <div className="mt-6 space-y-2 text-sm/6 text-muted-foreground">
        <p>
          Web applications with{" "}
          <span className="rounded bg-linear-to-r from-primary to-emerald-500 bg-clip-text px-0.5 text-transparent">
            React and TypeScript
          </span>{" "}
          using best practices.
        </p>
        <p className="mt-3">Sent from my iPhone</p>
      </div>
    </div>
  </div>
)

export default EmailIllustration
