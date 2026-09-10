import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function ContentSection() {
    return (
        <section className="bg-background @container py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-muted-foreground text-balance text-4xl font-semibold md:w-2/3 tracking-tight">
                    Building the next generation of <strong className="text-foreground font-semibold">AI-powered Marketing Tools</strong>
                </h2>
                <div className="@3xl:grid-cols-3 @xl:grid-cols-2 mt-12 grid gap-6">
                    <div className="row-span-4 grid grid-rows-subgrid gap-4">
                        <AspectRatio
                            ratio={1 / 1}
                            className="ring-border rounded-xl border border-transparent bg-white p-6 shadow ring-1">
                            <Image
                                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/time_djv8te.webp"
                                alt="Visual intelligence representation"
                                width={1278}
                                height={900}
                                className="aspect-square size-full object-cover"
                            />
                        </AspectRatio>
                        <h3 className="text-muted-foreground text-sm">Not a Bad Story</h3>
                        <p className="text-muted-foreground">
                            Our platform <strong className="text-foreground font-semibold">integrates text, image, and audio processing</strong> into a unified framework.
                        </p>
                        <Link
                            href="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/ai-human-2_uo6bxc.jpg"
                            className="text-primary hover:text-foreground flex items-center gap-1 text-sm transition-colors duration-200">
                            Read more
                            <ChevronRight className="size-3.5 translate-y-px" />
                        </Link>
                    </div>
                    <div className="row-span-4 grid grid-rows-subgrid gap-4">
                        <AspectRatio
                            ratio={1 / 1}
                            className="ring-border rounded-xl border border-transparent bg-white p-6 shadow ring-1">
                            <Image
                                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/dots-2_kmiukp.webp"
                                alt="Multimodal learning visualization"
                                width="1388"
                                height="1388"
                                className="size-full object-cover"
                            />
                        </AspectRatio>
                        <h3 className="text-muted-foreground text-sm">Made 3M in 2 years</h3>
                        <p className="text-muted-foreground">
                            Our platform <strong className="text-foreground font-semibold">integrates text, image, and audio processing</strong> into a unified framework.
                        </p>
                        <Link
                            href="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/ai-human-2_uo6bxc.jpg"
                            className="text-primary hover:text-foreground flex items-center gap-1 text-sm transition-colors duration-200">
                            Read more
                            <ChevronRight className="size-3.5 translate-y-px" />
                        </Link>
                    </div>
                    <div className="row-span-4 grid grid-rows-subgrid gap-4">
                        <AspectRatio
                            ratio={1 / 1}
                            className="bg-card ring-border rounded-xl border border-transparent shadow ring-1">
                            <Image
                                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/dna_lp2xey.webp"
                                alt="Multimodal learning visualization"
                                width="1388"
                                height="1388"
                                className="size-full rounded-xl object-cover"
                            />
                        </AspectRatio>
                        <h3 className="text-muted-foreground text-sm">Raised 10M </h3>
                        <p className="text-muted-foreground">
                            Our platform <strong className="text-foreground font-semibold">integrates text, image, and audio processing</strong> into a unified framework.
                        </p>
                        <Link
                            href="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/ai-human-2_uo6bxc.jpg"
                            className="text-primary hover:text-foreground flex items-center gap-1 text-sm transition-colors duration-200">
                            Read more
                            <ChevronRight className="size-3.5 translate-y-px" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
