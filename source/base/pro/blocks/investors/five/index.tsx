import { YCombinator } from '@/components/ui/svgs/y-combinator'
import { Accel } from '@/components/ui/svgs/accel'
import { SVA } from '@/components/ui/svgs/sva'
import { Sequoia } from '@/components/ui/svgs/sequoia'
import { Salesforce } from '@/components/ui/svgs/salesforce'
import Image from 'next/image'

type Investor = {
    name: string
    avatar: string
    role: string
}

const investors: Investor[] = [
    {
        name: 'Shadcn',
        avatar: 'https://avatars.githubusercontent.com/u/124599?v=4',
        role: 'Creator, Shadcn UI',
    },
    {
        name: 'Guillermo Rauch',
        avatar: 'https://avatars.githubusercontent.com/u/13041?v=4',
        role: 'Founder, CEO - Vercel',
    },
    {
        name: 'Adam Wathan',
        avatar: 'https://avatars.githubusercontent.com/u/4323180?v=4',
        role: 'CEO - Tailwind Labs',
    },
    {
        name: 'Lee Robinson',
        avatar: 'https://avatars.githubusercontent.com/u/9113740?v=4',
        role: 'VP of Developer Education - Cursor',
    },
    {
        name: 'Tobias Lütke',
        avatar: 'https://avatars.githubusercontent.com/u/347?v=4',
        role: 'Founder, Shopify',
    },
    {
        name: 'Brandon Eich',
        avatar: 'https://avatars.githubusercontent.com/u/313317?v=4',
        role: 'Founder, Brave Browser',
    },
    {
        name: 'Thomas Paul Mann',
        avatar: 'https://avatars.githubusercontent.com/u/12066405?v=4',
        role: 'Co-Founder, Raycast',
    },
    {
        name: 'Paul Copplestone',
        avatar: 'https://avatars.githubusercontent.com/u/10214025?v=4',
        role: 'Co-Founder, Supabase',
    },
]

export default function InvestorsSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <h2 className="text-foreground text-balance text-4xl font-semibold tracking-tight">Backed by world-class investors</h2>
                <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">We're proud to be supported by leading venture capital firms and visionary angel investors.</p>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:gap-x-24">
                    <div className="*:h-6 *:w-fit">
                        <YCombinator />
                    </div>
                    <div className="*:h-5 *:w-fit">
                        <Accel />
                    </div>
                    <div className="*:h-6 *:w-fit">
                        <SVA />
                    </div>
                    <div className="*:h-4 *:w-fit">
                        <Sequoia />
                    </div>
                    <div className="*:h-10 *:w-fit">
                        <Salesforce />
                    </div>
                </div>

                <div className="bg-card ring-foreground/5 shadow-black/3 mx-auto mt-16 max-w-lg rounded-2xl p-8 shadow-xl ring-1">
                    <div className="flex justify-center -space-x-1.5">
                        {investors.map((investor, index) => (
                            <div
                                key={investor.name}
                                className="ring-background before:border-foreground/15 relative size-8 overflow-hidden rounded-full ring-2 before:absolute before:inset-0 before:rounded-full before:border"
                                style={{ zIndex: investors.length - index }}>
                                <Image
                                    src={investor.avatar}
                                    alt={investor.name}
                                    className="size-full object-cover"
                                    width={48}
                                    height={48}
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-foreground mt-6 font-medium">Joined by {investors.length}+ angel investors</p>
                    <p className="text-muted-foreground mt-2 text-sm">Industry leaders from Vercel, Tailwind, Figma, and more</p>
                </div>
            </div>
        </section>
    )
}
