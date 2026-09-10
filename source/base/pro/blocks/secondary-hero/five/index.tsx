import React from 'react'
import { Product } from '@/components/illustrations/product'
import { Header } from './header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <>
            <Header />
            <section className="bg-background mb-12 border-b pt-44">
                <div className="mx-auto max-w-6xl px-6 lg:px-12">
                    <div className="mx-auto mb-6 max-w-3xl">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm font-medium">Billing</span>
                            <h1 className="mt-6 text-balance text-4xl font-semibold lg:text-5xl lg:font-medium tracking-tight">AI-powered billing automation you can trust</h1>

                            <p className="text-muted-foreground mb-6 mt-4 text-balance text-lg">Simplify invoicing with automated usage tracking and reporting tools.</p>
                            <Button
                                render={<Link href="#">Start building</Link>}
                                nativeButton={false}
                                size="sm"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto max-w-7xl py-6 md:py-12">
                    <div className="relative z-10">
                        <Product />
                    </div>
                    <div className="mask-t-from-65% mask-x-from-75% absolute inset-0 mx-auto dark:hidden">
                        <Image
                            className="dark:hiddent mx-auto size-full origin-top object-cover opacity-50"
                            src="https://images.unsplash.com/photo-1740516367183-90f0b6094907?q=80&w=2300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="background"
                            width={2300}
                            height={1294}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
