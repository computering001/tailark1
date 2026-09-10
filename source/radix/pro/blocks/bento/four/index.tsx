import { Card } from "@/components/ui/card"
import { ArrowBigRight, Equal } from "lucide-react"
import { Reply } from "@/components/illustrations/reply"
import { IDCheck } from "@/components/illustrations/id-check"
import { Keys } from "@/components/illustrations/keys"
import { Document } from "@/components/illustrations/document"
import { CardDecorator } from "./card-decorator"

export default function BentoFour() {
  return (
    <section className="@container bg-background py-24">
      <h2 className="sr-only">Quartz Bento Four</h2>

      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-3 @xl:grid-cols-2 @4xl:grid-cols-3">
          <Card className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
            <div className="relative flex flex-wrap items-center justify-between gap-1 from-transparent via-blue-50 to-indigo-50">
              <div className="mx-auto size-2/3">
                <SecurityShieldIsoIcon />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Smart Lighting Control
              </h3>
              <p className="mt-3 text-muted-foreground">
                Automate your home lighting with customizable schedules.
              </p>
            </div>
          </Card>
          <Card className="group grid grid-rows-[1fr_auto] gap-8 overflow-hidden rounded-2xl p-8">
            <Keys />
            <div>
              <h3 className="font-semibold text-foreground">
                Smart Lighting Control
              </h3>
              <p className="mt-3 text-muted-foreground">
                Automate your home lighting with customizable schedules.
              </p>
            </div>
          </Card>
          <Card className="grid grid-rows-[1fr_auto] gap-8 overflow-hidden rounded-2xl p-8">
            <div className="relative -m-8 flex aspect-video items-center bg-linear-to-b p-8 [--color-background:var(--color-muted)] @xl:aspect-auto">
              <div className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,white,white_1px,transparent_1px,transparent_6px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 mix-blend-overlay"></div>
              <Reply className="relative mt-0 w-full" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Collaborative Analysis
              </h3>
              <p className="mt-3 text-muted-foreground">
                Add comments, share insights, and work together with your team.
              </p>
            </div>
          </Card>

          <Card className="grid grid-rows-[1fr_auto] gap-8 rounded-2xl p-8 [--color-background:var(--color-muted)] @xl:col-span-2">
            <div className="relative flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-size-[16px_16px] opacity-10" />

              <div className="flex aspect-video flex-col items-center gap-12 @lg:flex-row @4xl:aspect-auto">
                <div className="relative">
                  <div className="relative mx-auto size-fit bg-foreground/5 p-2">
                    <CardDecorator className="size-2" />
                    <Document />
                  </div>
                  <ArrowBigRight
                    strokeWidth={4}
                    className="absolute bottom-0 translate-x-[125%] translate-y-[200%] rotate-90 fill-illustration stroke-transparent drop-shadow @lg:inset-y-0 @lg:right-0 @lg:my-auto @lg:translate-x-[150%] @lg:rotate-0 @xl:translate-y-0 dark:fill-foreground/25"
                  />
                </div>

                <div className="relative">
                  <IDCheck />
                  <Equal
                    strokeWidth={4}
                    className="absolute inset-x-0 bottom-0 mx-auto translate-y-[150%] fill-illustration stroke-illustration drop-shadow @lg:inset-x-auto @lg:inset-y-0 @lg:right-0 @lg:my-auto @lg:translate-x-[150%] @xl:translate-y-0 dark:fill-foreground/25 dark:stroke-foreground/25"
                  />
                </div>
                <div className="relative mx-auto flex size-fit -space-x-6">
                  <Document className="translate-y-1 -rotate-12" />
                  <Document className="relative z-11" />
                  <Document className="translate-y-1 rotate-12" />
                </div>
              </div>
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
          <div className="grid grid-rows-[1fr_auto] space-y-4 @xl:row-start-2 @xl:space-y-0 @4xl:row-start-auto @4xl:space-y-4">
            <Card className="group grid grid-rows-[1fr_auto] gap-8 overflow-hidden rounded-2xl p-8">
              <div className="relative flex flex-wrap items-center justify-between gap-1 from-transparent via-blue-50 to-indigo-50">
                <div className="mx-auto size-2/3">
                  <LeaderBoardIsoIcon />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Smart Lighting Control
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Automate your home lighting with customizable schedules.
                </p>
              </div>
            </Card>
            <Card className="group space-y-4 overflow-hidden rounded-2xl p-8 text-center @xl:hidden @4xl:block">
              <span className="block bg-linear-to-r from-foreground to-primary bg-clip-text text-5xl font-bold text-transparent tracking-tight">
                65%
              </span>
              <div>
                <p className="font-semibold text-foreground">
                  Faster Integration
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

const SecurityShieldIsoIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 122 92"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="0.5px"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-full fill-foreground/2 text-foreground/15"
    >
      <path
        d="M119.19 42.64V62.64L92.94 77.79C82.04 84.08 68.86 87.92 53.4 89.31C37.94 90.69 23.94 89.21 11.4 84.87V64.87C23.94 69.21 37.94 70.69 53.4 69.31C59.84 68.73 65.89 67.73 71.54 66.29C75.69 65.24 79.63 63.96 83.36 62.44C86.73 61.08 89.92 59.53 92.94 57.79L108.33 48.91L119.19 42.64Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M97.46 15.18L49.91 2.64L23.66 17.79C12.76 24.08 6.11 31.69 3.71 40.62C3.13 42.78 2.84 44.89 2.84 46.95C2.84 50.29 3.6 53.5 5.13 56.57C6.55 59.45 8.64 62.22 11.4 64.87C23.94 69.21 37.94 70.69 53.4 69.31C59.84 68.73 65.89 67.73 71.54 66.29C75.69 65.24 79.63 63.96 83.36 62.44C86.73 61.08 89.92 59.53 92.94 57.79L108.33 48.91L119.19 42.64L97.46 15.18ZM46.87 46.24L34.6 46.22L34.52 31.52V28.65L39.48 28.66H46.81L46.87 39.14L83.34 39.21L83.38 46.31L46.87 46.24Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M46.87 39.14V46.24L34.6 46.22L34.52 31.52L34.51 28.65L39.48 28.66L46.81 28.67L46.87 39.14Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M83.38 46.31L46.87 46.24V39.14L83.34 39.21L83.38 46.31Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M11.4 64.87V84.87C5.69 79.38 2.84 73.41 2.84 66.95V46.95C2.84 50.29 3.6 53.5 5.13 56.57C6.55 59.45 8.64 62.22 11.4 64.87Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M2.84 67.26V66.95"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const LeaderBoardIsoIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 126 98"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="0.5px"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-full fill-foreground/2 text-foreground/15"
    >
      <path
        d="M52.99 58.57V78.57L31.17 65.97V45.97L41.56 51.97L48.49 55.97L52.99 58.57Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M121.17 52.42L103.85 62.42L81.75 75.17L77.26 72.58L70.31 68.57L59.93 62.58L99.35 39.82L109.73 45.81L121.17 52.42Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M71.53 14.66L54.22 24.66L24.23 41.97L19.73 39.37L2.42 29.37L49.72 2.06L71.53 14.66Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M123.94 17.61L106.62 27.61L52.99 58.57L48.49 55.97L41.56 51.97L31.17 45.97L61.15 28.66L71.53 22.67L102.13 5.01L123.94 17.61Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M123.94 17.61V37.61L109.73 45.81L99.35 39.82L59.93 62.58V74.56L52.99 78.57V58.57L106.62 27.61L123.94 17.61Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M121.17 52.42V72.42L81.75 95.17V75.17L103.85 62.42L121.17 52.42Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M81.75 75.17V95.17L59.93 82.58V62.58L70.31 68.57L77.26 72.58L81.75 75.17Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M71.53 14.66V22.67L61.15 28.66L31.17 45.97V57.96L24.23 61.97V41.97L54.22 24.66L71.53 14.66Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M24.23 41.97V61.97L2.42 49.37V29.37L19.73 39.37L24.23 41.97Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}
