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
import { ArrowLeft } from "lucide-react"

export default function ForgotPassword() {
  return (
    <main className="@container min-h-dvh bg-background">
      <div className="flex min-h-dvh flex-col items-center justify-center p-6">
        <Card className="w-full max-w-sm space-y-3 @sm:px-8 @sm:py-6">
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
            <CardTitle className="text-xl font-medium">
              Forgot password?
            </CardTitle>
            <CardDescription>
              No worries, we'll send you reset instructions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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

              <Button type="submit" className="w-full">
                Send reset link
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link
            href="#"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" />
            Back to Sign in
          </Link>
        </p>
      </div>
    </main>
  )
}
