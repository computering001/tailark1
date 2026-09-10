import { Card } from '@/components/ui/card'
import { Email } from '@/components/illustrations/email'
import { Notes3 } from '@/components/illustrations/notes-3'
import { AiAutocomplete } from '@/components/illustrations/ai-autocomplete'
import { TranslationInterface } from '@/components/illustrations/translation-interface'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

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
                }}
                className="mx-auto max-w-5xl">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4 px-6 lg:mb-10">
                    <h2 className="text-foreground max-w-xs text-balance text-4xl font-semibold tracking-tight">Powerful features for modern teams</h2>
                    <div className="flex items-center gap-2">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent className="gap-1 pt-6">
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="shadow-black/4 flex aspect-square items-center justify-center rounded-2xl shadow-md *:scale-90">
                            <Email />
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">Smart email composition</strong> with AI-powered suggestions, templates, and seamless collaboration for faster communication.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="shadow-black/4 flex aspect-square items-center justify-center rounded-2xl shadow-md *:scale-90">
                            <Notes3 />
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">Organized note-taking</strong> with rich formatting, tagging, and instant search to capture and retrieve ideas effortlessly.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="shadow-black/4 flex aspect-square items-center justify-center rounded-2xl shadow-md *:scale-90">
                            <AiAutocomplete />
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">AI autocomplete</strong> that learns your writing style and provides context-aware suggestions to boost productivity.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="shadow-black/4 flex aspect-square items-center justify-center rounded-2xl shadow-md *:scale-90">
                            <TranslationInterface />
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">Real-time translation</strong> across 50+ languages with automatic detection and natural-sounding output for global teams.
                        </p>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
    )
}
