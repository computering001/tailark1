'use client'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import { LazyMotion, domAnimation, m, useScroll, useTransform } from 'motion/react'
import NextImage from 'next/image'

export const Image = () => {
    const { scrollY } = useScroll()
    const parallaxFactor = 0.2
    const y = useTransform(scrollY, [0, 500], [0, 500 * parallaxFactor], { clamp: false })
    const maxScale = 1.5
    const scale = useTransform(scrollY, [0, 500], [1, maxScale], { clamp: true })
    const rotateX = useTransform(scrollY, [0, 500], [12, 0], { clamp: true })

    return (
        <LazyMotion features={domAnimation}>
        <m.div
            style={{ y, scale }}
            className="perspective-near mx-auto mt-8 max-w-md">
            <m.div
                style={{ rotateX }}
                className="relative mx-auto max-w-xs">
                <div className="group relative">
                    <button type="button" className="absolute inset-1 z-10 flex items-center justify-center rounded-xl border border-dotted border-white/15">
                        <Button
                            render={
                                <div>
                                    <Play className="size-3.5!" />
                                                                    Watch demo
                                </div>
                            }
                            nativeButton={false}
                            size="sm"
                            variant="outline"
                            className="active:scale-99 m-auto w-fit rounded-full bg-white/15 text-white shadow-lg ring-white/25 backdrop-blur transition-[transform,background-color] duration-200 before:absolute before:inset-0 hover:-translate-y-1 hover:scale-105 hover:bg-white/20 active:-translate-y-0.5"
                        />
                    </button>
                    <div className="ring-background/25 before:inset-ring-4 before:mask-y-from-55% before:z-1 before:inset-ring-white/35 before:border-foreground relative aspect-video overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 before:absolute before:inset-0 before:rounded-2xl before:border">
                        <NextImage
                            src="https://images.unsplash.com/photo-1547673516-a94ece1efe0c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Hero Section"
                            className="scale-102 size-full object-cover transition-transform duration-200 group-hover:scale-100"
                            height={2069}
                            width={2069}
                        />
                    </div>
                </div>
            </m.div>
        </m.div>
    
        </LazyMotion>)
}
