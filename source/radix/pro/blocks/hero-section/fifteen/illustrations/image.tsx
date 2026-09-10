'use client'
import { LazyMotion, domAnimation, m, useScroll, useTransform } from 'motion/react'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'

export const Image = () => {
    const { scrollY } = useScroll()
    const parallaxFactor = 0.12
    const y = useTransform(scrollY, [0, 500], [0, 500 * parallaxFactor], { clamp: false })
    const maxScale = 1.2
    const scale = useTransform(scrollY, [0, 500], [1, maxScale], { clamp: true })
    const rotateX = useTransform(scrollY, [0, 500], [16, 8], { clamp: true })

    return (
        <LazyMotion features={domAnimation}>
        <m.div
            style={{ y, scale, rotateX }}
            className="relative mx-auto aspect-video max-w-sm">
            <AnimatedGroup
                variants={{
                    container: {
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0,
                            },
                        },
                    },
                    item: {
                        hidden: {
                            opacity: 0,
                            filter: 'blur(12px)',
                            y: -120,
                            rotateX: 56,
                            scale: 2,
                        },
                        visible: {
                            opacity: 1,
                            filter: 'blur(0px)',
                            y: 0,
                            scale: 1,
                            rotateX: 0,
                            transition: {
                                type: 'spring',
                                bounce: 0.2,
                                duration: 2,
                            },
                        },
                    },
                }}>
                <div
                    key={0}
                    aria-hidden
                    className="ring-foreground/15 bg-card absolute inset-0 z-0 aspect-video w-full max-w-sm translate-y-8 scale-90 overflow-hidden rounded-2xl border border-x-0 border-b-4 border-transparent border-b-indigo-950/10 opacity-50 shadow-2xl shadow-indigo-950/20 ring-1"
                />
                <div
                    key={2}
                    aria-hidden
                    className="ring-foreground/15 bg-card z-1 absolute inset-0 aspect-video w-full max-w-sm translate-y-4 scale-95 overflow-hidden rounded-2xl border border-x-0 border-b-4 border-transparent border-b-indigo-950/10 opacity-50 shadow-2xl shadow-indigo-950/20 ring-1"
                />
                <div
                    key={1}
                    aria-hidden
                    className="ring-foreground/15 bg-card z-100 relative aspect-video w-full max-w-sm overflow-hidden rounded-2xl border border-x-0 border-b-4 border-transparent border-b-indigo-950/10 shadow-2xl shadow-indigo-950/20 ring-1"
                />
                <div
                    key={3}
                    aria-hidden
                    className="mask-radial-from-50% starting:opacity-100 pointer-events-none absolute inset-0 aspect-video -translate-y-full rounded-2xl opacity-50 transition-opacity duration-500"
                    style={{
                        backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 1px, rgba(75, 85, 99, 0.06) 1px, rgba(75, 85, 99, 0.06) 2px, transparent 2px, transparent 4px),
        repeating-linear-gradient(67.5deg, transparent, transparent 1px, rgba(107, 114, 128, 0.05) 1px, rgba(107, 114, 128, 0.05) 2px, transparent 2px, transparent 4px),
        repeating-linear-gradient(112.5deg, transparent, transparent 1px, rgba(55, 65, 81, 0.04) 1px, rgba(55, 65, 81, 0.04) 2px, transparent 2px, transparent 4px),
        repeating-linear-gradient(157.5deg, transparent, transparent 1px, rgba(31, 41, 55, 0.03) 1px, rgba(31, 41, 55, 0.03) 2px, transparent 2px, transparent 4px)
      `,
                    }}
                />
                <div
                    key={4}
                    className="bg-background/5 absolute inset-0 flex aspect-video -translate-y-full flex-col justify-between rounded-2xl px-6 py-6 text-left ring-1 ring-white/5">
                    <div className="flex justify-between">
                        <CardChip />
                        <Visa />
                    </div>

                    <div className="flex justify-between">
                        <div className="space-y-0.5 *:block">
                            <span className="text-muted-foreground text-xs">Méschac Irung</span>
                            <span className="font-mono text-sm font-medium">5367 4567 8901 2345</span>
                        </div>
                        <div className="space-y-0.5 *:block">
                            <span className="text-muted-foreground text-xs">Exp.</span>
                            <span className="font-mono text-sm font-medium">12/25</span>
                        </div>
                    </div>
                </div>
            </AnimatedGroup>
        </m.div>
    
        </LazyMotion>)
}

const CardChip = () => {
    return (
        <svg
            width="26"
            height="22"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.81 0C2.65 0 0 2.65 0 5.81V16.19C0 19.35 2.65 22 5.81 22H20.19C23.35 22 26 19.35 26 16.19V5.81C26 2.65 23.35 0 20.19 0H5.81ZM5.81 2H20.19C22.22 2 24 3.78 24 5.81V7H18C17.45 7 17 6.55 17 6C17 5.45 17.45 5 18 5C18.27 5 18.52 4.89 18.71 4.71C18.89 4.52 19 4.27 19 4C19 3.73 18.89 3.48 18.71 3.29C18.52 3.11 18.27 3 18 3C16.36 3 15 4.36 15 6C15 7.29 15.84 8.39 17 8.81V13.78C15.8 14.6 15 15.96 15 17.5C15 18.42 15.29 19.28 15.78 20H10.22C10.73 19.26 11 18.39 11 17.5C11 15.96 10.2 14.6 9 13.78V8.81C10.16 8.39 11 7.29 11 6C11 4.36 9.64 3 8 3H6C5.97 3 5.94 3 5.91 3C5.88 3 5.84 3 5.81 3C5.55 3.02 5.3 3.15 5.13 3.36C4.96 3.56 4.88 3.83 4.91 4.09C4.93 4.36 5.06 4.6 5.27 4.77C5.47 4.94 5.73 5.02 6 5H8C8.55 5 9 5.45 9 6C9 6.55 8.55 7 8 7H2V5.81C2 3.78 3.78 2 5.81 2ZM2 9H7V13H2V9ZM19 9H24V13H19V9ZM2 15H6.5C7.84 15 9 16.16 9 17.5C9 18.84 7.84 20 6.5 20H5.81C3.78 20 2 18.22 2 16.19V15ZM19.5 15H24V16.19C24 18.22 22.22 20 20.19 20H19.5C18.16 20 17 18.84 17 17.5C17 16.16 18.16 15 19.5 15Z"
                fill="currentColor"
            />
        </svg>
    )
}

const Visa = () => (
    <svg
        width="50"
        height="16"
        viewBox="0 0 72 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M35.65 0.41L30.84 22.66H25.02L29.84 0.41H35.65ZM60.13 14.78L63.19 6.42L64.95 14.78H60.13ZM66.62 22.66H72L67.3 0.41H62.34C62.33 0.41 62.32 0.41 62.31 0.41C61.21 0.41 60.27 1.08 59.87 2.03L59.86 2.04L51.13 22.66H57.24L58.46 19.34H65.92L66.62 22.66ZM51.43 15.4C51.46 9.52 43.23 9.2 43.28 6.58C43.3 5.78 44.07 4.93 45.75 4.71C46.06 4.68 46.42 4.66 46.79 4.66C48.49 4.66 50.11 5.05 51.55 5.74L51.49 5.71L52.51 0.99C50.89 0.37 49.02 0.01 47.07 0H47.06C41.31 0 37.27 3.03 37.23 7.36C37.2 10.56 40.12 12.34 42.33 13.41C44.59 14.5 45.36 15.2 45.34 16.17C45.33 17.67 43.54 18.33 41.86 18.35C41.79 18.35 41.69 18.35 41.6 18.35C39.51 18.35 37.54 17.83 35.82 16.92L35.89 16.95L34.83 21.82C36.72 22.57 38.91 23 41.2 23C41.23 23 41.27 23 41.31 23H41.3C47.41 23 51.41 20.01 51.43 15.39L51.43 15.4ZM27.34 0.41L17.91 22.66H11.76L7.12 4.9C7.03 4.04 6.5 3.32 5.75 2.95L5.74 2.95C4.09 2.14 2.17 1.49 0.16 1.08L0 1.05L0.14 0.41H10.04C11.39 0.41 12.51 1.39 12.72 2.66L12.72 2.68L15.17 15.55L21.23 0.41L27.34 0.41Z"
            fill="currentColor"
        />
    </svg>
)
