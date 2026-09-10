import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Stripe } from '@/components/ui/svgs/stripe'
import { VercelFull } from '@/components/ui/svgs/vercel'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { OpenAIFull } from '@/components/ui/svgs/open-ai'
import { Cisco } from '@/components/ui/svgs/cisco'
import { Hulu } from '@/components/ui/svgs/hulu'
import { Bolt } from '@/components/ui/svgs/bolt'

export default function HeroSection() {
    return (
        <section className="bg-background overflow-x-hidden py-24 lg:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative">
                    <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
                    <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <div className="grid grid-cols-2 divide-x border *:p-6 md:*:p-8 lg:grid-cols-6">
                        <div className="col-span-3 border-b max-lg:border-r-0 max-md:text-center">
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl tracking-tight">Invoicing. Enterprise Efficiency. Real Impact. </h1>
                            <p className="text-muted-foreground mx-auto mb-8 mt-6 max-w-md text-balance text-lg max-md:mx-auto">Our Enterprise Invoicing solution simplifies billing processes, enhances financial oversight, and ensures compliance with ease, all on a secure platform.</p>

                            <div className="flex gap-3 max-lg:justify-center">
                                <Button
                                    render={<Link href="#link">Get started</Link>}
                                    nativeButton={false}
                                />
                                <Button
                                    render={<Link href="#link">Request a demo</Link>}
                                    nativeButton={false}
                                    variant="outline"
                                />
                            </div>
                        </div>
                        <div className="relative col-span-3 overflow-hidden border-b border-r-0 !p-0">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 opacity-65"
                                style={{
                                    backgroundImage: `
                                        repeating-linear-gradient(22.5deg, transparent, transparent 1px, rgba(75, 85, 99, 0.06) 1px, rgba(75, 85, 99, 0.06) 2px, transparent 2px, transparent 4px),
                                        repeating-linear-gradient(67.5deg, transparent, transparent 1px, rgba(107, 114, 128, 0.05) 1px, rgba(107, 114, 128, 0.05) 2px, transparent 2px, transparent 4px),
                                        repeating-linear-gradient(112.5deg, transparent, transparent 1px, rgba(55, 65, 81, 0.04) 1px, rgba(55, 65, 81, 0.04) 2px, transparent 2px, transparent 4px),
                                        repeating-linear-gradient(157.5deg, transparent, transparent 1px, rgba(31, 41, 55, 0.03) 1px, rgba(31, 41, 55, 0.03) 2px, transparent 2px, transparent 4px)
                                      `,
                                }}
                            />
                            <div className="mask-radial-at-left mask-radial-[115%_100%] mask-radial-from-45% pointer-events-none h-full">
                                <div className="min-w-md relative max-w-lg px-6 pb-12 pt-12 lg:px-12 lg:pt-16">
                                    <div className="bg-background min-w-3xl ring-foreground/10 absolute -right-36 bottom-8 left-36 top-8 z-10 overflow-hidden rounded-2xl p-1 shadow-2xl shadow-indigo-900/35 ring-1 backdrop-blur md:-right-56 lg:bottom-6 lg:left-44 lg:top-12 lg:max-w-6xl">
                                        <div className="relative aspect-video origin-top rounded-xl">
                                            <Image
                                                className="object-top-left size-full object-cover dark:hidden"
                                                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-4_lkhxqm.png"
                                                alt="app screenshot"
                                                width={2880}
                                                height={1920}
                                                sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                                            />
                                            <Image
                                                className="object-top-left not-dark:hidden size-full object-cover"
                                                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-4-dark_m2mfxo.png"
                                                alt="app screenshot"
                                                width={2880}
                                                height={1920}
                                                sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                                            />
                                        </div>
                                    </div>
                                    <div className="min-w-2xl bg-linear-to-b dark:from-card dark:bg-card via-background from-muted to-background ring-foreground/10 border-background rounded-xl border p-1 shadow-2xl shadow-black/5 ring-1 lg:max-w-6xl">
                                        <div className="relative aspect-video origin-top overflow-hidden rounded-lg">
                                            <Image
                                                className="object-top-left size-full object-cover mix-blend-darken dark:hidden"
                                                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle_un3f39.png"
                                                alt="app screenshot"
                                                width={2880}
                                                height={1920}
                                                sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                                            />
                                            <Image
                                                className="object-top-left not-dark:hidden size-full object-cover opacity-65"
                                                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-dark_cv2taw.png"
                                                alt="app screenshot"
                                                width={2880}
                                                height={1920}
                                                sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center max-lg:border-b">
                            <Stripe
                                height={22}
                                width={56}
                                className="*:fill-foreground"
                            />
                        </div>

                        <div className="relative flex items-center justify-center max-lg:border-b">
                            <PlusDecorator className="bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)] lg:hidden" />

                            <OpenAIFull
                                height={22}
                                width={96}
                                className="*:fill-foreground"
                            />
                        </div>
                        <div className="relative flex items-center justify-center max-lg:border-b max-lg:border-r-0">
                            <PlusDecorator className="bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)] lg:left-auto lg:right-0 lg:top-0 lg:-translate-y-[calc(50%+0.5px)] lg:translate-x-[calc(50%+0.5px)]" />

                            <VercelFull
                                height={28}
                                width={84}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Hulu
                                height={20}
                                width={52}
                                className="*:fill-foreground"
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <Bolt
                                height={18}
                                width={92}
                                className="*:fill-foreground"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Cisco
                                height={24}
                                width={84}
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
