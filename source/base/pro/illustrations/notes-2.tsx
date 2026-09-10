import { LassoSelect, NotepadText, Play, Target } from "lucide-react"

export const Notes2Illustration = () => {
  return (
    <div aria-hidden className="max-w-lg min-w-md mask-b-from-65% px-6 pt-1">
      <div className="bg-illustration ring-border-illustration relative z-1 rounded-2xl p-6 shadow-lg ring-1 shadow-black/6.5">
        <span className="text-xs text-muted-foreground">
          Today <span className="size-0.5 rounded-full bg-foreground/50"></span>{" "}
          <span>09:15 AM</span>{" "}
        </span>
        <div className="mt-1 text-lg font-semibold">
          Marketing Website Launch
        </div>

        <div className="group relative mt-3 mb-4 h-fit w-fit cursor-pointer overflow-hidden rounded-full bg-foreground/10 p-px shadow-md shadow-black/5">
          <div className="absolute inset-0 aspect-square -translate-y-1/3 animate-spin bg-linear-to-br/increasing from-emerald-400 via-blue-500 to-indigo-400 mask-r-from-25% mask-r-to-75% opacity-50 transition-opacity duration-2000"></div>
          <div className="group-hover:bg-illustration relative flex h-8 items-center gap-1.5 rounded-full bg-background/95 px-3 text-sm transition-colors duration-100">
            <Play className="size-3 fill-foreground *:not-first:opacity-50" />
            03:47
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-5 border-b *:-mb-px *:flex *:cursor-pointer *:items-center *:gap-1.5 *:py-2 *:text-sm *:not-first:text-foreground/50 *:[&>svg]:size-3.5">
            <div className="border-b border-primary">
              <Target />
              <span>Summary</span>
            </div>
            <div>
              <NotepadText />
              <span>Transcript</span>
            </div>
            <div>
              <LassoSelect />
              <span>Creations</span>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-muted-foreground">
              Key decisions from today's marketing sync:
            </p>
            <ul className="list-disc space-y-1.5 pl-4 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">
                  Launch date confirmed:
                </span>{" "}
                Monday, March 18th at 9 AM EST
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Hero section:
                </span>{" "}
                New animated product showcase with A/B testing enabled
              </li>
              <li>
                <span className="font-medium text-foreground">
                  SEO improvements:
                </span>{" "}
                Meta tags updated, sitemap regenerated, Core Web Vitals
                optimized
              </li>
            </ul>
            <p className="text-muted-foreground">
              Next steps: QA review by Friday, staging deployment Thursday EOD.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notes2Illustration
