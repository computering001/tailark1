"use client"
import { cn } from "@/lib/utils"
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

type Category = {
  name: string
  description?: string
  features: Feature[]
}

const categories: Category[] = [
  {
    name: "Platform",
    description: "Core features that enable seamless operations of your SaaS",
    features: [
      {
        name: "Daily Exercises",
        description: "Engage users with daily interactive exercises.",
        plans: {
          free: true,
          pro: true,
          team: true,
        },
      },
      {
        name: "Unlimited Storage",
        description: "Store unlimited data with no additional cost.",
        plans: {
          free: "2 GB",
          pro: "100 GB",
          team: "Unlimited",
        },
      },
      {
        name: "Custom Dashboards",
        description: "Create personalized dashboards for data visualization.",
        plans: {
          free: true,
          pro: true,
          team: true,
        },
      },
      {
        name: "Self-paced Learning",
        description: "Empower users to learn at their own pace.",
        plans: {
          free: true,
          pro: true,
          team: true,
        },
      },
      {
        name: "Ad-free Experience",
        description: "Provide an uninterrupted, ad-free environment.",
        plans: {
          free: false,
          pro: true,
          team: true,
        },
      },
      {
        name: "Team Collaboration",
        description: "Enhance productivity with team collaboration tools.",
        plans: {
          free: false,
          pro: false,
          team: true,
        },
      },
    ],
  },
  {
    name: "Infrastructure",
    description: "Robust infrastructure to support your SaaS needs",
    features: [
      {
        name: "Global CDN",
        description: "Deliver content rapidly across the globe.",
        plans: {
          free: true,
          pro: true,
          team: "Unlimited",
        },
      },
      {
        name: "Scalable Servers",
        description: "Automatically scale resources as demand grows.",
        plans: {
          free: false,
          pro: true,
          team: "Unlimited",
        },
      },
      {
        name: "Data Backups",
        description: "Ensure data safety with regular backups.",
        plans: {
          free: false,
          pro: "3 days",
          team: "1 month",
        },
      },
      {
        name: "API Access",
        description: "Integrate seamlessly with third-party services.",
        plans: {
          free: false,
          pro: true,
          team: true,
        },
      },
      {
        name: "24/7 Monitoring",
        description:
          "Keep your platform running smoothly with constant monitoring.",
        plans: {
          free: false,
          pro: true,
          team: true,
        },
      },
      {
        name: "Load Balancing",
        description: "Distribute traffic efficiently across servers.",
        plans: {
          free: false,
          pro: false,
          team: true,
        },
      },
    ],
  },
  {
    name: "Support",
    description: "Comprehensive support to assist your users",
    features: [
      {
        name: "Priority Support",
        description: "Get fast-track assistance for urgent issues.",
        plans: {
          free: false,
          pro: true,
          team: true,
        },
      },
      {
        name: "Live Chat",
        description: "Provide real-time support via chat.",
        plans: {
          free: false,
          pro: true,
          team: true,
        },
      },
      {
        name: "Knowledge Base",
        description: "Access a rich repository of self-help articles.",
        plans: {
          free: true,
          pro: false,
          team: true,
        },
      },
      {
        name: "Onboarding Assistance",
        description: "Ensure smooth onboarding with expert guidance.",
        plans: {
          free: false,
          pro: "1 hour",
          team: "12 hours",
        },
      },
      {
        name: "Community Forums",
        description: "Engage in community discussions and support.",
        plans: {
          free: true,
          pro: true,
          team: true,
        },
      },
      {
        name: "Dedicated Account Manager",
        description: "Receive personalized service and support.",
        plans: {
          free: false,
          pro: false,
          team: true,
        },
      },
    ],
  },
  {
    name: "Analytics",
    description: "Advanced analytics to drive data-driven decisions",
    features: [
      {
        name: "Real-time Reports",
        description: "Generate instant reports to track performance.",
        plans: {
          free: false,
          pro: true,
          team: true,
        },
      },
      {
        name: "User Insights",
        description: "Analyze user behavior to improve engagement.",
        plans: {
          free: false,
          pro: true,
          team: true,
        },
      },
      {
        name: "Custom Metrics",
        description: "Define and track metrics that matter to you.",
        plans: {
          free: false,
          pro: "10",
          team: "Unlimited",
        },
      },
      {
        name: "A/B Testing",
        description: "Optimize features through controlled experiments.",
        plans: {
          free: false,
          pro: false,
          team: true,
        },
      },
      {
        name: "Predictive Analytics",
        description: "Leverage AI to predict future trends.",
        plans: {
          free: false,
          pro: false,
          team: true,
        },
      },
    ],
  },
]

const plansActions: Record<Plan, ReactNode> = {
  free: (
    <Button className="lg:w-full" size="sm" asChild>
      <Link href="#">Get Started</Link>
    </Button>
  ),
  pro: (
    <Button className="lg:w-full" size="sm" asChild>
      <Link href="#">Start a free trial</Link>
    </Button>
  ),
  team: (
    <Button className="lg:w-full" size="sm" asChild>
      <Link href="#">Contact Us</Link>
    </Button>
  ),
}

const prices: Record<Plan, string> = {
  free: "0$ / month",
  pro: "15$ / month",
  team: "Custom",
}

const renderPlanColumn = (plan: Plan) => {
  const header =
    plan === "pro" ? (
      <div className="sticky top-0 flex h-36 flex-col justify-center rounded-t-xl border-b bg-foreground/2 px-4 backdrop-blur max-md:hidden lg:px-6">
        <div className="text-lg font-medium">Pro</div>
        <div className="mt-0.5 mb-4 text-muted-foreground">15$ / month</div>
        {plansActions[plan]}
      </div>
    ) : (
      <div className="sticky top-0 flex h-36 flex-col justify-center border-b bg-background px-4 pt-2 max-md:hidden lg:px-8">
        <div className="text-lg font-medium">
          {plan === "free" ? "Free" : "Business"}
        </div>
        <div className="mt-0.5 mb-4 text-muted-foreground">{prices[plan]}</div>
        <div className="[--color-primary:var(--color-zinc-600)]">
          {plansActions[plan]}
        </div>
      </div>
    )

  return (
    <div
      data-plan={plan}
      className={cn(
        plan === "pro" &&
          "relative z-1 md:rounded-xl md:bg-foreground/2 md:ring-1 md:ring-border-illustration"
      )}
    >
      {header}
      {categories.map((category) => (
        <div key={category.name}>
          <div aria-hidden className={cn("h-14 md:h-28")} />
          <div>
            {category.features.map((feature) => (
              <div
                key={feature.name}
                className="flex h-14 items-center border-t px-6 text-sm last:h-[calc(3.5rem+1px)] last:border-b max-md:justify-center max-md:border-l md:px-4 lg:px-8 lg:in-data-[plan=pro]:px-6"
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
        </div>
      ))}
      <div className="flex h-6 items-center justify-center px-4 text-sm max-md:hidden lg:px-6" />
    </div>
  )
}

export default function FAQs() {
  const [activePlan, setActivePlan] = useState<Plan>("pro")
  const isMedium = useMedia("(min-width: 768px)")

  return (
    <section className="pb-16 md:py-24">
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
                      "flex w-fit items-center gap-2 rounded-md px-4 py-1.5 text-sm transition-colors [&>svg]:size-4",
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

        <div className="grid grid-cols-3 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="sticky top-0 z-1 flex h-36 items-end gap-1.5 border-b bg-background py-2 max-md:hidden">
              <div className="text-sm font-medium text-muted-foreground">
                Features
              </div>
            </div>

            {categories.map((category) => (
              <div key={category.name}>
                <div className="relative flex h-14 flex-col justify-center max-md:px-6 md:h-28">
                  <h3 className="text-lg font-medium">{category.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-balance text-muted-foreground max-md:hidden md:-mr-24">
                    {category.description}
                  </p>
                </div>
                {category.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex h-14 items-center border-t text-muted-foreground last:h-[calc(3.5rem+1px)] last:border-b max-md:px-6"
                  >
                    <div className="text-sm">{feature.name}</div>{" "}
                    {feature.description && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="flex size-7">
                            <span className="m-auto flex size-4 items-center justify-center rounded-full bg-foreground/10 text-sm text-foreground/65">
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
            ))}
          </div>

          <div className="grid md:col-span-3 md:grid-cols-3">
            {isMedium ? (
              <>
                {plans.map((plan) => (
                  <div key={plan} className="group">
                    {renderPlanColumn(plan)}
                  </div>
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
      {checked ? "✓" : "-"}
    </span>
  )
}
