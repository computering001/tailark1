'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { LazyMotion, domMax, m, AnimatePresence } from 'motion/react'
import { Globe, Bot, Brain } from 'lucide-react'
import { Campaign } from '@/components/illustrations/campaign'
import { Collaboration } from '@/components/illustrations/collaboration'
import { Notes2 } from '@/components/illustrations/notes-2'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
    {
        label: 'AI Models',
        title: 'Unified AI Model Access',
        description: 'Switch between ChatGPT, Claude, and Gemini from a unified interface with seamless provider switching and consistent API responses.',
        icon: Brain,
        illustration: <Campaign />,
        image: 'https://images.unsplash.com/photo-1723869791623-3b6a012f996b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        label: 'Global Reach',
        title: 'Real-Time Global Collaboration',
        description: 'Collaborate in real time with teammates across the globe using live presence indicators, instant syncing, and automatic conflict resolution.',
        icon: Globe,
        illustration: <Collaboration />,
        image: 'https://images.unsplash.com/photo-1721111648084-5e4f18a8635c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        label: 'Smart Agent',
        title: 'Intelligent Workflow Automation',
        description: 'Automate repetitive tasks with context-aware AI agents that learn your workflow patterns and provide intelligent suggestions.',
        icon: Bot,
        illustration: <Notes2 />,
        image: 'https://images.unsplash.com/photo-1770106678115-ec9aa241cdf6?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export default function ExpandableFeatures() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0)

    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

    useEffect(() => {
        const btn = buttonsRef.current[expandedIndex]
        if (btn) {
            const parent = btn.parentElement
            if (parent) {
                setIndicatorStyle({
                    left: btn.offsetLeft,
                    width: btn.offsetWidth,
                })
            }
        }
    }, [expandedIndex])

    const handleSelect = (index: number) => {
        if (index === expandedIndex) return
        setExpandedIndex(index)
    }

    return (
        <LazyMotion features={domMax}>
        <section className="bg-background @container relative overflow-hidden py-24">
            <div className="mx-auto my-1 max-w-6xl px-6">
                <div className="grid items-end gap-6 md:grid-cols-2 lg:gap-12 lg:px-12">
                    <h2 className="text-foreground text-balance text-4xl font-semibold tracking-tight">Ship with confidence using our unified platform</h2>

                    <p className="text-muted-foreground text-balance text-lg">Streamline your workflow with tools designed to enhance productivity at every step.</p>
                </div>
                <div className="mt-6 grid items-end gap-12 md:mt-8 md:grid-cols-2 lg:px-12">
                    <div className="not-dark:bg-muted dark:ring-border ring-muted relative flex w-fit rounded-xl p-1 ring">
                        <m.div
                            aria-hidden
                            className="bg-illustration dark:bg-muted absolute inset-y-1 left-0 rounded-lg shadow"
                            initial={false}
                            animate={{ x: indicatorStyle.left }}
                            layout="size"
                            style={{ width: indicatorStyle.width }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                        {features.map((feature, index) => (
                            <button type="button"
                                key={feature.label}
                                ref={(el) => {
                                    buttonsRef.current[index] = el
                                }}
                                onClick={() => handleSelect(index)}
                                data-state={expandedIndex === index ? 'expanded' : 'collapsed'}
                                className="active:scale-98 group relative cursor-pointer rounded-lg px-3 transition-transform duration-200">
                                <div className="flex h-8 items-center transition-none duration-200">
                                    <span className={cn('group-hover:text-foreground text-sm font-medium transition-colors', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground')}>{feature.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="py-1 max-md:row-start-1">
                        <Button
                            variant="outline"
                            size="sm">
                            <Link href="#">Learn more</Link>
                        </Button>
                    </div>
                </div>

                <div className="mask-b-from-35% mask-b-to-95% mt-6 md:mt-20">
                    <div className="bg-background relative overflow-hidden rounded-t-2xl px-3 pt-3 sm:px-12 sm:pt-12">
                        <AnimatePresence
                            initial={false}
                            mode="popLayout">
                            <m.div
                                variants={{
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0 },
                                }}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5, type: 'spring', bounce: 0.1 }}
                                className="relative z-10 flex aspect-square h-full items-center justify-center -space-x-6 pt-6 sm:-space-x-20 md:aspect-video"
                                key={expandedIndex}>
                                <div className="bg-card ring-border h-full basis-1/2 translate-y-16 rounded-2xl shadow-xl shadow-black/25 ring"></div>
                                <div className="bg-illustration ring-border relative h-full basis-1/2 rounded-2xl shadow-xl shadow-black/25 ring ring-black/25"></div>
                            </m.div>
                        </AnimatePresence>

                        <AnimatePresence
                            initial={false}
                            mode="popLayout">
                            <m.div
                                key={expandedIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="before:border-foreground/10 absolute inset-0 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-t-2xl before:border">
                                <div className="dither absolute inset-0 opacity-25 dark:opacity-30">
                                    <Image
                                        src={features[expandedIndex].image}
                                        alt="feature background image"
                                        fill
                                        sizes="(max-width: 1151px) calc(100vw - 3rem), 1104px"
                                        className="size-full object-cover opacity-50"
                                    />
                                </div>
                                <Image
                                    src={features[expandedIndex].image}
                                    alt="feature background image"
                                    fill
                                    sizes="(max-width: 1151px) calc(100vw - 3rem), 1104px"
                                    className="size-full object-cover opacity-50"
                                />
                            </m.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="relative grid gap-px pt-6 sm:grid-cols-2 md:pt-12 lg:px-12">
                    <h3 className="text-foreground text-lg font-medium">{features[expandedIndex].title}</h3>

                    <p className="text-muted-foreground max-w-sm text-balance">{features[expandedIndex].description}</p>
                </div>
            </div>
        </section>
    
        </LazyMotion>)
}
