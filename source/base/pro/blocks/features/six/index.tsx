import CodeBlock from "@/components/illustrations/code-block"
import { IntelliJIDEA } from "@/components/ui/svgs/intellij"
import { VisualStudioCode } from "@/components/ui/svgs/vs-code"
import { Windsurf } from "@/components/ui/svgs/windsurf"

export default function FeaturesSection() {
  return (
    <section className="@container bg-background py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="relative grid gap-12 @3xl:grid-cols-3">
          <div className="flex flex-col justify-between gap-12 @3xl:pb-3">
            <div>
              <h2 className="relative z-10 text-3xl font-bold text-balance md:text-4xl tracking-tight">
                Build powerful integrations with our API
              </h2>
              <p className="my-6 max-w-2xl text-lg text-muted-foreground">
                Generate payment links at scale, enabling seamless marketing
                campaigns, efficient sales processes, and faster payment.
              </p>
            </div>

            <div className="max-w-56 space-y-3">
              <h3 className="font-medium">Native IDE Support</h3>
              <div className="grid grid-cols-3 gap-0.5 *:flex *:items-center *:justify-center *:rounded *:bg-foreground/5 *:px-2 *:py-3">
                <div className="rounded-l-lg!">
                  <IntelliJIDEA className="size-5" />
                </div>
                <div>
                  <VisualStudioCode className="size-5" />
                </div>
                <div className="rounded-r-lg!">
                  <Windsurf className="size-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto h-fit @3xl:col-span-2">
            <CodeBlock />
          </div>
        </div>
      </div>
    </section>
  )
}
