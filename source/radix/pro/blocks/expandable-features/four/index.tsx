'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import Notes2 from '@/components/illustrations/notes-2'
import Calendar10 from '@/components/illustrations/calendar-10'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'motion/react'
import AgentTaskPlanning from '@/components/illustrations/agent-task-planning'

const features = [
    {
        title: 'AI Models',
        description: 'Access and switch between multiple AI models including GPT, Claude, and Gemini from a unified interface with seamless provider switching.',
        image: 'https://images.unsplash.com/photo-1770490085047-1460359929e7?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Global Reach',
        description: 'Work with teammates across the globe with real-time presence indicators, seamless syncing, and automatic conflict resolution.',
        image: 'https://images.unsplash.com/photo-1721111648084-5e4f18a8635c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Smart Agent',
        description: 'Deploy intelligent agents that learn your workflow patterns and automate repetitive tasks with context-aware suggestions.',
        image: 'https://images.unsplash.com/photo-1770106678115-ec9aa241cdf6?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

const illustrations = [<Notes2 key="m3" />, <Calendar10 key="map" />, <AgentTaskPlanning key="m4" />]

export default function ExpandableFeatures() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0)

    const handleSelect = (index: number) => {
        if (index === expandedIndex) return
        setExpandedIndex(index)
    }

    return (
        <LazyMotion features={domAnimation}>
        <section className="bg-background @container overflow-hidden py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid sm:grid-cols-7 sm:gap-6 md:gap-12">
                    <div className="flex flex-col gap-12 pb-6 sm:col-span-3 md:py-12">
                        <div className="text-balance">
                            <h2 className="text-foreground text-3xl font-semibold lg:text-4xl tracking-tight">Ship with confidence using our unified platform</h2>
                            <p className="text-muted-foreground mt-6 text-lg">Streamline your workflow with tools designed to enhance productivity at every step.</p>
                        </div>

                        <div className="-ml-6 mt-auto flex flex-col">
                            {features.map((feature, index) => (
                                <button type="button"
                                    key={feature.title}
                                    onClick={() => handleSelect(index)}
                                    className={cn('active:scale-98 relative w-fit cursor-pointer px-6 pb-3 pt-2 text-left text-sm font-medium duration-200', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/75')}>
                                    {feature.title}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="not-sm:overflow-hidden relative sm:col-span-4">
                        <div
                            aria-hidden
                            className="mask-x-from-45% border-foreground/15 pointer-events-none absolute -inset-x-1 -inset-y-10 rotate-45 border-y border-dashed max-lg:hidden"
                        />
                        <div
                            aria-hidden
                            className="mask-y-from-75% border-foreground/15 pointer-events-none absolute -inset-x-1 -inset-y-24 border-x border-dashed"
                        />

                        <div className="corner-tr-bevel corner-bl-bevel aspect-4/5 bg-muted relative overflow-hidden rounded-xl rounded-bl-[5rem] rounded-tr-[5rem]">
                            <AnimatePresence
                                initial={false}
                                mode="popLayout">
                                <m.div
                                    variants={{
                                        initial: { opacity: 0, scale: 0.95, filter: 'blur(4px)' },
                                        animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
                                        exit: { opacity: 0, scale: 0.95, filter: 'blur(4px)' },
                                    }}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.5, type: 'spring', bounce: 0.1 }}
                                    className="scale-85 relative z-10 flex h-full items-center justify-start max-sm:pt-12 md:justify-center"
                                    key={expandedIndex}>
                                    {illustrations[expandedIndex]}
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
                                    className="absolute inset-0">
                                    <Image
                                        src={features[expandedIndex].image}
                                        alt="feature background image"
                                        fill
                                        sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 767px) calc(57vw - 2.5rem), (max-width: 1023px) calc(57vw - 3.5rem), 530px"
                                        className="size-full object-cover opacity-75 dark:opacity-50"
                                    />
                                </m.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        </LazyMotion>)
}
