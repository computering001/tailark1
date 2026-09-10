import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { Vercel } from "@/components/ui/svgs/vercel"
import { Slack } from "@/components/ui/svgs/slack"

import Link from "next/link"
import Image from "next/image"

export default function Login() {
  return (
    <main className="bg-background">
      <div className="grid min-h-dvh lg:grid-cols-5">
        <div className="fixed inset-y-0 col-span-2 hidden w-2/5 selection:bg-black/20 selection:text-blue-400! lg:block">
          <Image
            src="https://images.unsplash.com/photo-1762600749688-8dfc960d86c5?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Abstract gradient background"
            fill
            sizes="(min-width: 1024px) 40vw, 1px"
            className="object-cover"
          />
          <div className="mask-t-form-25% absolute inset-0 from-black/60 to-black/20 mask-t-to-60% backdrop-blur-xl" />
          <div className="absolute inset-0 border-r bg-linear-to-t from-black/60 to-black/20" />

          <div className="absolute right-12 bottom-12 left-12">
            <blockquote className="space-y-4">
              <p className="text-xl font-medium text-balance text-white">
                "The best way to predict the future is to create it."
              </p>
              <footer className="text-sm text-white/80">— Peter Drucker</footer>
            </blockquote>
          </div>
        </div>
        <div className="flex flex-col p-6 lg:col-span-3 lg:col-start-3 lg:p-12">
          <div className="flex items-center justify-between">
            <Link href="#" aria-label="go home">
              <Logo className="h-5" />
            </Link>

            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline"
            >
              Sign up
            </Link>
          </div>

          <div className="m-auto w-full max-w-xs">
            <div className="mb-8 space-y-2">
              <h1 className="text-2xl font-semibold">Sign in</h1>
              <p className="text-muted-foreground">
                Enter your credentials to access your account
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <Button type="button" variant="outline" className="w-full">
                  <Vercel />
                  Vercel
                </Button>
                <Button type="button" variant="outline" className="w-full">
                  <Slack />
                  Slack
                </Button>
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div className="h-0.5 border-b border-card bg-border" />
                <div className="text-center text-xs text-muted-foreground uppercase">
                  or continue with
                </div>
                <div className="h-0.5 border-b border-card bg-border" />
              </div>

              <form action="" className="space-y-6">
                <div className="space-y-2.5">
                  <Label htmlFor="email" className="block">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    required
                    placeholder="name@example.com"
                  />
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="block">
                      Password
                    </Label>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    type="password"
                    id="password"
                    required
                    placeholder="Enter your password"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </form>

              <div className="mt-10 text-sm text-muted-foreground">
                No account?{" "}
                <Link
                  href="#"
                  className="font-medium text-primary hover:underline"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-auto text-center text-xs text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link href="#" className="underline hover:text-foreground">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
