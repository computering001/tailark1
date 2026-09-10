import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { LogoIcon } from "@/components/ui/logo"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Linear } from "@/components/ui/svgs/linear"
import { Figma } from "@/components/ui/svgs/figma"

export default function Login() {
  return (
    <main className="@container relative min-h-dvh bg-background">
      <div className="relative flex min-h-dvh flex-col items-center justify-center p-6">
        <Card className="w-full max-w-sm rounded-2xl shadow-black/4 @sm:p-8 @sm:pt-6">
          <CardHeader className="text-center">
            <Link
              href="#"
              aria-label="go home"
              className="corner-squircle mx-auto mb-4 flex size-12 items-center justify-center rounded-3xl bg-linear-to-b from-zinc-400 to-zinc-500 inset-shadow-2xs inset-ring inset-shadow-white/35 inset-ring-foreground/10 dark:from-zinc-700 dark:to-zinc-800 dark:inset-ring-foreground/4"
            >
              <LogoIcon
                uniColor
                className="size-7 mask-b-from-25% text-white opacity-85 drop-shadow drop-shadow-black/15"
              />
            </Link>
            <CardTitle className="text-2xl font-medium">Welcome back</CardTitle>
            <CardDescription>
              Choose your preferred sign in method
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              <Button variant="outline" className="w-full">
                <Figma />
                Continue with Figma
              </Button>
              <Button variant="outline" className="w-full">
                <Linear />
                Continue with Linear
              </Button>
            </div>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-card px-3 text-sm text-muted-foreground">
                  or
                </span>
              </div>
            </div>

            <form action="" className="space-y-5">
              <div className="space-y-2.5">
                <Label htmlFor="email" className="block">
                  Email address
                </Label>
                <Input
                  type="email"
                  id="email"
                  required
                  placeholder="hello@example.com"
                />
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <Label className="block text-left" htmlFor="password">
                    Password
                  </Label>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground underline hover:text-foreground"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Input
                  type="password"
                  id="password"
                  required
                  placeholder="••••••••"
                />
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="size-4 rounded border border-input"
                />
                Remember me
              </label>

              <Button type="submit" className="w-full">
                Sign in
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="#" className="font-medium text-primary hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </main>
  )
}
