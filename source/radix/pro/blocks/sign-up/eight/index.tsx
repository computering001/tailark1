import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { LogoIcon } from "@/components/ui/logo"
import { Vercel } from '@/components/ui/svgs/vercel'
import { Slack } from '@/components/ui/svgs/slack'
import { Card } from '@/components/ui/card'

import Link from 'next/link'
import { Fingerprint, Lock, Mail, User } from 'lucide-react'

export default function SignUp() {
    return (
        <main className="bg-background relative min-h-dvh overflow-hidden">
            <div className="relative flex min-h-dvh flex-col items-center justify-center p-6">
                <div className="mx-auto w-full max-w-sm">
                    <div className="mb-8 px-4">
                        <Link
                            href="#"
                            className="inline-block p-4">
                            <LogoIcon />
                        </Link>
                        <h1 className="px-4 text-xl">
                            Create account <span className="text-muted-foreground">to get started</span>
                        </h1>
                    </div>
                    <Card className="bg-card/75 shadow-black/4 space-y-6 rounded-2xl p-8">
                        <form
                            action=""
                            className="space-y-5">
                            <div className="space-y-2.5">
                                <Label
                                    htmlFor="name"
                                    className="block">
                                    Full Name
                                </Label>
                                <div className="relative">
                                    <User className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                                    <Input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="John Doe"
                                        className="pl-9"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <Label
                                    htmlFor="email"
                                    className="block">
                                    Email
                                </Label>
                                <div className="relative">
                                    <Mail className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                                    <Input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="you@example.com"
                                        className="pl-9"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <Label
                                    htmlFor="password"
                                    className="block">
                                    Password
                                </Label>
                                <div className="relative">
                                    <Lock className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                                    <Input
                                        type="password"
                                        id="password"
                                        required
                                        placeholder="••••••••"
                                        className="pl-9"
                                    />
                                </div>
                            </div>
                            <Button
                                type="submit"
                                className="w-full">
                                Create account
                            </Button>
                        </form>

                        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                            <div className="bg-border border-card h-0.5 border-b" />
                            <div className="text-muted-foreground text-center text-xs uppercase">or continue with</div>
                            <div className="bg-border border-card h-0.5 border-b" />
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <Button
                                variant="outline"
                                className="w-full"
                                aria-label="continue with vercel">
                                <Vercel className="size-4" />
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full"
                                aria-label="continue with slack">
                                <Slack className="size-4" />
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full"
                                aria-label="continue with fingerprint">
                                <Fingerprint className="size-4" />
                            </Button>
                        </div>
                    </Card>

                    <p className="text-muted-foreground mt-16 text-center text-sm">
                        Already have an account?{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            Sign in
                        </Link>
                    </p>

                    <div className="mt-6 flex justify-center gap-6">
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground text-xs">
                            Terms
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground text-xs">
                            Privacy
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground text-xs">
                            Support
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
