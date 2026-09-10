import HeroHeader from "@/components/header"
import { Product } from "@/components/illustrations/product"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LogoCloud from "@/components/logo-cloud"
import Image from "next/image"

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className="relative bg-background">
          <div className="absolute inset-0 mask-t-from-35% mask-t-to-65% mask-b-from-55% mask-b-to-75% dark:mask-t-to-55%">
            <Image
              src="https://images.unsplash.com/photo-1655823855230-7f3b6bdd72fb?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="gradient background"
              className="size-full object-cover object-bottom not-dark:hidden"
              width={3115}
              height={3115}
            />
            <Image
              src="https://images.unsplash.com/photo-1681238337823-9a0a954baab0?q=80&w=2156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="gradient background"
              className="size-full object-cover object-bottom dark:hidden"
              width={2156}
              height={2156}
            />
          </div>
          <div className="pt-24 pb-20 md:pt-32 lg:pt-40">
            <div className="relative z-10 mx-auto grid max-w-5xl items-end gap-4 px-6">
              <h1 className="text-4xl font-semibold text-balance sm:text-5xl md:max-w-4xl lg:text-6xl tracking-tight">
                Payments infrastructure built for SaaS that Scales
              </h1>

              <div className="max-w-lg">
                <p className="mb-6 text-lg text-balance text-muted-foreground lg:text-xl">
                  Streamline your team's meetings with our AI-driven assistant,
                  open source and works.
                </p>
                <Button asChild>
                  <Link href="#">Get Started</Link>
                </Button>
                <Button asChild className="ml-3" variant="outline">
                  <Link href="#">Watch Demo</Link>
                </Button>
              </div>
            </div>
            <Product />
          </div>
        </section>
        <LogoCloud />
      </main>
    </>
  )
}
