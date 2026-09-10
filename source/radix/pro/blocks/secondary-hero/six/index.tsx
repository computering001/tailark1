import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Flow } from '@/components/illustrations/flow'
import LogoCloud from './logo-cloud'

export default function HeroSection() {
    return (
        <section className="bg-background overflow-hidden pb-8 pt-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mb-20 text-center *:mx-auto">
                    <span className="text-primary text-sm font-medium">Billing</span>
                    <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold md:text-5xl lg:text-6xl tracking-tight">Streamline Your Invoicing Process</h1>
                    <p className="text-muted-foreground mb-6 mt-4 max-w-3xl text-balance text-lg">Simple and secure user authentication, complete with everything you need out-of-the-box to provide a secure experience for your users.</p>

                    <Button
                        asChild
                        size="sm">
                        <Link href="#link">Get Started</Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="ml-3!"
                        size="sm">
                        <Link href="#link">Get a demo</Link>
                    </Button>
                </div>
                <Flow />
                <LogoCloud />
            </div>
        </section>
    )
}
