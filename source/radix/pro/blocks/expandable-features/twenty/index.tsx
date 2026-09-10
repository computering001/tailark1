'use client'

import { cn } from '@/lib/utils'
import { useState, useEffect, useCallback, useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Brain, LassoSelect } from 'lucide-react'
import Kanban3 from '@/components/illustrations/kanban-3'
import Email from '@/components/illustrations/email'

const AUTOPLAY_DURATION = 7000

export default function ExpandableFeatures() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const resetTimer = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setExpandedIndex((current) => (current + 1) % 2)
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
        <section className="bg-background @container py-24 max-lg:px-1">
            <div className="mx-auto max-w-5xl max-lg:px-6">
                <div className="mb-12 grid items-end gap-6 sm:mb-20 md:grid-cols-2 lg:gap-12">
                    <h2 className="text-foreground text-balance text-4xl font-semibold tracking-tight">Ship with confidence using our unified platform</h2>
                    <p className="text-muted-foreground text-balance text-lg">Streamline your workflow with tools designed to enhance productivity at every step.</p>
                </div>

                <div className={cn('bg-foreground/10 grid gap-px rounded-2xl p-px transition-[grid-template-columns] duration-300 ease-in-out md:grid-cols-[2fr_1fr]', expandedIndex === 0 && 'md:grid-cols-[2fr_1fr]', expandedIndex === 1 && 'md:grid-cols-[1fr_2fr]')}>
                    <Card
                        data-expanded={expandedIndex === 0}
                        className="bg-background shadow-black/4 relative overflow-hidden rounded-none text-left shadow-md ring-transparent max-md:rounded-t-[15px] md:rounded-l-[15px]">
                        <div className="sm:w-162 md:w-158 lg:w-162 grid h-full gap-3 sm:grid-cols-2">
                            <div className="flex h-full flex-col justify-between gap-12 py-8 pl-8">
                                <LassoSelect className="size-4" />
                                <div>
                                    <button type="button"
                                        className="absolute inset-0 cursor-pointer"
                                        aria-label="extend smart email composition feature"
                                        onClick={() => handleSelect(0)}
                                        aria-expanded={expandedIndex === 0}
                                    />
                                    <h3 className="text-foreground font-medium">Smart email composition</h3>
                                    <p className="text-muted-foreground mt-4 text-balance">with AI-powered suggestions, templates, and seamless collaboration for faster communication.</p>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <div className="*:scale-95 sm:py-12">
                                    <Email />
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card
                        data-expanded={expandedIndex === 1}
                        className="bg-background shadow-black/4 relative overflow-hidden rounded-none text-left shadow-md ring-transparent max-md:rounded-b-[15px] md:rounded-r-[15px]">
                        <div className="sm:w-162 md:w-158 lg:w-162 grid h-full gap-3 *:h-full sm:grid-cols-2">
                            <div className="flex flex-col justify-between gap-12 py-8 pl-8">
                                <Brain className="size-4" />
                                <div>
                                    <button type="button"
                                        className="absolute inset-0 cursor-pointer"
                                        aria-label="extend smart email composition feature"
                                        onClick={() => handleSelect(1)}
                                        aria-expanded={expandedIndex === 1}
                                    />
                                    <h3 className="text-foreground font-medium">Visual task management</h3>
                                    <p className="text-muted-foreground mt-4 text-balance">Organize projects with drag-and-drop boards, priority flags, and real-time collaboration.</p>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <div className="*:origin-left *:scale-90 sm:py-6">
                                    <Kanban3 />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
