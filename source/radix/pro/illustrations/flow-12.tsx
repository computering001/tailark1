"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import { LogoIcon } from "@/components/ui/logo"
import { Receipt } from "lucide-react"
import { Neon } from "@/components/ui/svgs/neon"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Firebase } from "@/components/ui/svgs/firebase"
import { LazyMotion, domMax, m, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

const CYCLE_DURATION = 1900

const firstPathTransition = {
  duration: 1.5,
  ease: "easeInOut" as const,
  repeat: Infinity,
}

const branchPathTransition = {
  duration: 1.5,
  ease: "easeOut" as const,
  delay: 0.75,
  repeat: Infinity,
}

type DBProvider = {
  name: string
  icon: React.ReactNode
  color: string
  iconBackground: string
  beamColorFrom: string
  beamColorTo: string
}

const providers: DBProvider[] = [
  {
    name: "Neon",
    icon: <Neon />,
    color: "from-[#00E0D9] to-[#63F655]",
    iconBackground: "bg-emerald-950",
    beamColorFrom: "#00E0D9",
    beamColorTo: "#63F655",
  },
  {
    name: "Supabase",
    icon: <Supabase />,
    color: "from-[#249361] to-[#3ECF8E]",
    iconBackground: "bg-green-950",
    beamColorFrom: "#249361",
    beamColorTo: "#3ECF8E",
  },
  {
    name: "Firebase",
    icon: <Firebase />,
    color: "from-[#FFC400] to-[#DD2C00]",
    iconBackground: "bg-red-950 dark:bg-red-950/50",
    beamColorFrom: "#FFC400",
    beamColorTo: "#DD2C00",
  },
]

const FlowDiagram = ({
  isHovered,
  activeProvider,
}: {
  isHovered: boolean
  activeProvider: number
}) => (
  <svg
    viewBox="0 0 432 262"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 right-0 left-20 my-auto w-9/12 text-foreground/10"
  >
    <path d="M0.5 131.5H299" stroke="currentColor" strokeLinecap="round" />
    <path
      d="M299 131.5C318.13 131.5 336.36 121.52 346.65 105.39C352.38 96.39 355.5 85.83 355.5 75.17V56.5C355.5 25.57 380.57 0.5 411.5 0.5H431"
      stroke="currentColor"
      strokeLinecap="round"
      strokeDasharray="2 5"
      className="text-foreground/15"
    />
    <path
      d="M319 131.5C337.75 128.86 354.5 143.42 354.5 162.35V205.5C354.5 236.43 379.57 261.5 410.5 261.5H429"
      stroke="currentColor"
      strokeLinecap="round"
      strokeDasharray="2 5"
      className="text-foreground/15"
    />

    <m.path
      d="M0.5 131.5H299"
      pathLength="1"
      stroke="var(--color-foreground)"
      strokeLinecap="round"
      strokeWidth={1}
      strokeDasharray="0.15 2"
      initial={{ strokeDashoffset: 1.15 }}
      animate={
        isHovered ? { strokeDashoffset: -1 } : { strokeDashoffset: 1.15 }
      }
      transition={isHovered ? firstPathTransition : { duration: 0 }}
    />

    <m.path
      d="M299 131.5C318.13 131.5 336.36 121.52 346.65 105.39C352.38 96.39 355.5 85.83 355.5 75.17V56.5C355.5 25.57 380.57 0.5 411.5 0.5H431"
      pathLength="1"
      stroke="url(#providerColor)"
      strokeLinecap="round"
      strokeWidth={1}
      strokeDasharray="0.4 3"
      initial={{ strokeDashoffset: 1.4 }}
      animate={isHovered ? { strokeDashoffset: -1 } : { strokeDashoffset: 1.4 }}
      transition={isHovered ? branchPathTransition : { duration: 0 }}
    />
    <m.path
      d="M319 131.5C337.75 128.86 354.5 143.42 354.5 162.35V205.5C354.5 236.43 379.57 261.5 410.5 261.5H429"
      pathLength="1"
      stroke="url(#flow12)"
      strokeLinecap="round"
      strokeWidth={1}
      strokeDasharray="0.4 3"
      initial={{ strokeDashoffset: 1.4 }}
      animate={isHovered ? { strokeDashoffset: -1 } : { strokeDashoffset: 1.4 }}
      transition={isHovered ? branchPathTransition : { duration: 0 }}
    />

    <defs>
      <linearGradient
        id="flow12"
        gradientUnits="userSpaceOnUse"
        x1="319"
        y1="131"
        x2="429"
        y2="261"
      >
        <stop
          offset="0%"
          stopColor="var(--color-emerald-300)"
          stopOpacity={0}
        />
        <stop
          offset="25%"
          stopColor="var(--color-emerald-400)"
          stopOpacity={0.5}
        />
        <stop offset="100%" stopColor="var(--color-purple-400)" />
      </linearGradient>
      <linearGradient
        id="providerColor"
        gradientUnits="userSpaceOnUse"
        x1="299"
        y1="131"
        x2="431"
        y2="0.5"
      >
        <stop
          offset="0%"
          stopColor={providers[activeProvider].beamColorFrom}
          stopOpacity={0}
        />
        <stop offset="100%" stopColor={providers[activeProvider].beamColorTo} />
      </linearGradient>
    </defs>
  </svg>
)

const InvoiceCard = () => (
  <div className="corner-tr-bevel relative w-20 rounded-md rounded-tr-[15%] bg-illustration p-2.5 shadow-md ring-1 shadow-black/6.5 ring-border-illustration">
    <div className="mb-2 flex items-center gap-1.5">
      <Receipt className="size-3 text-amber-500" />
      <span className="text-[9px] font-semibold">INVOICE</span>
    </div>
    <div className="space-y-1.5">
      <div className="h-0.5 w-full rounded-full bg-foreground/10" />
      <div className="flex gap-1">
        <div className="h-0.5 w-1/2 rounded-full bg-foreground/10" />
        <div className="h-0.5 w-1/2 rounded-full bg-foreground/10" />
      </div>
      <div className="flex gap-1">
        <div className="h-0.5 w-1/4 rounded-full bg-foreground/10" />
        <div className="h-0.5 w-3/4 rounded-full bg-foreground/10" />
      </div>
      <div className="flex gap-1">
        <div className="h-0.5 w-1/3 rounded-full bg-foreground/10" />
        <div className="h-0.5 w-1/3 rounded-full bg-foreground/10" />
        <div className="h-0.5 w-1/3 rounded-full bg-foreground/10" />
      </div>
      <div className="h-0.5 w-2/3 rounded-full bg-foreground/10" />

      <div className="h-0.5 w-3/4 rounded-full bg-foreground/10" />
      <div className="mt-1.5 border-t border-foreground/10 pt-1.5">
        <div className="flex justify-between">
          <div className="h-0.5 w-6 rounded-full bg-foreground/15" />
          <div className="h-0.5 w-8 rounded-full bg-amber-500/50" />
        </div>
      </div>
    </div>
  </div>
)

const DatabaseTables = () => (
  <div className="ml-32 flex flex-col gap-48">
    <div className="w-32 overflow-hidden rounded-xl bg-card/75 shadow-md ring-1 shadow-black/6.5 ring-border-illustration">
      <div className="flex items-center justify-center px-3 py-1.5">
        <span className="text-xs font-semibold">users</span>
      </div>
      <div className="space-y-1.5 border-t border-border/50 bg-illustration p-3">
        <div className="flex items-center gap-1.5">
          <div className="size-1 rounded-full bg-cyan-500" />
          <span className="text-xs text-muted-foreground">id</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="size-1 rounded-full bg-cyan-500/50" />
          <span className="text-xs text-muted-foreground">name</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="size-1 rounded-full bg-cyan-500/50" />
          <span className="text-xs text-muted-foreground">email</span>
        </div>
      </div>
    </div>

    <div className="w-32 overflow-hidden rounded-xl bg-card/75 shadow-md ring-1 shadow-black/6.5 ring-border-illustration">
      <div className="flex items-center justify-center px-3 py-1.5">
        <span className="text-xs font-semibold">invoices</span>
      </div>
      <div className="space-y-1.5 border-t border-border/50 bg-illustration p-3">
        <div className="flex items-center gap-1.5">
          <div className="size-1 rounded-full bg-violet-500" />
          <span className="text-xs text-muted-foreground">id</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="size-1 rounded-full bg-violet-500/50" />
          <span className="text-xs text-muted-foreground">user_id</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="size-1 rounded-full bg-violet-500/50" />
          <span className="text-xs text-muted-foreground">amount</span>
        </div>
      </div>
    </div>
  </div>
)

export const Flow12Illustration = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [activeProvider, setActiveProvider] = useState(0)
  const [containerWidth, setContainerWidth] = useState("auto")
  const contentRef = useRef(null)

  useEffect(() => {
    if (!isHovered) return

    const interval = setInterval(() => {
      setActiveProvider((prev) => (prev + 1) % providers.length)
    }, CYCLE_DURATION)

    return () => clearInterval(interval)
  }, [isHovered])

  useEffect(() => {
    const updateWidth = () => {
      if (contentRef.current) {
        const width = (contentRef.current as HTMLElement).offsetWidth
        setContainerWidth(`${width}px`)
      }
    }

    updateWidth()
    const timer = setTimeout(updateWidth, 100)

    return () => clearTimeout(timer)
  }, [activeProvider])

  const currentProvider = useMemo(
    () => providers[activeProvider],
    [activeProvider]
  )

  return (
    <LazyMotion features={domMax}>
    <m.div
      aria-hidden
      className="relative flex min-h-120 w-fit min-w-120 items-center justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <FlowDiagram isHovered={isHovered} activeProvider={activeProvider} />

      <div className="relative z-10 flex items-center">
        <InvoiceCard />

        <div className="relative z-10 mx-26">
          <div className="relative flex size-14 items-center justify-center rounded-full bg-black/75 shadow-xl ring-1 shadow-black/20 ring-black backdrop-blur dark:bg-illustration/75 dark:ring-border-illustration">
            <LogoIcon className="size-5" />
          </div>
        </div>

        <div className="w-32">
          <div className="relative mx-auto w-fit">
            <div className="absolute inset-0 opacity-50 dark:opacity-15">
              <div
                className={`absolute inset-1 animate-pulse rounded-xl bg-linear-to-r ${currentProvider.color} blur-md`}
              />
            </div>
            <m.div
              layout="size"
              style={{ width: containerWidth }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-xl bg-radial from-card to-card/50 shadow-md ring-1 shadow-black/6.5 ring-foreground/15 backdrop-blur"
            >
              <div className="relative">
                <div
                  ref={contentRef}
                  className="invisible absolute flex items-center gap-2 py-2 pr-3 pl-2 whitespace-nowrap"
                >
                  <div className="size-8 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold">
                      {currentProvider.name}
                    </div>
                    <div className="text-[10px] text-foreground/65">
                      Postgres
                    </div>
                  </div>
                </div>
                <AnimatePresence initial={false} mode="popLayout">
                  <m.div
                    key={activeProvider}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      filter: "blur(8px)",
                      y: -56,
                    }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0)", y: 0 }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      filter: "blur(8px)",
                      y: 56,
                    }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                    className="flex items-center gap-2 py-2 pr-3 pl-2"
                  >
                    <div
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-lg inset-ring-1 inset-ring-foreground/50 *:size-4 dark:inset-ring-foreground/15",
                        currentProvider.iconBackground
                      )}
                    >
                      {currentProvider.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold">
                        {currentProvider.name}
                      </div>
                      <div className="text-[10px] text-foreground/65">
                        Postgres
                      </div>
                    </div>
                  </m.div>
                </AnimatePresence>
              </div>
            </m.div>
          </div>
        </div>

        {/* Database Tables */}
        <DatabaseTables />
      </div>
    </m.div>
  
    </LazyMotion>)
}

export default Flow12Illustration
