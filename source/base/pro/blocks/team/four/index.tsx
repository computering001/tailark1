import Image from 'next/image'

export default function TeamSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div>
                    <div className="mx-auto max-w-2xl">
                        <h2 className="text-foreground max-w-sm text-balance text-4xl font-semibold tracking-tight">Built by developers. Backed by experience.</h2>
                        <p className="text-muted-foreground mt-6 max-w-2xl text-balance text-lg">Our team has built products you know and love. Now, we're transforming how businesses connect with customers.</p>
                    </div>
                    <div className="relative mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
                        <div
                            aria-hidden
                            className="bg-linear-to-br z-1 opacity-12.5 pointer-events-none absolute inset-0 m-auto rounded-full from-purple-400 via-blue-400 to-teal-500 mix-blend-overlay blur-2xl"
                        />
                        <div className="group max-sm:col-span-2">
                            <div className="shadow-black/3 before:border-foreground/6.5 before:z-1 relative overflow-hidden rounded-2xl shadow-md before:absolute before:inset-0 before:rounded-2xl before:border">
                                <Image
                                    src="https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Office photo"
                                    width={320}
                                    height={540}
                                    className="not-group-hover:grayscale size-full object-cover transition-[filter] duration-300"
                                />
                            </div>
                        </div>
                        <div className="col-span-2 grid grid-cols-2 gap-3">
                            <div className="shadow-black/3 before:border-foreground/6.5 before:z-1 group relative col-span-2 overflow-hidden rounded-2xl shadow-md before:absolute before:inset-0 before:rounded-2xl before:border hover:z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1758272959063-ef8a2114f807?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Vacations in the mountains photo"
                                    width={920}
                                    height={540}
                                    className="not-group-hover:grayscale size-full object-cover transition-[filter] duration-300"
                                />
                            </div>
                            <div className="shadow-black/3 before:border-foreground/6.5 before:z-1 group relative overflow-hidden rounded-2xl shadow-md before:absolute before:inset-0 before:rounded-2xl before:border hover:z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Office photo"
                                    width={320}
                                    height={540}
                                    className="not-group-hover:grayscale size-full object-cover transition-[filter] duration-300"
                                />
                            </div>
                            <div className="shadow-black/3 before:border-foreground/6.5 before:z-1 group relative overflow-hidden rounded-2xl shadow-md before:absolute before:inset-0 before:rounded-2xl before:border hover:z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Office photo"
                                    width={320}
                                    height={540}
                                    className="not-group-hover:grayscale size-full object-cover transition-[filter] duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
