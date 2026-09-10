import { Button } from "@/components/ui/button"
import { Document } from "@/components/illustrations/document"
import { Equal, Plus } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Actionnable } from "@/components/illustrations/actionnable"
import { IDCheck } from "@/components/illustrations/id-check"

export default function HowItWorksSection() {
  return (
    <section className="overflow-hidden bg-background">
      <div className="relative m-4 overflow-hidden rounded-[2rem] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(black_1px,transparent_1px)] bg-size-[16px_16px] mix-blend-overlay"></div>

        <div className="@container relative mx-auto w-full max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold text-foreground tracking-tight">
              Simple Three-Step Workflow
            </h2>
            <p className="mt-4 text-lg text-balance text-muted-foreground">
              Experience our streamlined approach to data analysis that empowers
              your team to make informed decisions quickly and efficiently.
            </p>
          </div>

          <div className="my-20 grid gap-12 @3xl:grid-cols-3">
            <div className="row-span-3 grid grid-rows-subgrid gap-8 text-center">
              <div className="relative flex h-28 items-center self-center">
                <div className="relative mx-auto size-fit border bg-foreground/5 p-2">
                  <CardDecorator className="size-2 border-primary" />
                  <Document />
                </div>
                <Plus
                  strokeWidth={4}
                  className="absolute inset-y-0 right-0 my-auto hidden translate-x-[75%] fill-illustration stroke-illustration drop-shadow @3xl:block"
                />
              </div>
              <div>
                <h3 className="mb-3 font-medium text-foreground">
                  Face Detection
                </h3>
                <p className="text-sm text-balance text-muted-foreground">
                  Effortlessly identify and manage users with our advanced face
                  recognition system.
                </p>
              </div>
              <Plus
                strokeWidth={4}
                className="mx-auto translate-y-[75%] fill-illustration stroke-illustration drop-shadow @3xl:hidden"
              />
            </div>
            <div className="row-span-3 grid grid-rows-subgrid gap-8 text-center">
              <div className="relative flex h-28 items-center self-center">
                <IDCheck />
                <Equal
                  strokeWidth={4}
                  className="absolute inset-y-0 right-0 my-auto hidden translate-x-[75%] fill-illustration stroke-illustration drop-shadow @3xl:block"
                />
              </div>
              <div>
                <h3 className="mb-3 font-medium text-foreground">
                  Automated Analysis
                </h3>
                <p className="text-sm text-balance text-muted-foreground">
                  Our AI-powered system processes complex datasets to identify
                  patterns and insights instantly.
                </p>
              </div>
              <Equal
                strokeWidth={4}
                className="mx-auto translate-y-[75%] fill-illustration stroke-illustration drop-shadow @3xl:hidden"
              />
            </div>
            <div className="row-span-3 grid grid-rows-subgrid gap-8 text-center">
              <Actionnable className="max-w-58 self-center" />
              <div>
                <h3 className="mb-3 font-medium text-foreground">
                  Actionable Reports
                </h3>
                <p className="text-sm text-balance text-muted-foreground">
                  Transform insights into beautiful visualizations and shareable
                  reports to drive decisions.
                </p>
              </div>
            </div>
          </div>

          <Button asChild variant="outline" className="mx-auto flex w-fit">
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export const CardDecorator = ({ className }: { className?: string }) => (
  <>
    <span
      className={cn(
        "absolute -top-px -left-px block size-2 rounded-tl border-t border-l",
        className
      )}
    ></span>
    <span
      className={cn(
        "absolute -top-px -right-px block size-2 rounded-tr border-t border-r",
        className
      )}
    ></span>
    <span
      className={cn(
        "absolute -bottom-px -left-px block size-2 rounded-bl border-b border-l",
        className
      )}
    ></span>
    <span
      className={cn(
        "absolute -right-px -bottom-px block size-2 rounded-br border-r border-b",
        className
      )}
    ></span>
  </>
)
