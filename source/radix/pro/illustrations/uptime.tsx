export const UptimeIllustration = () => (
  <div
    aria-hidden
    className="bg-illustration ring-border-illustration min-w-2xs space-y-2.5 rounded-2xl border border-transparent p-4 shadow ring-1 shadow-black/6.5"
  >
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">Uptime</span>
      <span className="text-foreground">99.9%</span>
    </div>
    <div className="flex justify-between gap-px mask-x-from-55%">
      {Array.from({ length: 40 }).map((_, index) => (
        <div
          key={index}
          className="h-7 w-0.5 bg-emerald-500 nth-10:bg-muted-foreground nth-11:bg-muted-foreground nth-22:bg-muted-foreground nth-23:bg-muted-foreground nth-24:bg-muted-foreground nth-32:bg-muted-foreground"
        ></div>
      ))}
    </div>
  </div>
)

export default UptimeIllustration
