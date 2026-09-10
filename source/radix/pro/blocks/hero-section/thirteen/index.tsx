"use client"
import HeroHeader from "@/components/header"
import { Image as HeroImage } from "@/components/illustrations/image"
import { AudioLinesIcon } from "@/components/audio-icon"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { LazyMotion, domAnimation, m } from "motion/react"

import { LogoCloud } from "@/components/logo-cloud"
import Image from "next/image"

export default function HeroSection() {
  return (
    <LazyMotion features={domAnimation}>
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className="relative bg-background">
          <m.div
            initial={{ opacity: 0, y: -72, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 mask-radial-[100%_85%] mask-radial-from-80% mask-radial-at-top-right opacity-75 dark:hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hero background"
              className="size-full -scale-y-100 object-cover"
              height={2070}
              width={2070}
            />
          </m.div>

          <div className="pt-24 pb-20 perspective-dramatic md:pt-32 lg:py-44">
            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.1,
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
                  className="mx-auto mt-8 inline-flex max-w-2xl flex-wrap items-center justify-center gap-x-2 text-3xl font-semibold text-balance sm:text-4xl lg:text-5xl tracking-tight"
                >
                  Record <span className="text-muted-foreground">Studio </span>
                  <AudioIcon />{" "}
                  <span className="text-muted-foreground">quality</span> Sounds
                  outside the studio
                </h1>

                <div key={2} className="mx-auto mt-4 max-w-lg">
                  <p className="mb-5 text-lg text-balance text-muted-foreground">
                    Experience seamless payments, real-time collaboration, and
                    actionable insights. Set up in minutes.
                  </p>
                </div>
              </AnimatedGroup>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 1,
                        delayChildren: 0.4,
                      },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      filter: "blur(12px)",
                      y: -120,
                      rotateX: 56,
                      scale: 2,
                    },
                    visible: {
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.2,
                        duration: 2,
                      },
                    },
                  },
                }}
              >
                <HeroImage />
              </AnimatedGroup>

              <LogoCloud />
            </div>
          </div>
        </section>
      </main>
    </>
  
    </LazyMotion>)
}

const AudioIcon = () => (
  <div
    aria-hidden
    className="hover:animate-hue-rotate relative flex size-10 translate-y-0.5 items-center justify-center rounded-lg bg-linear-to-b from-amber-300 to-rose-500 shadow-lg shadow-black/20 before:absolute before:inset-0 before:rounded-lg before:border before:border-black/15 before:inset-ring-1 before:inset-ring-background/25"
  >
    <AudioLinesIcon className="size-6 -translate-x-0.5 mask-b-from-25% stroke-white text-white *:drop-shadow" />
    <AudioLinesIcon className="absolute inset-0 m-auto size-6 -translate-x-0.5 stroke-white text-white opacity-65 *:drop-shadow" />
  </div>
)
