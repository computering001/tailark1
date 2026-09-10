import { Button } from "@/components/ui/button"
import HeroHeader from "@/components/header"
import LogoCloud from "@/components/logo-cloud"
import { Product } from "@/components/illustrations/product"
import Link from "next/link"

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main className="bg-background">
        <section id="home" className="mx-auto max-w-5xl px-6 pt-32 text-center">
          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold text-balance text-foreground sm:mt-12 sm:text-6xl tracking-tight">
              Powerful Analytics for Smarter Decisions
            </h1>
            <p className="mt-4 mb-8 text-lg text-balance text-muted-foreground">
              Our comprehensive analytics and experimentation platform empowers
              your team to make data-driven decisions.
            </p>
            <Button
              render={<Link href="#">Start Testing for free</Link>}
              nativeButton={false}
              size="lg"
              className="px-4 text-sm"
            />
            <span className="mt-3 block text-center text-sm text-muted-foreground">
              No credit card required!
            </span>
          </div>
        </section>
        <section className="relative mt-8 border-y border-foreground/10 sm:mt-16">
          <div className="relative z-10 mx-auto max-w-6xl border-x px-3">
            <div className="h-180 overflow-hidden border-x shadow-md shadow-black/6.5">
              <div
                aria-hidden
                className="h-3 w-full bg-[repeating-linear-gradient(-90deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_4px)] opacity-5"
              />
              <Product />
            </div>
          </div>
        </section>
        <LogoCloud />
      </main>
    </>
  )
}
