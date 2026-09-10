import { Brain } from 'lucide-react'
import Image from 'next/image'

export default function TeamSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="@3xl:grid-cols-2 @3xl:gap-24 grid gap-12">
                    <div className="@3xl:sticky @3xl:top-20 @3xl:max-w-sm self-start">
                        <Brain className="stroke-background fill-foreground/10 size-8 drop-shadow" />

                        <h2 className="text-foreground mt-8 text-balance text-3xl font-semibold tracking-tight">Moments worth sharing</h2>
                        <p className="text-muted-foreground mt-6 text-lg">The best teams aren't just built — they're bonded through shared experiences.</p>

                        <dl className="mt-10 space-y-6">
                            <div className="flex gap-4">
                                <div className="text-muted-foreground mt-0.5 w-8 font-mono text-xs">Q1</div>
                                <div className="@md:grid-cols-[auto_1fr] @md:gap-6 grid gap-3">
                                    <dt className="text-foreground w-40 text-sm font-medium">Winter Hackathon</dt>
                                    <dd className="text-muted-foreground text-sm">48 hours of building, coding, and creating together</dd>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-muted-foreground mt-0.5 w-8 font-mono text-xs">Q2</div>
                                <div className="@md:grid-cols-[auto_1fr] @md:gap-6 grid gap-3">
                                    <dt className="text-foreground w-40 text-sm font-medium">Spring Retreat</dt>
                                    <dd className="text-muted-foreground text-sm">Team bonding and strategy sessions in Lisbon</dd>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-muted-foreground mt-0.5 w-8 font-mono text-xs">Q3</div>
                                <div className="@md:grid-cols-[auto_1fr] @md:gap-6 grid gap-3">
                                    <dt className="text-foreground w-40 text-sm font-medium">Product Launch</dt>
                                    <dd className="text-muted-foreground text-sm">Shipped our biggest release with 50+ new features</dd>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-muted-foreground mt-0.5 w-8 font-mono text-xs">Q4</div>
                                <div className="@md:grid-cols-[auto_1fr] @md:gap-6 grid gap-3">
                                    <dt className="text-foreground w-40 text-sm font-medium">Holiday Party</dt>
                                    <dd className="text-muted-foreground text-sm">Celebrating another successful year with the team</dd>
                                </div>
                            </div>
                        </dl>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-card ring-foreground/5 shadow-black/3 -rotate-2 p-3 shadow-xl ring-1 md:p-4">
                            <div className="before:border-foreground/10 before:z-1 relative aspect-[4/5] overflow-hidden before:absolute before:inset-0 before:border">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-32 rounded-full from-purple-400 via-blue-400 to-amber-500 opacity-25 mix-blend-overlay blur-2xl md:size-64"
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop"
                                    alt="Hackathon"
                                    width={400}
                                    height={500}
                                    className="size-full object-cover grayscale"
                                />
                            </div>
                            <p className="text-muted-foreground mt-3 text-xs">Hackathon winners - Jan 2024</p>
                        </div>
                        <div className="bg-card ring-foreground/5 shadow-black/3 mt-8 h-fit rotate-3 self-end p-3 shadow-xl ring-1 md:p-4">
                            <div className="before:border-foreground/10 before:z-1 relative aspect-square overflow-hidden before:absolute before:inset-0 before:border">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-32 rounded-full from-pink-400 via-teal-400 to-orange-500 opacity-50 mix-blend-overlay blur-2xl"
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2340&auto=format&fit=crop"
                                    alt="Retreat"
                                    width={400}
                                    height={400}
                                    className="size-full object-cover grayscale"
                                />
                            </div>
                            <p className="text-muted-foreground mt-3 text-xs">Lisbon retreat - Apr 2024</p>
                        </div>
                        <div className="bg-card ring-foreground/5 shadow-black/3 col-span-2 -rotate-1 p-3 shadow-xl ring-1 md:p-4">
                            <div className="before:border-foreground/10 before:z-1 relative aspect-video overflow-hidden before:absolute before:inset-0 before:border">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-40 rounded-full from-indigo-400 via-cyan-400 to-emerald-500 opacity-15 mix-blend-overlay blur-2xl md:size-72"
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
                                    alt="Launch day"
                                    width={800}
                                    height={450}
                                    className="size-full object-cover grayscale"
                                />
                            </div>
                            <p className="text-muted-foreground mt-3 text-xs">Launch day celebration - Sep 2024</p>
                        </div>
                        <div className="bg-card ring-foreground/5 shadow-black/3 h-fit rotate-2 p-3 shadow-xl ring-1 md:p-4">
                            <div className="before:border-foreground/10 before:z-1 relative aspect-square overflow-hidden before:absolute before:inset-0 before:border">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-32 rounded-full from-violet-400 via-purple-400 to-fuchsia-500 opacity-25 mix-blend-overlay blur-2xl"
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop"
                                    alt="Holiday party"
                                    width={400}
                                    height={400}
                                    className="size-full object-cover grayscale"
                                />
                            </div>
                            <p className="text-muted-foreground mt-3 text-xs">Holiday party - Dec 2024</p>
                        </div>
                        <div className="bg-card ring-foreground/5 shadow-black/3 -mt-4 -rotate-3 p-3 shadow-xl ring-1 md:p-4">
                            <div className="before:border-foreground/10 before:z-1 relative aspect-[4/5] overflow-hidden before:absolute before:inset-0 before:border">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-32 rounded-full from-amber-400 via-orange-400 to-red-500 opacity-25 mix-blend-overlay blur-2xl"
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340&auto=format&fit=crop"
                                    alt="End of year"
                                    width={400}
                                    height={500}
                                    className="size-full object-cover grayscale"
                                />
                            </div>
                            <p className="text-muted-foreground mt-3 text-xs">Looking ahead - Dec 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
