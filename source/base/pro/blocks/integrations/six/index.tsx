import { LogoIcon } from "@/components/ui/logo"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider"
import { VisualStudioCode as VSCode } from "@/components/ui/svgs/vs-code"
import { Windsurf } from "@/components/ui/svgs/windsurf"
import { Claude } from "@/components/ui/svgs/claude"
import { OpenAI } from "@/components/ui/svgs/open-ai"
import { Vercel } from "@/components/ui/svgs/vercel"
import { Linear } from "@/components/ui/svgs/linear"
import { Gemini } from "@/components/ui/svgs/gemini"
import { Replit } from "@/components/ui/svgs/replit"
import { VSCodium } from "@/components/ui/svgs/vs-codium"
import { MistralAi } from "@/components/ui/svgs/mistral-ai"
import { GooglePaLM } from "@/components/ui/svgs/google-palm"
import { MediaWiki } from "@/components/ui/svgs/media-wiki"

export default function IntegrationsSection() {
  return (
    <section className="bg-background py-24">
      <div className="group mx-auto max-w-5xl px-6 perspective-dramatic">
        <div className="group relative mx-auto max-w-2xl scale-y-90 rotate-x-6 items-center justify-between space-y-6 from-transparent mask-radial-[50%_90%] mask-radial-from-70% pb-1 transition-transform duration-1000 hover:scale-y-100 hover:rotate-x-0">
          <div className="absolute inset-0 bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] mask-radial-to-55% bg-size-[16px_16px] opacity-25" />
          <div>
            <InfiniteSlider gap={56} speed={20} speedOnHover={10}>
              <IntegrationCard>
                <VSCode />
              </IntegrationCard>
              <IntegrationCard>
                <MediaWiki />
              </IntegrationCard>
              <IntegrationCard>
                <Windsurf />
              </IntegrationCard>
              <IntegrationCard>
                <Claude />
              </IntegrationCard>
              <IntegrationCard>
                <OpenAI />
              </IntegrationCard>
              <IntegrationCard>
                <MistralAi />
              </IntegrationCard>
            </InfiniteSlider>
          </div>

          <div>
            <InfiniteSlider gap={56} speed={20} speedOnHover={10} reverse>
              <IntegrationCard>
                <Gemini />
              </IntegrationCard>
              <IntegrationCard>
                <Linear />
              </IntegrationCard>
              <IntegrationCard>
                <Vercel />
              </IntegrationCard>
              <IntegrationCard>
                <MistralAi />
              </IntegrationCard>
              <IntegrationCard>
                <VSCodium />
              </IntegrationCard>
              <IntegrationCard>
                <GooglePaLM />
              </IntegrationCard>
            </InfiniteSlider>
          </div>
          <div>
            <InfiniteSlider gap={56} speed={15} speedOnHover={10}>
              <IntegrationCard>
                <Replit />
              </IntegrationCard>
              <IntegrationCard>
                <MistralAi />
              </IntegrationCard>
              <IntegrationCard>
                <Gemini />
              </IntegrationCard>
              <IntegrationCard>
                <VSCodium />
              </IntegrationCard>
              <IntegrationCard>
                <MediaWiki />
              </IntegrationCard>
              <IntegrationCard>
                <GooglePaLM />
              </IntegrationCard>
            </InfiniteSlider>
          </div>
          <div className="absolute inset-0 m-auto flex size-fit -translate-y-3.5 justify-center gap-2">
            <IntegrationCard
              className="relative size-24 rounded-2xl border border-white/20 bg-zinc-700/50 shadow-xl ring-1 shadow-black/20 ring-black/50 backdrop-blur-lg"
              isCenter={true}
            >
              <LogoIcon uniColor className="text-white drop-shadow-sm" />
            </IntegrationCard>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-xl text-center">
          <h2 className="text-3xl font-semibold text-balance md:text-5xl tracking-tight">
            Seamlessly Integrate with your favorite Tools
          </h2>
          <p className="mt-4 mb-6 text-balance text-muted-foreground">
            Connect seamlessly with popular platforms and services to enhance
            your workflow.
          </p>

          <Button
              render={<Link href="#">Get Started</Link>}
              nativeButton={false} size="sm" variant="outline"
          />
        </div>
      </div>
    </section>
  )
}

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode
  className?: string
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom"
  isCenter?: boolean
}) => {
  return (
    <div
      aria-hidden
      className={cn(
        "relative z-20 flex size-20 rounded-xl border bg-card",
        className
      )}
    >
      <div className={cn("m-auto size-fit *:size-8", isCenter && "*:size-8")}>
        {children}
      </div>
    </div>
  )
}
