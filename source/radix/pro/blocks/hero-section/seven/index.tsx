import HeroHeader from "@/components/header"

import { Spotify } from "@/components/ui/svgs/spotify"
import { Hulu } from "@/components/ui/svgs/hulu"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Beacon } from "@/components/ui/svgs/beacon"
import { Stripe } from "@/components/ui/svgs/stripe"
import { VercelFull } from "@/components/ui/svgs/vercel"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Product } from "@/components/illustrations/product"

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className="relative">
          <div className="pt-24 pb-20 md:pt-32 lg:pt-48">
            <div className="relative z-10 mx-auto grid max-w-5xl items-end gap-4 px-6 md:grid-cols-2">
              <div>
                <h1 className="text-5xl font-semibold text-balance lg:text-7xl tracking-tight">
                  Software monetization for the AI era
                </h1>
              </div>
              <div className="max-w-sm">
                <p className="mb-6 text-lg text-balance text-muted-foreground lg:text-xl">
                  Streamline your team's meetings with our AI-driven assistant,
                  open source and works.
                </p>
                <Button asChild size="sm">
                  <Link href="#">Get Started</Link>
                </Button>
                <Button asChild className="ml-3" variant="outline" size="sm">
                  <Link href="#">Watch Demo</Link>
                </Button>
              </div>
            </div>

            <Product />
            <div>
              <div className="mb-4 text-center">
                <p className="text-balance text-muted-foreground">
                  Trusted by top teams at:
                </p>
              </div>
              <div className="relative border-y">
                <div className="mx-auto max-w-6xl bg-foreground/8">
                  <div className="grid grid-cols-[1fr_auto_1fr] gap-px">
                    <div className="bg-card/80"></div>
                    <div className="grid w-full grid-cols-2 items-center justify-center gap-px *:h-16 *:bg-card sm:min-w-xl sm:grid-cols-3 md:min-w-2xl lg:mx-auto lg:max-w-2xl lg:*:h-20">
                      <div className="flex h-full items-center justify-center px-8">
                        <Hulu height={16} width="auto" />
                      </div>

                      <div className="flex items-center justify-center px-8">
                        <Spotify height={22} width="auto" />
                      </div>
                      <div className="flex items-center justify-center px-8">
                        <Supabase height={20} width="auto" />
                      </div>
                      <div className="flex items-center justify-center px-8">
                        <Beacon height={16} width="auto" />
                      </div>
                      <div className="flex items-center justify-center px-8">
                        <VercelFull height={16} width="auto" />
                      </div>

                      <div className="flex items-center justify-center px-8">
                        <Stripe height={20} width="auto" />
                      </div>
                    </div>
                    <div className="bg-card/80"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bottom-8 mx-auto flex max-w-6xl justify-between border-x border-foreground/7"
          />
        </section>
      </main>
    </>
  )
}
