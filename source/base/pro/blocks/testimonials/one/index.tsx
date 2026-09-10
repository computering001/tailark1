'use client'
import { Card } from '@/components/ui/card'
import { Stripe } from '@/components/ui/svgs/stripe'
import { Hulu } from '@/components/ui/svgs/hulu'
import { Primevideo } from '@/components/ui/svgs/prime'
import { LogoButton } from './logo-button'
import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

const testimonialsData = [
    {
        id: 'stripe' as const,
        LogoComponent: Stripe,
        cardLogoProps: { className: 'h-7 w-16' },
        buttonLogoProps: { height: 20, width: 56 },
        text: 'Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences.',
        avatar: BERNARD_AVATAR,
        name: 'Bernard Ngandu',
        title: 'Backend Engineer',
        brandColor: '#635bff',
    },
    {
        id: 'hulu' as const,
        LogoComponent: Hulu,
        cardLogoProps: { className: 'h-7 w-16' },
        buttonLogoProps: { height: 20, width: 44 },
        text: 'Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences.',
        avatar: MESCHAC_AVATAR,
        name: 'Méschac Irung',
        title: 'UI Engineer',
        brandColor: '#1CE783',
    },
    {
        id: 'prime' as const,
        LogoComponent: Primevideo,
        cardLogoProps: { className: 'h-7 w-20' },
        buttonLogoProps: { height: 24, width: 64 },
        text: 'Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences.',
        avatar: GLODIE_AVATAR,
        name: 'Glodie Lukose',
        title: 'Frontend Engineer',
        brandColor: '#00A8E1',
    },
]

type TestimonialId = (typeof testimonialsData)[number]['id']

const animationVariants = {
    exit: { opacity: 0, x: -12 },
    initial: { opacity: 0, x: -12 },
    animate: { opacity: 1, x: 0 },
}

export default function Testimonials() {
    const [testimonial, setTestimonial] = useState<TestimonialId>('hulu')
    const [indicatorLeft, setIndicatorLeft] = useState(0)
    const [indicatorWidth, setIndicatorWidth] = useState(0)
    const [indicatorColor, setIndicatorColor] = useState(testimonialsData.find((t) => t.id === 'hulu')?.brandColor || '#000000')

    const stripeButtonRef = useRef<HTMLButtonElement>(null)
    const huluButtonRef = useRef<HTMLButtonElement>(null)
    const primeButtonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        let activeButtonRef: React.RefObject<HTMLButtonElement | null> | null = null
        const currentData = testimonialsData.find((t) => t.id === testimonial)

        if (testimonial === 'stripe') {
            activeButtonRef = stripeButtonRef
        } else if (testimonial === 'hulu') {
            activeButtonRef = huluButtonRef
        } else if (testimonial === 'prime') {
            activeButtonRef = primeButtonRef
        }

        if (activeButtonRef?.current && currentData) {
            setIndicatorLeft(activeButtonRef.current.offsetLeft)
            setIndicatorWidth(activeButtonRef.current.offsetWidth)
            setIndicatorColor(currentData.brandColor)
        }
    }, [testimonial])

    return (
        <section className="bg-background py-16 md:py-44">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative mx-auto max-w-xl">
                    <AnimatePresence
                        initial={false}
                        mode="popLayout">
                        {(() => {
                            const currentTestimonialData = testimonialsData.find((t) => t.id === testimonial)
                            if (!currentTestimonialData) return null
                            const { LogoComponent, cardLogoProps, text, avatar, name, title, id } = currentTestimonialData
                            return (
                                <motion.div
                                    key={id}
                                    variants={animationVariants}
                                    exit="exit"
                                    initial="initial"
                                    animate="animate"
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="relative z-10">
                                    <Card className="space-y-8 rounded-2xl p-10 shadow-lg">
                                        <div>
                                            <LogoComponent {...cardLogoProps} />
                                        </div>
                                        <p className='text-lg before:mr-1 before:font-serif before:content-["\201C"] after:ml-1 after:font-serif after:content-["\201D"]'>{text}</p>
                                        <div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                            <div className="ring-border aspect-square size-12 overflow-hidden rounded-xl border border-transparent shadow-md shadow-black/15 ring-1">
                                                <Image
                                                    src={avatar}
                                                    alt={`Avatar of ${name}`}
                                                    width={120}
                                                    height={120}
                                                />
                                            </div>
                                            <div className="space-y-0.5 text-base *:block">
                                                <span className="text-foreground font-medium">{name}</span>
                                                <span className="text-muted-foreground text-sm">{title}</span>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            )
                        })()}
                    </AnimatePresence>
                </div>
                <div className="border-foreground/10 bg-background mask-x-from-75% relative mx-auto mt-6 max-w-xl border-y border-dashed px-4 py-0.5">
                    <motion.span
                        animate={{ x: indicatorLeft + 6, width: indicatorWidth - 44 }}
                        layout
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                        style={{ backgroundColor: indicatorColor }}
                        className="absolute top-0 flex h-px -translate-y-px rounded-full"
                    />
                    <div className="flex items-center justify-center gap-1">
                        <LogoButton
                            buttonRef={stripeButtonRef}
                            label="Stripe"
                            onClick={() => setTestimonial('stripe' as TestimonialId)}
                            LogoComponent={Stripe}
                            logoHeight={20}
                            logoWidth={56}
                        />
                        <LogoButton
                            buttonRef={huluButtonRef}
                            label="Hulu"
                            onClick={() => setTestimonial('hulu' as TestimonialId)}
                            LogoComponent={Hulu}
                            logoHeight={20}
                            logoWidth={44}
                        />
                        <LogoButton
                            buttonRef={primeButtonRef}
                            label="Primevideo"
                            onClick={() => setTestimonial('prime' as TestimonialId)}
                            LogoComponent={Primevideo}
                            logoHeight={28}
                            logoWidth={64}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
