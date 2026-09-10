import Image from 'next/image'

export default function TeamSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="@3xl:grid-cols-2 @3xl:gap-16 grid items-center gap-12">
                    <div>
                        <h2 className="text-foreground text-balance text-4xl font-semibold tracking-tight">A team that ships</h2>
                        <p className="text-muted-foreground mt-4 text-lg">From whiteboard to production — we move fast and build things that matter.</p>

                        <div className="mt-10 grid grid-cols-2 gap-6 *:space-y-1">
                            <div>
                                <p className="text-foreground text-2xl font-medium">156</p>
                                <p className="text-muted-foreground text-sm">Features shipped</p>
                            </div>
                            <div>
                                <p className="text-foreground text-2xl font-medium">24</p>
                                <p className="text-muted-foreground text-sm">Team members</p>
                            </div>
                            <div>
                                <p className="text-foreground text-2xl font-medium">8</p>
                                <p className="text-muted-foreground text-sm">Time zones</p>
                            </div>
                            <div>
                                <p className="text-foreground text-2xl font-medium">∞</p>
                                <p className="text-muted-foreground text-sm">Coffee consumed</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center py-8">
                        <div className="bg-card ring-foreground/5 shadow-black/3 absolute left-0 top-0 -rotate-12 p-3 shadow-xl ring-1 md:p-4">
                            <div className="before:border-foreground/10 before:z-1 relative aspect-square w-32 overflow-hidden before:absolute before:inset-0 before:border md:w-40">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-24 rounded-full from-purple-400 via-blue-400 to-amber-500 opacity-25 mix-blend-overlay blur-2xl"
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop"
                                    alt="Planning session"
                                    width={320}
                                    height={320}
                                    className="size-full object-cover grayscale"
                                />
                            </div>
                            <p className="text-muted-foreground mt-2 text-xs">Sprint planning</p>
                        </div>
                        <div className="bg-card ring-foreground/5 shadow-black/3 z-10 rotate-3 p-3 shadow-xl ring-1 md:p-4">
                            <div className="before:border-foreground/10 before:z-1 relative aspect-[3/4] w-44 overflow-hidden before:absolute before:inset-0 before:border md:w-52">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-32 rounded-full from-indigo-400 via-cyan-400 to-emerald-500 opacity-25 mix-blend-overlay blur-2xl"
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
                                    alt="Team workshop"
                                    width={400}
                                    height={533}
                                    className="size-full object-cover grayscale"
                                />
                            </div>
                            <p className="text-muted-foreground mt-2 text-xs">Design workshop - 2024</p>
                        </div>
                        <div className="bg-card ring-foreground/5 shadow-black/3 absolute bottom-0 right-0 -rotate-6 p-3 shadow-xl ring-1 md:p-4">
                            <div className="before:border-foreground/10 before:z-1 relative aspect-square w-32 overflow-hidden before:absolute before:inset-0 before:border md:w-40">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-24 rounded-full from-pink-400 via-rose-400 to-orange-500 opacity-25 mix-blend-overlay blur-2xl"
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop"
                                    alt="Team celebration"
                                    width={320}
                                    height={320}
                                    className="size-full object-cover grayscale"
                                />
                            </div>
                            <p className="text-muted-foreground mt-2 text-xs">Ship day</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
