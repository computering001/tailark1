import { cn } from "@/lib/utils"

export const FileUploadIllustration = () => {
  return (
    <div aria-hidden className={cn("relative w-full")}>
      <div
        className={cn(
          "bg-illustration ring-border-illustration group relative grid w-full grid-cols-[auto_1fr] gap-2.5 rounded-2xl border border-transparent p-4 text-xs shadow-lg ring-1 shadow-black/6.5 duration-300"
        )}
      >
        <div className="relative h-fit">
          <div className="absolute bottom-1.5 -left-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35">
            PDF
          </div>
          <div className="h-10 w-8 rounded-md border bg-linear-to-b from-gray-100 to-gray-200" />
        </div>
        <div className="mt-0.5">
          <div className="text-sm font-medium">react-visualizations.pdf</div>
          <div className="relative my-1.5 h-1 overflow-hidden rounded-full bg-muted before:absolute before:inset-0 before:w-1/3 before:rounded-r-full before:bg-primary before:transition-[width] before:delay-150 before:duration-300 group-hover:before:w-2/3" />
          <div className="text-xs text-muted-foreground">29 KB / 120KB</div>
        </div>
      </div>
    </div>
  )
}

export default FileUploadIllustration
