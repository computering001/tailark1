export const DocumentMdIllustration = () => {
  return (
    <div aria-hidden className="relative size-fit">
      <div className="absolute -right-3 bottom-2 z-2 rounded bg-slate-600 px-1.5 py-0.5 text-[10px] font-semibold text-white shadow-lg shadow-slate-900/25 text-shadow-sm after:absolute after:inset-0 after:rounded after:border after:border-foreground/15">
        MD
      </div>
      <div className="bg-illustration corner-tr-bevel ring-border-illustration relative z-1 w-16 space-y-2 rounded-md rounded-tr-[15%] p-2.5 shadow-md ring-1 shadow-black/6.5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-1">
            <div className="text-[6px] font-bold text-foreground/30">#</div>
            <div className="h-[3px] w-6 rounded-full bg-foreground/20" />
          </div>
          <div className="space-y-0.5 pl-0.5">
            <div className="h-0.5 w-full rounded-full bg-foreground/10" />
            <div className="h-0.5 w-9 rounded-full bg-foreground/10" />
            <div className="h-0.5 w-10 rounded-full bg-foreground/10" />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-1">
            <div className="text-[6px] font-bold text-foreground/30">##</div>
            <div className="h-[3px] w-5 rounded-full bg-foreground/15" />
          </div>
          <div className="space-y-0.5 pl-0.5">
            <div className="h-0.5 w-10 rounded-full bg-foreground/10" />
            <div className="h-0.5 w-7 rounded-full bg-foreground/10" />
          </div>
          <div className="space-y-0.5 pl-0.5">
            <div className="h-0.5 w-10 rounded-full bg-foreground/10" />
            <div className="h-0.5 w-7 rounded-full bg-foreground/10" />
            <div className="h-0.5 w-full rounded-full bg-foreground/10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentMdIllustration
