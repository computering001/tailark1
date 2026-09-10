export const TokenCounterIllustration = () => {
  return (
    <div aria-hidden className="max-w-xs min-w-sm">
      <div className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top px-6 pt-1">
        <div className="ring-border-illustration rounded-t-2xl bg-background/75 px-2 pt-4 shadow-lg ring-1 shadow-black/6.5">
          <div className="mb-3 flex items-center gap-2.5 px-3 font-medium text-muted-foreground">
            Usage
          </div>

          <div className="bg-illustration ring-border-illustration flex flex-col gap-5 rounded-t-xl px-5 pt-5 shadow ring-1">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-base text-foreground">
                    User prompt tokens
                  </span>
                  <span className="font-medium text-foreground">43%</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Using a premium model costs one prompt credit per use.
                </div>
                <div className="relative mt-5">
                  <div className="relative h-2 overflow-hidden rounded-full bg-foreground/5">
                    <div className="absolute inset-y-0 left-0 w-[43%] rounded-full bg-linear-to-l from-primary to-emerald-500 before:absolute before:inset-0 before:rounded-full before:border before:border-white/20 before:mask-x-from-65%"></div>
                  </div>
                  <div className="absolute inset-y-0 left-0 w-[43%] rounded-full bg-linear-to-l from-white to-emerald-500 opacity-35 blur"></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    550 / 1,500 tokens
                  </span>
                  <span className="text-emerald-500">950 left</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg border bg-muted/50 p-2">
                  <div className="text-muted-foreground">Est. Cost</div>
                  <div className="mt-0.5 font-medium text-foreground">
                    $0.25
                  </div>
                </div>
                <div className="rounded-lg border bg-muted/50 p-2">
                  <div className="text-muted-foreground">Requests</div>
                  <div className="mt-0.5 font-medium text-foreground">48</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenCounterIllustration
