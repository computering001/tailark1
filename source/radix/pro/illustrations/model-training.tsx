import { TrendingUp } from "lucide-react"

export const ModelTrainingIllustration = () => {
  return (
    <div aria-hidden className="min-w-sm">
      <div className="flex flex-col gap-4 perspective-dramatic">
        <div className="-rotate-4 rotate-x-5 rotate-z-6 mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top-left pt-1 pl-6">
          <div className="ring-border-illustration rounded-t-2xl bg-background/75 px-2 pt-4 shadow-lg ring-1 shadow-black/6.5">
            <div className="mb-3 flex items-center gap-2.5 px-3 font-medium text-muted-foreground">
              Model training
            </div>

            <div className="ring-border-illustration flex flex-col gap-5 rounded-t-xl bg-card px-5 pt-5 shadow ring-1">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Training Progress
                    </span>
                    <span className="font-medium text-foreground">68%</span>
                  </div>
                  <div className="relative h-2 overflow-hidden rounded-full bg-muted">
                    <div className="absolute inset-y-0 left-0 w-[68%] rounded-full bg-primary"></div>
                    <div className="absolute inset-y-0 left-[68%] w-[5%] animate-pulse bg-primary/30"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="dark:bg-illustration rounded-lg border bg-muted/50 p-3">
                    <div className="text-xs text-muted-foreground">
                      Accuracy
                    </div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <div className="text-lg font-semibold text-foreground">
                        94.2%
                      </div>
                      <TrendingUp className="size-3 text-green-500" />
                    </div>
                  </div>
                  <div className="dark:bg-illustration rounded-lg border bg-muted/50 p-3">
                    <div className="text-xs text-muted-foreground">Loss</div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <div className="text-lg font-semibold text-foreground">
                        0.142
                      </div>
                      <div className="text-xs text-green-500">↓12%</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Epoch 34/50</span>
                    <span className="text-muted-foreground">~12 min left</span>
                  </div>
                  <div className="dark:bg-illustration flex h-16 items-end gap-0.5 rounded-lg border bg-muted/50 p-3">
                    <div className="h-2/5 w-full rounded-sm bg-primary/30"></div>
                    <div className="h-3/5 w-full rounded-sm bg-primary/40"></div>
                    <div className="h-4/5 w-full rounded-sm bg-primary/50"></div>
                    <div className="h-full w-full rounded-sm bg-primary/60"></div>
                    <div className="h-4/5 w-full rounded-sm bg-primary/70"></div>
                    <div className="h-full w-full animate-pulse rounded-sm bg-primary"></div>
                    <div className="h-2/5 w-full rounded-sm bg-border"></div>
                    <div className="h-1/5 w-full rounded-sm bg-border"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelTrainingIllustration
