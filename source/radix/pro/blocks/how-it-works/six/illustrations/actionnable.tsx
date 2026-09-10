import { Button } from "@/components/ui/button"
import { Signature } from "lucide-react"
import { cn } from "@/lib/utils"

export const Actionnable = ({
  className,
}: {
  className?: string
}) => {
  return (
    <div
      aria-hidden
      className={cn(
        "relative mx-auto my-6 w-fit before:absolute before:inset-x-2 before:top-2 before:-bottom-2 before:rounded-2xl before:bg-card before:opacity-75 before:shadow before:ring-1 before:ring-border-illustration",
        className
      )}
    >
      <div className="relative flex gap-3 overflow-hidden rounded-2xl bg-illustration p-4 pr-8 shadow-md ring-1 inset-ring-1 shadow-black/6.5 ring-border-illustration inset-ring-background backdrop-blur">
        <div className="absolute inset-1 w-1/2 rounded-l-xl border border-emerald-400 bg-[linear-gradient(-45deg,var(--color-emerald-500)_25%,transparent_25%,transparent_50%,var(--color-emerald-500)_50%,var(--color-emerald-500)_75%,transparent_75%,transparent)] mask-r-from-25% bg-size-[5px_5px] opacity-10" />

        <div className="relative flex size-8 shrink-0 rounded-full border border-foreground/10 bg-illustration">
          <Signature className="m-auto size-4 text-emerald-600" />
        </div>

        <div className="relative text-left">
          <div className="mb-3 text-sm">
            <div className="font-medium text-foreground">
              Signature Approved!
            </div>
            <div className="line-clamp-1 text-xs text-muted-foreground">
              Generate reports and insights
            </div>
          </div>

          <Button size="sm" variant="outline" className="h-7" asChild>
            <div>View Report</div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Actionnable
