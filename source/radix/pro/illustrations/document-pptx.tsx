export const DocumentPptxIllustration = () => {
  return (
    <div aria-hidden className="relative size-fit">
      <div className="absolute -right-3 bottom-2 z-2 rounded bg-orange-500 px-1.5 py-0.5 text-[10px] font-semibold text-white shadow-lg shadow-orange-900/25 text-shadow-sm after:absolute after:inset-0 after:rounded after:border after:border-foreground/15">
        PPT
      </div>
      <div className="bg-illustration corner-tr-bevel ring-border-illustration relative z-1 w-16 space-y-4 rounded-md rounded-tr-[15%] p-2.5 shadow-md ring-1 shadow-black/6.5">
        <div className="space-y-1.5 rounded border bg-foreground/5 p-1.5">
          <div className="mx-auto h-[3px] w-8 rounded-full bg-foreground/15" />
          <div className="flex justify-center gap-1">
            <div className="size-3 rounded-sm bg-orange-400/40" />
            <div className="size-3 rounded-full bg-sky-400/40" />
          </div>
          <div className="space-y-0.5">
            <div className="mx-auto h-0.5 w-9 rounded-full bg-foreground/10" />
            <div className="mx-auto h-0.5 w-6 rounded-full bg-foreground/10" />
          </div>
        </div>
        <div className="flex justify-center gap-1">
          <div className="rounded-0.5 size-1.5 bg-foreground/20" />
          <div className="rounded-0.5 size-1.5 bg-foreground/10" />
          <div className="rounded-0.5 size-1.5 bg-foreground/10" />
        </div>
      </div>
    </div>
  )
}

export default DocumentPptxIllustration
