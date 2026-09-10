import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CallToAction() {
  return (
    <section className="bg-background py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-semibold text-balance text-foreground md:text-4xl tracking-tight">
            Create, Sell and Grow
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Join a community of over 1000+ companies and developers who have
            already discovered the power of Tailark.{" "}
          </p>

          <form className="mx-auto my-6 w-full max-w-xs">
            <Label
              className="sr-only block text-sm font-medium"
              htmlFor="email"
            >
              Join Waitlist
            </Label>
            <div className="flex gap-2">
              <Input
                className="h-8 border-transparent bg-background shadow ring-1 ring-foreground/10"
                placeholder="Your email"
                type="email"
                id="email"
                required
                name="email"
              />
              <Button type="submit" size="sm">
                <span>Join Waitlist</span>
              </Button>
            </div>
          </form>

          <p className="text-sm text-muted-foreground">
            <span className="font-mono font-semibold text-foreground">78</span>{" "}
            Companies Joined Today
          </p>
        </div>
      </div>
    </section>
  )
}
