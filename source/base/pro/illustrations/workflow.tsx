import { Linear } from "@/components/ui/svgs/linear"
import { Vercel } from "@/components/ui/svgs/vercel"
import { CheckCircle2, GitBranch } from "lucide-react"

export const WorkflowIllustration = () => {
  return (
    <div aria-hidden className="min-w-2xs">
      <div>
        <div className="bg-illustration ring-border-illustration flex items-center gap-2 rounded-xl p-3 shadow-md ring-1 shadow-black/6.5">
          <CheckCircle2 className="size-4 fill-emerald-500/15 text-emerald-500" />
          <span className="text-sm font-medium text-foreground">
            Workflow completed
          </span>
        </div>
        <div className="relative space-y-4 pt-6 pl-6">
          <div className="absolute top-0 bottom-8 left-6 border-l border-dashed border-foreground/15"></div>
          <div className="relative pl-6">
            <div className="absolute top-0 bottom-1/2 left-0 w-6 rounded-bl-full border-b border-l border-dashed border-foreground/15"></div>
            <div className="ring-border-illustration flex items-center gap-2 rounded-xl bg-card p-3 shadow ring-1">
              <Linear className="size-3.5" />
              <span className="text-xs font-medium text-muted-foreground">
                Issue created{" "}
                <span className="pl-0.5 text-xs text-foreground/50">
                  12s ago
                </span>
              </span>
            </div>
          </div>

          <div className="relative pl-6">
            <div className="absolute top-0 bottom-1/2 left-0 w-6 rounded-bl-full border-b border-l border-dashed border-foreground/15"></div>
            <div className="ring-border-illustration flex items-center gap-2 rounded-xl bg-card p-3 shadow ring-1">
              <GitBranch className="size-3.5" />
              <span className="text-xs font-medium text-muted-foreground">
                Branch created{" "}
                <span className="pl-0.5 text-xs text-foreground/50">
                  3s ago
                </span>
              </span>
            </div>
          </div>

          <div className="relative pl-6">
            <div className="absolute top-0 bottom-1/2 left-0 w-6 rounded-bl-full border-b border-l border-dashed border-foreground/15"></div>
            <div className="ring-border-illustration flex items-center gap-2 rounded-xl bg-card p-3 shadow ring-1">
              <Vercel className="size-3.5 fill-foreground" />
              <span className="text-xs font-medium text-muted-foreground">
                Preview deployed{" "}
                <span className="pl-0.5 text-xs text-foreground/50">now</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkflowIllustration
