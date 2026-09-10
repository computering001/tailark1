'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useState, useEffect, useRef } from 'react'
import { useMedia } from '@/hooks/use-media'
import { Map } from '@/components/illustrations/map'
import Models4 from '@/components/illustrations/models-4'

const AUTOPLAY_DURATION = 7000

const features = [
    {
        title: 'Smart email composition',
        description: 'With AI-powered suggestions, templates, and seamless collaboration.',
        ariaLabel: 'extend smart email composition feature',
        image: 'https://images.unsplash.com/photo-1684093024920-9d88aaa34a90?q=80&w=3030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'bg c1',
        illustration: <Models4 />,
        illustrationClassName: 'scale-80',
        cardClassName: 'h-96',
    },
    {
        title: 'AI autocomplete',
        description: 'That learns your writing style and provides context-aware suggestions.',
        ariaLabel: 'extend AI autocomplete feature',
        image: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/c3_fzqepj.png',
        imageAlt: 'bg c3',
        illustration: <Map />,
        illustrationClassName: 'pt-8',
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
            <div className="mx-auto max-w-5xl px-6">
                <div className="mb-6 lg:mb-10">
                    <h2 className="text-foreground max-w-xs text-balance text-4xl font-semibold tracking-tight">Powerful features for modern teams</h2>
                </div>

                <div className={cn('grid gap-8 md:grid-cols-[1fr_1fr] md:gap-3 md:transition-[grid-template-columns] md:duration-500 md:ease-in-out', expandedIndex === 0 && 'md:grid-cols-[2fr_1fr]', expandedIndex === 1 && 'md:grid-cols-[1fr_2fr]')}>
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            data-expanded={activeIndex === index}
                            className="relative row-span-2 grid grid-rows-subgrid gap-4 text-left"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}>
                            <div className={cn('bg-card shadow-black/2 before:border-foreground/7.5 relative flex items-center justify-center overflow-hidden rounded-2xl shadow-md before:absolute before:inset-0 before:rounded-2xl before:border', feature.cardClassName)}>
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
                                    <button type="button"
                                        className="absolute inset-0 cursor-pointer"
                                        aria-label={feature.ariaLabel}
                                        onClick={() => handleSelect(index)}
                                        aria-expanded={activeIndex === index}
                                    />
                                )}

                                <h3 className="text-foreground font-medium">{feature.title}</h3>
                                {isMd && (
                                    <div className="bg-muted relative my-3 h-px">
                                        {activeIndex === index && (
                                            <div
                                                key={progressKey}
                                                className="bg-linear-to-r to-foreground absolute inset-0 h-full origin-left rounded-full"
                                                style={{ animation: `expandProgress ${AUTOPLAY_DURATION}ms linear forwards`, animationPlayState: paused ? 'paused' : 'running' }}
                                            />
                                        )}
                                    </div>
                                )}
                                <p className="text-muted-foreground not-in-data-[expanded=true]:opacity-50 max-w-xs text-balance">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
