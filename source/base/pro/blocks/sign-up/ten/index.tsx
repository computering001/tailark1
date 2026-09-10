import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { LogoIcon } from "@/components/ui/logo"
import { Vercel } from '@/components/ui/svgs/vercel'
import { Slack } from '@/components/ui/svgs/slack'

import Link from 'next/link'

export default function SignUp() {
    return (
        <main className="bg-background">
            <div className="flex min-h-dvh items-center justify-center p-6">
                <div className="m-auto w-full max-w-72 text-center">
                    <Link
                        href="#"
                        aria-label="go home"
                        className="mx-auto flex size-10 *:m-auto">
                        <LogoIcon className="size-7" />
                    </Link>

                    <div className="my-10 space-y-2">
                        <h1 className="text-xl font-semibold">Create account</h1>
                        <p className="text-muted-foreground text-sm">Sign up to get started</p>
                    </div>

                    <div className="space-y-10">
                        <form
                            action=""
                            className="space-y-5">
                            <div>
                                <Label
                                    className="sr-only"
                                    htmlFor="name">
                                    Name
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full"
                                />
                            </div>
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
                                Continue with Email
                            </Button>
                        </form>

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
                        </div>

                        <div className="text-muted-foreground text-sm">
                            Already have an account?{' '}
                            <Link
                                href="#"
                                className="text-primary font-medium hover:underline">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
