import { Play } from "lucide-react"

export const TextToSpeechIllustration = () => {
  return (
    <div aria-hidden className="min-w-xs">
      <div className="ring-border-illustration rounded-2xl bg-card p-6 shadow-lg ring-1 shadow-black/6.5">
        <div className="text-sm font-medium">Text to Speech</div>

        <div className="ring-border-illustration mt-4 rounded-t-xl rounded-b bg-foreground/5 p-3 ring-1">
          <div className="text-xs leading-relaxed">
            <span className="text-muted-foreground">
              Welcome to our platform. We're excited to have you here.
            </span>{" "}
            <span className="font-medium text-foreground">
              Today we'll explore the key features
            </span>{" "}
            <span className="text-muted-foreground">
              that make our product unique and powerful.
            </span>
          </div>
        </div>

        <div className="ring-border-illustration mt-1 flex items-center gap-3 rounded-t rounded-b-xl bg-foreground/5 p-3 ring-1">
          <div className="relative flex size-7 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/20">
            <Play className="size-3 fill-white drop-shadow" />
          </div>

          <div className="flex flex-1 items-center justify-between gap-px">
            {Array.from({ length: 40 }).map((_, index) => {
              const heights = [
                3, 4, 3, 4, 7, 10, 7, 8, 6, 4, 7, 4, 8, 12, 3, 3, 4, 5, 10, 8,
                6, 11, 4, 9, 7, 5, 10, 8, 6, 12, 9, 5, 7, 4, 8, 11, 6, 2, 5, 4,
              ]
              return (
                <div
                  key={index}
                  data-played={index < 20}
                  style={{ height: `${heights[index % heights.length] * 2}px` }}
                  className="w-[3px] rounded-full bg-foreground/20 data-[played=true]:bg-primary"
                />
              )
            })}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs">
          <div className="text-muted-foreground">0:24 / 1:12</div>
          <div className="flex items-center gap-2">
            <div className="rounded bg-muted px-2 py-0.5 text-[10px]">0.5x</div>
            <div className="text-muted-foreground">Neural Voice</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextToSpeechIllustration
