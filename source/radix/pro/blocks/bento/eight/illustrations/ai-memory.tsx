import { Clock, MessageSquare } from "lucide-react"

export const AiMemory = () => {
  return (
    <div aria-hidden className="min-w-xs">
      <div className="flex flex-col gap-4 perspective-dramatic">
        <div className="-rotate-4 rotate-x-5 rotate-z-6 mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top-left pt-1 pl-6">
          <div className="rounded-2xl bg-background/75 p-2 shadow-lg ring-1 shadow-black/6.5 ring-border-illustration">
            <div className="flex items-center gap-2 px-4 py-3">
              <div className="text-sm font-medium">AI Memory</div>
              <div className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                Active
              </div>
            </div>
            <div className="rounded-xl bg-card p-4 ring-1 ring-border-illustration">
              <div className="space-y-3">
                <div className="text-xs text-muted-foreground">
                  Context Window
                </div>

                <div className="relative h-3 overflow-hidden rounded-full bg-muted">
                  <div className="absolute inset-y-0 left-0 w-[30%] rounded-full bg-primary/40" />
                  <div className="absolute inset-y-0 left-[30%] w-[45%] rounded-full bg-primary" />
                  <div className="absolute inset-0 flex items-center justify-center text-[8px] font-medium text-white">
                    12K / 16K tokens
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="text-xs text-muted-foreground">
                  Remembered Context
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 rounded-lg bg-purple-500/10 p-2 ring-1 ring-purple-500/20">
                    <MessageSquare className="size-3.5 shrink-0 text-purple-600 dark:text-purple-400" />
                    <div className="flex-1 truncate text-[10px]">
                      User prefers dark mode UI
                    </div>
                    <Clock className="size-2.5 shrink-0 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">
                      2m
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg bg-blue-500/10 p-2 ring-1 ring-blue-500/20">
                    <MessageSquare className="size-3.5 shrink-0 text-blue-600 dark:text-blue-400" />
                    <div className="flex-1 truncate text-[10px]">
                      Working on a React project
                    </div>
                    <Clock className="size-2.5 shrink-0 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">
                      5m
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg bg-cyan-500/10 p-2 ring-1 ring-cyan-500/20">
                    <MessageSquare className="size-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <div className="flex-1 truncate text-[10px]">
                      Asked about authentication best practices
                    </div>
                    <Clock className="size-2.5 shrink-0 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">
                      8m
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs">
                <div className="text-muted-foreground">
                  3 conversations stored
                </div>
                <div className="text-primary hover:underline">
                  Clear
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiMemory
