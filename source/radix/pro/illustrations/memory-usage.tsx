export const MemoryUsageIllustration = () => (
  <div aria-hidden className="min-w-2xs space-y-2.5">
    <span className="block text-sm font-medium text-foreground">
      Memory Usage
    </span>
    <div className="flex justify-between text-sm">
      <span className="text-sm text-muted-foreground">56 GB / 128 GB</span>
      <span className="text-foreground">45%</span>
    </div>
    <div className="relative my-1.5 h-1.5 rounded-full bg-foreground/10 before:absolute before:inset-0 before:z-1 before:w-2/5 before:rounded-full before:bg-linear-to-r before:from-foreground before:to-indigo-400 after:absolute after:inset-0 after:w-2/5 after:bg-linear-to-r after:from-white after:to-indigo-400 after:opacity-50 after:blur-xs" />
  </div>
)

export default MemoryUsageIllustration
