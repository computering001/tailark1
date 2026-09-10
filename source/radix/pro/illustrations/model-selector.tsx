import { Check, ChevronDown } from "lucide-react"
import { Claude } from "@/components/ui/svgs/claude"
import { Openai } from "@/components/ui/svgs/openai"
import { Gemini } from "@/components/ui/svgs/gemini"

export const ModelSelectorIllustration = () => {
  return (
    <div aria-hidden className="min-w-sm mask-b-from-65% px-4 pt-1">
      <div className="ring-border-illustration rounded-t-2xl bg-card/75 p-2 shadow-lg ring-1 shadow-black/6.5">
        <div className="px-3 py-2 text-sm font-medium">Select AI Model</div>

        <div className="ring-border-illustration space-y-3 rounded-2xl bg-background p-3 ring-1">
          <div className="bg-illustration group cursor-pointer rounded-lg p-3 shadow-md ring-1 shadow-primary/10 ring-primary/40 transition-shadow">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Openai className="size-4 fill-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="text-sm font-semibold">GPT-4 Turbo</div>
                  <div className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                    Recommended
                  </div>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Most capable, best for complex tasks
                </div>
              </div>
              <Check className="size-4 shrink-0 text-primary" />
            </div>
          </div>

          <div className="hover:ring-border-illustration/80 bg-illustration ring-border-illustration group cursor-pointer rounded-lg p-3 ring-1 transition-colors hover:bg-foreground/5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Claude className="size-4" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">Claude 4.5 Sonnet</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Balanced performance and speed
                </div>
              </div>
            </div>
          </div>

          <div className="hover:ring-border-illustration/80 bg-illustration ring-border-illustration group cursor-pointer rounded-lg p-3 ring-1 transition-colors hover:bg-foreground/5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Gemini className="size-4" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">Gemini 2.0 Flash</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Balanced performance and speed
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex w-full items-center justify-between rounded-lg border border-border px-3 py-2 text-xs transition-colors hover:bg-muted">
          <span>View all models</span>
          <ChevronDown className="size-3" />
        </div>
      </div>
    </div>
  )
}

export default ModelSelectorIllustration
