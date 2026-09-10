import Link from 'next/link'
import * as React from 'react'
import { Gemini } from '@/components/ui/svgs/gemini'
import { Replit } from '@/components/ui/svgs/replit'
import { MistralAi } from '@/components/ui/svgs/mistral-ai'
import { VSCodium } from '@/components/ui/svgs/vs-codium'
import { MediaWiki } from '@/components/ui/svgs/media-wiki'
import { GooglePaLM } from '@/components/ui/svgs/google-palm'
import { cn } from '@/lib/utils'

export default function IntegrationsSection() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative">
                    <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
                    <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <div className="@2xl:*:nth-4:border-b-0 @max-2xl:*:nth-4:border-r-0 @max-2xl:*:nth-2:border-r-0 @md:*:nth-5:border-b-0 @2xl:*:nth-3:border-r-0 @md:grid-cols-2 @2xl:grid-cols-3 @md:divide-x grid divide-y border">
                        <IntegrationCard
                            title="Google Gemini"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <Gemini />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Replit"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <Replit />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Mistral AI"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <MistralAi />
                        </IntegrationCard>

                        <IntegrationCard
                            title="VSCodium"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <VSCodium />
                        </IntegrationCard>

                        <IntegrationCard
                            title="MediaWiki"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <MediaWiki />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Google PaLM"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <GooglePaLM />
                        </IntegrationCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ title, description, children, link = 'https://github.com/meschacirung/cnblocks' }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
    return (
        <div className="hover:bg-foreground/3 relative p-6">
            <div className="*:size-8">{children}</div>

            <div className="space-y-2 pt-6">
                <h3 className="text-base font-medium">
                    <Link
                        href={link}
                        className="before:absolute before:inset-0">
                        {title}
                    </Link>
                </h3>
                <p className="text-muted-foreground line-clamp-2">{description}</p>
            </div>
        </div>
    )
}

const PlusDecorator = ({ className }: { className?: string }) => (
    <div
        aria-hidden
        className={cn('mask-radial-from-15% before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px', className)}
    />
)
