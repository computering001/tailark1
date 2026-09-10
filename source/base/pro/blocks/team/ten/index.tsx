import { Brain } from 'lucide-react'
import Image from 'next/image'

export default function TeamSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="flex max-w-xl flex-col gap-8">
                    <div className="max-w-lg">
                        <Brain className="stroke-background fill-foreground/10 size-8 drop-shadow" />

                        <h2 className="text-foreground mt-8 text-balance text-4xl font-semibold tracking-tight">Memories in the making</h2>
                        <p className="text-muted-foreground mt-4 text-lg">Every project, every milestone — captured in moments that define who we are.</p>
                    </div>
                    <div className="grid max-w-sm grid-cols-2 gap-6 *:space-y-1">
                        <div>
                            <p className="text-foreground text-2xl font-medium">80+</p>
                            <p className="text-muted-foreground text-sm">Team members worldwide collaborating daily</p>
                        </div>
                        <div>
                            <p className="text-foreground text-2xl font-medium">15</p>
                            <p className="text-muted-foreground text-sm">Countries represented across the globe</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex items-center justify-center">
                    <div className="bg-card ring-border shadow-black/3 z-1 -mr-16 -rotate-6 p-4 shadow-xl ring-1">
                        <div className="before:border-foreground/10 before:z-1 relative aspect-[4/5] w-48 overflow-hidden before:absolute before:inset-0 before:border md:w-56">
                            <div
                                aria-hidden
                                className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-32 rounded-full from-purple-400 via-blue-400 to-amber-500 opacity-25 mix-blend-overlay blur-2xl lg:size-96"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop"
                                alt="Team brainstorming"
                                width={400}
                                height={500}
                                className="size-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-muted-foreground mt-3 text-xs">Kickoff meeting - SF 2024</p>
                    </div>
                    <div className="bg-card ring-foreground/5 shadow-black/3 z-3 rotate-3 p-4 shadow-xl ring-1">
                        <div className="before:border-foreground/10 before:z-1 relative aspect-[4/5] w-56 overflow-hidden before:absolute before:inset-0 before:border md:w-64">
                            <div
                                aria-hidden
                                className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-40 rounded-full from-indigo-400 via-cyan-400 to-emerald-500 opacity-15 mix-blend-overlay blur-2xl lg:size-72"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
                                alt="Team workshop"
                                width={400}
                                height={500}
                                className="size-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-muted-foreground mt-3 text-xs">Design week - Berlin 2024</p>
                    </div>
                    <div className="bg-card ring-foreground/5 shadow-black/3 z-2 -ml-16 -rotate-3 p-4 shadow-xl ring-1">
                        <div className="before:border-foreground/10 before:z-1 relative aspect-[4/5] w-48 overflow-hidden before:absolute before:inset-0 before:border md:w-56">
                            <div
                                aria-hidden
                                className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-32 rounded-full from-pink-400 via-rose-400 to-orange-500 opacity-15 mix-blend-overlay blur-2xl lg:size-64"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop"
                                alt="Team celebration"
                                width={400}
                                height={500}
                                className="size-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-muted-foreground mt-3 text-xs">Launch party - NYC 2024</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
