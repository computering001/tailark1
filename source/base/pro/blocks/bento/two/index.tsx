import { Currency } from "@/components/illustrations/currency"
import { Reply } from "@/components/illustrations/reply"
import { Notification } from "@/components/illustrations/notification"
import { Card } from "@/components/ui/card"
import { Map } from "@/components/illustrations/map"
import { Visualization } from "@/components/illustrations/visualization"

export default function FeaturesSection12() {
  return (
    <section className="@container bg-background py-24">
      <h2 className="sr-only">Features</h2>
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-3 not-dark:*:bg-card/50 @xl:grid-cols-2 @3xl:grid-cols-6">
          <Card className="grid grid-rows-[1fr_auto] gap-y-12 overflow-hidden rounded-2xl p-8 @3xl:col-span-2">
            <div className="relative -m-8 p-8">
              <Stripes />
              <Notification variant="mixed" className="*:rounded-2xl!" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Scheduled Reports
              </h3>
              <p className="mt-3 text-muted-foreground">
                Automate report delivery to stakeholders with customizable
                scheduling options.
              </p>
            </div>
          </Card>
          <Card className="grid grid-rows-[1fr_auto] gap-y-12 overflow-hidden rounded-2xl p-8 @3xl:col-span-2">
            <div className="relative -m-8 p-8">
              <Stripes />
              <Currency />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Collaborative Analysis
              </h3>
              <p className="mt-3 text-muted-foreground">
                Add comments, share insights, and work together with your team
                to extract maximum.
              </p>
            </div>
          </Card>
          <Card className="grid grid-rows-[1fr_auto] gap-y-12 overflow-hidden rounded-2xl p-8 @xl:col-span-2">
            <div className="relative -m-8 p-8">
              <Stripes />
              <Reply className="relative mt-0 w-full" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Collaborative Analysis
              </h3>
              <p className="mt-3 text-muted-foreground">
                Add comments, share insights, and work together with your team
                to extract maximum.
              </p>
            </div>
          </Card>
          <Card className="grid grid-rows-[1fr_auto] gap-8 rounded-2xl p-8 @xl:col-span-2 @3xl:col-span-3">
            <div className="-m-8 p-8">
              <Visualization />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Interactive Dashboards
              </h3>
              <p className="mt-3 text-muted-foreground">
                Create custom dashboards with drag-and-drop simplicity. Combine
                multiple visualization types to get a complete view of your data
                story.
              </p>
            </div>
          </Card>
          <Card className="grid grid-rows-[1fr_auto] gap-8 rounded-2xl p-8 @xl:col-span-2 @3xl:col-span-3">
            <div className="relative -mx-8 mask-[radial-gradient(ellipse_50%_45%_at_50%_50%,#000_70%,transparent_100%)] [--color-background:transparent]">
              <Map />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Scheduled Reports
              </h3>
              <p className="mt-3 text-muted-foreground">
                Create custom dashboards with drag-and-drop simplicity. Combine
                multiple visualization types to get a complete view of your data
                story.
              </p>
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
    className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_6px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-3"
  />
)
