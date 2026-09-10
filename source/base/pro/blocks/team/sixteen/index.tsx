import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const team = [
    {
        name: 'Sarah Mitchell',
        role: 'Co-Founder, CEO',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-purple-400 via-blue-400 to-amber-500',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'Marcus Chen',
        role: 'Co-Founder, CTO',
        image: 'https://images.unsplash.com/photo-1629559915090-ee09fc9787c1?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-purple-400 via-sky-400 to-emerald-500',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'David Thompson',
        role: 'Chief Operating Officer',
        image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-pink-400 via-blue-400 to-cyan-500',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'James Rodriguez',
        role: 'VP of Engineering',
        image: 'https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-indigo-400 via-blue-400 to-teal-500',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'Emily Watson',
        role: 'Head of Product',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-purple-400 via-sky-400 to-emerald-500',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'Rachel Kim',
        role: 'Chief Marketing Officer',
        image: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-pink-400 via-blue-400 to-cyan-500',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'Michael Foster',
        role: 'Chief Financial Officer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-red-400 via-amber-400 to-rose-500',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'Amanda Patel',
        role: 'Head of Design',
        image: 'https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        decoratorColors: 'from-pink-400 via-blue-400 to-cyan-500',
        linkedin: '#',
        twitter: '#',
    },
]

export default function TeamSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div>
                    <h2 className="text-foreground max-w-xs text-balance text-4xl font-semibold tracking-tight">Our incredible leadership team</h2>

                    <div className="mt-24 grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="grid grid-cols-[auto_1fr] gap-4">
                                <div className="shadow-black/3 before:border-foreground/6.5 before:z-1 aspect-5/6 relative w-24 overflow-hidden rounded-2xl shadow-md before:absolute before:inset-0 before:rounded-2xl before:border">
                                    <div
                                        aria-hidden
                                        className={cn('bg-linear-to-r z-1 pointer-events-none absolute inset-0 size-40 rounded-full opacity-25', member.decoratorColors, 'mix-blend-overlay blur-2xl md:size-72')}
                                    />
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={320}
                                        height={540}
                                        className="size-full object-cover grayscale"
                                    />
                                </div>

                                <div className="flex flex-col space-y-2 py-2">
                                    <p className="text-foreground text-sm font-medium">{member.name}</p>
                                    <p className="text-muted-foreground text-sm">{member.role}</p>

                                    <div className="-mx-1 mt-auto flex gap-0.5">
                                        <Link
                                            href={member.twitter}
                                            aria-label="Twitter"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            referrerPolicy="no-referrer"
                                            className="hover:bg-foreground/5 text-muted-foreground hover:text-foreground flex size-7 items-center justify-center rounded">
                                            <svg
                                                width="14"
                                                height="13"
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-3.5">
                                                <path
                                                    d="M11.025 0H13.172L8.482 5.374L14 12.688H9.68L6.294 8.253L2.424 12.688H0.275L5.291 6.938L0 0.000999987H4.43L7.486 4.054L11.025 0ZM10.27 11.4H11.46L3.78 1.221H2.504L10.27 11.4Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </Link>
                                        <Link
                                            href={member.linkedin}
                                            aria-label="LinkedIn"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            referrerPolicy="no-referrer"
                                            className="hover:bg-foreground/5 text-muted-foreground hover:text-foreground flex size-7 items-center justify-center rounded">
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-3.5">
                                                <path
                                                    d="M16 0C16.53 0 17.04 0.21 17.41 0.59C17.79 0.96 18 1.47 18 2V16C18 16.53 17.79 17.04 17.41 17.41C17.04 17.79 16.53 18 16 18H2C1.47 18 0.96 17.79 0.59 17.41C0.21 17.04 0 16.53 0 16V2C0 1.47 0.21 0.96 0.59 0.59C0.96 0.21 1.47 0 2 0H16ZM15.5 15.5V10.2C15.5 9.34 15.16 8.51 14.55 7.89C13.93 7.28 13.1 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.68 9.17 12.04 9.32 12.3 9.58C12.56 9.84 12.71 10.2 12.71 10.57V15.5H15.5ZM3.88 5.56C4.33 5.56 4.75 5.38 5.07 5.07C5.38 4.75 5.56 4.33 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43 2.19 3 2.37 2.68 2.68C2.37 3 2.19 3.43 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
