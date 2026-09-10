import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { EnterpriseForm } from './enterprise-form'
import { Stripe } from '@/components/ui/svgs/stripe'
import TailwindCSS from '@/components/ui/svgs/tailwindcss'
import { Beacon } from '@/components/ui/svgs/beacon'
import { VercelFull } from '@/components/ui/svgs/vercel'

export default function HeroSection() {
    return (
        <section className="bg-background overflow-x-hidden py-24 lg:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <span className="text-primary block text-sm font-medium max-md:text-center">Enterprise</span>
                <div className="mt-8 grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-12">
                    <div className="max-md:text-center">
                        <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl tracking-tight">Invoicing. Enterprise Efficiency. Real Impact. </h1>
                        <p className="text-muted-foreground mb-8 mt-6 max-w-sm text-balance text-lg max-md:mx-auto">Our Enterprise Invoicing solution simplifies billing processes, enhances financial oversight, and ensures compliance with ease, all on a secure platform.</p>

                        <Button
                            render={<Link href="#link">Watch demo</Link>}
                            nativeButton={false}
                            size="lg"
                        />

                        <ul className="mt-8 space-y-2">
                            {['Create invoices', 'Track payments', 'Manage finances'].map((item, index) => (
                                <li
                                    key={item}
                                    className="text-muted-foreground flex items-center gap-2 max-md:justify-center">
                                    <CheckCircle2 className="size-4 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <EnterpriseForm />
                </div>

                <div className="**:fill-foreground mt-12 grid grid-cols-2 max-lg:gap-x-6 max-lg:gap-y-8 max-sm:gap-x-3 lg:mt-24 lg:grid-cols-4">
                    <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">99.9% Uptime guarantee</strong> ensured across all platforms.
                        </p>

                        <Stripe
                            height={22}
                            width={56}
                        />
                    </div>

                    <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">15X</strong> faster deployment daily speed.
                        </p>

                        <TailwindCSS
                            height={24}
                            width={120}
                        />
                    </div>
                    <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
                        <p className="text-muted-foreground">
                            <strong className="text-foreground font-medium">24/7 Support</strong> with dedicated teams.
                        </p>

                        <Beacon
                            height={22}
                            width={68}
                        />
                    </div>

                    <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">Seamless Integration</strong> with top industry tools.
                        </p>

                        <VercelFull
                            height={24}
                            width={78}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
