import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { LogoIcon } from "@/components/ui/logo"
import { Vercel } from '@/components/ui/svgs/vercel'
import { Slack } from '@/components/ui/svgs/slack'

import Link from 'next/link'
import { ScanFace } from 'lucide-react'

export default function Login() {
    return (
        <main className="bg-background">
            <div className="flex min-h-dvh flex-col items-center justify-center gap-6 p-6 lg:col-span-2">
                <div className="m-auto max-w-xs text-center">
                    <Link
                        href="#"
                        aria-label="go home"
                        className="mx-auto flex size-10 *:m-auto">
                        <LogoIcon className="size-6" />
                    </Link>

                    <div className="mb-10 mt-6 space-y-2">
                        <h1 className="text-xl font-semibold">Welcome Back</h1>
                        <p className="text-muted-foreground text-sm">Please login to your account</p>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-3">
                            <Button
                                type="button"
                                className="w-full"
                                variant="outline">
                                <Vercel />
                                Continue with Vercel
                            </Button>

                            <Button
                                type="button"
                                className="w-full"
                                variant="outline">
                                <Slack />
                                Continue with Slack
                            </Button>
                            <Button
                                type="button"
                                className="w-full"
                                variant="outline">
                                <ScanFace />
                                Continue with Passkey
                            </Button>
                        </div>

                        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-3">
                            <div className="bg-border border-card h-0.5 border-b" />
                            <div className="text-muted-foreground text-center text-sm">or</div>
                            <div className="bg-border border-card h-0.5 border-b" />
                        </div>

                        <form
                            action=""
                            className="space-y-5">
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
                            <Button
                                type="submit"
                                className="w-full">
                                Continue with Email
                            </Button>
                        </form>

                        <div className="text-muted-foreground pt-5 text-sm">
                            Don't have an account?{' '}
                            <Link
                                href="#"
                                className="text-primary font-medium hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-auto w-full border-t pt-6">
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
