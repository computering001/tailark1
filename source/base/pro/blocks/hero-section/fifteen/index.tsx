"use client"
import HeroHeader from "@/components/header"
import { Image } from "@/components/illustrations/image"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { LogoCloud } from "./logo-cloud"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className="relative bg-background [--color-foreground:var(--color-indigo-950)] dark:[--color-foreground:var(--color-white)]">
          <div className="bg-linear-to-b from-background to-indigo-500/6 pt-24 pb-20 md:pt-32 lg:pt-36 lg:pb-72">
            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center perspective-near">
              <Image />
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.25,
                        delayChildren: 0,
                      },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      filter: "blur(12px)",
                      y: -16,
                    },
                    visible: {
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0,
                      rotateX: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.3,
                        duration: 1,
                      },
                    },
                  },
                }}
              >
                <h1
                  key={1}
                  className="mx-auto mt-16 text-5xl font-semibold text-balance text-foreground tracking-tight"
                >
                  The{" "}
                  <span className="bg-linear-to-b from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                    Financial OS
                  </span>{" "}
                  powering businesses on your platform
                </h1>

                <div key={2} className="mx-auto mt-4 max-w-xl">
                  <p className="mb-6 text-lg text-balance text-muted-foreground">
                    Experience seamless payments, real-time collaboration, and
                    actionable insights. Set up in minutes.
                  </p>

                  <Button
                    render={<Link href="/pricing">Get Started for free</Link>}
                    nativeButton={false}
                    className="rounded-full"
                  />
                </div>
              </AnimatedGroup>

              <LogoCloud />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
