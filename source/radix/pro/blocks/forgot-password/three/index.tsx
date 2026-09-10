import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { LogoIcon } from "@/components/ui/logo"

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ForgotPassword() {
    return (
        <main className="bg-background">
            <div className="flex min-h-dvh flex-col items-center justify-center gap-6 p-6 lg:col-span-2">
                <div className="m-auto max-w-xs text-center">
                    <Link
                        href="#"
                        aria-label="go home"
                        className="mx-auto flex size-10 *:m-auto">
                        <LogoIcon className="size-7" />
                    </Link>

                    <div className="mb-10 mt-6 space-y-2">
                        <h1 className="text-xl font-semibold">Forgot Password?</h1>
                        <p className="text-muted-foreground text-sm">Enter your email and we'll send you a reset link</p>
                    </div>

                    <div className="space-y-5">
                        <form
                            action=""
                            className="space-y-5">
                            <div>
                                <Label
                                    className="sr-only"
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
                                Send Reset Link
                            </Button>
                        </form>

                        <div className="text-muted-foreground pt-5 text-sm">
                            <Link
                                href="#"
                                className="text-primary inline-flex items-center gap-1 font-medium hover:underline">
                                <ArrowLeft className="size-4" />
                                Back to Sign in
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
