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
    {
        name: 'Dylan Field',
        avatar: 'https://avatars.githubusercontent.com/u/159643?v=4',
        role: 'Founder, CEO - Figma',
    },
]

export default function InvestorsSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Trusted by the best</p>
                    <h2 className="text-foreground mt-4 text-balance text-4xl font-semibold tracking-tight">Our investors</h2>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5">
                    <div className="bg-muted flex aspect-[3/2] items-center justify-center rounded-xl *:h-6 *:w-fit">
                        <YCombinator />
                    </div>
                    <div className="bg-muted flex aspect-[3/2] items-center justify-center rounded-xl *:h-5 *:w-fit">
                        <Accel />
                    </div>
                    <div className="bg-muted flex aspect-[3/2] items-center justify-center rounded-xl *:h-6 *:w-fit">
                        <SVA />
                    </div>
                    <div className="bg-muted flex aspect-[3/2] items-center justify-center rounded-xl *:h-4 *:w-fit">
                        <Sequoia />
                    </div>
                    <div className="bg-muted col-span-2 flex aspect-[3/2] items-center justify-center rounded-xl *:h-10 *:w-fit md:col-span-1">
                        <Salesforce />
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-foreground text-center text-lg font-medium">Angel investors</h3>

                    <div className="@md:grid-cols-2 @2xl:grid-cols-3 mt-8 grid gap-4">
                        {investors.map((investor) => (
                            <div
                                key={investor.name}
                                className="ring-border-illustration hover:bg-card hover:shadow-black/3 flex items-center gap-4 rounded-2xl p-4 shadow-lg shadow-transparent ring-1">
                                <div className="before:border-foreground/15 relative size-12 shrink-0 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                                    <Image
                                        src={investor.avatar}
                                        alt={investor.name}
                                        className="size-full object-cover"
                                        width={56}
                                        height={56}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-foreground truncate font-medium">{investor.name}</p>
                                    <p className="text-muted-foreground mt-0.5 truncate text-sm">{investor.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
