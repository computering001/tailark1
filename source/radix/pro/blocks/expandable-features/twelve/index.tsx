"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect, useCallback, useRef } from "react"
import { Models3 } from "@/components/illustrations/models-3"
import AiSearch from "@/components/illustrations/ai-search"
import CollaborationComment from "@/components/illustrations/collaboration-comment"
import Image from "next/image"
import { ShieldCheck } from "lucide-react"
import { Windsurf } from "@/components/ui/svgs/windsurf"
import { Antigravity } from "@/components/ui/svgs/antigravity"
import { Cursor } from "@/components/ui/svgs/cursor"

const AUTOPLAY_DURATION = 7000

const Metrics = () => {
  return (
    <ul className="mt-auto space-y-3 pt-6 text-sm text-muted-foreground">
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
    <div className="relative mt-auto max-w-xl before:absolute before:inset-y-0 before:-left-4 before:w-0.5 before:rounded-full before:bg-border">
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
    <div className="mt-auto space-y-3 pt-6">
      <h4 className="font-medium">Native IDE Support</h4>
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
    number: "01",
    title: "AI Model Hub",
    description:
      "Access and switch between multiple AI models including GPT, Claude, and Gemini from a unified interface.",
    illustration: <Models3 key="m3" />,
    supportiveContent: <IDESupport />,
  },
  {
    number: "02",
    title: "Global Collaboration",
    description:
      "Work with teammates across the globe with real-time presence indicators and seamless syncing.",
    illustration: <CollaborationComment key="coll" />,
    supportiveContent: <Metrics />,
  },
  {
    number: "03",
    title: "Automated Workflows",
    description:
      "Build custom automation pipelines with drag-and-drop simplicity and pre-built integrations.",
    illustration: <AiSearch key="ais" />,
    supportiveContent: <ShadTestimonial />,
  },
]

export default function ExpandableFeatures() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0)
  const [progressKey, setProgressKey] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pausedRef = useRef(false)

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (pausedRef.current) return
      setExpandedIndex((current) => (current + 1) % features.length)
      setProgressKey((k) => k + 1)
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
    setProgressKey((k) => k + 1)
    resetTimer()
  }

  const handleMouseEnter = (index: number) => {
    if (index === expandedIndex) {
      pausedRef.current = true
      setPaused(true)
    }
  }

  const handleMouseLeave = (index: number) => {
    if (index === expandedIndex) {
      pausedRef.current = false
      setPaused(false)
    }
  }

  return (
    <section className="@container bg-background py-24">
      <style>{`
                @keyframes expandProgress {
                    from { clip-path:inset(0 100% 0 0); }
                    to { clip-path:inset(0 0 0 0); }
                }
            `}</style>
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-b pb-8 *:max-w-lg lg:pb-12">
          <h2 className="text-3xl font-semibold text-foreground lg:text-4xl tracking-tight">
            A smarter way to build
          </h2>
          <p className="mt-4 text-lg text-balance text-muted-foreground">
            Four pillars that power your development workflow from idea to
            deployment.
          </p>
        </div>

        <div className="border-t border-card">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              data-expanded={expandedIndex === index}
              className="group relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <button
                type="button"
                onClick={() => handleSelect(index)}
                className="group flex w-full cursor-pointer items-center gap-6 py-6 text-left"
              >
                <span
                  className={cn(
                    "font-mono text-sm transition-colors",
                    expandedIndex === index
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {feature.number}
                </span>
                <h3
                  className={cn(
                    "text-lg font-medium transition-colors group-hover:text-foreground",
                    expandedIndex === index
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {feature.title}
                </h3>
                <div className="ml-auto">
                  <div
                    className={cn(
                      "size-1.5 rounded-full transition-colors",
                      expandedIndex === index ? "bg-primary" : "bg-border"
                    )}
                  />
                </div>
              </button>

              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-500",
                  expandedIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-6 pb-8 pl-10 lg:grid-cols-2">
                    <div className="flex flex-col">
                      <p className="max-w-sm text-balance text-muted-foreground">
                        {feature.description}
                      </p>

                      {feature.supportiveContent}
                    </div>

                    <div className="origin-top-left scale-95">
                      {feature.illustration}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 -bottom-px h-px bg-[linear-gradient(90deg,--alpha(var(--color-foreground)/20%)_1px,transparent_1px)] bg-size-[4px_1px] bg-repeat-x">
                {expandedIndex === index && (
                  <div
                    key={progressKey}
                    className="absolute inset-0 h-full origin-left rounded-full bg-[linear-gradient(90deg,var(--color-primary)_1px,transparent_1px)] bg-size-[4px_1px] bg-repeat-x"
                    style={{
                      animation: `expandProgress ${AUTOPLAY_DURATION}ms linear forwards`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
