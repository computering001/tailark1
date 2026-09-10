import HeroHeader from "@/components/header"
import { Image } from "@/components/illustrations/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Sparkles, SquareActivity } from "lucide-react"

const features = [
  {
    title: "Automated Billing",
    description:
      "Streamline your billing process with automated tools that save you time.",
    icon: <Sparkles className="fill-blue-500/15 stroke-foreground" />,
  },
  {
    title: "Detailed Reports",
    description:
      "Access comprehensive reports to better understand your business performance.",
    icon: <SquareActivity className="fill-indigo-500/15 stroke-foreground" />,
  },
  {
    title: "Secure Transactions",
    description:
      "Ensure the safety of your financial data with top-notch security measures.",
    icon: <Shield className="fill-emerald-500/15 stroke-foreground" />,
  },
]

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section>
          <div className="bg-background pt-32 lg:pt-44">
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
              <div className="text-center">
                <h1 className="mx-auto text-5xl font-semibold text-balance text-foreground lg:text-6xl xl:text-7xl xl:tracking-tight tracking-tight">
                  The <span>Financial OS</span> powering businesses on your
                  platform
                </h1>

                <div className="mx-auto mt-4 mb-20 max-w-xl">
                  <p className="mb-6 text-lg text-balance text-muted-foreground lg:text-xl">
                    Experience seamless payments, real-time collaboration, and
                    actionable insights. Set up in minutes.
                  </p>

                  <div className="mx-auto w-fit rounded-lg bg-foreground/5 p-1 ring-1 ring-border-illustration">
                    <Button
                      asChild
                      className="[--color-primary:var(--color-indigo-500)]"
                    >
                      <Link href="/pricing">Get Started </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image />
            </div>
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 lg:px-12">
            <div className="grid gap-6 pt-12 text-left sm:grid-cols-2 md:grid-cols-3 lg:gap-12 lg:px-12">
              {features.map((feature, index) => (
                <div key={feature.title} className="space-y-3">
                  <div className="flex size-8 items-center justify-center rounded-md bg-card shadow ring-1 ring-border *:size-4">
                    {feature.icon}
                  </div>
                  <h2 className="text-lg font-medium">{feature.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
