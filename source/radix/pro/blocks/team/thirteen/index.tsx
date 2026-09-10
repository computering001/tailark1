import Image from 'next/image'

export default function TeamSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-4xl px-6">
                <div className="text-center">
                    <h2 className="text-foreground text-balance text-4xl font-semibold tracking-tight">Our journey so far</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance text-lg">From garage startup to global team — every moment has shaped who we are.</p>
                </div>

                <div className="relative mt-20">
                    <div
                        aria-hidden
                        className="bg-border mask-y-from-85% @max-md:hidden absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
                    />

                    <div className="space-y-16">
                        <div className="@max-md:flex-col flex items-center justify-center gap-8 md:gap-16">
                            <div className="bg-card ring-border shadow-black/3 -rotate-6 p-3 shadow-xl ring-1 md:p-4">
                                <div className="before:border-foreground/10 before:z-1 relative aspect-[4/3] w-40 overflow-hidden before:absolute before:inset-0 before:border md:w-52">
                                    <div
                                        aria-hidden
                                        className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-32 rounded-full from-purple-400 via-blue-400 to-amber-500 opacity-35 mix-blend-overlay blur-2xl"
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop"
                                        alt="Early days"
                                        width={400}
                                        height={300}
                                        className="size-full object-cover grayscale"
                                    />
                                </div>
                                <p className="text-muted-foreground mt-2 text-xs">Where it all began - 2021</p>
                            </div>
                            <div
                                aria-hidden
                                className="bg-background @max-md:hidden ring-foreground/10 z-10 flex size-4 -translate-x-3/4 items-center justify-center rounded-full ring-2 md:-translate-x-full"
                            />
                            <div className="w-40 md:w-52">
                                <p className="text-foreground font-medium">The beginning</p>
                                <p className="text-muted-foreground mt-1 text-sm">Three founders, one vision, and a cramped garage office.</p>
                            </div>
                        </div>

                        <div className="@max-md:flex-col @md:flex-row-reverse flex items-center justify-center gap-8 md:gap-16">
                            <div className="bg-card ring-foreground/5 shadow-black/3 rotate-6 p-3 shadow-xl ring-1 md:p-4">
                                <div className="before:border-foreground/10 before:z-1 relative aspect-[4/3] w-40 overflow-hidden before:absolute before:inset-0 before:border md:w-52">
                                    <div
                                        aria-hidden
                                        className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-32 rounded-full from-pink-400 via-teal-400 to-orange-500 opacity-35 mix-blend-overlay blur-2xl"
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
                                        alt="First office"
                                        width={400}
                                        height={300}
                                        className="size-full object-cover grayscale"
                                    />
                                </div>
                                <p className="text-muted-foreground mt-2 text-xs">First real office - 2022</p>
                            </div>
                            <div
                                aria-hidden
                                className="bg-background @max-md:hidden ring-foreground/10 z-10 flex size-4 translate-x-3/4 items-center justify-center rounded-full ring-2 md:translate-x-full"
                            />
                            <div className="@md:text-right w-40 md:w-52">
                                <p className="text-foreground font-medium">Growing pains</p>
                                <p className="text-muted-foreground mt-1 text-sm">Moved to our first office. Team grew to 15.</p>
                            </div>
                        </div>

                        <div className="@max-md:flex-col flex items-center justify-center gap-8 md:gap-16">
                            <div className="bg-card ring-foreground/5 shadow-black/3 -rotate-3 p-3 shadow-xl ring-1 md:p-4">
                                <div className="before:border-foreground/10 before:z-1 relative aspect-[4/3] w-40 overflow-hidden before:absolute before:inset-0 before:border md:w-52">
                                    <div
                                        aria-hidden
                                        className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-32 rounded-full from-emerald-400 via-cyan-400 to-blue-500 opacity-25 mix-blend-overlay blur-2xl"
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop"
                                        alt="Today"
                                        width={400}
                                        height={300}
                                        className="size-full object-cover grayscale"
                                    />
                                </div>
                                <p className="text-muted-foreground mt-2 text-xs">Global team - 2024</p>
                            </div>
                            <div
                                aria-hidden
                                className="bg-background @max-md:hidden ring-primary z-10 flex size-4 -translate-x-3/4 items-center justify-center rounded-full ring-2 md:-translate-x-full"
                            />
                            <div className="w-40 md:w-52">
                                <p className="text-foreground font-medium">Today</p>
                                <p className="text-muted-foreground mt-1 text-sm">50+ team members across 12 countries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
