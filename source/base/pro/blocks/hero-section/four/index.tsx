import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroHeader from "@/components/header"
import { cn } from "@/lib/utils"
import LogoCloud from "@/components/logo-cloud"
import { Product } from "@/components/illustrations/product"

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden pb-6">
        <section id="home">
          <div className="relative mx-auto max-w-6xl border-x border-b px-3 pt-24 pb-10 md:pt-36 md:pb-20">
            <div>
              <div className="relative mx-auto w-fit bg-foreground/5 p-2">
                <div
                  aria-hidden
                  className="absolute top-1 left-1 size-[3px] rounded-full bg-foreground/20"
                />
                <div
                  aria-hidden
                  className="absolute top-1 right-1 size-[3px] rounded-full bg-foreground/20"
                />
                <div
                  aria-hidden
                  className="absolute bottom-1 left-1 size-[3px] rounded-full bg-foreground/20"
                />
                <div
                  aria-hidden
                  className="absolute right-1 bottom-1 size-[3px] rounded-full bg-foreground/20"
                />
                <div className="relative flex h-fit items-center gap-2 rounded-full bg-illustration px-3 py-1 shadow shadow-black/6.5 dark:border">
                  <span className="text-title text-sm">
                    Tailark raises $12M series B
                  </span>
                  <span className="block h-3 w-px bg-foreground/5" />
                  <Link href="#" className="text-sm text-primary">
                    Read
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-3xl text-center md:mt-10">
              <h1 className="text-4xl font-medium text-balance text-foreground sm:text-5xl lg:text-6xl tracking-tight">
                Transform your Sales with Data-Driven Insights
              </h1>
              <p className="mx-auto mt-4 mb-8 max-w-xl text-lg text-balance text-muted-foreground">
                Efficiently manage your sales team with our innovative tools.
                Enhance productivity, and achieve your sales!
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button
                  render={<Link href="#">Start Building</Link>}
                  nativeButton={false}
                />
                <Button
                  render={<Link href="#">Book a demo</Link>}
                  nativeButton={false}
                  variant="outline"
                />
              </div>
            </div>
          </div>

          <div className="border-b">
            <div className="relative mx-auto max-w-6xl border-x px-4 sm:px-6 md:px-12">
              <SquareDecorator className="-top-[3.5px] -left-[3.5px]" />
              <SquareDecorator className="-top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
              <SquareDecorator className="-top-[3.5px] -right-[3.5px]" />
              <SquareDecorator className="-top-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
              <SquareDecorator className="-bottom-[3.5px] -left-[3.5px]" />
              <SquareDecorator className="-bottom-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
              <SquareDecorator className="-right-[3.5px] -bottom-[3.5px]" />
              <SquareDecorator className="right-3 -bottom-[3.5px] -translate-x-[1.5px] sm:right-5 md:right-11" />
              <div className="h-180 overflow-hidden border-x bg-background xl:h-167.5 dark:bg-background">
                <Product className="scale-92 border-t-0 bg-background sm:scale-90 lg:scale-85 lg:pr-3 xl:scale-70 xl:pr-2" />
              </div>
            </div>
          </div>
        </section>
        <LogoCloud />
      </main>
    </>
  )
}

const SquareDecorator = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-10 size-1.5 border border-transparent bg-card shadow-sm ring-1 ring-foreground/10",
        className
      )}
    />
  )
}
