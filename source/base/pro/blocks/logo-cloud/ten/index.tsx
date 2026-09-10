'use client'
import { Beacon } from '@/components/ui/svgs/beacon'
import { Bolt } from '@/components/ui/svgs/bolt'
import { Cisco } from '@/components/ui/svgs/cisco'
import { Hulu } from '@/components/ui/svgs/hulu'
import { OpenAIFull } from '@/components/ui/svgs/open-ai'
import { Primevideo } from '@/components/ui/svgs/prime'
import { Stripe } from '@/components/ui/svgs/stripe'
import { Supabase } from '@/components/ui/svgs/supabase'
import { Polars } from '@/components/ui/svgs/polars'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { VercelFull } from '@/components/ui/svgs/vercel'
import { Spotify } from '@/components/ui/svgs/spotify'
import { PayPal } from '@/components/ui/svgs/paypal'
import { LeapWallet } from '@/components/ui/svgs/leap-wallet'

import { cn } from '@/lib/utils'

const aiLogos: React.ReactNode[] = [
    <OpenAIFull
        key="openai-1"
        height={24}
        width="auto"
    />,
    <Bolt
        key="bolt"
        height={20}
        width="auto"
    />,
    <Cisco
        key="cisco"
        height={32}
        width="auto"
    />,
    <Hulu
        key="hulu"
        height={20}
        width="auto"
    />,
    <Spotify
        key="spotify"
        height={24}
        width="auto"
    />,
    <OpenAIFull
        key="openai-2"
        height={24}
        width="auto"
    />,
]

const hostingLogos: React.ReactNode[] = [
    <Supabase
        key="supabase-1"
        height={24}
        width="auto"
    />,
    <Cisco
        key="cisco"
        height={32}
        width="auto"
    />,
    <Hulu
        key="hulu"
        height={20}
        width="auto"
    />,
    <Spotify
        key="spotify"
        height={24}
        width="auto"
    />,
    <VercelFull
        key="vercel"
        height={20}
        width="auto"
    />,
    <Supabase
        key="supabase-2"
        height={24}
        width="auto"
    />,
]

const paymentsLogos: React.ReactNode[] = [
    <Stripe
        key="stripe-1"
        height={24}
        width="auto"
    />,
    <PayPal
        key="paypal"
        height={24}
        width="auto"
    />,
    <LeapWallet
        key="leapwallet"
        height={24}
        width="auto"
    />,
    <Beacon
        key="beacon"
        height={20}
        width="auto"
    />,
    <Polars
        key="polars"
        height={24}
        width="auto"
    />,
    <Stripe
        key="stripe-2"
        height={24}
        width="auto"
    />,
]

const streamingLogos: React.ReactNode[] = [
    <Primevideo
        key="primevideo-1"
        height={28}
        width="auto"
    />,
    <Hulu
        key="hulu"
        height={20}
        width="auto"
    />,
    <Spotify
        key="spotify"
        height={24}
        width="auto"
    />,
    <Cisco
        key="cisco"
        height={32}
        width="auto"
    />,
    <Beacon
        key="beacon"
        height={20}
        width="auto"
    />,
    <Primevideo
        key="primevideo-2"
        height={28}
        width="auto"
    />,
]

type LogoGroup = 'ai' | 'hosting' | 'payments' | 'streaming'

const logos: { [key in LogoGroup]: React.ReactNode[] } = {
    ai: aiLogos,
    hosting: hostingLogos,
    payments: paymentsLogos,
    streaming: streamingLogos,
}

const groupOptions: { label: string; value: LogoGroup }[] = [
    { label: 'Generative AI Companies, ', value: 'ai' },
    { label: 'Hosting Providers, ', value: 'hosting' },
    { label: 'Payments Providers, ', value: 'payments' },
    { label: 'Streaming Providers', value: 'streaming' },
]

export default function LogoCloudTwo() {
    const [currentGroup, setCurrentGroup] = useState<LogoGroup>('ai')

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGroup((prev) => {
                const groups = Object.keys(logos) as LogoGroup[]
                const currentIndex = groups.indexOf(prev)
                const nextIndex = (currentIndex + 1) % groups.length
                return groups[nextIndex]
            })
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <LazyMotion features={domAnimation}>
        <section className="bg-background py-24">
            <div className="mx-auto max-w-6xl px-6 lg:px-12">
                <div className="mx-auto mb-12 max-w-3xl text-balance text-center md:mb-16">
                    <p
                        data-current={currentGroup}
                        className="text-muted-foreground mt-4 text-lg lg:text-xl/8">
                        Trusted by leading teams from{' '}
                        {groupOptions.map((group) => (
                            <span
                                key={group.value}
                                data-current={currentGroup}
                                className={cn(
                                    'relative transition-colors duration-200',
                                    group.value === currentGroup &&
                                        'text-foreground before:starting:opacity-0 before:bg-foreground/10 after:bg-linear-to-r after:starting:scale-x-0 after:duration-3000 not-last:after:right-2.5 not-last:before:right-2.5 before:absolute before:inset-x-0 before:-bottom-0.5 before:h-px before:rounded before:opacity-100 before:duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-100 after:rounded after:from-emerald-500 after:to-indigo-500 after:delay-300 after:ease-in-out'
                                )}>
                                {group.label}
                            </span>
                        ))}
                    </p>
                </div>
                <div className="perspective-dramatic mx-auto grid max-w-5xl grid-cols-3 items-center gap-x-8 gap-y-16">
                    <AnimatePresence
                        initial={false}
                        mode="popLayout">
                        {logos[currentGroup].map((logo, i) => (
                            <m.div
                                key={`${currentGroup}-${(logo as React.ReactElement).key}`}
                                className="**:fill-foreground! flex h-10 items-center justify-center"
                                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -24, filter: 'blur(6px)', scale: 0.5 }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}>
                                {logo}
                            </m.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    
        </LazyMotion>)
}
