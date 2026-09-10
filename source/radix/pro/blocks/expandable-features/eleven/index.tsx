"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect, useCallback, useRef } from "react"
import { AiSearch } from "@/components/illustrations/ai-search"
import Image from "next/image"
import { ShieldCheck } from "lucide-react"
import { Windsurf } from "@/components/ui/svgs/windsurf"
import { Antigravity } from "@/components/ui/svgs/antigravity"
import { Cursor } from "@/components/ui/svgs/cursor"
import Flow from "@/components/illustrations/flow"
import Kanban from "@/components/illustrations/kanban"
import { LazyMotion, domAnimation, m, AnimatePresence } from "motion/react"

const AUTOPLAY_DURATION = 7000

const Metrics = () => {
  return (
    <ul className="mt-auto space-y-3 pt-8 text-sm text-muted-foreground">
      <li className="flex items-center gap-2">
        <ShieldCheck className="size-4 *:nth-2:text-emerald-600 dark:text-emerald-500/25" />
        <span className="font-medium text-foreground">SOC 2</span>
      </li>
      <li className="flex items-center gap-2">
        <ShieldCheck className="size-4 *:nth-2:text-emerald-600 dark:text-emerald-500/25" />
        <span className="font-medium text-foreground">ISO 27001</span>
      </li>
      <li className="flex items-center gap-2">
        <ShieldCheck className="size-4 *:nth-2:text-emerald-600 dark:text-emerald-500/25" />
        <span className="font-medium text-foreground">GDPR</span>
      </li>
      <li>
        <span className="font-medium text-foreground">99.9%</span> uptime
      </li>
    </ul>
  )
}

const ShadTestimonial = () => {
  return (
    <div className="relative mt-auto max-w-xl pt-8 before:absolute before:inset-y-0 before:-left-4 before:w-0.5 before:rounded-full before:bg-border">
      <p className="max-w-xs text-balance text-foreground">
        "Looks really good. Did you design in code or Figma first?"
      </p>

      <footer className="mt-4 flex items-center gap-2">
        <div className="relative size-10 overflow-hidden rounded-lg shadow before:absolute before:inset-0 before:rounded-lg before:border before:border-foreground/10">
          <Image
            src="https://avatars.githubusercontent.com/u/124599?v=4"
            alt="Shadcn Avatar"
            width={56}
            height={56}
          />
        </div>

        <div className="space-y-0.5">
          <p className="text-sm font-medium text-foreground">Shadcn</p>
          <span className="block text-xs text-muted-foreground">
            Creator of Shadcn UI
          </span>
        </div>
      </footer>
    </div>
  )
}

const IDESupport = () => {
  return (
    <div className="mt-auto space-y-3 pt-8">
      <h4 className="text-sm font-medium">Native IDE Support</h4>
      <div className="grid max-w-56 grid-cols-3 gap-0.5 *:flex *:items-center *:justify-center *:rounded *:bg-foreground/5 *:px-2 *:py-3">
        <div className="rounded-l-lg!">
          <Antigravity className="size-5" />
        </div>
        <div>
          <Cursor className="size-4.5 fill-foreground" />
        </div>
        <div className="rounded-r-lg!">
          <Windsurf className="size-6 *:fill-foreground!" />
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    title: "AI Model Hub",
    description:
      "Access and switch between multiple AI models including GPT, Claude, and Gemini from a unified interface.",
    illustration: <Flow key="m3" />,
    supportiveContent: <IDESupport />,
  },
  {
    title: "Global Collaboration",
    description:
      "Work with teammates across the globe with real-time presence indicators and seamless syncing.",
    illustration: <Kanban key="ai" />,
    supportiveContent: <Metrics />,
  },
  {
    title: "Automated Workflows",
    description:
      "Build custom automation pipelines with drag-and-drop simplicity and pre-built integrations.",
    illustration: <AiSearch key="wf" />,
    supportiveContent: <ShadTestimonial />,
  },
]

export default function ExpandableFeatures() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pausedRef = useRef(false)

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (pausedRef.current) return
      setExpandedIndex((current) => (current + 1) % features.length)
    }, AUTOPLAY_DURATION)
  }, [])

  useEffect(() => {
    resetTimer()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [resetTimer])

  const handleSelect = (index: number) => {
    if (index === expandedIndex) return
    setExpandedIndex(index)
    resetTimer()
  }

  return (
    <LazyMotion features={domAnimation}>
    <section className="@container bg-background">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-end gap-4 border-x border-dashed px-6 pt-24 pb-6 md:grid-cols-2">
          <h2 className="text-4xl font-semibold text-foreground tracking-tight">
            For growing teams and organizations
          </h2>
          <p className="text-lg text-balance text-muted-foreground">
            Four pillars that power your development workflow from idea to
            deployment.
          </p>
        </div>
      </div>
      <div className="border-t border-dashed">
        <div className="mx-auto grid h-6 max-w-5xl grid-cols-2 border-x border-dashed" />
      </div>
      <div className="lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <div
          aria-hidden
          className="border-y border-r border-dashed border-r-card max-lg:hidden"
        />
        <div className="mx-auto max-w-5xl border border-b-card lg:min-w-5xl">
          <div className="border-y border-t-card">
            <div className="relative grid not-dark:bg-foreground/2 sm:grid-cols-5 lg:grid-cols-3">
              <div
                className="absolute inset-0 z-0 mask-l-from-50% dark:opacity-75"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div
                className={cn(
                  "grid gap-3 py-6 pl-6 transition-colors duration-300 max-sm:pr-6 sm:col-span-2 lg:col-span-1",
                  expandedIndex === 0 && "grid-rows-[1fr_auto_auto]",
                  expandedIndex === 1 && "grid-rows-[auto_1fr_auto]",
                  expandedIndex === 2 && "grid-rows-[auto_auto_1fr]"
                )}
              >
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    data-expanded={expandedIndex === index}
                    className="group relative grid grid-rows-[auto_1fr] rounded-xl shadow-lg ring-1 shadow-transparent ring-border data-[expanded=true]:z-1 data-[expanded=true]:bg-card data-[expanded=true]:shadow-black/4"
                  >
                    <button
                      type="button"
                      onClick={() => handleSelect(index)}
                      className="group flex w-full cursor-pointer items-center gap-3 px-6 py-4 text-left"
                    >
                      <h3
                        className={cn(
                          "font-medium transition-colors group-hover:text-foreground",
                          expandedIndex === index
                            ? "text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {feature.title}
                      </h3>
                    </button>

                    <div
                      className={cn(
                        "grid px-6 transition-[grid-template-rows] duration-300",
                        expandedIndex === index
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="flex h-full flex-col pb-6">
                          <p className="max-w-sm text-balance text-muted-foreground">
                            {feature.description}
                          </p>

                          <div
                            key={expandedIndex}
                            className="mt-auto transition-[opacity,filter] delay-250 duration-400 in-data-[expanded=true]:opacity-100 starting:opacity-0 starting:blur-xs"
                          >
                            {feature.supportiveContent}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative flex h-120 items-center justify-center overflow-hidden p-12 max-sm:row-start-1 sm:col-span-3 sm:h-144 lg:col-span-2">
                <AnimatePresence initial={false} mode="popLayout">
                  <m.div
                    key={expandedIndex}
                    className="scale-90"
                    initial={{
                      opacity: 0,
                      filter: "blur(4px)",
                      scale: 0.85,
                      y: 6,
                    }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                      scale: 0.9,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      filter: "blur(4px)",
                      scale: 0.85,
                      y: 6,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {features[expandedIndex].illustration}
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden
          className="border-y border-l border-dashed border-l-card max-lg:hidden"
        />
      </div>
      <div className="mx-auto w-full max-w-5xl border-x border-dashed pb-24" />
    </section>
  
    </LazyMotion>)
}
