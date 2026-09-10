import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroHeader from "@/components/header"
import LogoCloud from "@/components/logo-cloud"
import { Product } from "@/components/illustrations/product"

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section id="home" className="bg-background pb-24">
          <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 md:pt-36 lg:px-12 lg:pt-44">
            <div className="text-center">
              <h1 className="text-5xl font-semibold text-balance text-foreground md:font-medium lg:text-7xl tracking-tight">
                AI solutions for <span className="max-sm:hidden">seamless</span>{" "}
                Customer Acquisition
              </h1>

              <p className="mx-auto mt-4 mb-6 max-w-xl text-lg text-balance text-muted-foreground lg:text-xl">
                Empowering businesses with cutting-edge technology to streamline
                operations and drive success.
              </p>

              <div className="flex items-center justify-center gap-3">
                <Button
                  render={<Link href="#">Try for free</Link>}
                  nativeButton={false}
                />

                <Button
                  render={<Link href="#">Contact sales</Link>}
                  nativeButton={false}
                  variant="outline"
                />
              </div>
            </div>
          </div>

          <Product />
          <LogoCloud />
        </section>
      </main>
    </>
  )
}
