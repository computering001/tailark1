'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import Notes2 from '@/components/illustrations/notes-2'
import Calendar10 from '@/components/illustrations/calendar-10'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'motion/react'
import AgentTaskPlanning from '@/components/illustrations/agent-task-planning'
import { Globe, Bot, Brain, ShieldCheck, Hourglass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
    {
        title: 'AI Models',
        description: 'Switch between GPT, Claude, and Gemini from a unified interface.',
        icon: Brain,
        image: 'https://images.unsplash.com/photo-1723869791623-3b6a012f996b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Global Reach',
        description: 'Collaborate in real time with teammates across the globe.',
        icon: Globe,
        image: 'https://images.unsplash.com/photo-1721111648084-5e4f18a8635c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Smart Agent',
        description: 'Automate repetitive tasks with context-aware AI agents.',
        icon: Bot,
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
            <div
                aria-hidden
                className="h-px border-b border-dashed"
            />
            <div className="mx-auto my-1 max-w-5xl px-2 sm:px-6">
                <div className="grid sm:gap-6 md:grid-cols-2">
                    <div className="relative">
                        <div
                            aria-hidden
                            className="mask-y-from-85% border-foreground/10 pointer-events-none absolute -inset-x-1 -bottom-96 -top-24 border-x border-dashed"
                        />
                        <div className="flex h-full flex-col gap-12 px-6 pt-6 sm:p-12 sm:pb-6">
                            <div className="text-balance">
                                <h2 className="text-foreground text-4xl font-medium tracking-tight">Ship with confidence using our unified platform</h2>
                                <p className="text-muted-foreground mb-6 mt-4">Streamline your workflow with tools designed to enhance productivity at every step.</p>

                                <Button
                                    render={<Link href="#">Learn more</Link>}
                                    nativeButton={false}
                                    variant="outline"
                                    size="sm"
                                />
                            </div>

                            <div className={cn('mt-auto grid divide-y transition-colors duration-300', expandedIndex === 0 && 'grid-rows-[1fr_auto_auto]', expandedIndex === 1 && 'grid-rows-[auto_1fr_auto]', expandedIndex === 2 && 'grid-rows-[auto_auto_1fr]')}>
                                {features.map((feature, index) => (
                                    <div
                                        key={feature.title}
                                        data-expanded={expandedIndex === index}
                                        className="not-first:border-t not-first:border-t-card group relative grid grid-rows-[auto_1fr]">
                                        <button type="button"
                                            onClick={() => handleSelect(index)}
                                            className="group flex w-full cursor-pointer items-center gap-3 py-4 text-left">
                                            <feature.icon className={cn('size-4 shrink-0 transition-colors', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground')} />
                                            <h3 className={cn('group-hover:text-foreground font-medium transition-colors', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground')}>{feature.title}</h3>
                                        </button>

                                        <div className={cn('grid transition-[grid-template-rows] duration-300', expandedIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                                            <div className="overflow-hidden">
                                                <p className="text-muted-foreground pl-6.5 text-balance pb-6">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="aspect-4/5 relative sm:aspect-square md:aspect-auto">
                        <div
                            aria-hidden
                            className="mask-y-from-85% border-foreground/10 pointer-events-none absolute -inset-x-1 -bottom-96 -top-24 border-x border-dashed"
                        />

                        <div className="relative h-full overflow-hidden rounded-xl">
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
                                    className="relative z-10 h-full"
                                    key={expandedIndex}>
                                    <div className="scale-85 absolute inset-0 m-auto size-fit overflow-hidden">{illustrations[expandedIndex]}</div>
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
                                    <div className="dither absolute inset-0 opacity-75 dark:opacity-25">
                                        <Image
                                            src={features[expandedIndex].image}
                                            alt="feature background image"
                                            fill
                                            sizes="(max-width: 639px) calc(100vw - 1rem), (max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) calc(50vw - 2.25rem), 476px"
                                            className="size-full object-cover opacity-50"
                                        />
                                    </div>
                                    <Image
                                        src={features[expandedIndex].image}
                                        alt="feature background image"
                                        fill
                                        sizes="(max-width: 639px) calc(100vw - 1rem), (max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) calc(50vw - 2.25rem), 476px"
                                        className="size-full object-cover opacity-75 dark:opacity-40"
                                    />
                                </m.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
            <div
                aria-hidden
                className="h-px border-t border-dashed"
            />
            <div className="mx-auto max-w-5xl px-2 py-6 sm:px-6 sm:py-12">
                <div className="@xl:grid-cols-2 @xl:gap-6 grid gap-12 px-6 sm:px-12">
                    <ul className="text-muted-foreground mt-auto space-y-3 text-sm">
                        <li className="flex items-center gap-3">
                            <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                            <span className="text-foreground font-medium">SOC 2</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                            <span className="text-foreground font-medium">ISO 27001</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                            <span className="text-foreground font-medium">GDPR</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Hourglass className="text-muted-foreground size-4 dark:text-blue-500/25" />
                            <span>
                                <span className="text-foreground font-medium">99.9%</span> uptime
                            </span>
                        </li>
                    </ul>

                    <div className="@2xl:pl-12 flex flex-col justify-end">
                        <div className="relative mt-auto max-w-xl">
                            <p className="text-foreground max-w-xs text-balance">"Looks really good. Did you design in code or Figma first?"</p>

                            <div className="mt-4 flex items-center gap-2">
                                <div className="before:border-foreground/10 relative size-10 overflow-hidden rounded-lg shadow before:absolute before:inset-0 before:rounded-lg before:border">
                                    <Image
                                        src="https://avatars.githubusercontent.com/u/124599?v=4"
                                        alt="Shadcn Avatar"
                                        width={56}
                                        height={56}
                                    />
                                </div>

                                <div className="space-y-0.5">
                                    <p className="text-foreground text-sm font-medium">Shadcn</p>
                                    <span className="text-muted-foreground block text-xs">Creator of Shadcn UI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                aria-hidden
                className="h-px border-t border-dashed"
            />
        </section>
    
        </LazyMotion>)
}
