'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'motion/react'
import { Bot, Brain, Hourglass, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import AgentFeedback from '@/components/illustrations/agent-feedback'
import Email from '@/components/illustrations/email'

const Metrics = () => {
    return (
        <ul className="text-muted-foreground mt-auto space-y-3 pt-8 text-sm">
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
    )
}

const ShadTestimonial = () => {
    return (
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
    )
}

const features = [
    {
        title: 'Accelerate development with AI-powered assistance',
        label: 'AI Models',
        description: 'Switch between GPT, Claude, and Gemini from a unified interface with seamless provider switching.',
        icon: Brain,
        supportiveContent: <Metrics />,
        illustration: <Email key="m3" />,
        image: 'https://images.unsplash.com/photo-1600223260976-32a509b23602?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Automate your workflows with intelligent agents',
        label: 'Smart Agent',
        description: 'Automate repetitive tasks with context-aware AI agents that learn your workflow patterns.',
        icon: Bot,
        supportiveContent: <ShadTestimonial />,
        illustration: <AgentFeedback key="m4" />,
        image: 'https://images.unsplash.com/photo-1712942107059-0ef8ba9efbf9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export default function ExpandableFeatures() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0)

    const handleSelect = (index: number) => {
        if (index === expandedIndex) return
        setExpandedIndex(index)
    }

    return (
        <LazyMotion features={domAnimation}>
        <section className="bg-background @container overflow-hidden py-24">
            <h2 className="sr-only">features</h2>
            <div className="mx-auto max-w-5xl px-2 md:px-6">
                <div className="bg-foreground/10 grid gap-px rounded-2xl p-px md:grid-cols-2">
                    <div className="bg-background relative grid grid-rows-[auto_1fr] rounded-[15px] p-6 sm:p-12">
                        <div className="flex gap-2">
                            {features.map((feature, index) => (
                                <button type="button"
                                    key={feature.label}
                                    onClick={() => handleSelect(index)}
                                    data-state={expandedIndex === index ? 'expanded' : 'collapsed'}
                                    className="active:scale-98 data-[state=expanded]:shadow-black/4 data-[state=expanded]:bg-illustration data-[state=expanded]:ring-border not-data-[state=expanded]:hover:ring-foreground/10 ring-border flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg px-3.5 shadow-sm shadow-transparent ring transition-[transform,background-color,color,box-shadow] duration-200">
                                    <feature.icon className={cn('size-4 shrink-0 transition-colors', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground')} />
                                    <span className={cn('group-hover:text-foreground text-sm font-medium transition-colors', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground')}>{feature.label}</span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-12 flex flex-col gap-16">
                            <div className="max-w-sm text-balance">
                                <h3 className="text-foreground text-4xl font-medium tracking-tight">{features[expandedIndex].title}</h3>
                                <p className="text-muted-foreground my-6">{features[expandedIndex].description}</p>

                                <Button
                                    render={<Link href="#">Learn more <span className="border-l-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" /></Link>}
                                    nativeButton={false}
                                    variant="outline"
                                    size="sm"
                                />
                            </div>

                            <div className="mt-auto max-w-sm">{features[expandedIndex].supportiveContent}</div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-background aspect-3/4 relative overflow-hidden rounded-[15px]">
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
                                    className="scale-85 relative z-10 flex h-full items-center justify-center"
                                    key={expandedIndex}>
                                    {features[expandedIndex].illustration}
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
                                    className="before:border-foreground/10 absolute inset-0 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[15px] before:border">
                                    <div className="dither absolute inset-0 opacity-65 dark:opacity-35">
                                        <Image
                                            src={features[expandedIndex].image}
                                            alt="feature background image"
                                            fill
                                            sizes="(max-width: 767px) calc(100vw - 1rem), (max-width: 1023px) calc(50vw - 1.5rem), 487px"
                                            className="size-full object-cover"
                                        />
                                    </div>
                                    <Image
                                        src={features[expandedIndex].image}
                                        alt="feature background image"
                                        fill
                                        sizes="(max-width: 767px) calc(100vw - 1rem), (max-width: 1023px) calc(50vw - 1.5rem), 487px"
                                        className="size-full object-cover opacity-65 dark:opacity-35"
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
