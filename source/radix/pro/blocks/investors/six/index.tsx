import { YCombinator } from '@/components/ui/svgs/y-combinator'
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
    {
        name: 'Dylan Field',
        avatar: 'https://avatars.githubusercontent.com/u/159643?v=4',
        role: 'Founder, CEO - Figma',
    },
]

export default function InvestorsSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-2xl max-sm:px-6">
                <div className="space-y-16">
                    <div>
                        <h2 className="text-foreground max-w-xs text-balance text-4xl font-semibold tracking-tight">Backed by legendary firms</h2>
                        <p className="text-muted-foreground mt-3">The world's leading investors believe in our mission.</p>

                        <div className="@md:grid-cols-2 mt-12 grid gap-4">
                            <div className="ring-border bg-card hover:shadow-black/3 h-18 flex items-center justify-between rounded-2xl px-6 shadow-lg shadow-transparent ring-1">
                                <div className="*:size-6">
                                    <YCombinator />
                                </div>
                                <span className="text-muted-foreground text-sm">Lead Investor</span>
                            </div>
                            <div className="ring-border bg-card hover:shadow-black/3 h-18 flex items-center justify-between rounded-2xl px-6 shadow-lg shadow-transparent ring-1">
                                <div className="*:h-6 *:w-fit">
                                    <SVA />
                                </div>
                                <span className="text-muted-foreground text-sm">Series A</span>
                            </div>
                            <div className="ring-border bg-card hover:shadow-black/3 h-18 flex items-center justify-between rounded-2xl px-6 shadow-lg shadow-transparent ring-1">
                                <div className="*:h-4 *:w-fit">
                                    <Sequoia />
                                </div>
                                <span className="text-muted-foreground text-sm">Seed</span>
                            </div>
                            <div className="ring-border bg-card hover:shadow-black/3 h-18 flex items-center justify-between rounded-2xl px-6 shadow-lg shadow-transparent ring-1">
                                <div className="*:h-10 *:w-fit">
                                    <Salesforce />
                                </div>
                                <span className="text-muted-foreground text-sm">Strategic</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-foreground text-xl font-semibold">Angel investors</h3>
                        <p className="text-muted-foreground mt-3">Industry pioneers who guide our journey.</p>

                        <div className="@md:grid-cols-2 mt-12 grid gap-x-4 gap-y-6">
                            {investors.map((investor) => (
                                <div
                                    key={investor.name}
                                    className="@md:items-center flex gap-3">
                                    <div className="before:border-foreground/15 relative size-10 shrink-0 rounded-xl before:absolute before:inset-0 before:rounded-xl before:border">
                                        <Image
                                            src={investor.avatar}
                                            alt={investor.name}
                                            className="size-full rounded-xl"
                                            width={64}
                                            height={64}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-0.5">
                                        <p className="text-foreground text-sm font-medium">{investor.name}</p>
                                        <p className="text-muted-foreground text-sm">{investor.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
