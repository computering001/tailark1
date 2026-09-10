'use client'
import { ChevronRight, Star } from 'lucide-react'
import { Stripe } from '@/components/ui/svgs/stripe'
import { Hulu } from '@/components/ui/svgs/hulu'
import { motion } from 'motion/react'
import { useState, useLayoutEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import * as Tabs from '@radix-ui/react-tabs'
import { Bolt } from '@/components/ui/svgs/bolt'
import Image from 'next/image'

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

type TestimonialId = 'stripe' | 'hulu' | 'bolt'

export default function TestimonialsSection() {
    const [testimonial, setTestimonial] = useState<TestimonialId>('stripe')
    const [indicator, setIndicator] = useState({
        left: 0,
        width: 0,
        color: '#000000',
    })

    useLayoutEffect(() => {
        const activeTrigger = document.getElementById(testimonial) as HTMLElement

        console.log(activeTrigger)

        if (activeTrigger) {
            let color = '#000000'
            if (testimonial === 'stripe') color = '#635bff'
            else if (testimonial === 'hulu') color = '#1CE783'
            else if (testimonial === 'bolt') color = 'var(--color-foreground)'

             
            setIndicator({
                left: activeTrigger.offsetLeft,
                width: activeTrigger.offsetWidth,
                color,
            })
        }
    }, [testimonial])

    return (
        <section className="bg-background py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <Tabs.Root
                    className="mx-auto max-w-3xl"
                    defaultValue={testimonial}
                    onValueChange={(value) => setTestimonial(value as TestimonialId)}>
                    <div className="flex gap-1">
                        <Star className="fill-background stroke-background size-5 drop-shadow" />
                        <Star className="fill-background stroke-background size-5 drop-shadow" />
                        <Star className="fill-background stroke-background size-5 drop-shadow" />
                        <Star className="fill-background stroke-background size-5 drop-shadow" />
                        <Star className="fill-background stroke-background size-5 drop-shadow" />
                    </div>
                    <div className="relative my-12 -ml-6 w-fit p-0.5">
                        <div className="border-foreground/10 mask-x-from-75% mask-l-from-95% absolute -inset-y-px -left-2 -right-8 border-y"></div>
                        <motion.span
                            animate={{ x: indicator.left + 20, width: indicator.width - 44 }}
                            layout
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                            style={{ backgroundColor: indicator.color }}
                            className="absolute bottom-0 flex h-px translate-y-px rounded-full"
                        />
                        <Tabs.List className="flex items-center gap-1">
                            <Tabs.TabsTrigger
                                value="stripe"
                                id="stripe"
                                className="hover:bg-foreground/5 not-last:before:absolute not-last:before:-right-[2.5px] not-last:before:inset-y-0.5 not-last:before:w-px not-last:before:bg-foreground/10 relative flex h-10 items-center rounded px-6 transition-colors duration-200">
                                <Stripe className="h-auto w-12" />
                            </Tabs.TabsTrigger>
                            <Tabs.TabsTrigger
                                value="hulu"
                                id="hulu"
                                className="hover:bg-foreground/5 not-last:before:absolute not-last:before:-right-[2.5px] not-last:before:inset-y-0.5 not-last:before:w-px not-last:before:bg-foreground/10 relative flex h-10 items-center rounded px-6 transition-colors duration-200">
                                <Hulu className="h-auto w-12" />
                            </Tabs.TabsTrigger>
                            <Tabs.TabsTrigger
                                value="bolt"
                                id="bolt"
                                className="hover:bg-foreground/5 not-last:before:absolute not-last:before:-right-[2.5px] not-last:before:inset-y-0.5 not-last:before:w-px not-last:before:bg-foreground/10 relative flex h-10 items-center rounded px-6 transition-colors duration-200">
                                <Bolt className="h-auto w-10" />
                            </Tabs.TabsTrigger>
                        </Tabs.List>
                    </div>
                    <Tabs.Content value="stripe">
                        <div className="mt-12 space-y-8 border-b pb-12">
                            <p className="md:text-2xl/8.5 text-balance text-xl font-medium">Stripe leveraged our platform to streamline payment processing workflows, resulting in a 40% reduction in integration time for new merchants. Our API-first approach allowed their team to customize payment flows while maintaining PCI compliance across all touchpoints.</p>
                            <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="pr-1.5">
                                <Link href={`/case-studies/stripe`}>
                                    Read Case Study
                                    <ChevronRight
                                        className="scale-90 opacity-50"
                                        strokeWidth="2.5"
                                    />
                                </Link>
                            </Button>
                        </div>
                        <div className="border-background border-t pt-12">
                            <p className='text-balance text-lg before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"]'>The platform has dramatically improved our payment processing capabilities. We now onboard merchants 40% faster while maintaining top-tier security standards. The developer experience is exceptional.</p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring-1">
                                    <Image
                                        src={BERNARD_AVATAR}
                                        alt="Bernard Ngandu's avatar"
                                        width={120}
                                        height={120}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="space-y-px">
                                    <p className="text-sm font-medium">Bernard Ngandu</p>
                                    <p className="text-muted-foreground text-xs">Backend Engineer, Stripe</p>
                                </div>
                            </div>
                        </div>
                    </Tabs.Content>

                    <Tabs.Content value="hulu">
                        <div className="mt-12 space-y-8 border-b pb-12">
                            <p className="md:text-2xl/8.5 text-balance text-xl font-medium">
                                Hulu implemented our streaming optimization suite to <strong>reduce buffering by 62% during peak viewing hours</strong>. Our technology enabled them to deliver high-definition content with minimal latency, significantly improving user retention and session duration metrics.
                            </p>
                            <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="pr-1.5">
                                <Link href="/case-studies/hulu">
                                    Read Case Study
                                    <ChevronRight
                                        className="scale-90 opacity-50"
                                        strokeWidth="2.5"
                                    />
                                </Link>
                            </Button>
                        </div>
                        <div className="border-background border-t pt-12">
                            <p className='text-balance text-lg before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"]'>Our streaming performance has seen remarkable improvements since implementation. The reduction in buffering has directly translated to longer viewer sessions and higher retention rates across all our content categories.</p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring-1">
                                    <Image
                                        src={MESCHAC_AVATAR}
                                        alt="Méschac Irung's avatar"
                                        width={120}
                                        height={120}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="space-y-px">
                                    <p className="text-sm font-medium">Méschac Irung</p>
                                    <p className="text-muted-foreground text-xs">UI Engineer, Hulu</p>
                                </div>
                            </div>
                        </div>
                    </Tabs.Content>

                    <Tabs.Content value="bolt">
                        <div className="mt-12 space-y-8 border-b pb-12">
                            <p className="md:text-2xl/8.5 text-xl font-medium">
                                Bolt utilized our recommendation engine to <strong>increase viewer engagement by 27% and content discovery by 35%</strong>. Our machine learning algorithms helped them deliver personalized content suggestions that significantly improved user satisfaction.
                            </p>
                            <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="pr-1.5">
                                <Link href="/case-studies/bolt">
                                    Read Case Study
                                    <ChevronRight
                                        className="scale-90 opacity-50"
                                        strokeWidth="2.5"
                                    />
                                </Link>
                            </Button>
                        </div>
                        <div className="border-background border-t pt-12">
                            <p className='text-balance text-lg before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"]'>The recommendation engine has revolutionized how our users discover content. We've measured significant improvements in engagement metrics, and the personalization capabilities continue to exceed our expectations.</p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring-1">
                                    <Image
                                        src={GLODIE_AVATAR}
                                        alt="Glodie Lukose's avatar"
                                        width={120}
                                        height={120}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="space-y-px">
                                    <p className="text-sm font-medium">Glodie Lukose</p>
                                    <p className="text-muted-foreground text-xs">Frontend Engineer, Bolt</p>
                                </div>
                            </div>
                        </div>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </section>
    )
}
