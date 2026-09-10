import CodeBlock from "@/components/illustrations/code-block"
import { IntelliJIDEA } from "@/components/ui/svgs/intellij"
import { VisualStudioCode } from "@/components/ui/svgs/vs-code"
import { Windsurf } from "@/components/ui/svgs/windsurf"
import { Gemini } from "@/components/ui/svgs/gemini"
import { Claude } from "@/components/ui/svgs/claude"
import { OpenAI } from "@/components/ui/svgs/open-ai"

export default function FeaturesSection() {
  return (
    <section className="@container bg-background py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="relative @3xl:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-12 inset-y-0 hidden border-y border-foreground/5 mask-x-from-95% @3xl:block"
          ></div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -inset-y-12 hidden border-x border-foreground/5 mask-y-from-95% @3xl:block"
          ></div>
          <CodeBlock />

          <div className="relative mt-12 grid gap-6 @sm:grid-cols-2 @xl:gap-12 @2xl:grid-cols-3 @3xl:gap-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -inset-y-12 mx-auto hidden w-[calc(33.333%+1.5rem)] border-x border-dashed mask-y-from-95% @3xl:block @4xl:-inset-y-24 @4xl:w-[calc(33.333%+3rem)]"
            ></div>
            <div className="space-y-3">
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
            <div className="space-y-3">
              <h3 className="font-medium">Works with any LLM</h3>
              <div className="grid grid-cols-3 gap-0.5 *:flex *:items-center *:justify-center *:rounded *:bg-foreground/5 *:px-2 *:py-3">
                <div className="rounded-l-lg!">
                  <Gemini className="size-5" />
                </div>
                <div>
                  <Claude className="size-5" />
                </div>
                <div className="rounded-r-lg!">
                  <OpenAI className="size-5 fill-foreground" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium">CLI Compatible</h3>
              <p className="text-sm text-muted-foreground">
                Run `<code className="font-mono text-indigo-400">quartz</code>{" "}
                <code className="font-mono text-primary">--help</code>` to see
                the available commands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
