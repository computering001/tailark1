import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { LogoIcon } from "@/components/ui/logo"
import { Vercel } from '@/components/ui/svgs/vercel'
import { Slack } from '@/components/ui/svgs/slack'
import { Card } from '@/components/ui/card'

import Link from 'next/link'
import { ScanFace } from 'lucide-react'
import { Linear } from '@/components/ui/svgs/linear'

export default function SignUp() {
    return (
        <main className="@container">
            <div
                aria-hidden
                className="bg-linear-[-16deg] from-card to-background pointer-events-none fixed inset-0 from-50% to-50%"
            />
            <div className="relative flex min-h-dvh flex-col items-center justify-center gap-6 p-2 sm:p-6 lg:col-span-2">
                <Card className="not-dark:bg-card/35 m-auto w-fit p-8 text-center shadow-lg backdrop-blur">
                    <div className="@sm:min-w-xs max-w-xs">
                        <Link
                            href="#"
                            aria-label="go home"
                            className="mx-auto flex size-10 *:m-auto">
                            <LogoIcon className="size-5" />
                        </Link>

                        <div className="mb-10 mt-6 space-y-2">
                            <h1 className="text-xl font-semibold">Sign Up to Tailark</h1>
                            <p className="text-muted-foreground text-sm">Create your account to get started</p>
                        </div>

                        <div className="space-y-5">
                            <div className="grid grid-cols-2 gap-3">
                                <Button
                                    type="button"
                                    className="w-full"
                                    variant="outline">
                                    <Vercel />
                                    Vercel
                                </Button>

                                <Button
                                    type="button"
                                    className="w-full"
                                    variant="outline">
                                    <Slack />
                                    Slack
                                </Button>
                                <Button
                                    type="button"
                                    className="w-full"
                                    variant="outline">
                                    <Linear />
                                    Linear
                                </Button>
                                <Button
                                    type="button"
                                    className="w-full"
                                    variant="outline">
                                    <ScanFace />
                                    Passkey
                                </Button>
                            </div>

                            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-1">
                                <div className="bg-border h-px" />
                                <div className="text-muted-foreground text-center text-sm">or</div>
                                <div className="bg-border h-px" />
                            </div>

                            <form
                                action=""
                                className="space-y-5">
                                <div className="space-y-2.5">
                                    <Label
                                        className="block text-left"
                                        htmlFor="name">
                                        Full Name
                                    </Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full"
                                    />
                                </div>
                                <div className="space-y-2.5">
                                    <Label
                                        className="block text-left"
                                        htmlFor="email">
                                        Email
                                    </Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="Enter your email"
                                        className="w-full"
                                    />
                                </div>
                                <div className="space-y-2.5">
                                    <Label
                                        className="block text-left"
                                        htmlFor="password">
                                        Password
                                    </Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        required
                                        placeholder="Create a password"
                                        className="w-full"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full">
                                    Create Account
                                </Button>
                            </form>

                            <div className="text-muted-foreground pt-5 text-sm">
                                Already have an account?{' '}
                                <Link
                                    href="#"
                                    className="text-primary font-medium hover:underline">
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="mx-auto mt-auto w-full pb-6">
                    <div className="mx-auto flex max-w-xs items-center justify-center gap-6">
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground text-sm">
                            Privacy
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground text-sm">
                            Terms
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground text-sm">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
