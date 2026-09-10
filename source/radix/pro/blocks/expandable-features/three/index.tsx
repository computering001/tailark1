'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useState, useEffect, useRef } from 'react'
import { useMedia } from '@/hooks/use-media'
import { Map } from '@/components/illustrations/map'
import Models4 from '@/components/illustrations/models-4'
import { Workflow } from '@/components/illustrations/workflow'

const AUTOPLAY_DURATION = 7000

const features = [
    {
        title: 'Smart email composition',
        description: 'with AI-powered suggestions, templates, and seamless collaboration for faster communication.',
        ariaLabel: 'extend smart email composition feature',
        image: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/c1_sc01ut.png',
        imageAlt: 'bg c1',
        illustration: <Workflow />,
        illustrationClassName: '',
    },
    {
        title: 'AI autocomplete',
        description: 'that learns your writing style and provides context-aware suggestions to boost productivity.',
        ariaLabel: 'extend AI autocomplete feature',
        image: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/c3_fzqepj.png',
        imageAlt: 'bg c3',
        illustration: <Map />,
        illustrationClassName: '',
    },
    {
        title: 'Real-time translation',
        description: 'across 50+ languages with automatic detection and natural-sounding output for global teams.',
        ariaLabel: 'extend real-time translation feature',
        image: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/c4_rg6vjt.png',
        imageAlt: 'bg c4',
        illustration: <Models4 />,
        illustrationClassName: 'scale-90',
    },
]

export default function ExpandableFeatures() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0)
    const [progressKey, setProgressKey] = useState(0)
    const [paused, setPaused] = useState(false)
    const isMd = useMedia('(min-width: 768px)')
    const activeIndex = isMd ? expandedIndex : 0
    const pausedRef = useRef(false)

    // expandedIndex in deps restarts the window on both autoplay advance and manual select.
    useEffect(() => {
        if (!isMd) return

        const interval = setInterval(() => {
            if (pausedRef.current) return
            setExpandedIndex((expandedIndex + 1) % features.length)
            setProgressKey((k) => k + 1)
        }, AUTOPLAY_DURATION)

        return () => clearInterval(interval)
    }, [expandedIndex, isMd])

    const handleSelect = (index: number) => {
        if (!isMd || index === activeIndex) return
        setExpandedIndex(index)
        setProgressKey((k) => k + 1)
    }

    const handleMouseEnter = (index: number) => {
        if (!isMd) return
        if (index === activeIndex) {
            pausedRef.current = true
            setPaused(true)
        }
    }

    const handleMouseLeave = (index: number) => {
        if (!isMd) return
        if (index === activeIndex) {
            pausedRef.current = false
            setPaused(false)
        }
    }

    return (
        <section className="bg-background @container py-24 max-lg:px-1">
            <style>{`
                @keyframes expandProgress {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
            `}</style>
            <div className="mx-auto max-w-6xl px-6 lg:px-12">
                <div className="mb-6 lg:mb-10">
                    <h2 className="text-foreground max-w-xs text-balance text-4xl font-semibold tracking-tight">Powerful features for modern teams</h2>
                </div>

                <div className={cn('grid gap-8 md:grid-cols-[1fr_1fr_1fr] md:gap-3 md:transition-[grid-template-columns] md:duration-500', expandedIndex === 0 && 'md:grid-cols-[2fr_1fr_1fr]', expandedIndex === 1 && 'md:grid-cols-[1fr_2fr_1fr]', expandedIndex === 2 && 'md:grid-cols-[1fr_1fr_2fr]')}>
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            data-expanded={activeIndex === index}
                            className="relative row-span-2 grid grid-rows-subgrid gap-4 text-left"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}>
                            <div className="inset-ring-1 inset-ring-border-illustration h-104 relative flex items-center justify-center overflow-hidden rounded-2xl">
                                <Image
                                    src={feature.image}
                                    alt={feature.imageAlt}
                                    width={980}
                                    height={980}
                                    className="absolute inset-0 size-full object-cover opacity-50 dark:opacity-25"
                                />
                                <div className={feature.illustrationClassName}>{feature.illustration}</div>
                            </div>
                            <div>
                                {isMd && (
                                    <>
                                        <button type="button"
                                            className="absolute inset-0 cursor-pointer"
                                            aria-label={feature.ariaLabel}
                                            onClick={() => handleSelect(index)}
                                            aria-expanded={activeIndex === index}
                                        />

                                        <div className="bg-muted relative h-px">
                                            {activeIndex === index && (
                                                <div
                                                    key={progressKey}
                                                    className="bg-linear-to-r absolute inset-0 h-full origin-left rounded-full from-emerald-500 to-indigo-400"
                                                    style={{ animation: `expandProgress ${AUTOPLAY_DURATION}ms linear forwards`, animationPlayState: paused ? 'paused' : 'running' }}
                                                />
                                            )}
                                        </div>
                                    </>
                                )}

                                <p className="text-muted-foreground text-balance md:mt-4">
                                    <strong className="text-foreground font-medium">{feature.title}</strong> <span className="md:not-in-data-[expanded=true]:opacity-0 md:in-data-[expanded=true]:delay-300 md:not-in-data-[expanded=true]:blur-xs md:transition-[opacity,filter] md:in-data-[expanded=true]:duration-300">{feature.description}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
