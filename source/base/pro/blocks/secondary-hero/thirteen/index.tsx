import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="overflow-x-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <span className="block text-sm font-medium text-primary max-md:text-center">
          iOS
        </span>
        <div className="mt-8 grid items-center gap-16 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-12">
          <div className="max-md:text-center lg:col-span-2">
            <h1 className="text-4xl font-semibold text-balance md:text-5xl tracking-tight">
              Your Invoicing system, in your pocket
            </h1>
            <p className="mt-6 mb-8 max-w-sm text-lg text-balance text-muted-foreground max-md:mx-auto">
              Create invoices, track payments, and manage your finances
              seamlessly.
            </p>

            <Button
              render={
                <Link href="#link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="size-5!"
                  >
                    <path
                      fill="currentColor"
                      d="M20.003 7.158a4.76 4.76 0 0 0-2.273 4.002 4.63 4.63 0 0 0 2.817 4.246 11 11 0 0 1-1.442 2.98c-.899 1.294-1.838 2.587-3.267 2.587s-1.796-.83-3.443-.83c-1.606 0-2.178.857-3.485.857s-2.218-1.198-3.266-2.668a12.9 12.9 0 0 1-2.191-6.955c0-4.083 2.654-6.247 5.267-6.247 1.388 0 2.545.912 3.416.912.83 0 2.123-.966 3.702-.966a4.95 4.95 0 0 1 4.165 2.082m-4.913-3.81A4.7 4.7 0 0 0 16.206.421 2 2 0 0 0 16.165 0a4.7 4.7 0 0 0-3.09 1.592 4.56 4.56 0 0 0-1.157 2.845q0 .193.041.381.142.027.286.027a4.08 4.08 0 0 0 2.845-1.498Z"
                    />
                  </svg>
                  Download
                </Link>
              }
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-12 px-5 text-base"
            />

            <ul className="mt-8 space-y-2">
              {["Create invoices", "Track payments", "Manage finances"].map(
                (item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-muted-foreground max-md:justify-center"
                  >
                    <CheckCircle2 className="size-4 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="relative lg:col-span-3 lg:pl-32">
            <div className="min-w-3xl rounded-2xl bg-background/60 p-1 shadow-xl ring-1 ring-foreground/10 max-md:hidden">
              <div className="relative aspect-video origin-top overflow-hidden rounded-xl border-4 border-transparent bg-background shadow ring-1 ring-border-illustration"></div>
            </div>
            <div className="md:absolute md:-top-8 lg:left-20">
              <div className="h-156 max-w-84 rounded-3xl border border-transparent bg-background p-2 shadow-xl ring-1 ring-foreground/10 max-md:mx-auto md:h-124 md:max-w-64">
                <Image
                  className="h-full rounded-2xl border border-foreground/10 object-cover object-top shadow shadow-foreground/5"
                  src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/mobile_hwua2g.png"
                  alt="app screen"
                  width={704}
                  height={1382}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
