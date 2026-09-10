"use client"

import { LogoIcon } from "@/components/ui/logo"
import { Vercel } from "@/components/ui/svgs/vercel"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Firebase } from "@/components/ui/svgs/firebase"
import { cn } from "@/lib/utils"

export const FlowIllustration = () => {
  return (
    <div
      aria-hidden
      className="relative flex min-h-120 w-fit min-w-120 flex-col items-center"
    >
      <style jsx>{`
        @keyframes beam-move {
          to {
            stroke-dashoffset: -780;
          }
        }

        @keyframes beam-move-down {
          to {
            stroke-dashoffset: 780;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 227 274"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 mx-auto h-full w-3/5 text-foreground/15"
      >
        <path
          d="M226 2.5V62C226 73.05 217.05 82 206 82H140.5C129.45 82 120.5 90.95 120.5 102V151"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path d="M112.5 0.5V273" stroke="currentColor" strokeLinecap="round" />
        <path
          d="M0.5 1V62.5C0.5 73.55 9.45 82.5 20.5 82.5H84.5C95.55 82.5 104.5 91.45 104.5 102.5V151"
          stroke="currentColor"
          strokeLinecap="round"
        />

        {/* animated paths */}

        <path
          d="M226 2.5V62C226 73.05 217.05 82 206 82H140.5C129.45 82 120.5 90.95 120.5 102V151"
          stroke="url(#gradient)"
          strokeWidth="1"
          strokeDasharray="80 300"
          strokeDashoffset="680"
          className="animate-[beam-move_6.4s_linear_infinite]"
        />
        <path
          d="M112.5 0.5V273"
          stroke="url(#gradient-vertical)"
          strokeWidth="1"
          strokeDasharray="80 300"
          strokeDashoffset="680"
          className="animate-[beam-move_6.4s_linear_infinite] drop-shadow-sm drop-shadow-purple-300 delay-2000 dark:drop-shadow-transparent"
        />
        <path
          d="M0.5 1V62.5C0.5 73.55 9.45 82.5 20.5 82.5H84.5C95.55 82.5 104.5 91.45 104.5 102.5V151"
          stroke="var(--color-foreground)"
          strokeWidth="1"
          strokeDasharray="80 300"
          strokeDashoffset="680"
          className="animate-[beam-move_6.4s_linear_infinite]"
        />

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9100" />
            <stop offset="25%" stopColor="#FFC400" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#FF9100" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#DD2C00" />
          </linearGradient>
          <linearGradient
            id="gradient-vertical"
            gradientUnits="userSpaceOnUse"
            x1="105"
            y1="30"
            x2="105"
            y2="320"
          >
            <stop
              offset="0%"
              stopColor="currentColor"
              className="text-background/15"
            />
            <stop offset="25%" stopColor="var(--color-emerald-400)" />
            <stop
              offset="50%"
              stopColor="var(--color-indigo-400)"
              stopOpacity={0.5}
            />
            <stop offset="75%" stopColor="var(--color-purple-400)" />
            <stop
              offset="100%"
              stopColor="currentColor"
              className="text-background/15"
            />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 grid grid-cols-3 gap-3">
        {[
          { name: "Vercel", icon: Vercel },
          { name: "Supabase", icon: Supabase },
          { name: "Firebase", icon: Firebase },
        ].map((node, index) => (
          <div
            key={index}
            className="bg-illustration ring-border-illustration row-span-3 grid w-28 grid-rows-subgrid gap-3 rounded-xl p-3 shadow-md ring-1 shadow-black/6.5"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs leading-tight font-medium">
                {node.name} <br /> Usage
              </div>

              <div
                className={cn(
                  "shrink-0 *:size-3.5",
                  node.name === "Vercel" && "*:fill-foreground"
                )}
              >
                <node.icon />
              </div>
            </div>
            <div className="space-y-1.5 self-start">
              <div className="space-y-1.5">
                {[1, 2].map((row) => (
                  <div key={row} className="flex gap-2">
                    <div className="h-1 flex-1 rounded-full bg-foreground/10" />
                    <div className="h-1 w-8 rounded-full bg-foreground/10" />
                  </div>
                ))}

                <div className="flex gap-2">
                  <div className="h-1 w-full rounded-full bg-foreground/10" />
                </div>
                <div className="flex gap-1">
                  <div className="h-1 w-1/3 rounded-full bg-foreground/10" />
                  <div className="h-1 w-1/3 rounded-full bg-foreground/10" />
                </div>
                <div className="mt-4 flex gap-1">
                  <div className="h-1 w-2/3 rounded-full bg-foreground/10" />
                  <div className="h-1 w-1/3 rounded-full bg-foreground/10" />
                </div>
                <div className="flex gap-1">
                  <div className="h-1 w-1/3 rounded-full bg-foreground/10" />
                  <div className="h-1 w-1/3 rounded-full bg-foreground/10" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-24 mb-20">
        <div className="dark:bg-illustration/75 dark:ring-border-illustration relative flex size-14 items-center justify-center rounded-full bg-black/75 shadow-xl ring-1 shadow-black/20 ring-black backdrop-blur">
          <LogoIcon className="size-6" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute -right-4 bottom-4 z-2 rounded bg-rose-500 px-1.5 py-0.5 text-xs font-semibold text-white shadow-lg shadow-rose-900/25 text-shadow-sm after:absolute after:inset-0 after:rounded after:border after:border-foreground/15">
          PDF
        </div>

        <div className="bg-illustration corner-tr-bevel ring-border-illustration relative z-1 w-24 space-y-3 rounded-md rounded-tr-[15%] p-3 shadow-md ring-1 shadow-black/6.5">
          <div className="text-xs font-semibold">INVOICE</div>

          <div className="space-y-1.5">
            {[1, 2].map((row) => (
              <div key={row} className="flex gap-2">
                <div className="h-1 flex-1 rounded-full bg-foreground/10" />
                <div className="h-1 w-8 rounded-full bg-foreground/10" />
              </div>
            ))}

            <div className="flex gap-2">
              <div className="h-1 w-full rounded-full bg-foreground/10" />
            </div>
            <div className="flex gap-1">
              <div className="h-1 w-1/3 rounded-full bg-foreground/10" />
              <div className="h-1 w-1/3 rounded-full bg-foreground/10" />
              <div className="h-1 w-1/3 rounded-full bg-foreground/10" />
            </div>
            <div className="flex gap-1">
              <div className="h-1 w-1/3 rounded-full bg-foreground/10" />
              <div className="h-1 w-2/3 rounded-full bg-foreground/10" />
              <div className="h-1 w-1/3 rounded-full bg-foreground/10" />
            </div>
            <div className="flex gap-1">
              <div className="h-1 w-1/3 rounded-full bg-foreground/10" />
              <div className="h-1 w-1/3 rounded-full bg-foreground/10" />
            </div>
          </div>

          <div className="mt-1 h-1 w-8 rounded-full bg-foreground" />
        </div>
      </div>
    </div>
  )
}

export default FlowIllustration
