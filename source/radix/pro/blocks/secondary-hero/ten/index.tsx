import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section>
      <div className="py-24 md:py-32">
        <div className="mx-auto mb-8 max-w-5xl px-6">
          <div className="grid grid-cols-6 gap-4 sm:grid-cols-8">
            <div className="col-span-6 max-md:pb-6 sm:col-span-5 md:col-span-5 md:pt-6">
              <h1 className="max-w-lg text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                <span className="text-primary">Join Us</span> in shaping the
                next Gen of CRM
              </h1>
              <p className="mt-4 mb-6 text-lg text-balance text-muted-foreground">
                Empowering businesses with cutting-edge technology to streamline
                operations and drive success.
              </p>
              <Button asChild size="sm">
                <Link href="#">See open roles</Link>
              </Button>
            </div>
            <div className="col-span-3 flex items-end sm:col-span-2 sm:col-start-6">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-foreground/5 before:bg-primary/10">
                <Image
                  src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/work3_n5uspm.webp"
                  alt="tailark hero section work 3"
                  className="size-full object-cover"
                  width={927}
                  height={1648}
                />
              </div>
            </div>
            <div className="col-span-3 max-md:flex max-md:items-end sm:col-start-3">
              <div className="relative mt-auto aspect-square h-fit overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-foreground/5 before:bg-primary/5">
                <Image
                  src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/work2_eoxbvk.webp"
                  alt="tailark hero section work 2"
                  className="size-full object-cover"
                  width={3047}
                  height={1868}
                />
              </div>
            </div>
            <div className="relative col-span-4 aspect-video overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-foreground/5 before:bg-primary/5 max-md:col-start-3 md:col-span-3">
              <Image
                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/work1_e1gkt8.webp"
                alt="tailark hero section work 1"
                className="size-full object-cover"
                width={2340}
                height={1560}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
