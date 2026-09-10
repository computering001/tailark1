import { Gemini } from "@/components/ui/svgs/gemini"
import { Claude } from "@/components/ui/svgs/claude"
import { OpenAI } from "@/components/ui/svgs/open-ai"
import { VisualStudioCode as VSCode } from "@/components/ui/svgs/vs-code"
import { Vercel } from "@/components/ui/svgs/vercel"
import { cn } from "@/lib/utils"
import { IntelliJIDEA } from "@/components/ui/svgs/intellij"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cloudflare } from "@/components/ui/svgs/cloudflare"

export default function IntegrationsSection() {
  return (
    <section className="@container bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold text-balance md:text-5xl md:tracking-tight tracking-tight">
            Seamless Integration
          </h2>
          <p className="mt-4 mb-6 text-lg text-balance text-muted-foreground">
            Seamlessly integrate with over 200+ tools and platforms to
            streamline your workflow and boost productivity.
          </p>
          <Button variant="outline" size="sm" asChild>
            <Link href="#">Get Started</Link>
          </Button>
        </div>
        <div className="relative mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-4 @max-xl:max-w-xs @xl:grid-cols-9">
          <div
            aria-hidden
            className="absolute inset-x-0 inset-y-4 m-auto bg-[linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-foreground)_1px,transparent_1px)] mask-radial-to-85% bg-[size:12px_12px] opacity-5"
          />
          <div
            aria-hidden
            className="absolute inset-x-6 inset-y-4 m-auto translate-[0.5px] bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] mask-radial-to-85% bg-size-[24px_24px] opacity-25"
          />

          <IntegrationsGroup
            label="Development"
            className="@max-xl:row-start-3"
          >
            <div className="grid grid-cols-2 gap-2">
              <IntegrationCard>
                <IntelliJIDEA />
              </IntegrationCard>

              <IntegrationCard>
                <VSCode />
              </IntegrationCard>
            </div>
          </IntegrationsGroup>

          <div aria-hidden className="@max-xl:hidden" />

          <IntegrationsGroup
            label="LLMs"
            className="col-span-3 @max-xl:col-span-4 @max-xl:row-start-1 @max-xl:w-3/4 @max-xl:place-self-center"
          >
            <div className="grid grid-cols-3 gap-2">
              <IntegrationCard>
                <OpenAI />
              </IntegrationCard>
              <IntegrationCard>
                <Claude />
              </IntegrationCard>
              <IntegrationCard>
                <Gemini />
              </IntegrationCard>
            </div>
          </IntegrationsGroup>

          <div aria-hidden className="@max-xl:hidden" />

          <IntegrationsGroup label="Hosting">
            <div className="grid grid-cols-2 gap-2">
              <IntegrationCard>
                <Cloudflare className="!w-7" />
              </IntegrationCard>
              <IntegrationCard>
                <Vercel />
              </IntegrationCard>
            </div>
          </IntegrationsGroup>
        </div>
      </div>
    </section>
  )
}

const IntegrationCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "flex aspect-square size-full rounded-lg border border-transparent bg-card shadow ring-1 ring-foreground/10 *:m-auto *:size-5",
        className
      )}
    >
      {children}
    </div>
  )
}

const IntegrationsGroup = ({
  children,
  label,
  className,
}: {
  children?: React.ReactNode
  label?: string
  className?: string
}) => {
  return (
    <div
      className={cn(
        "relative z-20 col-span-2 row-span-2 grid grid-rows-subgrid gap-1.5 self-center rounded-2xl border border-transparent bg-foreground/3 p-2 shadow ring-1 ring-foreground/5 backdrop-blur",
        className
      )}
    >
      <span className="block self-center text-center text-sm text-balance text-muted-foreground">
        {label}
      </span>
      {children}
    </div>
  )
}
