import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { PhoneCall, Users2 } from 'lucide-react'
import Image from 'next/image'
import { VercelFull } from '@/components/ui/svgs/vercel'

export default function Contact() {
    return (
        <section className="bg-background py-24">
            <div className="@container mx-auto max-w-5xl px-2">
                <div className="mx-auto max-w-4xl">
                    <div className="px-4 text-center">
                        <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:tracking-tight tracking-tight">Help us route your inquiry</h1>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Find answers to your questions and get support for our services.</p>
                    </div>

                    <div className="@lg:grid-cols-2 mx-auto mt-12 grid max-w-2xl gap-1 rounded-2xl border p-1">
                        <Card className="flex flex-col rounded-xl p-6">
                            <div className="relative mb-4">
                                <Users2 className="not-dark:*:first:stroke-card not-dark:*:nth-2:stroke-card drop-shadow-indigo-500/20 size-5 drop-shadow *:last:opacity-25" />
                                <Users2 className="not-dark:*:first:stroke-card not-dark:*:nth-2:stroke-card mask-t-from-25% mask-t-to-75% drop-shadow-emerald-500/20 absolute inset-0 size-5 drop-shadow *:last:opacity-25" />
                            </div>
                            <h2 className="font-medium">Contact Sales</h2>
                            <p className="text-muted-foreground mb-4 mt-2 text-balance">Get in touch with our sales team for more information.</p>
                            <Button
                                render={<Link href="#link">Talk to sales</Link>}
                                nativeButton={false}
                                variant="outline"
                                size="sm"
                                className="mt-auto w-fit"
                            />
                        </Card>
                        <Card className="flex flex-col rounded-xl p-6">
                            <div className="relative mb-4">
                                <PhoneCall className="drop-shadow-indigo-500/20 *:not-first:opacity-25 not-dark:*:first:stroke-card size-5 drop-shadow" />
                                <PhoneCall className="mask-t-from-25% mask-t-to-75% drop-shadow-emerald-500/20 not-dark:*:first:stroke-card *:not-first:opacity-50 absolute inset-0 size-5 drop-shadow" />
                            </div>
                            <h2 className="text-lg font-medium">Help and Support</h2>
                            <p className="text-muted-foreground mb-4 mt-2 text-balance">Find answers to your questions and get support for our services.</p>

                            <div className="mt-auto flex flex-wrap gap-1">
                                <Button
                                    render={<Link href="#link">Contact Support</Link>}
                                    nativeButton={false}
                                    variant="outline"
                                    size="sm"
                                    className="w-fit"
                                />
                                <Button
                                    render={<Link href="mailto:hey@tailark.com">hey@tailark.com</Link>}
                                    nativeButton={false}
                                    variant="ghost"
                                    size="sm"
                                    className="text-primary w-fit"
                                />
                            </div>
                        </Card>

                        <div className="col-span-full flex flex-col p-6">
                            <div className="space-y-6">
                                <p className="text-foreground text-balance text-xl">"Their support team resolved my issue within minutes. Best customer service I've experienced in years."</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                                    <div className="before:border-foreground/25 size-18 relative overflow-hidden rounded-xl before:absolute before:inset-0 before:rounded-xl before:border">
                                        <Image
                                            src="https://avatars.githubusercontent.com/u/124599?v=4"
                                            alt="Shadcn Avatar"
                                            width={72}
                                            height={72}
                                        />
                                    </div>

                                    <div className="space-y-0.5">
                                        <p className="text-foreground text-balance text-sm font-medium">Shadcn</p>
                                        <p className="text-foreground/65 text-balance text-xs">Creator or Shadcn/UI</p>

                                        <VercelFull className="mt-3 h-4 w-16" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
