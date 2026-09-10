import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function ContentSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-4xl px-6">
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="row-span-3 grid grid-rows-subgrid gap-6">
                        <h3 className="text-muted-foreground">Visual Intelligence</h3>
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
                        <p className="text-muted-foreground">
                            Our advanced visual processing system can <strong className="text-foreground font-semibold">analyze and interpret complex images</strong>, enabling applications from medical diagnostics to autonomous navigation and content moderation.
                        </p>
                    </div>
                    <div className="row-span-3 grid grid-rows-subgrid gap-6">
                        <h3 className="text-muted-foreground">Multimodal Learning</h3>
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
                        <p className="text-muted-foreground">
                            Our platform <strong className="text-foreground font-semibold">integrates text, image, and audio processing</strong> into a unified framework, creating more intuitive and powerful AI systems that understand the world more like humans do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
