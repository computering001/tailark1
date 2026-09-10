import { cn } from "@/lib/utils"

export const DocumentAnalysisIllustration = () => {
  return (
    <div
      aria-hidden
      className="relative isolate rounded border bg-foreground/3 p-2"
    >
      <CardDecorator className="opacity-50" />
      <div className="animate-scan absolute inset-x-4 inset-y-6 z-10 mix-blend-color">
        <div className="animate-hue-rotate absolute inset-x-[-9px] m-auto h-8.5 -translate-y-1/2 rounded-md bg-linear-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="animate-scan absolute inset-x-4 inset-y-6 z-10">
        <div className="absolute -inset-x-4 m-auto h-px rounded-full bg-foreground" />
        <div className="absolute -inset-x-4 m-auto h-px rounded-full bg-linear-to-r from-emerald-500 to-primary blur" />
      </div>
      <div
        aria-hidden
        className="ring-border-illustration w-20 space-y-2 rounded-md bg-card p-3 shadow-lg ring-1 shadow-black/6.5"
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

        <div className="mt-3 space-y-1.5">
          <div className="flex items-center gap-1">
            <div className="h-[3px] w-2/3 rounded-full bg-border" />
            <div className="h-[3px] w-1/3 rounded-full bg-border" />
            <div className="h-[3px] w-1/3 rounded-full bg-border" />
          </div>

          <div className="h-[3px] w-full rounded-full bg-border" />
          <div className="flex items-center gap-1">
            <div className="h-[3px] w-2/3 rounded-full bg-border" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const CardDecorator = ({ className }: { className?: string }) => (
  <>
    <span
      className={cn(
        "absolute -top-px -left-px block size-2 rounded-tl border-t border-l border-foreground",
        className
      )}
    ></span>
    <span
      className={cn(
        "absolute -top-px -right-px block size-2 rounded-tr border-t border-r border-foreground",
        className
      )}
    ></span>
    <span
      className={cn(
        "absolute -bottom-px -left-px block size-2 rounded-bl border-b border-l border-foreground",
        className
      )}
    ></span>
    <span
      className={cn(
        "absolute -right-px -bottom-px block size-2 rounded-br border-r border-b border-foreground",
        className
      )}
    ></span>
  </>
)

export default DocumentAnalysisIllustration
