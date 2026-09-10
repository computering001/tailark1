'use client'
import { type JSX, useEffect, useRef, useState } from 'react'
import { LazyMotion, domAnimation, m, type MotionProps } from 'motion/react'

export type TextScrambleProps = {
    children: string
    duration?: number
    speed?: number
    characterSet?: string
    as?: React.ElementType
    className?: string
    trigger?: boolean
    onScrambleComplete?: () => void
} & MotionProps

const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export function TextScramble({ children, duration = 0.8, speed = 0.04, characterSet = defaultChars, className, as: Component = 'p', trigger = true, onScrambleComplete, ...props }: TextScrambleProps) {
    const MotionComponent = m.create(Component as keyof JSX.IntrinsicElements)
    const [displayText, setDisplayText] = useState(children)
    const onScrambleCompleteRef = useRef(onScrambleComplete)

    useEffect(() => {
        onScrambleCompleteRef.current = onScrambleComplete
    })

    useEffect(() => {
        if (!trigger) return

        const steps = duration / speed
        let step = 0

        const interval = setInterval(() => {
            let scrambled = ''
            const progress = step / steps

            for (let i = 0; i < children.length; i++) {
                if (children[i] === ' ') {
                    scrambled += ' '
                    continue
                }

                if (progress * children.length > i) {
                    scrambled += children[i]
                } else {
                    scrambled += characterSet[Math.floor(Math.random() * characterSet.length)]
                }
            }

            setDisplayText(scrambled)
            step++

            if (step > steps) {
                clearInterval(interval)
                setDisplayText(children)
                onScrambleCompleteRef.current?.()
            }
        }, speed * 1000)

        return () => clearInterval(interval)
    }, [trigger, children, duration, speed, characterSet])

    return (
        <LazyMotion features={domAnimation}>
        <MotionComponent
            className={className}
            {...props}>
            {displayText}
        </MotionComponent>
        </LazyMotion>
    )
}
