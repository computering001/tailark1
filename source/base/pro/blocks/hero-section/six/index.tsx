import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Product } from "@/components/illustrations/product"
import { LogoCloud } from "@/components/logo-cloud"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <>
      <Header />
      <main className="overflow-hidden bg-background">
        <section className="relative selection:bg-primary-foreground selection:text-primary">
          <div className="pt-15">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10 mx-auto max-w-6xl border-x"
            />
            <div
              aria-hidden
              className="corner-bevel pointer-events-none absolute inset-0 inset-x-0 top-15 z-10 mx-auto max-w-332 rounded-t-[2rem] border-x border-t"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 inset-x-0 z-10 mx-auto h-15 max-w-316 border-x"
            />
            <div className="flex justify-center">
              <div className="relative flex flex-wrap items-center justify-center gap-3 p-4">
                <div className="rounded-full bg-foreground px-2 py-1 text-xs text-background">
                  New
                </div>
                <Link
                  href="#"
                  className="group flex items-center gap-2 text-sm after:absolute after:inset-0"
                >
                  Meet Tailark 2 : The Ultimate Design System
                  <ChevronRight className="size-4 not-group-hover:opacity-50" />
                </Link>
              </div>
            </div>
            <div className="corner-t-notch relative z-10 mx-auto grid max-w-6xl rounded-t-[2rem] border-x border-t px-6 py-16 max-md:pb-6">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="font-serif text-4xl leading-[1.1] tracking-[-0.5px] text-balance text-foreground md:text-5xl">
                  Unlock Revenue Growth with Intelligent Analytics
                </h1>

                <p className="mt-4 mb-6 text-lg text-balance text-muted-foreground">
                  Empower your sales team with AI-powered insights that drive
                  conversions, optimize pipelines, and accelerate deal velocity.
                  Our intelligent.
                </p>

                <Button
                  render={<Link href="#">Book a demo</Link>}
                  nativeButton={false}
                  size="lg"
                  className="rounded-full px-6 shadow-transparent"
                />
              </div>
            </div>
            <div className="relative -mt-px border-y">
              <div className="absolute inset-0 mask-t-from-25%">
                <Image
                  src="https://images.unsplash.com/photo-1695151992691-a9e19f73948f?q=80&w=2206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="hero background"
                  className="size-full object-cover object-top dark:opacity-25"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="relative mx-auto max-w-6xl overflow-hidden py-6 md:py-16">
                <div
                  aria-hidden
                  className="absolute inset-0 grid grid-cols-3 gap-px *:border-x *:first:border-l-0 *:last:border-r-0 md:grid-cols-6"
                >
                  <div />
                  <div className="max-md:hidden" />
                  <div className="max-md:hidden" />
                  <div className="max-md:hidden" />
                  <div />
                  <div />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 grid grid-cols-3 gap-px mask-t-from-65% *:bg-linear-to-l *:from-foreground/6.5 *:via-transparent *:to-foreground/6.5 md:grid-cols-6"
                >
                  <div />
                  <div className="max-md:hidden" />
                  <div className="max-md:hidden" />
                  <div className="max-md:hidden" />
                  <div />
                  <div />
                </div>

                <Product />
              </div>
            </div>
          </div>
          <LogoCloud />
        </section>
      </main>
    </>
  )
}
