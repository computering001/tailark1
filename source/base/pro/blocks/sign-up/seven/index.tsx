import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Logo } from "@/components/ui/logo"
import { Vercel } from '@/components/ui/svgs/vercel'
import { Slack } from '@/components/ui/svgs/slack'
import { Linear } from '@/components/ui/svgs/linear'

import Link from 'next/link'
import { Star } from 'lucide-react'
import Image from 'next/image'

export default function SignUp() {
    return (
        <main className="bg-background">
            <div className="min-h-dvh lg:grid lg:grid-cols-5">
                <div
                    aria-hidden
                    className="bg-border z-1 left-2/5 pointer-events-none fixed inset-y-0 w-px max-lg:hidden"
                />
                <div
                    aria-hidden
                    className="bg-linear-to-r to-background from-card pointer-events-none fixed inset-0 from-40% to-40% max-lg:hidden"
                />
                <div className="relative hidden flex-col justify-between px-24 py-12 selection:bg-white/15 selection:text-white lg:col-span-2 lg:flex">
                    <Link
                        href="#"
                        className="mx-auto w-fit"
                        aria-label="go home">
                        <Logo className="w-fit" />
                    </Link>

                    <div className="mx-auto w-fit space-y-6 text-center">
                        <div className="space-y-2">
                            <div className="flex justify-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="fill-current/85 text-primary/50 size-4"
                                    />
                                ))}
                            </div>
                            <p className="max-w-2xs text-foreground mt-6 text-balance text-xl">Looks really good. Did you design in code or Figma first?</p>
                        </div>

                        <div className="mx-auto grid w-fit grid-cols-[auto_1fr] items-center gap-3">
                            <div className="before:border-foreground/25 relative mx-auto size-10 overflow-hidden rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                                <Image
                                    src="https://avatars.githubusercontent.com/u/124599?v=4"
                                    alt="Shadcn Avatar"
                                    width={56}
                                    height={56}
                                />
                            </div>

                            <div className="space-y-0.5 text-left">
                                <p className="text-foreground text-balance text-sm">Shadcn</p>
                                <p className="text-muted-foreground text-balance text-xs">Creator or Shadcn/UI</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-muted-foreground text-center text-sm">© 2024 Tailark. All rights reserved.</p>
                </div>

                <div className="relative flex flex-1 flex-col gap-32 p-6 lg:col-span-3 lg:p-12">
                    <Link
                        href="#"
                        className="lg:hidden"
                        aria-label="go home">
                        <Logo
                            uniColor
                            className="w-fit"
                        />
                    </Link>

                    <div className="m-auto w-full max-w-sm">
                        <div className="mb-8">
                            <h1 className="text-3xl font-semibold tracking-tight">Create account</h1>
                            <p className="text-muted-foreground mt-2">to get started with Tailark</p>
                        </div>

                        <div className="space-y-3">
                            <Button
                                size="lg"
                                className="w-full">
                                <Vercel className="size-5" />
                                Continue with Vercel
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full">
                                <Slack className="size-5" />
                                Continue with Slack
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full">
                                <Linear className="size-5" />
                                Continue with Linear
                            </Button>
                        </div>

                        <div className="my-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                            <div className="bg-border border-card h-0.5 border-b" />
                            <div className="text-muted-foreground text-center text-sm">or</div>
                            <div className="bg-border border-card h-0.5 border-b" />
                        </div>

                        <form
                            action=""
                            className="space-y-5">
                            <div className="space-y-2.5">
                                <Label
                                    htmlFor="email"
                                    className="block">
                                    Email
                                </Label>
                                <div className="grid grid-cols-[1fr_auto] gap-2">
                                    <Input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="Enter your email"
                                    />
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        variant="outline">
                                        Sign up
                                    </Button>
                                </div>
                            </div>
                        </form>

                        <p className="text-muted-foreground mt-10 text-sm">
                            Already have an account?{' '}
                            <Link
                                href="#"
                                className="text-primary font-medium hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
