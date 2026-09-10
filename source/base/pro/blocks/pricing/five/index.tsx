"use client"
import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import NumberFlow from "@number-flow/react"

const features = [
  "Team Collaboration",
  "Custom Templates",
  "24/7 Customer Support",
  "API Access",
  "White Labeling",
  "SSO Integration",
  "Dedicated Account Manager",
  "Custom Reporting",
]

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">(
    "annually"
  )
  const annualReduction = 0.75

  const price = {
    monthly: 349,
    annually: 349 * annualReduction,
  }

  return (
    <section className="@container relative bg-background py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-semibold text-balance md:text-4xl lg:text-5xl lg:tracking-tight tracking-tight">
            One simple plan, One Price{" "}
          </h2>
          <p className="mt-8 text-lg text-balance text-muted-foreground lg:text-xl">
            Everything you need to optimize your workflow in one affordable
            package
          </p>

          <div className="my-8">
            <div
              data-period={billingPeriod}
              className="relative mx-auto grid w-fit grid-cols-2 rounded-full bg-foreground/5 p-1 *:block *:h-8 *:w-24 *:rounded-full *:text-sm *:text-foreground/75 *:hover:opacity-75"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-1 w-1/2 translate-x-full rounded-full border border-transparent bg-card shadow ring-1 ring-foreground/5 transition-transform duration-500 ease-in-out in-data-[period=monthly]:translate-x-0"
              />
              <button
                onClick={() => setBillingPeriod("monthly")}
                {...(billingPeriod === "monthly" && { "data-active": true })}
                className="relative data-active:font-medium data-active:text-foreground"
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annually")}
                {...(billingPeriod === "annually" && { "data-active": true })}
                className="relative data-active:font-medium data-active:text-foreground"
              >
                Annually
              </button>
            </div>
            <div className="mt-3 text-xs">
              <span className="font-medium text-primary">Save 25%</span> On
              Annual Billing
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-md space-y-8">
          <div className="space-y-6 rounded-2xl bg-card p-8 text-center shadow-xl ring-1 shadow-black/6.5 ring-border @lg:p-10">
            <div>
              <CardTitle className="text-lg font-medium">
                All-in-One Solution
              </CardTitle>
              <CardDescription className="mx-auto mt-1 max-w-xs text-sm text-balance text-muted-foreground">
                Everything you need in one simple plan
              </CardDescription>
            </div>
            <div className="mx-auto grid w-fit grid-cols-[auto_1fr] items-center gap-3">
              <NumberFlow
                value={price[billingPeriod]}
                format={{
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }}
                className="font-features-['tnum'] text-5xl font-semibold tracking-tight"
              />
              <div className="text-left">
                <span className="text-sm">Per month</span>
                <div className="w-22 text-xs text-muted-foreground">
                  Billed {billingPeriod}
                </div>
              </div>
            </div>
            <Button
              render={<Link href="#">Get Started Now</Link>}
              nativeButton={false}
            />
            <div
              aria-hidden
              className="mx-16 h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[6px_1px] bg-repeat-x opacity-25"
            />
            <CardDescription className="mx-auto mt-1 max-w-xs text-sm text-balance text-muted-foreground">
              No hidden fees. Cancel anytime. Invoices available for easy
              reimbursement
            </CardDescription>
          </div>

          <ul role="list" className="grid gap-4 text-sm @md:grid-cols-2">
            {features.map((item, index) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-5 fill-emerald-500/10 stroke-emerald-500/10 *:last:stroke-emerald-600 *:last:drop-shadow dark:*:last:stroke-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
