import { Spotify } from '@/components/ui/svgs/spotify'
import { Hulu } from '@/components/ui/svgs/hulu'
import { Supabase } from '@/components/ui/svgs/supabase'
import { Beacon } from '@/components/ui/svgs/beacon'
import { Stripe } from '@/components/ui/svgs/stripe'
import { VercelFull } from '@/components/ui/svgs/vercel'
import { Cloudflare } from '@/components/ui/svgs/cloudflare'
import { OpenAIFull } from '@/components/ui/svgs/open-ai'

export default function LogoCloud() {
    return (
        <section className="relative py-24">
            <div className="relative text-center">
                <div className="px-6">
                    <p className="text-muted-foreground mx-auto max-w-xl text-balance md:text-lg">Tailark is trusted by leading teams from Generative AI Companies, Hosting Providers, Payments Providers, Streaming Providers</p>
                </div>
                <div className="border-foreground/10 mt-6 border-y">
                    <div className="mx-auto max-w-5xl px-2">
                        <div className="**:fill-foreground bg-foreground/10 *:hover:bg-background/70 *:bg-background/95 mx-px grid grid-cols-2 items-center justify-center gap-px *:h-20 *:transition-colors *:duration-200 sm:grid-cols-4">
                            <div className="flex items-center justify-center rounded px-6">
                                <Hulu
                                    height={20}
                                    width="auto"
                                />
                            </div>

                            <div className="flex items-center justify-center rounded px-6">
                                <Spotify
                                    height={26}
                                    width="auto"
                                />
                            </div>
                            <div className="flex items-center justify-center rounded px-6">
                                <Supabase
                                    height={24}
                                    width="auto"
                                />
                            </div>
                            <div className="flex items-center justify-center rounded px-6">
                                <Beacon
                                    height={20}
                                    width="auto"
                                />
                            </div>
                            <div className="flex items-center justify-center rounded px-6">
                                <VercelFull
                                    height={20}
                                    width="auto"
                                />
                            </div>

                            <div className="flex items-center justify-center rounded px-6">
                                <Stripe
                                    height={26}
                                    width="auto"
                                />
                            </div>
                            <div className="flex items-center justify-center rounded px-6">
                                <OpenAIFull
                                    height={24}
                                    width="auto"
                                />
                            </div>
                            <div className="flex items-center justify-center rounded px-6">
                                <Cloudflare
                                    height={20}
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                aria-hidden
                className="border-foreground/10 pointer-events-none absolute inset-0 mx-auto flex max-w-5xl justify-between border-x">
                <div className="border-foreground/10 relative h-full w-2 border-r" />
                <div className="border-foreground/10 relative h-full w-2 border-l" />
            </div>
        </section>
    )
}
