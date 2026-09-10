import { Signature } from "lucide-react"

export const DocumentIllustration = () => {
  return (
    <div
      aria-hidden
      className="bg-illustration ring-border-illustration w-16 space-y-2 rounded-md p-2 shadow-md ring-1 shadow-black/6.5 [--color-border:color-mix(in_oklab,var(--color-foreground)15%,transparent)]"
    >
      <div className="flex items-center gap-1">
        <div className="size-2.5 rounded-full bg-border" />
        <div className="h-[3px] w-4 rounded-full bg-border" />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-1">
          <div className="h-[3px] w-2.5 rounded-full bg-border" />
          <div className="h-[3px] w-6 rounded-full bg-border" />
        </div>
        <div className="flex items-center gap-1">
          <div className="h-[3px] w-2.5 rounded-full bg-border" />
          <div className="h-[3px] w-6 rounded-full bg-border" />
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="h-[3px] w-full rounded-full bg-border" />
        <div className="flex items-center gap-1">
          <div className="h-[3px] w-2/3 rounded-full bg-border" />
          <div className="h-[3px] w-1/3 rounded-full bg-border" />
        </div>
      </div>

      <Signature className="ml-auto size-3" />
    </div>
  )
}

export default DocumentIllustration
