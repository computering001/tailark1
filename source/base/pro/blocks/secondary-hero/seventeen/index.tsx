import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Stripe } from '@/components/ui/svgs/stripe'
import TailwindCSS from '@/components/ui/svgs/tailwindcss'
import { VercelFull } from '@/components/ui/svgs/vercel'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className="bg-background overflow-x-hidden py-24 lg:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-12">
                <div className="relative">
                    <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
                    <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
                    <div className="grid grid-cols-2 divide-x border *:p-6 md:*:p-8 lg:grid-cols-4">
                        <div className="col-span-full overflow-hidden border-b border-r-0 !p-0 text-center max-md:text-center">
                            <div className="px-12 pt-16">
                                <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl tracking-tight">Invoicing. Enterprise Efficiency. Real Impact. </h1>
                                <p className="text-muted-foreground mx-auto mb-8 mt-6 max-w-md text-balance text-lg max-md:mx-auto">Our Enterprise Invoicing solution simplifies billing processes, enhances financial oversight, and ensures compliance with ease, all on a secure platform.</p>

                                <Button
                                    render={<Link href="#link">Watch demo</Link>}
                                    nativeButton={false}
                                    size="lg"
                                />
                            </div>

                            <div className="pointer-events-none relative scale-105">
                                <div
                                    aria-hidden
                                    className="mask-radial-from-55% mask-radial-to-75% pointer-events-none absolute -inset-x-12 inset-y-12 mx-auto max-w-[92rem] opacity-65"
                                    style={{
                                        backgroundImage: `
                                        repeating-linear-gradient(22.5deg, transparent, transparent 1px, rgba(75, 85, 99, 0.06) 1px, rgba(75, 85, 99, 0.06) 2px, transparent 2px, transparent 4px),
                                        repeating-linear-gradient(67.5deg, transparent, transparent 1px, rgba(107, 114, 128, 0.05) 1px, rgba(107, 114, 128, 0.05) 2px, transparent 2px, transparent 4px),
                                        repeating-linear-gradient(112.5deg, transparent, transparent 1px, rgba(55, 65, 81, 0.04) 1px, rgba(55, 65, 81, 0.04) 2px, transparent 2px, transparent 4px),
                                        repeating-linear-gradient(157.5deg, transparent, transparent 1px, rgba(31, 41, 55, 0.03) 1px, rgba(31, 41, 55, 0.03) 2px, transparent 2px, transparent 4px)
                                      `,
                                    }}
                                />
                                <div className="perspective-[4000px] transform-3d">
                                    <div className="z-1 rotate-x-[30deg] mask-radial-from-65% mask-radial-at-top-left mask-radial-[105%_105%] rotate-y-[36deg] min-w-xl lg:min-w-5xl relative mx-auto max-w-[96rem] rotate-[332deg] pl-12 pt-6 lg:translate-x-12 xl:translate-x-16">
                                        <div className="bg-background min-w-4xl ring-foreground/10 lg:left-55 absolute -right-36 bottom-0 left-52 top-1 z-10 rounded-2xl p-1 shadow-2xl shadow-indigo-900/35 ring-1 backdrop-blur md:-right-56 lg:max-w-6xl">
                                            <div className="relative aspect-video origin-top overflow-hidden rounded-xl">
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
                                        <div className="min-w-2xl bg-linear-to-b dark:from-card dark:bg-card via-background from-muted to-background ring-foreground/10 border-background rounded-2xl border p-1 shadow-2xl shadow-black/5 ring-1 lg:max-w-6xl">
                                            <div className="relative aspect-video origin-top overflow-hidden rounded-xl">
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
                        </div>

                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block max-lg:border-b">
                            <p className="text-muted-foreground text-balance">
                                <strong className="text-foreground font-medium">99.9% Uptime guarantee</strong> ensured across all platforms.
                            </p>

                            <Stripe
                                height={22}
                                width={56}
                                className="*:fill-foreground"
                            />
                        </div>

                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block max-lg:relative max-lg:border-b max-lg:border-r-0">
                            <PlusDecorator className="bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)] lg:hidden" />
                            <p className="text-muted-foreground text-balance">
                                <strong className="text-foreground font-medium">15X</strong> faster deployment daily speed observed after 2 weeks.
                            </p>

                            <TailwindCSS
                                height={26}
                                width={132}
                                className="*:fill-foreground"
                            />
                        </div>
                        <div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-5 *:block">
                            <blockquote className="relative max-w-xl">
                                <p className="text-foreground">This platform transformed how we handle client projects. The automation features alone saved us countless hours of manual work every week.</p>

                                <footer className="mt-4 flex items-center gap-2">
                                    <div className="ring-foreground/10 size-6 overflow-hidden rounded-md border border-transparent shadow ring-1">
                                        <Image
                                            src="https://avatars.githubusercontent.com/u/68236786?v=4"
                                            alt="Théo Balick"
                                            width={46}
                                            height={46}
                                            className="size-full object-cover"
                                        />
                                    </div>

                                    <cite>Théo Balick</cite>

                                    <span
                                        aria-hidden
                                        className="bg-foreground/15 size-1 rounded-full"></span>
                                    <span className="text-muted-foreground">CTO, Vercel</span>
                                </footer>
                            </blockquote>

                            <VercelFull
                                height={28}
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
