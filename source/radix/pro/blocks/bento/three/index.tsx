import { Card } from "@/components/ui/card"
import { VSCodium } from "@/components/ui/svgs/vs-codium"
import { Replit } from "@/components/ui/svgs/replit"
import { GooglePaLM } from "@/components/ui/svgs/google-palm"
import { Scan } from "@/components/illustrations/scan"
import { Visualization } from "@/components/illustrations/visualization"
import { Campaign } from "@/components/illustrations/campaign"
import { Linear } from "@/components/ui/svgs/linear"
import { OpenAI } from "@/components/ui/svgs/open-ai"
import { Cloudflare } from "@/components/ui/svgs/cloudflare"

export default function Bento3() {
  return (
    <section className="@container bg-background py-24">
      <h2 className="sr-only">Features</h2>
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-3 @xl:grid-cols-2 @3xl:grid-cols-6">
          <Card className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8 @3xl:col-span-2">
            <div>
              <h3 className="font-semibold text-foreground">
                Collaborative Analysis
              </h3>
              <p className="mt-3 text-balance text-muted-foreground">
                Add comments, share insights, and work together with your team
                to extract maximum.
              </p>
            </div>

            <div className="relative -m-8 flex flex-wrap items-center justify-between gap-1 from-transparent via-rose-50 to-amber-50 p-8">
              <Scan />
            </div>
          </Card>
          <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8 @3xl:col-span-4">
            <div>
              <h3 className="font-semibold text-foreground">
                Collaborative Analysis
              </h3>
              <p className="mt-3 text-balance text-muted-foreground">
                Add comments, share insights, and work together with your team
                to extract maximum.
              </p>
            </div>
            <Visualization />
          </Card>
          <Card className="grid grid-rows-[auto_1fr] space-y-8 overflow-hidden rounded-2xl p-8 @xl:col-span-full @3xl:col-span-3">
            <div>
              <h3 className="font-semibold text-foreground">
                Scheduled Reports
              </h3>
              <p className="mt-3 text-balance text-muted-foreground">
                Automate report delivery to stakeholders with customizable
                scheduling options.
              </p>
            </div>
            <Campaign />
          </Card>
          <Card className="grid grid-rows-[auto_1fr] space-y-8 overflow-hidden rounded-2xl p-8 @xl:col-span-full @3xl:col-span-3">
            <div>
              <h3 className="font-semibold text-foreground">
                Seamless Integration
              </h3>
              <p className="mt-3 text-balance text-muted-foreground">
                Add comments, share insights, and work together with your team
                to extract maximum.
              </p>
            </div>
            <div
              aria-hidden
              className="relative -m-8 flex flex-col justify-center border-x border-background bg-linear-to-b from-transparent via-orange-400/5 to-zinc-400/5 p-8"
            >
              <Stripes />
              <Integrations />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

const Stripes = () => (
  <div
    aria-hidden
    className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,black,black_1px,transparent_1px,transparent_6px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] mix-blend-overlay"
  />
)

const Integrations = () => (
  <>
    <div className="relative grid grid-cols-3 gap-4 @md:grid-cols-6">
      <div className="hidden aspect-square rounded-(--radius) border border-dashed border-foreground/15 bg-card/50 backdrop-blur-3xl @md:block"></div>
      <div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration p-4 shadow-md ring-1 shadow-black/6.5 ring-border-illustration">
        <VSCodium className="size-6" />
      </div>
      <div className="hidden aspect-square rounded-(--radius) border border-dashed border-foreground/15 bg-card/50 backdrop-blur-3xl @md:block"></div>
      <div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration p-4 shadow-md ring-1 shadow-black/6.5 ring-border-illustration">
        <Replit className="size-6" />
      </div>
      <div className="hidden aspect-square rounded-(--radius) border border-dashed border-foreground/15 bg-card/50 backdrop-blur-3xl @md:block"></div>
      <div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration p-4 shadow-md ring-1 shadow-black/6.5 ring-border-illustration">
        <GooglePaLM className="size-6" />
      </div>
    </div>
    <div className="relative mt-4 grid grid-cols-3 gap-4 @md:grid-cols-6">
      <div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration shadow-md ring-1 shadow-black/6.5 ring-border-illustration">
        <Linear className="size-6" />
      </div>
      <div className="hidden aspect-square rounded-(--radius) border border-dashed border-foreground/15 bg-card/50 backdrop-blur-3xl @md:block"></div>

      <div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration shadow-md ring-1 shadow-black/6.5 ring-border-illustration">
        <OpenAI className="size-6" />
      </div>
      <div className="hidden aspect-square rounded-(--radius) border border-dashed border-foreground/15 bg-card/50 backdrop-blur-3xl @md:block"></div>
      <div className="flex aspect-square items-center justify-center rounded-(--radius) bg-illustration shadow-md ring-1 shadow-black/6.5 ring-border-illustration">
        <Cloudflare className="size-6" />
      </div>
      <div className="hidden aspect-square rounded-(--radius) border border-dashed border-foreground/15 bg-card/50 backdrop-blur-3xl @md:block"></div>
    </div>
  </>
)
