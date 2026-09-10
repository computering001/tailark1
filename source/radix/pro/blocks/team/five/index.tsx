import Image from 'next/image'

type TeamMember = {
    name: string
    role: string
    image: string
}

const team: TeamMember[] = [
    {
        name: 'Sarah Mitchell',
        role: 'Co-Founder, CEO',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Marcus Chen',
        role: 'Co-Founder, CTO',
        image: 'https://images.unsplash.com/photo-1629559915090-ee09fc9787c1?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'David Thompson',
        role: 'Chief Operating Officer',
        image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Emily Watson',
        role: 'Head of Product',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'James Rodriguez',
        role: 'VP of Engineering',
        image: 'https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Rachel Kim',
        role: 'Chief Marketing Officer',
        image: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Michael Foster',
        role: 'Chief Financial Officer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Amanda Patel',
        role: 'Head of Design',
        image: 'https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export default function TeamSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-6xl px-6">
                <div className="max-w-xl">
                    <h2 className="text-foreground text-balance text-4xl font-semibold tracking-tight">Our team</h2>
                    <p className="text-muted-foreground mt-4 text-lg">A diverse group of passionate individuals working together to build something great.</p>
                </div>

                <div className="@md:grid-cols-2 @3xl:grid-cols-4 mt-16 grid gap-4">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="before:border-foreground/6.5 before:z-1 group relative aspect-[4/5] overflow-hidden rounded-2xl before:absolute before:inset-0 before:rounded-2xl before:border">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={320}
                                height={400}
                                className="group-hover:scale-102 size-full object-cover grayscale transition-[transform,filter] duration-300 group-hover:grayscale-0"
                            />
                            <div
                                aria-hidden
                                className="bg-linear-to-t absolute inset-0 from-black/60 via-transparent to-transparent"
                            />
                            <div
                                aria-hidden
                                className="mask-t-from-35% absolute inset-0 mt-auto h-24 backdrop-blur"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-4">
                                <p className="font-medium text-white">{member.name}</p>
                                <p className="text-sm text-white/80">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
