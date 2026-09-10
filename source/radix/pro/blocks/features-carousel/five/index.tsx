import { Notes3 } from '@/components/illustrations/notes-3'
import { Models3 } from '@/components/illustrations/models-3'
import { Workflow } from '@/components/illustrations/workflow'
import { AiAutocomplete } from '@/components/illustrations/ai-autocomplete'
import { Map } from '@/components/illustrations/map'
import { Flow5 } from '@/components/illustrations/flow-5'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card } from '@/components/ui/card'

export default function FeaturesSliderSection() {
    return (
        <section className="bg-background @container py-24 max-lg:px-1">
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                    breakpoints: {
                        '(max-width: 768px)': {
                            slidesToScroll: 1,
                        },
                        '(min-width: 768px)': {
                            slidesToScroll: 2,
                        },
                    },
                }}>
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid items-end gap-6 md:grid-cols-2 md:gap-12 lg:gap-24">
                        <h2 className="text-foreground max-w-md text-balance text-4xl font-semibold lg:text-5xl tracking-tight">Build modern AI development tools</h2>

                        <p className="text-muted-foreground text-balance text-lg leading-relaxed">Our platform combines cutting-edge AI models with intuitive interfaces to streamline your development workflow and boost productivity.</p>
                    </div>
                </div>
                <div className="mask-x-from-98% mx-auto max-w-5xl">
                    <CarouselContent className="mx-0 py-12 *:px-1">
                        <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                            <Card className="grid-rows-subrgid shadow-black/4 row-span-2 grid h-full gap-6 rounded-2xl p-6 shadow-lg">
                                <div className="mx-auto scale-90 self-center">
                                    <Notes3 />
                                </div>
                                <div className="space-y-3 self-end">
                                    <h3 className="text-foreground font-medium">Collaborative documentation</h3>
                                    <p className="text-foreground/65 text-balance">With version history, inline comments, and real-time editing.</p>
                                </div>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 lg:basis-2/3">
                            <Card className="grid-rows-subrgid shadow-black/4 row-span-2 grid h-full gap-6 overflow-hidden rounded-2xl p-6 shadow-lg">
                                <div className="m-auto scale-90 self-center">
                                    <Models3 />
                                </div>
                                <div className="space-y-3 self-end">
                                    <h3 className="text-foreground font-medium">Multiple AI models</h3>
                                    <p className="text-foreground/65 text-balance">Including GPT-5, Claude, and Llama with seamless switching between providers and unified API access for all your AI needs.</p>
                                </div>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                            <Card className="grid-rows-subrgid shadow-black/4 row-span-2 grid h-full gap-6 rounded-2xl p-6 shadow-lg">
                                <div className="mx-auto origin-bottom scale-90 self-center">
                                    <Workflow />
                                </div>
                                <div className="space-y-3 self-end">
                                    <h3 className="text-foreground font-medium">Automated workflows</h3>
                                    <p className="text-foreground/65 text-balance">With drag-and-drop pipeline builder and pre-built integrations.</p>
                                </div>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 lg:basis-2/3">
                            <Card className="grid-rows-subrgid shadow-black/4 row-span-2 grid h-full gap-6 overflow-hidden rounded-2xl p-6 shadow-lg">
                                <div className="origin-bottom scale-90 self-center">
                                    <Map />
                                </div>
                                <div className="max-w-xs space-y-3 self-end sm:max-w-full">
                                    <h3 className="text-foreground font-medium">Global infrastructure</h3>
                                    <p className="text-foreground/65 text-balance">Deploy across multiple regions with automatic failover, low latency connections, and intelligent traffic routing.</p>
                                </div>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                            <Card className="grid-rows-subrgid shadow-black/4 row-span-2 grid h-full gap-6 rounded-2xl p-6 shadow-lg">
                                <div className="mx-auto origin-bottom scale-90 self-center">
                                    <AiAutocomplete />
                                </div>
                                <div className="space-y-3 self-end">
                                    <h3 className="text-foreground font-medium">Intelligent code completion</h3>
                                    <p className="text-foreground/65 text-balance">Understands your codebase and suggests context-aware snippets.</p>
                                </div>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="sm:basis-1/2 lg:basis-2/3">
                            <Card className="grid-rows-subrgid shadow-black/4 row-span-2 grid h-full gap-6 overflow-hidden rounded-2xl p-6 shadow-lg">
                                <div className="scale-80 max-sm:-translate-x-22 self-center sm:max-lg:-translate-x-10">
                                    <Flow5 />
                                </div>
                                <div className="space-y-3 self-end">
                                    <h3 className="text-foreground font-medium">Visual flow builder</h3>
                                    <p className="text-foreground/65 text-balance">Create complex data pipelines with an intuitive visual interface, drag-and-drop nodes, and real-time preview of your workflow execution.</p>
                                </div>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </section>
    )
}
