'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useCallback, useEffect, useRef, useState } from 'react'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'motion/react'
import { AgentTaskPlanning } from '@/components/illustrations/agent-task-planning'
import { ShieldCheck, Hourglass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import AgentFeedback from '@/components/illustrations/agent-feedback'
import Email from '@/components/illustrations/email'

const AUTOPLAY_DURATION = 6000

const features = [
    {
        label: 'AI Models',
        illustration: <Email key="m3" />,
        image: 'https://images.unsplash.com/photo-1600223260976-32a509b23602?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        label: 'Smart Agent',
        illustration: <AgentFeedback key="m4" />,
        image: 'https://images.unsplash.com/photo-1712942107059-0ef8ba9efbf9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        label: 'Workflows',
        illustration: <AgentTaskPlanning key="m5" />,
        image: 'https://images.unsplash.com/photo-1770106678115-ec9aa241cdf6?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export default function ExpandableFeatures() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const resetTimer = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setExpandedIndex((current) => (current + 1) % features.length)
        }, AUTOPLAY_DURATION)
    }, [])

    useEffect(() => {
        resetTimer()
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [resetTimer])

    const handleSelect = (index: number) => {
        if (index === expandedIndex) return
        setExpandedIndex(index)
        resetTimer()
    }

    return (
        <LazyMotion features={domAnimation}>
        <section className="bg-background @container overflow-hidden py-24">
            <div className="mx-auto my-1 max-w-5xl px-2 md:px-6">
                <div className="bg-foreground/10 grid gap-px rounded-2xl p-px md:grid-cols-2">
                    <div className="bg-background relative rounded-[15px] p-6 sm:p-12">
                        <div className="flex h-full flex-col justify-between gap-12">
                            <div className="max-w-sm text-balance">
                                <h3 className="text-foreground text-4xl font-medium tracking-tight">Build faster with intelligent code completion</h3>
                                <p className="text-muted-foreground my-6">Our AI understands your codebase context and suggests relevant completions, helping you write better code in less time.</p>

                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm">
                                    <Link href="#">
                                        Learn more <span className="border-l-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="-ml-4 flex gap-2">
                                {features.map((feature, index) => (
                                    <button type="button"
                                        key={feature.label}
                                        onClick={() => handleSelect(index)}
                                        data-state={expandedIndex === index ? 'expanded' : 'collapsed'}
                                        className="active:scale-98 group flex cursor-pointer items-center gap-2 rounded-full py-2 pr-1 transition-transform duration-200">
                                        <div className="size-4">{expandedIndex === index && <Loader isActive={expandedIndex === index} />}</div>
                                        <span className={cn('group-hover:text-foreground text-sm font-medium transition-colors', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground')}>{feature.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative h-fit">
                        <div className="aspect-7/8 bg-background relative overflow-hidden rounded-[15px]">
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
                    <div className="bg-background rounded-[15px] p-6 sm:p-12">
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
                    </div>

                    <div className="bg-background flex flex-col justify-end rounded-[15px] p-6 sm:p-12">
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
        </section>
    
        </LazyMotion>)
}

const r = 10
const circumference = 2 * Math.PI * r

const Loader = ({ isActive = false }: { isActive?: boolean }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        opacity={isActive ? 1 : 0}
        className="size-4">
        <circle
            cx="12"
            cy="12"
            r={r}
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.1"
        />
        <circle
            cx="12"
            cy="12"
            r={r}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(-90 12 12)"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}>
            <animate
                attributeName="stroke-dashoffset"
                from={circumference}
                to={0}
                dur={`${AUTOPLAY_DURATION}ms`}
                fill="freeze"
            />
        </circle>
    </svg>
)
