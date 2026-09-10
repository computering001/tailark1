export const DocumentHtmlIllustration = () => {
  return (
    <div aria-hidden className="relative size-fit">
      <div className="absolute -right-3 bottom-2 z-2 rounded bg-violet-500 px-1.5 py-0.5 text-[10px] font-semibold text-white shadow-lg shadow-violet-900/25 text-shadow-sm after:absolute after:inset-0 after:rounded after:border after:border-foreground/15">
        HTML
      </div>
      <div className="bg-illustration corner-tr-bevel ring-border-illustration relative z-1 w-16 space-y-1 rounded-md rounded-tr-[15%] p-2.5 shadow-md ring-1 shadow-black/6.5">
        <div className="space-y-1">
          <div className="flex items-center gap-0.5">
            <div className="font-mono text-[5px] text-foreground/30">&lt;</div>
            <div className="h-[3px] w-3 rounded-full bg-rose-400/60" />
            <div className="font-mono text-[5px] text-foreground/30">&gt;</div>
          </div>
          <div className="flex items-center gap-0.5 pl-1.5">
            <div className="font-mono text-[5px] text-foreground/30">&lt;</div>
            <div className="h-[3px] w-2.5 rounded-full bg-sky-400/60" />
            <div className="font-mono text-[5px] text-foreground/30">&gt;</div>
          </div>
          <div className="pl-3">
            <div className="h-[2px] w-6 rounded-full bg-foreground/10" />
          </div>
          <div className="flex items-center gap-0.5 pl-1.5">
            <div className="font-mono text-[5px] text-foreground/30">&lt;/</div>
            <div className="h-[3px] w-2.5 rounded-full bg-sky-400/60" />
            <div className="font-mono text-[5px] text-foreground/30">&gt;</div>
          </div>
          <div className="flex items-center gap-0.5 pl-1.5">
            <div className="font-mono text-[5px] text-foreground/30">&lt;</div>
            <div className="h-[3px] w-2 rounded-full bg-emerald-400/60" />
            <div className="font-mono text-[5px] text-foreground/30">/&gt;</div>
          </div>
          <div className="flex items-center gap-0.5 pl-1.5">
            <div className="font-mono text-[5px] text-foreground/30">&lt;</div>
            <div className="h-[3px] w-2 rounded-full bg-emerald-400/60" />
            <div className="font-mono text-[5px] text-foreground/30">/&gt;</div>
          </div>
          <div className="flex items-center gap-0.5">
            <div className="font-mono text-[5px] text-foreground/30">&lt;/</div>
            <div className="h-[3px] w-3 rounded-full bg-rose-400/60" />
            <div className="font-mono text-[5px] text-foreground/30">&gt;</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentHtmlIllustration
