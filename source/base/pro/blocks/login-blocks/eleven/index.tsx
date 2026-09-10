import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { LogoIcon } from "@/components/ui/logo"

import Link from 'next/link'

export default function Login() {
    return (
        <main className="bg-background">
            <div className="grid min-h-dvh grid-rows-[1fr_auto] gap-6 p-6">
                <div className="m-auto w-full max-w-72 self-center text-center">
                    <Link
                        href="#"
                        aria-label="go home"
                        className="mx-auto flex size-10 *:m-auto">
                        <LogoIcon className="size-7" />
                    </Link>

                    <h1 className="mb-10 mt-6 text-xl font-semibold">Log in to Tailark</h1>

                    <div className="space-y-2">
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
                                    placeholder="Enter your password"
                                    className="w-full"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full">
                                Continue
                            </Button>
                        </form>
                        <Button
                            render={<Link href="#">Forgot your password?</Link>}
                            nativeButton={false}
                            type="submit"
                            className="not-hover:text-muted-foreground w-full"
                            size="sm"
                            variant="ghost"
                        />

                        <div className="text-muted-foreground mt-4 text-sm">
                            Don't have an account?{' '}
                            <Link
                                href="#"
                                className="text-primary font-medium hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-xs">
                    <p className="text-muted-foreground text-center text-xs">
                        This site is protected by reCAPTCHA and the Google{' '}
                        <Link
                            href="#"
                            className="text-foreground font-medium hover:underline">
                            Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link
                            href="#"
                            className="text-foreground font-medium hover:underline">
                            Terms of Service
                        </Link>{' '}
                        apply.
                    </p>
                </div>
            </div>
        </main>
    )
}
