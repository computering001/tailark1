import Image from 'next/image'
import { cn } from '@/lib/utils'

type Member = {
    name: string
    position: string
    image: string
    decoratorColors: string
}

const members: Member[] = [
    {
        name: 'Alexander Chee',
        position: 'Co-Founder, CEO',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-purple-400 via-blue-400 to-amber-500',
    },
    {
        name: 'Sarah Johnson',
        position: 'Co-Founder, CTO',
        image: 'https://images.unsplash.com/photo-1629559915090-ee09fc9787c1?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-purple-400 via-sky-400 to-emerald-500',
    },
    {
        name: 'Michael Chen',
        position: 'Head of Engineering',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-rose-400 via-orange-400 to-yellow-500',
    },
    {
        name: 'Emily Rodriguez',
        position: 'Head of Design',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-teal-400 via-cyan-400 to-blue-500',
    },
    {
        name: 'David Kim',
        position: 'Head of Product',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-indigo-400 via-violet-400 to-pink-500',
    },
    {
        name: 'Lisa Wang',
        position: 'Head of Marketing',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-green-400 via-emerald-400 to-teal-500',
    },
]

export default function TeamSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div>
                    <h2 className="text-foreground max-w-xs text-balance text-4xl font-semibold tracking-tight">Our incredible leadership team</h2>

                    <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-y-12 md:mt-24 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div key={member.name}>
                                <div className="shadow-black/3 before:border-foreground/10 before:z-1 relative aspect-square overflow-hidden rounded-2xl shadow-md before:absolute before:inset-0 before:rounded-2xl before:border">
                                    <div
                                        aria-hidden
                                        className={cn('bg-linear-to-r z-1 opacity-6.5 pointer-events-none absolute inset-0 size-40 rounded-full mix-blend-overlay blur-2xl will-change-transform md:size-72', member.decoratorColors)}
                                    />
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={320}
                                        height={540}
                                        className="size-full object-cover object-top grayscale"
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
