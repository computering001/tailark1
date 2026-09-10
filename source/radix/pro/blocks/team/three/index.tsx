import { cn } from '@/lib/utils'
import Image from 'next/image'

type Member = {
    name: string
    position: string
    image: string
    decoratorColors: string
}

const members: Member[] = [
    {
        name: 'Sarah Mitchell',
        position: 'Co-Founder, CEO',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-purple-400 via-blue-400 to-amber-500',
    },
    {
        name: 'Marcus Chen',
        position: 'Co-Founder, CTO',
        image: 'https://images.unsplash.com/photo-1629559915090-ee09fc9787c1?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-purple-400 via-sky-400 to-emerald-500',
    },
    {
        name: 'James Rodriguez',
        position: 'VP of Engineering',
        image: 'https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-indigo-400 via-blue-400 to-teal-500',
    },
    {
        name: 'Emily Watson',
        position: 'Head of Product',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-purple-400 via-sky-400 to-emerald-500',
    },
    {
        name: 'Rachel Kim',
        position: 'Chief Marketing Officer',
        image: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-pink-400 via-blue-400 to-cyan-500',
    },
    {
        name: 'Michael Foster',
        position: 'Chief Financial Officer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-purple-400 via-blue-400 to-amber-500',
    },
    {
        name: 'Amanda Patel',
        position: 'Head of Design',
        image: 'https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-pink-400 via-blue-400 to-cyan-500',
    },
    {
        name: 'David Thompson',
        position: 'Chief Operating Officer',
        image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-teal-400 via-cyan-400 to-blue-500',
    },
]

export default function TeamSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div>
                    <h2 className="text-foreground max-w-xs text-balance text-4xl font-semibold tracking-tight">Our incredible leadership team</h2>

                    <div className="@max-2xs:grid-cols-1 mt-24 grid grid-cols-2 gap-16 sm:grid-cols-3 lg:grid-cols-4">
                        {members.map((member, index) => (
                            <div key={member.name}>
                                <div className="shadow-black/3 before:border-foreground/6.5 before:z-1 aspect-5/6 relative w-24 overflow-hidden rounded-2xl shadow-md before:absolute before:inset-0 before:rounded-2xl before:border">
                                    <div
                                        aria-hidden
                                        className={cn('bg-linear-to-r z-1 pointer-events-none absolute inset-0 size-40 rounded-full opacity-25 mix-blend-overlay blur-2xl will-change-transform md:size-72', member.decoratorColors)}
                                    />
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={320}
                                        height={540}
                                        className="size-full object-cover grayscale"
                                    />
                                </div>
                                <div className="space-y-0.5 pt-3">
                                    <p className="text-foreground font-medium">{member.name}</p>
                                    <p className="text-muted-foreground text-sm">{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
