import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { EnterpriseForm } from './enterprise-form'
import { Stripe } from '@/components/ui/svgs/stripe'
import TailwindCSS from '@/components/ui/svgs/tailwindcss'
import { Beacon } from '@/components/ui/svgs/beacon'
import { VercelFull } from '@/components/ui/svgs/vercel'
import { cn } from '@/lib/utils'

export default function HeroSection() {
    return (
        <section className="bg-background overflow-x-hidden py-24 lg:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative">
                    <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
                    <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <div className="grid grid-cols-2 divide-x border *:p-6 md:*:p-8 lg:grid-cols-4">
                        <div className="col-span-2 border-b max-lg:border-r-0 max-md:text-center">
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl tracking-tight">Invoicing. Enterprise Efficiency. Real Impact. </h1>
                            <p className="text-muted-foreground mb-8 mt-6 max-w-sm text-balance text-lg max-md:mx-auto">Our Enterprise Invoicing solution simplifies billing processes, enhances financial oversight, and ensures compliance with ease, all on a secure platform.</p>

                            <Button
                                asChild
                                size="lg">
                                <Link href="#link">Watch demo</Link>
                            </Button>

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

                        <div className="bg-card/25 relative col-span-2 border-b border-r-0 lg:pt-10">
                            <PlusDecorator className="bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]" />

                            <EnterpriseForm />
                        </div>

                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block max-lg:border-b">
                            <p className="text-muted-foreground text-balance">
                                <strong className="text-foreground font-medium">99.9% Uptime guarantee</strong> ensured across all platforms.
                            </p>

                            <Stripe
                                height={22}
                                width={56}
                            />
                        </div>

                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block max-lg:relative max-lg:border-b max-lg:border-r-0">
                            <PlusDecorator className="bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)] lg:hidden" />
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
            </div>
        </section>
    )
}

const PlusDecorator = ({ className }: { className?: string }) => (
    <div
        aria-hidden
        className={cn('mask-radial-from-15% before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px', className)}
    />
)
