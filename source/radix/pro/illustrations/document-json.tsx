export const DocumentJsonIllustration = () => {
  return (
    <div aria-hidden className="relative size-fit">
      <div className="absolute -right-3 bottom-2 z-2 rounded bg-yellow-400 px-1.5 py-0.5 text-[10px] font-semibold text-black shadow-lg shadow-yellow-900/25 text-shadow-sm text-shadow-white/50 after:absolute after:inset-0 after:rounded after:border after:border-foreground/15">
        JSON
      </div>
      <div className="bg-illustration corner-tr-bevel ring-border-illustration relative z-1 w-16 space-y-1.5 rounded-md rounded-tr-[15%] p-2.5 shadow-md ring-1 shadow-black/6.5">
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <div className="font-mono text-[6px] text-foreground/40">{"{"}</div>
          </div>
          <div className="flex items-center gap-1 pl-1.5">
            <div className="h-[3px] w-3 rounded-full bg-sky-400/60" />
            <div className="text-[5px] text-foreground/30">:</div>
            <div className="h-[3px] w-4 rounded-full bg-emerald-400/60" />
          </div>
          <div className="flex items-center gap-1 pl-1.5">
            <div className="h-[3px] w-4 rounded-full bg-sky-400/60" />
            <div className="text-[5px] text-foreground/30">:</div>
            <div className="h-[3px] w-2 rounded-full bg-amber-400/60" />
          </div>
          <div className="flex items-center gap-1 pl-1.5">
            <div className="h-[3px] w-2.5 rounded-full bg-sky-400/60" />
            <div className="text-[5px] text-foreground/30">:</div>
            <div className="h-[3px] w-5 rounded-full bg-violet-400/60" />
          </div>
          <div className="flex items-center gap-1 pl-1.5">
            <div className="h-[3px] w-3.5 rounded-full bg-sky-400/60" />
            <div className="text-[5px] text-foreground/30">:</div>
            <div className="h-[3px] w-3 rounded-full bg-rose-400/60" />
          </div>
          <div className="flex items-center gap-1">
            <div className="font-mono text-[6px] text-foreground/40">{"}"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentJsonIllustration
