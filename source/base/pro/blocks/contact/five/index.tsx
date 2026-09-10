import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

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
                        <Card className="flex flex-col space-y-2.5 rounded-xl p-6 md:p-12">
                            <h2 className="text-muted-foreground text-sm font-medium">Collaborate</h2>
                            <Link
                                href="mailto:hey@tailark.com"
                                className="hover:decoration-primary font-medium hover:underline">
                                hey@tailark.com
                            </Link>
                            <Link
                                href="tel:+6581234567"
                                className="hover:decoration-primary font-medium hover:underline">
                                +65 8123 4567
                            </Link>
                        </Card>
                        <Card className="flex flex-col space-y-2.5 rounded-xl p-6 md:p-12">
                            <h2 className="text-muted-foreground text-sm font-medium">Press</h2>
                            <Link
                                href="mailto:hey@tailark.com"
                                className="hover:decoration-primary font-medium hover:underline">
                                press@tailark.com
                            </Link>
                            <Link
                                href="tel:+6581234567"
                                className="hover:decoration-primary font-medium hover:underline">
                                +65 8123 4567
                            </Link>
                        </Card>

                        <Card className="col-span-full flex flex-col p-6 md:p-12">
                            <h2 className="text-foreground font-medium">Talk to our team</h2>
                            <p className="text-muted-foreground mt-3 text-sm">Fill out the form and we'll be in touch within 24 hours.</p>

                            <form className="**:data-[slot=label]:block relative mt-12 space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2.5">
                                        <Label htmlFor="first-name">First name</Label>
                                        <Input
                                            id="first-name"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2.5">
                                        <Label htmlFor="last-name">Last name</Label>
                                        <Input
                                            id="last-name"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="email">Professional Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="company">Company</Label>
                                    <Input
                                        id="company"
                                        type="text"
                                        placeholder="Company Name"
                                        required
                                    />
                                </div>

                                <div className="space-y-2.5">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full">
                                    Send message
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
