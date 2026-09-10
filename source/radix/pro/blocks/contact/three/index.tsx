import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'

export default function Contact() {
    return (
        <section className="bg-background py-24">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="@2xl:grid-cols-2 grid gap-12">
                    <div>
                        <h1 className="text-balance text-4xl font-semibold tracking-tight">Get in touch</h1>
                        <p className="text-muted-foreground mt-4 max-w-md text-balance">Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.</p>

                        <div className="mt-12 space-y-6 *:space-y-2">
                            <div>
                                <h3 className="text-muted-foreground text-sm">Email</h3>
                                <Link
                                    href="mailto:hello@tailark.com"
                                    className="text-foreground hover:decoration-primary text-sm font-medium hover:underline">
                                    hello@tailark.com
                                </Link>
                            </div>

                            <div>
                                <h3 className="text-muted-foreground text-sm">Phone</h3>
                                <Link
                                    href="tel:+1234567890"
                                    className="text-foreground hover:decoration-primary text-sm font-medium hover:underline">
                                    +1 (234) 567-890
                                </Link>
                            </div>

                            <div>
                                <h3 className="text-muted-foreground text-sm">Office</h3>
                                <p className="text-foreground text-sm font-medium">
                                    123 Innovation Drive
                                    <br />
                                    San Francisco, CA 94107
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="mask-radial-at-top-right mask-radial-from-65% mask-radial-[130%_150%] absolute inset-0 rounded-2xl border" />
                        <form className="**:data-[slot=label]:block relative space-y-6 p-8">
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
                    </div>
                </div>
            </div>
        </section>
    )
}
