"use client"
import Image from "next/image"
import { ChartBar, Globe, Sparkles } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { LazyMotion, domAnimation, m, AnimatePresence } from "motion/react"

type Preview = "task-management" | "analytics" | "ai-copilot"

type PreviewItem = {
  name: Preview
  label: string
  image: string
  imageDark: string
  icon: React.ReactNode
}

const previews: PreviewItem[] = [
  {
    name: "task-management",
    label: "Task Management",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-dark_cv2taw.png",
    imageDark:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle_un3f39.png",
    icon: <Globe />,
  },
  {
    name: "analytics",
    label: "Analytics",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-dark_cv2taw.png",
    imageDark:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-2_qt7ip8.png",
    icon: <ChartBar />,
  },
  {
    name: "ai-copilot",
    label: "AI Copilot",
    image:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-dark_cv2taw.png",
    imageDark:
      "https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-3_tgdnaa.png",
    icon: <Sparkles />,
  },
]
export const Product = () => {
  const [active, setActive] = useState<Preview>("task-management")
  const currentPreview = previews.find((p) => p.name === active)!
  return (
    <LazyMotion features={domAnimation}>
    <div className="@container relative z-10 border-b mask-[radial-gradient(ellipse_80%_95%_at_50%_0%,#000_80%,transparent_100%)] pt-12 lg:pt-30">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-[1fr_auto_1fr] border-y border-border-illustration pb-2">
          <div className="h-[calc(100%+0.5rem)] bg-[repeating-linear-gradient(45deg,var(--color-border-illustration),var(--color-border-illustration)_1px,transparent_1px,transparent_6px)]" />
          <div className="max-w-3xl bg-foreground/3 lg:min-w-[42.5rem]">
            <div className="relative z-20 grid grid-cols-3 items-center justify-center gap-px divide-x divide-border-illustration border-x border-border-illustration *:h-16">
              {previews.map((preview) => (
                <button
                  type="button"
                  key={preview.name}
                  onClick={() => setActive(preview.name)}
                  className="group flex cursor-pointer items-center justify-center px-2"
                >
                  <div
                    className={cn(
                      "flex h-10 items-center gap-2 rounded-full px-4 ring-1 ring-border-illustration transition-transform duration-150 group-active:scale-99 [&>svg]:size-4",
                      active === preview.name
                        ? "bg-background shadow shadow-black/10"
                        : "group-hover:bg-background/50"
                    )}
                  >
                    {preview.icon}
                    <span className="@max-md:hidden">{preview.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="h-[calc(100%+0.5rem)] bg-[repeating-linear-gradient(45deg,var(--color-border-illustration),var(--color-border-illustration)_1px,transparent_1px,transparent_6px)]" />
        </div>
      </div>
      <div className="relative mx-auto -mt-2 max-w-6xl max-md:mx-1 lg:px-10">
        <div className="aspect-square rounded-2xl bg-background/60 p-1 shadow-2xl ring-1 shadow-black/10 ring-foreground/10 backdrop-blur sm:aspect-3/2">
          <AnimatePresence mode="wait">
            <m.div
              key={active}
              initial={{ opacity: 0, scale: 0.995 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.995 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-square origin-top overflow-hidden rounded-xl border-4 border-l-8 border-transparent bg-card shadow ring-1 ring-border-illustration sm:aspect-3/2 dark:bg-background"
            >
              <Image
                className="size-full object-cover object-top-left not-dark:hidden"
                src={currentPreview.image}
                alt={currentPreview.name}
                width={2880}
                height={1920}
                sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
              />
              <Image
                className="size-full object-cover object-top-left dark:hidden"
                src={currentPreview.imageDark}
                alt={currentPreview.name}
                width={2880}
                height={1920}
                sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
              />
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  
    </LazyMotion>)
}
