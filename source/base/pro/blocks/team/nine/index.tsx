import Image from 'next/image'

export default function TeamSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl">
                <div className="mx-auto mb-16 max-w-xl px-6 text-center md:mb-24">
                    <h2 className="text-foreground text-balance text-4xl font-semibold tracking-tight">We build together</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Our team thrives on collaboration, creativity, and a shared commitment to excellence. </p>
                </div>

                <div className="relative grid grid-cols-3 place-items-end -space-x-20">
                    <div className="bg-card ring-border shadow-black/3 -rotate-20 h-fit p-4 shadow-xl ring-1">
                        <div className="before:border-foreground/10 before:z-1 aspect-3/2 relative overflow-hidden before:absolute before:inset-0 before:border">
                            <div
                                aria-hidden
                                className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-40 rounded-full from-purple-400 via-blue-400 to-amber-500 opacity-25 mix-blend-overlay blur-2xl md:size-56 lg:size-96"
                            />

                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
                                alt="Team workshop"
                                width={600}
                                height={600}
                                className="size-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-muted-foreground mt-3 text-xs">Design sprint - London 2023</p>
                    </div>
                    <div className="bg-card ring-foreground/5 shadow-black/3 h-fit -rotate-12 p-4 shadow-xl ring-1">
                        <div className="before:border-foreground/10 before:z-1 relative aspect-square overflow-hidden before:absolute before:inset-0 before:border">
                            <div
                                aria-hidden
                                className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-40 rounded-full from-cyan-400 via-blue-400 to-amber-500 opacity-15 mix-blend-overlay blur-2xl md:size-56"
                            />

                            <Image
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2340&auto=format&fit=crop"
                                alt="Team celebration"
                                width={600}
                                height={600}
                                className="size-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-muted-foreground mt-2 text-xs">Annual retreat - Tokyo 2024</p>
                    </div>
                    <div className="bg-card ring-foreground/5 shadow-black/3 h-fit rotate-6 p-4 shadow-xl ring-1">
                        <div className="before:border-foreground/10 before:z-1 relative aspect-square overflow-hidden before:absolute before:inset-0 before:border">
                            <div
                                aria-hidden
                                className="bg-linear-to-r z-1 pointer-events-none absolute inset-0 m-auto size-40 rounded-full from-pink-400 via-indigo-400 to-red-500 opacity-15 mix-blend-overlay blur-2xl md:size-56"
                            />

                            <Image
                                src="https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1287&auto=format&fit=crop"
                                alt="Team member portrait"
                                width={600}
                                height={600}
                                className="size-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-muted-foreground mt-2 text-xs">Strategy offsite - Austin 2024</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
