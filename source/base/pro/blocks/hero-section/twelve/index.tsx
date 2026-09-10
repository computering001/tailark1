import { Button } from "@/components/ui/button"
import HeroHeader from "@/components/header"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Meet } from "@/components/illustrations/meet"

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="relative pt-24 pb-24 md:pt-36 lg:pt-44">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-1 h-[calc(100%-12rem)] overflow-hidden rounded-3xl border bg-background before:absolute before:inset-0 not-dark:before:bg-indigo-500/2.5"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-1 z-0 h-[calc(100%-12rem)] rounded-3xl mask-radial-[75%_75%] mask-radial-from-60% mask-radial-at-bottom"
              style={{
                backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 1px, rgba(75, 85, 99, 0.06) 1px, rgba(75, 85, 99, 0.06) 2px, transparent 2px, transparent 4px),
        repeating-linear-gradient(67.5deg, transparent, transparent 1px, rgba(107, 114, 128, 0.05) 1px, rgba(107, 114, 128, 0.05) 2px, transparent 2px, transparent 4px),
        repeating-linear-gradient(112.5deg, transparent, transparent 1px, rgba(55, 65, 81, 0.04) 1px, rgba(55, 65, 81, 0.04) 2px, transparent 2px, transparent 4px),
        repeating-linear-gradient(157.5deg, transparent, transparent 1px, rgba(31, 41, 55, 0.03) 1px, rgba(31, 41, 55, 0.03) 2px, transparent 2px, transparent 4px)
      `,
              }}
            />

            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div>
                <div className="mb-16 max-w-3xl">
                  <h1 className="text-5xl font-semibold text-balance md:text-6xl lg:text-6xl lg:tracking-tight tracking-tight">
                    AI-Powered Meeting Assistant
                  </h1>
                  <p className="mt-4 mb-8 text-lg text-balance text-muted-foreground">
                    Enhance your productivity with our AI-driven meeting app
                    that schedules, transcribes, and provides actionable
                    insights for every meeting.
                  </p>

                  <form className="w-full space-y-4 md:max-w-sm">
                    <Label className="sr-only block" htmlFor="email">
                      Subscribe to our newsletter
                    </Label>
                    <div className="grid grid-cols-[1fr_auto] gap-2">
                      <Input
                        className="border-transparent bg-background shadow ring-1 ring-foreground/10"
                        placeholder="Your email"
                        type="email"
                        id="email"
                        required
                        name="email"
                      />
                      <Button type="submit" className="shadow">
                        <span>Start Now</span>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Get the latest product news and behind the scenes updates.
                      Unsubscribe at any time.
                    </p>
                  </form>
                </div>
                <Meet />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
