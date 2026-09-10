'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { LogoIcon } from "@/components/ui/logo"
import { Vercel } from '@/components/ui/svgs/vercel'
import { Slack } from '@/components/ui/svgs/slack'

import { useState } from 'react'

import Link from 'next/link'

export default function SignUp() {
    const [password, setPassword] = useState('')

    return (
        <main className="bg-background">
            <div className="grid min-h-dvh grid-rows-[1fr_auto] gap-6 p-6 pt-24">
                <div className="mx-auto w-full max-w-72 self-center">
                    <Link
                        href="#"
                        aria-label="go home"
                        className="-ml-2.5 flex size-10 *:m-auto">
                        <LogoIcon className="size-7" />
                    </Link>

                    <div className="my-10 space-y-2">
                        <h1 className="text-2xl font-semibold">Create account</h1>
                        <p className="text-muted-foreground text-sm">Sign up to get started</p>
                    </div>

                    <form
                        action=""
                        className="space-y-5">
                        <div className="space-y-2.5">
                            <Label
                                htmlFor="name-signup"
                                className="block">
                                Name
                            </Label>
                            <Input
                                type="text"
                                id="name-signup"
                                required
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2.5">
                            <Label
                                htmlFor="email-signup"
                                className="block">
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email-signup"
                                required
                                placeholder="name@company.com"
                            />
                        </div>
                        <div className="space-y-2.5">
                            <Label
                                htmlFor="password-signup"
                                className="block">
                                Password <span className="text-muted-foreground">(optional)</span>
                            </Label>

                            <Input
                                type="password"
                                id="password-signup"
                                required
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full">
                            {password ? 'Create Account' : 'Send Magic Link'}
                        </Button>
                    </form>

                    <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                        <div className="bg-border border-card h-0.5 border-b" />
                        <div className="text-muted-foreground text-center text-sm">or continue with</div>
                        <div className="bg-border border-card h-0.5 border-b" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            variant="outline"
                            className="w-full">
                            <Vercel className="size-4" />
                            Vercel
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full">
                            <Slack className="size-4" />
                            Slack
                        </Button>
                    </div>

                    <p className="text-muted-foreground mt-8 text-sm">
                        Already have an account?{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>

                <div className="mx-auto mt-auto w-fit pt-8">
                    <div className="flex gap-6">
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
                            Help
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
