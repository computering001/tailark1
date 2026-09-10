import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Claude } from '@/components/ui/svgs/claude'
import { OpenAI } from '@/components/ui/svgs/open-ai'
import { Vercel } from '@/components/ui/svgs/vercel'
import { Linear } from '@/components/ui/svgs/linear'
import { Gemini } from '@/components/ui/svgs/gemini'
import { Replit } from '@/components/ui/svgs/replit'
import { VisualStudioCode as VSCode } from '@/components/ui/svgs/vs-code'
import { Cloudflare } from '@/components/ui/svgs/cloudflare'
import { GooglePaLM } from '@/components/ui/svgs/google-palm'
import { MediaWiki } from '@/components/ui/svgs/media-wiki'

export default function IntegrationsSection() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div
                    aria-hidden
                    className="space-y-3">
                    <div className="flex flex-row-reverse justify-center gap-3">
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                    </div>
                    <div className="flex flex-row-reverse justify-center gap-3">
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <IntegrationCard>
                            <MediaWiki className="size-6" />
                        </IntegrationCard>
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                    </div>
                    <div className="flex justify-center gap-3">
                        <div className="bg-foreground/3 size-11 rounded-full border" />

                        <IntegrationCard>
                            <Replit className="size-6" />
                        </IntegrationCard>
                        <div className="bg-foreground/3 size-11 rounded-full border" />

                        <IntegrationCard>
                            <Vercel className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <Linear className="size-6" />
                        </IntegrationCard>
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                    </div>
                    <div className="flex justify-center gap-3">
                        <div className="bg-foreground/3 size-11 rounded-full border" />

                        <IntegrationCard>
                            <VSCode className="size-6" />
                        </IntegrationCard>
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <IntegrationCard>
                            <OpenAI className="size-6" />
                        </IntegrationCard>
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <IntegrationCard>
                            <Cloudflare className="size-6" />
                        </IntegrationCard>
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                    </div>
                    <div className="flex justify-center gap-3">
                        <div className="bg-foreground/3 size-11 rounded-full border" />

                        <IntegrationCard>
                            <Claude className="size-6" />
                        </IntegrationCard>
                        <IntegrationCard>
                            <Gemini className="size-6" />
                        </IntegrationCard>
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <IntegrationCard>
                            <GooglePaLM className="size-6" />
                        </IntegrationCard>
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                    </div>
                    <div className="flex justify-center gap-3">
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <IntegrationCard>
                            <MediaWiki className="size-6" />
                        </IntegrationCard>
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                    </div>
                    <div className="flex flex-row-reverse justify-center gap-3">
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                        <div className="bg-foreground/3 size-11 rounded-full border" />
                    </div>
                </div>
                <div className="mx-auto mt-12 max-w-lg text-center">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl tracking-tight">Seamless Integration with your favorite Tools</h2>
                    <p className="text-muted-foreground mb-6 mt-4 text-balance">Connect seamlessly with popular platforms and services to enhance your workflow.</p>

                    <Button
                        render={<Link href="#">Get Started</Link>}
                        nativeButton={false}
                        variant="outline"
                        size="sm"
                    />
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    return <div className={cn('bg-card ring-foreground/10 flex aspect-square size-11 rounded-full border border-transparent shadow-md ring-1 *:m-auto *:size-5', className)}>{children}</div>
}
