import { LogoIcon } from "@/components/ui/logo"
import { cn } from "@/lib/utils"

export const InvoiceSigningIllustration = ({
  className,
}: {
  className?: string
}) => {
  return (
    <div aria-hidden className={cn("mask-b-from-65% px-4 pt-4", className)}>
      <div className="ring-border-illustration relative min-w-xs overflow-hidden rounded-2xl bg-card p-8 text-sm shadow-lg ring-1 shadow-black/6.5">
        <div className="space-y-0.5">
          <LogoIcon />
          <div className="mt-4 font-mono text-xs">INV-456789</div>
          <div className="mt-1 -translate-x-1 font-mono text-2xl font-semibold">
            $284,342.57
          </div>
          <div className="text-xs font-medium">Due in 15 days</div>
        </div>

        <div className="my-6 flex h-24 items-center justify-center rounded-md border border-dashed border-foreground/15 bg-foreground/5">
          <div className="border-b px-6 font-serif">Sign here</div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceSigningIllustration
