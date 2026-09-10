'use client'
import { LazyMotion, domAnimation, m, useScroll, useTransform, useMotionTemplate } from 'motion/react'

export const Image = () => {
    const { scrollY } = useScroll()

    const maxClip = 5
    const maxScale = 1.4
    const scale = useTransform(scrollY, [0, 1500], [maxScale, 1], { clamp: true })
    const clip = useTransform(scrollY, [0, 500], [maxClip, 0], { clamp: true })
    const clipPath = useMotionTemplate`inset(${clip}% ${clip}% ${clip}% ${clip}% round 0.75rem)`

    return (
        <LazyMotion features={domAnimation}>
        <m.div
            className="perspective-near aspect-3/2 mx-auto max-w-7xl overflow-hidden md:aspect-video"
            style={{ clipPath }}>
            <m.img
                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/flower_a5umwb.webp"
                alt="flower background"
                style={{ scale }}
                className="origin-top"
                width={2270}
                height={1578}
            />
        </m.div>
    
        </LazyMotion>)
}
