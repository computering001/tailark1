import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Globe, Mail } from 'lucide-react'

const offices = [
    {
        city: 'San Francisco',
        country: 'United States',
        address: '100 Market Street, Suite 300',
        timezone: 'PST (UTC-8)',
        image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=400&auto=format&fit=crop',
    },
    {
        city: 'London',
        country: 'United Kingdom',
        address: '10 Finsbury Square',
        timezone: 'GMT (UTC+0)',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=400&auto=format&fit=crop',
    },
    {
        city: 'Singapore',
        country: 'Singapore',
        address: '1 Raffles Place, Tower 2',
        timezone: 'SGT (UTC+8)',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=400&auto=format&fit=crop',
    },
]

export default function Contact() {
    return (
        <section className="bg-background py-24">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="@3xl:grid-cols-[1fr_2fr] grid gap-12">
                    <div>
                        <h1 className="text-balance text-4xl font-semibold tracking-tight">Our offices</h1>
                        <p className="text-muted-foreground mt-4 text-balance">Visit us at one of our global locations or reach out online.</p>

                        <div className="mt-8 space-y-3">
                            <div className="flex items-center gap-2">
                                <Mail className="text-muted-foreground size-4" />
                                <Link
                                    href="mailto:hello@tailark.com"
                                    className="hover:decoration-primary font-medium hover:underline">
                                    hello@tailark.com
                                </Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="text-muted-foreground size-4" />
                                <span className="text-muted-foreground">Available worldwide</span>
                            </div>
                        </div>

                        <Button
                            render={
                                <Link href="#contact-form">
                                    Get in touch
                                                                    <ArrowRight className="ml-2 size-4" />
                                </Link>
                            }
                            nativeButton={false}
                            className="mt-8"
                        />
                    </div>

                    <div className="@md:grid-cols-3 grid gap-3">
                        {offices.map((office) => (
                            <Card
                                key={office.city}
                                className="group row-span-2 grid grid-rows-subgrid gap-0 overflow-hidden">
                                <div className="before:border-foreground/10 before:z-1 relative m-px h-32 overflow-hidden rounded-[11px] before:absolute before:inset-0 before:rounded-[11px] before:border">
                                    <Image
                                        src={office.image}
                                        alt={office.city}
                                        fill
                                        sizes="(max-width: 447px) calc(100vw - 3rem), (max-width: 767px) calc(33vw - 1.5rem), (max-width: 1023px) calc(22vw - 1.75rem), 200px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col p-4">
                                    <h3 className="text-sm font-medium">{office.city}</h3>
                                    <p className="text-muted-foreground mt-0.5 text-sm">{office.country}</p>
                                    <p className="my-3 text-sm">{office.address}</p>
                                    <div className="mt-auto flex items-center gap-1 text-xs">
                                        <Clock className="size-3" />
                                        {office.timezone}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
