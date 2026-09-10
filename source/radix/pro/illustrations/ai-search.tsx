import { Search, Sparkles } from "lucide-react"
import { Pdf } from "@/components/ui/svgs/pdf"
import { Figma } from "@/components/ui/svgs/figma"

type Result = {
  title: string
  content: string
  filename: string
  fileIcon: React.ReactNode
}

const results: Result[] = [
  {
    title: "Tips and React Hooks Guide",
    content:
      "Complete guide to useState, useEffect, and custom hooks with performance tips...",
    filename: "hooks-guide.pdf",
    fileIcon: <Pdf />,
  },
  {
    title: "Tailark Quartz Design system",
    content:
      "Comprehensive design system documentation with components, tokens, and guidelines...",
    filename: "tailark-ds.fig",
    fileIcon: <Figma />,
  },
]

export const AiSearchIllustration = () => {
  return (
    <div aria-hidden className="relative max-w-lg min-w-sm">
      <div className="flex flex-col gap-4 perspective-dramatic">
        <div className="-rotate-4 rotate-x-2 rotate-z-6 space-y-3 mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top-left pt-1 pl-6">
          <div className="ring-border-illustration flex items-center gap-2 rounded-xl py-2.5 pr-2.5 pl-4 ring-1">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <span className="flex-1 text-xs">React hooks best practices</span>
            <div className="flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 ring-1 ring-primary/20">
              <Sparkles className="size-3 text-primary" />
              <span className="text-xs text-primary">AI</span>
            </div>
          </div>
          <div className="ring-border-illustration rounded-2xl bg-card/75 p-1 shadow-lg ring-1 shadow-black/6.5">
            <div className="space-y-1">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="first:bg-illustration flex cursor-pointer gap-3 rounded-xl p-4 select-none first:shadow first:ring-1 first:shadow-black/5 first:ring-emerald-500/50 not-first:hover:bg-foreground/5"
                >
                  <div className="*:size-6">{result.fileIcon}</div>

                  <div className="flex-1 space-y-1">
                    <div className="font-medium">{result.title}</div>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {result.content}
                    </span>
                    <span className="mt-2 block text-xs text-foreground">
                      Found in{" "}
                      <span className="text-muted-foreground">
                        {" "}
                        {result.filename}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiSearchIllustration
