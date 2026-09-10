import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
    return (
        <section className="bg-background py-24">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="flex max-w-sm flex-col">
                    <div className="text-muted-foreground mb-6 w-fit text-xs font-medium">Sales</div>
                    <h1 className="text-balance text-3xl font-semibold tracking-tight">Ready to scale your business?</h1>
                    <p className="text-muted-foreground mt-4 text-balance">Get in touch with our sales team to discuss custom solutions for your organization.</p>
                </div>
                <span className="bg-size-[6px_1px] my-12 block h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-bottom bg-repeat-x opacity-30 dark:opacity-15" />
                <div className="grid max-lg:gap-20 md:grid-cols-2">
                    <form className="**:data-[slot=label]:block relative max-w-sm space-y-6">
                        <div className="grid gap-3 sm:grid-cols-2">
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
                                rows={7}
                                required
                                className="min-h-32"
                            />
                        </div>

                        <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto]">
                            <p className="text-muted-foreground text-sm">
                                By submitting this form, you agree to our{' '}
                                <Link
                                    href="#link"
                                    className="text-primary underline">
                                    Privacy Policy
                                </Link>
                            </p>
                            <Button className="max-sm:row-start-1">Get in touch</Button>
                        </div>
                    </form>
                    <div className="max-w-sm space-y-6 *:space-y-2 md:mx-auto">
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
            </div>
        </section>
    )
}
