import { Claude } from '@/components/ui/svgs/claude'
import { OpenAI } from '@/components/ui/svgs/open-ai'
import { Linear } from '@/components/ui/svgs/linear'
import { Vercel } from '@/components/ui/svgs/vercel'
import { cn } from '@/lib/utils'

import { Gemini } from '@/components/ui/svgs/gemini'
import { Replit } from '@/components/ui/svgs/replit'
import { MediaWiki } from '@/components/ui/svgs/media-wiki'

export default function IntegrationsSection() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative">
                    <div className="inset-0 m-auto !aspect-auto h-fit w-full max-w-xl space-y-4 text-center md:absolute">
                        <h2 className="text-balance text-3xl font-semibold md:text-5xl tracking-tight">Seamlessly Integrate with your favorite Tools</h2>
                        <p className="text-muted-foreground text-balance text-lg">Connect seamlessly with popular platforms and services to enhance your workflow.</p>
                    </div>
                    <div className="md:grid-cols-18 grid gap-1 *:aspect-square max-md:mt-12 md:grid-rows-6">
                        <div
                            aria-hidden
                            className="col-start-3 flex max-md:hidden md:row-start-2">
                            <div className="bg-muted/50 ml-auto mt-auto size-1/2 translate-x-full translate-y-[125%] rounded-lg border"></div>
                        </div>
                        <div
                            aria-hidden
                            className="flex max-md:hidden md:row-start-5">
                            <div className="bg-muted/50 ml-auto size-1/2 rounded-lg border md:-translate-y-[125%] md:translate-x-full"></div>
                        </div>

                        <div
                            aria-hidden
                            className="col-start-16 flex max-md:hidden md:row-start-3">
                            <div className="bg-muted size-1/2 rounded-lg border md:-translate-x-full md:-translate-y-[125%]"></div>
                        </div>
                        <div
                            aria-hidden
                            className="col-start-18 flex max-md:hidden md:row-start-5">
                            <div className="bg-muted size-1/2 rounded-lg border md:-translate-x-full md:-translate-y-[125%]"></div>
                        </div>
                        <IntegrationCard className="col-start-3">
                            <Gemini />
                        </IntegrationCard>

                        <IntegrationCard className="col-start-9 md:row-start-8 md:translate-x-1/2">
                            <Linear />
                        </IntegrationCard>
                        <IntegrationCard className="md:row-start-3">
                            <Replit />
                        </IntegrationCard>
                        <IntegrationCard className="col-start-3 md:row-start-5">
                            <Vercel />
                        </IntegrationCard>
                        <IntegrationCard className="col-start-16">
                            <OpenAI />
                        </IntegrationCard>
                        <IntegrationCard className="col-start-18 md:row-start-3">
                            <MediaWiki />
                        </IntegrationCard>
                        <IntegrationCard className="col-start-16 md:row-start-5">
                            <Claude />
                        </IntegrationCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    return <div className={cn('bg-card ring-foreground/10 relative z-20 m-auto flex size-full rounded-full border border-transparent shadow-md ring-1 *:m-auto *:size-5', className)}>{children}</div>
}
