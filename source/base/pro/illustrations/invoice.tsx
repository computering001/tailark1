import { cn } from "@/lib/utils"
import { LogoIcon } from "@/components/ui/logo"
import { Signature } from "lucide-react"

export const InvoiceIllustration = ({ className }: { className?: string }) => {
  return (
    <div aria-hidden className="relative">
      <div
        className={cn(
          "after:ring-border-illustration before:ring-border-illustration group relative -mx-4 mask-b-from-65% px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border-border before:bg-card before:ring-1 before:backdrop-blur after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:bg-card/75 after:ring-1",
          className
        )}
      >
        <div className="ring-border-illustration relative z-10 overflow-hidden rounded-2xl border border-transparent bg-card p-8 text-sm shadow-xl ring-1 shadow-black/6.5">
          <div className="mb-6 flex items-start justify-between gap-8">
            <div className="space-y-0.5">
              <LogoIcon />
              <div className="mt-4 font-mono text-xs">INV-456789</div>
              <div className="mt-1 -translate-x-1 font-mono text-2xl font-semibold">
                $284,342.57
              </div>
              <div className="text-xs font-medium">Due in 15 days</div>
            </div>

            <DocumentIllustration />
          </div>

          <div className="space-y-1.5 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)]">
            <div className="grid grid-cols-[auto_1fr] items-center">
              <span className="block w-18 text-muted-foreground">To</span>
              <span className="h-2 w-1/4 rounded-full bg-border px-2"></span>
            </div>

            <div className="grid grid-cols-[auto_1fr] items-center">
              <span className="block w-18 text-muted-foreground">From</span>
              <span className="h-2 w-1/2 rounded-full bg-border px-2"></span>
            </div>

            <div className="grid grid-cols-[auto_1fr] items-center">
              <span className="block w-18 text-muted-foreground">Address</span>
              <span className="h-2 w-2/3 rounded-full bg-border px-2"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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

export default InvoiceIllustration
