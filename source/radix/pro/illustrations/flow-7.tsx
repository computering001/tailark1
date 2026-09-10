"use client"

import { LogoIcon } from "@/components/ui/logo"
import { Gemini } from "@/components/ui/svgs/gemini"
import { Claude } from "@/components/ui/svgs/claude"
import { Openai } from "@/components/ui/svgs/openai"
import { MistralAi } from "@/components/ui/svgs/mistral-ai"

export const Flow7Illustration = () => {
  return (
    <div
      aria-hidden
      className="relative flex w-fit items-center justify-center"
    >
      <style jsx>{`
        @keyframes ai-flow {
          0% {
            stroke-dashoffset: 150;
          }
          100% {
            stroke-dashoffset: 600;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 90 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 m-auto w-3/4 translate-x-2 text-foreground/10"
      >
        <path
          d="M39.78 0.24L30.59 16.95C27.78 22.06 22.41 25.24 16.57 25.24H0"
          stroke="currentColor"
          strokeWidth={0.5}
        />
        <path
          d="M39.78 59.24L30.59 42.53C27.78 37.42 22.41 34.24 16.57 34.24H0"
          stroke="currentColor"
          strokeWidth={0.5}
        />
        <path
          d="M88.78 9.74L76.54 23.07C73.51 26.36 69.23 28.24 64.75 28.24H35.28H0.28"
          stroke="currentColor"
          strokeWidth={0.5}
        />
        <path
          d="M88.78 49.74L76.54 36.41C73.51 33.12 69.23 31.24 64.75 31.24H35.28H0.28"
          stroke="currentColor"
          strokeWidth={0.5}
        />

        <path
          d="M39.78 0.24L30.59 16.95C27.78 22.06 22.41 25.24 16.57 25.24H0"
          stroke="#3186FF"
          strokeWidth={0.5}
          strokeDasharray="40 200"
          strokeDashoffset={400}
          className="animate-[ai-flow_4s_ease-in-out_infinite] not-group-hover:hidden not-group-hover:opacity-0"
        />
        <path
          d="M39.78 59.24L30.59 42.53C27.78 37.42 22.41 34.24 16.57 34.24H0"
          stroke="var(--color-foreground)"
          strokeWidth={0.5}
          strokeDasharray="40 200"
          strokeDashoffset={400}
          className="animate-[ai-flow_4s_ease-in-out_infinite] not-group-hover:hidden not-group-hover:opacity-0"
        />
        <path
          d="M88.78 9.74L76.54 23.07C73.51 26.36 69.23 28.24 64.75 28.24H35.28H0.28"
          stroke="#D97757"
          strokeWidth={0.5}
          strokeDasharray="40 200"
          strokeDashoffset={400}
          className="animate-[ai-flow_4s_ease-in-out_infinite] not-group-hover:hidden not-group-hover:opacity-0"
        />
        <path
          d="M88.78 49.74L76.54 36.41C73.51 33.12 69.23 31.24 64.75 31.24H35.28H0.28"
          stroke="#EB5829"
          strokeWidth={0.5}
          strokeDasharray="40 200"
          strokeDashoffset={400}
          className="animate-[ai-flow_4s_ease-in-out_infinite] not-group-hover:hidden not-group-hover:opacity-0"
        />
      </svg>

      <div className="relative flex items-center gap-17">
        <div className="dark:bg-illustration/75 dark:ring-border-illustration relative flex size-12 items-center justify-center rounded-full bg-black/75 shadow-xl ring-1 shadow-black/20 ring-black backdrop-blur">
          <LogoIcon className="size-5" />
        </div>

        <div className="flex flex-col gap-24">
          <div className="ring-border-illustration bg-illustration/50 flex size-12 rounded-full shadow-md ring-1 shadow-black/6.5 backdrop-blur *:m-auto *:size-5">
            <Gemini />
          </div>
          <div className="ring-border-illustration bg-illustration/50 flex size-12 rounded-full shadow-md ring-1 shadow-black/6.5 backdrop-blur *:m-auto *:size-5">
            <Openai className="*:fill-foreground" />
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <div className="ring-border-illustration bg-illustration/50 flex size-12 rounded-full shadow-md ring-1 shadow-black/6.5 backdrop-blur *:m-auto *:size-5">
            <Claude />
          </div>
          <div className="ring-border-illustration bg-illustration/50 flex size-12 rounded-full shadow-md ring-1 shadow-black/6.5 backdrop-blur *:m-auto *:size-5">
            <MistralAi />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flow7Illustration
