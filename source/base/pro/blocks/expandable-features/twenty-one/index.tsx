"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { LazyMotion, domAnimation, m, AnimatePresence } from "motion/react"
import {
  Bot,
  Brain,
  Hourglass,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AgentFeedback from "@/components/illustrations/agent-feedback"
import Email from "@/components/illustrations/email"

const AUTOPLAY_DURATION = 7000

function InlineFeatureTrigger({
  isExpanded,
  onClick,
  icon: Icon,
  label,
  gradient,
  glowGradient,
}: {
  isExpanded: boolean
  onClick: () => void
  icon: LucideIcon
  label: string
  gradient: string
  glowGradient: string
}) {
  return (
    <button
      onClick={onClick}
      {...(isExpanded ? { "data-expanded": true } : {})}
      className={`relative cursor-pointer pl-12.5 text-foreground not-data-expanded:hover:text-foreground/80 data-expanded:bg-clip-text data-expanded:text-transparent sm:pl-13.5 ${isExpanded ? gradient : ""}`}
    >
      <span className="pointer-events-none absolute top-0.5 left-0.5 size-10 sm:top-[7px] sm:left-0 sm:size-11">
        <div
          className={`absolute inset-x-2 top-2 bottom-0.5 rounded-xl opacity-75 blur duration-200 not-in-data-expanded:hidden starting:opacity-0 ${glowGradient}`}
        />
        <span className="absolute inset-0 z-0 flex rounded-xl bg-illustration shadow ring shadow-black/5 ring-border *:m-auto *:size-5">
          <Icon className="text-foreground drop-shadow-md drop-shadow-black/40" />
        </span>
      </span>
      <span className="transition-colors duration-200 in-data-expanded:text-transparent">
        {label}
      </span>
    </button>
  )
}

const Metrics = () => {
  return (
    <ul className="mt-auto space-y-3 pt-8 text-sm text-muted-foreground">
      <li className="flex items-center gap-3">
        <ShieldCheck className="size-4 *:nth-2:text-emerald-600 dark:text-emerald-500/25" />
        <span className="font-medium text-foreground">SOC 2</span>
      </li>
      <li className="flex items-center gap-3">
        <ShieldCheck className="size-4 *:nth-2:text-emerald-600 dark:text-emerald-500/25" />
        <span className="font-medium text-foreground">ISO 27001</span>
      </li>
      <li className="flex items-center gap-3">
        <ShieldCheck className="size-4 *:nth-2:text-emerald-600 dark:text-emerald-500/25" />
        <span className="font-medium text-foreground">GDPR</span>
      </li>
      <li className="flex items-center gap-3">
        <Hourglass className="size-4 text-muted-foreground dark:text-blue-500/25" />
        <span>
          <span className="font-medium text-foreground">99.9%</span> uptime
        </span>
      </li>
    </ul>
  )
}

const ShadTestimonial = () => {
  return (
    <div className="relative mt-auto max-w-xl">
      <p className="max-w-xs text-balance text-foreground">
        "Looks really good. Did you design in code or Figma first?"
      </p>

      <div className="mt-4 flex items-center gap-2">
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
      </div>
    </div>
  )
}

const features = [
  {
    title: "Accelerate development with AI-powered assistance",
    label: "AI Models",
    description:
      "Switch between GPT, Claude, and Gemini from a unified interface with seamless provider switching.",
    icon: Brain,
    supportiveContent: <ShadTestimonial />,
    illustration: <Email key="m3" />,
    image:
      "https://images.unsplash.com/photo-1684410008411-6ccac995726d?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Automate your workflows with intelligent agents",
    label: "Smart Agent",
    description:
      "Automate repetitive tasks with context-aware AI agents that learn your workflow patterns.",
    icon: Bot,
    supportiveContent: <Metrics />,
    illustration: <AgentFeedback key="m4" />,
    image:
      "https://images.unsplash.com/photo-1695151992691-a9e19f73948f?q=80&w=2206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function ExpandableFeatures() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
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
    <section className="@container overflow-hidden bg-background py-24">
      <div className="border-b border-dashed border-foreground/10 pb-8 sm:pb-12">
        <div className="mx-auto max-w-5xl px-8 sm:px-18">
          <h2 className="mb-12 font-mono text-xs text-foreground/50 uppercase">
            [ 0.1 ] <span className="ml-2 tracking-wider">Features</span>{" "}
          </h2>
          <p className="text-4xl leading-[1.2] font-medium text-foreground/60 sm:text-5xl tracking-tight">
            Build faster with{" "}
            <InlineFeatureTrigger
              isExpanded={expandedIndex === 0}
              onClick={() => handleSelect(0)}
              icon={Brain}
              label="LLMs"
              gradient="data-expanded:bg-linear-to-br data-expanded:from-amber-400 data-expanded:to-fuchsia-500"
              glowGradient="bg-linear-to-r from-amber-500 to-fuchsia-500"
            />{" "}
            that adapt to your workflow, and let{" "}
            <InlineFeatureTrigger
              isExpanded={expandedIndex === 1}
              onClick={() => handleSelect(1)}
              icon={Bot}
              label="Personal Agents"
              gradient="data-expanded:bg-linear-to-r data-expanded:from-green-600 data-expanded:to-sky-600"
              glowGradient="bg-linear-to-r from-green-600 to-sky-500"
            />{" "}
            handle the rest.
          </p>
        </div>
      </div>

      <div className="mx-auto my-1 max-w-5xl px-2 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative p-6 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-1 -inset-y-56 border-x border-dashed border-foreground/10 mask-y-from-80%"
            />
            <div className="flex h-full flex-col gap-12">
              <div className="max-w-sm text-balance">
                <h3 className="text-xl font-medium text-foreground">
                  {features[expandedIndex].title}
                </h3>
                <p className="mt-4 mb-6 text-balance text-muted-foreground">
                  {" "}
                  {features[expandedIndex].description}
                </p>

                <Button
                    render={
                        <Link href="#">
                            Learn more{" "}
                                                <span className="ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent border-l-foreground/50" />
                        </Link>
                    }
                    nativeButton={false} variant="outline" size="sm"
                />
              </div>

              <div className="mt-auto max-w-sm">
                {features[expandedIndex].supportiveContent}
              </div>
            </div>
          </div>
          <div className="relative h-fit">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-1 -inset-y-56 border-x border-dashed border-foreground/10 mask-y-from-80%"
            />

            <div className="relative aspect-7/8 overflow-hidden rounded-xl">
              <AnimatePresence initial={false} mode="popLayout">
                <m.div
                  variants={{
                    initial: { opacity: 0, scale: 0.99, filter: "blur(4px)" },
                    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                    exit: { opacity: 0, scale: 0.99, filter: "blur(4px)" },
                  }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, type: "spring", bounce: 0.1 }}
                  className="relative z-10 flex h-full scale-85 items-center justify-center"
                  key={expandedIndex}
                >
                  {features[expandedIndex].illustration}
                </m.div>
              </AnimatePresence>

              <AnimatePresence initial={false} mode="popLayout">
                <m.div
                  key={expandedIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={features[expandedIndex].image}
                    alt="feature background image"
                    fill
                    sizes="(max-width: 767px) calc(100vw - 1rem), (max-width: 1023px) calc(50vw - 1.5rem), 487px"
                    className="size-full object-cover opacity-65 dark:opacity-35"
                  />
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden
        className="h-px border-t border-dashed border-foreground/10"
      />
    </section>
  
    </LazyMotion>)
}
