import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroHeader from "@/components/header"
import { ChevronRight, CirclePlay } from "lucide-react"
import { Spotify } from "@/components/ui/svgs/spotify"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Beacon } from "@/components/ui/svgs/beacon"
import { Product } from "@/components/illustrations/product"

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden pb-6">
        <section>
          <div className="relative pt-24 pb-36 md:pt-36 lg:pt-44">
            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-12">
              <div className="md:w-1/2">
                <div>
                  <h1 className="max-w-md text-5xl font-medium text-balance md:text-6xl tracking-tight">
                    Simple payments for startups
                  </h1>
                  <p className="mt-4 mb-8 max-w-2xl text-xl text-balance text-muted-foreground">
                    One tool that does it all. Search, generate, analyze, and
                    chat—right inside Tailark.
                  </p>

                  <div className="flex items-center gap-3">
                    <Button asChild size="lg" className="pr-2.5 pl-4">
                      <Link href="#link">
                        <span className="text-nowrap">Get Started</span>
                        <ChevronRight className="opacity-50" />
                      </Link>
                    </Button>
                    <Button
                      key={2}
                      asChild
                      size="lg"
                      variant="outline"
                      className="pr-4 pl-3.5"
                    >
                      <Link href="#link">
                        <CirclePlay className="fill-primary/25 stroke-primary" />
                        <span className="text-nowrap">Watch video</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-muted-foreground">Trusted by teams at :</p>
                  <div className="mt-6 flex w-full max-w-md flex-wrap items-center gap-8 *:w-fit **:fill-foreground">
                    <Spotify height={26} width="auto" />
                    <Supabase height={24} width="auto" />
                    <Beacon height={18} width="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="z-20 mt-24 translate-x-12 perspective-near md:absolute md:top-40 md:-right-6 md:bottom-16 md:left-1/2 md:mt-0 md:translate-x-0">
              <div className="relative h-full max-w-3xl before:pointer-events-none before:absolute before:-inset-x-4 before:top-0 before:bottom-7 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border before:border-foreground/5 before:bg-foreground/5">
                <div className="relative h-full -translate-y-12 skew-x-6 overflow-hidden rounded-(--radius) border border-transparent bg-background shadow-xl ring-1 shadow-black/6.5 ring-border max-lg:max-h-160">
                  <Product className="scale-99 border-transparent sm:scale-100 lg:scale-56 xl:scale-57 2xl:scale-65" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
