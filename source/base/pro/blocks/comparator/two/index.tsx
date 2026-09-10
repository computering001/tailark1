"use client"
import { cn } from "@/lib/utils"
import { Clover, Fan, Gem } from "lucide-react"
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useMedia } from "@/hooks/use-media"
import { useState, type ReactNode } from "react"

const plans = ["free", "pro", "team"] as const

type PlanAvailability = boolean | string

type Plan = (typeof plans)[number]

type Feature = {
  name: string
  description?: string
  plans: Record<Plan, PlanAvailability>
}

const features: Feature[] = [
  {
    name: "Daily Exercises",
    plans: {
      free: true,
      pro: true,
      team: true,
    },
  },
  {
    name: "Unlimited Access",
    description: "Get unlimited access to all exercises.",
    plans: {
      free: false,
      pro: "5 users",
      team: "Unlimited",
    },
  },
  {
    name: "Advance Quickly",
    plans: {
      free: false,
      pro: true,
      team: true,
    },
  },
  {
    name: "Self-paced Learning",
    description: "Get self-paced learning to improve your fitness.",
    plans: {
      free: false,
      pro: true,
      team: true,
    },
  },
  {
    name: "Ad-free Experience",
    plans: {
      free: false,
      pro: "Partial",
      team: true,
    },
  },
  {
    name: "Team Collaboration",
    description: "Get team collaboration to improve your fitness.",
    plans: {
      free: false,
      pro: false,
      team: true,
    },
  },
]

const plansActions: Record<Plan, ReactNode> = {
  free: (
    <Button
      render={<Link href="#">Get Started</Link>}
      nativeButton={false}
      className="lg:w-full"
      size="sm"
      variant="outline"
    />
  ),
  pro: (
    <Button
      render={<Link href="#">Start a free trial</Link>}
      nativeButton={false}
      className="lg:w-full"
      size="sm"
    />
  ),
  team: (
    <Button
      render={<Link href="#">Contact Us</Link>}
      nativeButton={false}
      className="lg:w-full"
      size="sm"
      variant="outline"
    />
  ),
}

const renderPlanColumn = (plan: Plan) => {
  const header =
    plan === "pro" ? (
      <div className="flex justify-center px-4 text-center max-md:hidden md:h-20 lg:px-6">
        <div className="mt-auto flex h-18 flex-col items-center justify-center gap-1.5">
          <Gem className="size-4" />
          <div className="text-sm font-medium">Pro</div>
        </div>
      </div>
    ) : (
      <div className="flex h-18 flex-col items-center justify-center gap-1.5 px-4 pt-2 text-center max-md:hidden lg:px-8">
        {plan === "free" ? (
          <Clover className="size-4" />
        ) : (
          <Fan className="size-4" />
        )}
        <div className="text-sm font-medium">
          {plan === "free" ? "Free" : "Team"}
        </div>
      </div>
    )

  return (
    <div
      data-plan={plan}
      className={cn(
        plan === "pro" &&
          "md:-my-2 md:rounded-xl md:bg-card md:shadow-xl md:ring-1 md:shadow-black/6.5 md:ring-border"
      )}
    >
      {header}
      <div>
        {features.map((feature) => (
          <div
            key={feature.name}
            className="flex h-14 items-center justify-center border-t px-6 text-sm max-md:border-l max-md:last:h-[calc(3.5rem+1px)] max-md:last:border-b"
          >
            <div>
              {feature.plans[plan] === true ? (
                <Indicator checked />
              ) : feature.plans[plan] === false ? (
                <Indicator />
              ) : (
                feature.plans[plan]
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="h-18 border-t px-4 text-sm in-data-[plan=pro]:h-20 max-md:hidden lg:px-6">
        <div className="flex h-18 items-center justify-center">
          {plansActions[plan]}
        </div>
      </div>
    </div>
  )
}

export default function FAQs() {
  const [activePlan, setActivePlan] = useState<Plan>("pro")

  const isMedium = useMedia("(min-width: 768px)")

  return (
    <section className="bg-background pb-16 md:py-24">
      <div className="mx-auto max-w-5xl md:px-6">
        {!isMedium && (
          <div className="sticky top-0 z-10 flex justify-between gap-4 border-b bg-background px-5 py-3">
            <div className="flex justify-center">
              {plans.map((plan) => (
                <button
                  type="button"
                  key={plan}
                  onClick={() => setActivePlan(plan)}
                  className="group text-muted-foreground max-md:px-1 md:block md:py-1"
                >
                  <span
                    className={cn(
                      "flex w-fit items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors [&>svg]:size-4",
                      activePlan === plan
                        ? "bg-card font-medium text-primary shadow-sm ring-1 ring-foreground/5"
                        : "group-hover:bg-foreground/5 hover:text-foreground"
                    )}
                  >
                    <span className="capitalize">{plan}</span>
                  </span>
                </button>
              ))}
            </div>
            {plansActions[activePlan]}
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex h-14 items-center px-6 md:h-18">
              <div className="font-medium">Benefits</div>
            </div>
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex h-14 items-center gap-2 border-t px-6 text-muted-foreground last:h-[calc(3.5rem+1px)] last:border-b md:border-l md:last:rounded-bl-xl md:nth-2:rounded-tl-xl"
              >
                <div className="max-lg:text-sm">{feature.name}</div>{" "}
                {feature.description && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <span className="flex size-4 items-center justify-center rounded-full bg-foreground/10 text-sm text-foreground/65">
                          ?
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-56 text-sm">
                        {feature.description}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            ))}
          </div>
          <div className="grid rounded-xl max-md:rounded-bl-none md:col-span-3 md:-translate-y-px md:grid-cols-3 md:border">
            <div className="h-14 md:hidden" aria-hidden />
            {isMedium ? (
              <>
                {plans.map((plan) => (
                  <div key={plan}>{renderPlanColumn(plan)}</div>
                ))}
              </>
            ) : (
              <div>{renderPlanColumn(activePlan)}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const Indicator = ({ checked = false }: { checked?: boolean }) => {
  return (
    <span
      className={cn(
        "flex size-5 items-center justify-center rounded-full bg-foreground/6.5 font-sans text-xs font-semibold text-foreground/65",
        checked && "bg-emerald-500/10 text-emerald-600"
      )}
    >
      {checked ? "✓" : "✗"}
    </span>
  )
}
