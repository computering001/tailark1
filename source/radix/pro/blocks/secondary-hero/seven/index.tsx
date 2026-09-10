import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Hero } from '@/components/illustrations/hero'

export default function HeroSection() {
    return (
        <section className="bg-background py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div className="max-md:text-center">
                        <span className="text-primary text-sm font-medium">Billing</span>
                        <h1 className="mt-6 text-balance text-4xl font-semibold md:text-5xl tracking-tight">AI-powered billing automation you can trust</h1>
                        <p className="text-muted-foreground mb-6 mt-4 max-w-md text-balance text-lg max-md:mx-auto">Simplify invoicing with automated usage tracking and reporting tools.</p>

                        <Button
                            asChild
                            size="sm">
                            <Link href="#link">Get Started</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="ml-3"
                            size="sm">
                            <Link href="#link">Get a demo</Link>
                        </Button>
                    </div>

                    <Hero />
                </div>
            </div>
        </section>
    )
}
