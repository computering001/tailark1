"use client"

import { LogoIcon } from "@/components/ui/logo"
import { Gemini } from "@/components/ui/svgs/gemini"
import { Claude } from "@/components/ui/svgs/claude"
import { Openai } from "@/components/ui/svgs/openai"
import { MistralAi } from "@/components/ui/svgs/mistral-ai"
import { QwenLight } from "@/components/ui/svgs/qwen"
import { Deepseek } from "@/components/ui/svgs/deepseek"

export const Flow9Illustration = () => {
  return (
    <div
      aria-hidden
      className="relative flex w-fit items-center justify-center"
    >
      <style jsx>{`
        @keyframes model-flow {
          0% {
            stroke-dashoffset: 600;
          }
          100% {
            stroke-dashoffset: 100;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 250 251"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 my-auto h-86 w-full text-foreground/10"
      >
        <path
          d="M0.5 0.5H98.22C115.16 0.5 131.18 8.16 141.81 21.35L209.62 105.43C219.35 117.49 234.01 124.5 249.5 124.5"
          stroke="currentColor"
        />
        <path
          d="M0.5 250.5H99.69C116.59 250.5 132.58 242.87 143.21 229.74L211.21 145.76C220.57 134.21 234.64 127.5 249.5 127.5"
          stroke="currentColor"
        />
        <path
          d="M51 200.5H98.88C115.44 200.5 131.15 193.17 141.79 180.49L160.21 158.51C170.85 145.83 186.56 138.5 203.12 138.5H249.5"
          stroke="currentColor"
        />
        <path
          d="M50.5 50.5H98.05C115.08 50.5 131.19 58.25 141.81 71.56L157.69 91.44C168.31 104.75 184.42 112.5 201.45 112.5H249.5"
          stroke="currentColor"
        />
        <path
          d="M100.5 100.5H109.61C119.63 100.5 129.4 103.58 137.61 109.33C145.68 114.98 155.27 118.05 165.12 118.15L249.5 119"
          stroke="currentColor"
        />
        <path
          d="M100.5 150.5H109.74C119.67 150.5 129.36 147.44 137.5 141.75C145.64 136.06 155.33 133 165.26 133H249.5"
          stroke="currentColor"
        />

        {/* animated paths */}

        <path
          d="M0.5 0.5H98.22C115.16 0.5 131.18 8.16 141.81 21.35L209.62 105.43C219.35 117.49 234.01 124.5 249.5 124.5"
          stroke="url(#gemini)"
          strokeLinecap="round"
          strokeDasharray="50 440"
          strokeDashoffset="300"
          className="animate-[model-flow_3.5s_ease-in-out_infinite]"
        />
        <path
          d="M0.5 250.5H99.69C116.59 250.5 132.58 242.87 143.21 229.74L211.21 145.76C220.57 134.21 234.64 127.5 249.5 127.5"
          stroke="var(--color-foreground)"
          strokeLinecap="round"
          strokeDasharray="50 440"
          strokeDashoffset="300"
          className="animate-[model-flow_3.5s_ease-in-out_infinite]"
        />
        <path
          d="M51 200.5H98.88C115.44 200.5 131.15 193.17 141.79 180.49L160.21 158.51C170.85 145.83 186.56 138.5 203.12 138.5H249.5"
          stroke="#D97757"
          strokeLinecap="round"
          strokeDasharray="40 400"
          strokeDashoffset="300"
          className="animate-[model-flow_3s_ease-in-out_infinite]"
        />
        <path
          d="M50.5 50.5H98.05C115.08 50.5 131.19 58.25 141.81 71.56L157.69 91.44C168.31 104.75 184.42 112.5 201.45 112.5H249.5"
          stroke="url(#mistral)"
          strokeLinecap="round"
          strokeDasharray="40 400"
          strokeDashoffset="300"
          className="animate-[model-flow_3s_ease-in-out_infinite]"
        />
        <path
          d="M100.5 100.5H109.61C119.63 100.5 129.4 103.58 137.61 109.33C145.68 114.98 155.27 118.05 165.12 118.15L249.5 119"
          stroke="var(--color-foreground)"
          strokeLinecap="round"
          strokeDasharray="20 400"
          strokeDashoffset="300"
          className="animate-[model-flow_2.5s_ease-in-out_infinite]"
        />
        <path
          d="M100.5 150.5H109.74C119.67 150.5 129.36 147.44 137.5 141.75C145.64 136.06 155.33 133 165.26 133H249.5"
          stroke="#4D6BFE"
          strokeLinecap="round"
          strokeDasharray="20 400"
          strokeDashoffset="300"
          className="animate-[model-flow_2.5s_ease-in-out_infinite]"
        />

        <defs>
          <linearGradient
            id="gemini"
            gradientUnits="userSpaceOnUse"
            x1="60"
            y1="50"
            x2="220"
            y2="50"
          >
            <stop offset="0%" stopColor="#F6C013" />
            <stop offset="50%" stopColor="#FA4340" />
            <stop offset="75%" stopColor="#14BB69" />
            <stop offset="100%" stopColor="#3186FF" />
          </linearGradient>

          <linearGradient
            id="mistral"
            gradientUnits="userSpaceOnUse"
            x1="60"
            y1="50"
            x2="220"
            y2="50"
          >
            <stop offset="0%" stopColor="#F7D046" />
            <stop offset="50%" stopColor="#F2A73B" />
            <stop offset="75%" stopColor="#EE792F" />
            <stop offset="100%" stopColor="#EB5829" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative flex items-center gap-44">
        <div className="flex items-center gap-8">
          <div className="flex h-96 flex-col justify-between">
            <div className="ring-border-illustration bg-illustration/50 flex size-10 rounded-full shadow-md ring-1 shadow-black/6.5 backdrop-blur *:m-auto *:size-5">
              <Gemini />
            </div>

            <div className="ring-border-illustration bg-illustration/50 flex size-10 rounded-full shadow-md ring-1 shadow-black/6.5 backdrop-blur *:m-auto *:size-5">
              <Openai className="*:fill-foreground" />
            </div>
          </div>
          <div className="flex h-60 flex-col justify-between gap-10">
            <div className="ring-border-illustration bg-illustration/50 flex size-10 rounded-full shadow-md ring-1 shadow-black/6.5 backdrop-blur *:m-auto *:size-5">
              <MistralAi />
            </div>
            <div className="ring-border-illustration bg-illustration/50 flex size-10 rounded-full shadow-md ring-1 shadow-black/6.5 backdrop-blur *:m-auto *:size-5">
              <Claude />
            </div>
          </div>
          <div className="flex h-28 flex-col justify-between">
            <div className="ring-border-illustration bg-illustration/50 flex size-10 rounded-full shadow-md ring-1 shadow-black/6.5 backdrop-blur *:m-auto *:size-5">
              <QwenLight />
            </div>

            <div className="ring-border-illustration bg-illustration/50 flex size-10 rounded-full shadow-md ring-1 shadow-black/6.5 backdrop-blur *:m-auto *:size-5">
              <Deepseek />
            </div>
          </div>
        </div>
        <div className="corner-squircle dark:bg-illustration/75 dark:ring-border-illustration relative flex size-16 translate-x-4 items-center justify-center rounded-3xl bg-black/75 shadow-xl ring-1 shadow-black/20 ring-black backdrop-blur">
          <LogoIcon className="size-6" />
        </div>
      </div>
    </div>
  )
}

export default Flow9Illustration
