import { cn } from '@/lib/utils'
import { Beacon } from '@/components/ui/svgs/beacon'
import { Bolt } from '@/components/ui/svgs/bolt'
import { Cisco } from '@/components/ui/svgs/cisco'
import { Hulu } from '@/components/ui/svgs/hulu'
import { OpenAIFull } from '@/components/ui/svgs/open-ai'
import { Spotify } from '@/components/ui/svgs/spotify'
import { Stripe } from '@/components/ui/svgs/stripe'
import { Supabase } from '@/components/ui/svgs/supabase'
import TailwindCSS from '@/components/ui/svgs/tailwindcss'
import { VercelFull } from '@/components/ui/svgs/vercel'

const logos = [
    {
        key: 'cisco',
        logo: (
            <Cisco
                height={32}
                width="auto"
            />
        ),
    },
    {
        key: 'stripe',
        logo: (
            <Stripe
                height={24}
                width="auto"
            />
        ),
    },
    {
        key: 'hulu',
        logo: (
            <Hulu
                height={22}
                width="auto"
            />
        ),
    },
    {
        key: 'bolt',
        logo: (
            <Bolt
                height={20}
                width="auto"
            />
        ),
    },
    {
        key: 'supabase',
        logo: (
            <Supabase
                height={24}
                width="auto"
            />
        ),
    },
    {
        key: 'openai',
        logo: (
            <OpenAIFull
                height={24}
                width="auto"
            />
        ),
    },
    {
        key: 'beacon',
        logo: (
            <Beacon
                height={20}
                width="auto"
            />
        ),
    },
    {
        key: 'tailwindcss',
        logo: (
            <TailwindCSS
                height={16}
                width="auto"
            />
        ),
    },
    {
        key: 'vercel',
        logo: (
            <VercelFull
                height={20}
                width="auto"
            />
        ),
    },
    {
        key: 'spotify',
        logo: (
            <Spotify
                height={24}
                width="auto"
            />
        ),
    },
]

export default function LogoCloud() {
    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative">
                    <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
                    <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />

                    <div className="**:fill-foreground lg:*:nth-5:border-r-0 lg:*:nth-[n+6]:nth-[-n+9]:border-b-0 grid grid-cols-3 divide-x divide-y border md:grid-cols-4 lg:grid-cols-5">
                        {logos.map(({ key, logo }) => (
                            <div
                                key={key}
                                className="hover:bg-foreground/5 flex items-center justify-center px-4 py-6 lg:py-7">
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const PlusDecorator = ({ className }: { className?: string }) => (
    <div
        aria-hidden
        className={cn('mask-radial-from-15% before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px', className)}
    />
)
