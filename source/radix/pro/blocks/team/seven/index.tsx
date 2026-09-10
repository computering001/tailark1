import Image from 'next/image'

export default function TeamSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-xl">
                <div className="mb-16 px-6 md:mb-24">
                    <h2 className="text-foreground text-balance text-4xl font-semibold tracking-tight">We build together</h2>
                    <p className="text-muted-foreground mt-4 text-lg">Our team thrives on collaboration, creativity, and a shared commitment to excellence. Every day brings new challenges and opportunities to grow.</p>

                    <div className="mt-8 grid grid-cols-3 gap-4 *:space-y-1">
                        <div>
                            <p className="text-foreground text-2xl font-medium">42</p>
                            <p className="text-muted-foreground text-sm">Team members</p>
                        </div>
                        <div>
                            <p className="text-foreground text-2xl font-medium">12</p>
                            <p className="text-muted-foreground text-sm">Countries</p>
                        </div>
                        <div>
                            <p className="text-foreground text-2xl font-medium">4</p>
                            <p className="text-muted-foreground text-sm">Offices</p>
                        </div>
                    </div>
                </div>

                <div className="relative grid grid-cols-2 gap-6 max-sm:px-2">
                    <div className="not-hover:opacity-50 transition-opacity duration-300">
                        <div className="before:border-foreground/10 before:z-1 relative aspect-square overflow-hidden rounded-2xl shadow-xl shadow-black/5 before:absolute before:inset-0 before:rounded-2xl before:border">
                            <div
                                aria-hidden
                                className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-40 rounded-full from-purple-400 via-blue-400 to-amber-500 opacity-35 mix-blend-overlay blur-2xl md:size-56"
                            />

                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop"
                                alt="Team brainstorming session"
                                width={600}
                                height={600}
                                className="size-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-muted-foreground mt-2 px-2 text-xs">Strategy offsite - Austin 2024</p>
                    </div>
                    <div className="flex">
                        <div className="mt-auto w-3/4">
                            <div className="before:border-foreground/10 before:z-1 relative aspect-square overflow-hidden rounded-2xl shadow-xl shadow-black/5 before:absolute before:inset-0 before:rounded-2xl before:border">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-40 rounded-full from-pink-400 via-teal-400 to-orange-500 opacity-15 mix-blend-overlay blur-2xl md:size-56"
                                />

                                <Image
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340&auto=format&fit=crop"
                                    alt="Team collaboration"
                                    width={600}
                                    height={600}
                                    className="size-full object-cover grayscale"
                                />
                            </div>
                            <p className="text-muted-foreground mt-2 px-2 text-xs">Product launch day - NYC 2024</p>
                        </div>
                    </div>
                    <div className="opacity-100! z-10 -translate-y-6 -rotate-12 scale-110">
                        <div className="before:border-foreground/10 before:z-1 relative aspect-square overflow-hidden rounded-2xl shadow-xl shadow-black/5 before:absolute before:inset-0 before:rounded-2xl before:border">
                            <div
                                aria-hidden
                                className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-40 rounded-full from-indigo-400 via-blue-400 to-cyan-500 opacity-15 mix-blend-overlay blur-2xl md:size-56"
                            />

                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
                                alt="Team workshop"
                                width={600}
                                height={600}
                                className="size-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-muted-foreground mt-2 px-2 text-xs">Design sprint - London 2023</p>
                    </div>
                    <div className="not-hover:opacity-50 transition-opacity duration-300">
                        <div className="before:border-foreground/10 before:z-1 relative aspect-square overflow-hidden rounded-2xl shadow-xl shadow-black/5 before:absolute before:inset-0 before:rounded-2xl before:border">
                            <div
                                aria-hidden
                                className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-40 rounded-full from-violet-400 via-purple-400 to-fuchsia-500 opacity-15 mix-blend-overlay blur-2xl md:size-56"
                            />

                            <Image
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop"
                                alt="Team celebration"
                                width={600}
                                height={600}
                                className="size-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-muted-foreground mt-2 px-2 text-xs">Annual retreat - Tokyo 2024</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
