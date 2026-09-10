"use client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type Role = {
  slug: string
  title: string
  location: string
  time: "full" | "part"
  category: "engeneering" | "marketing" | "compliance" | "data" | "finance"
}

const openRoles: Role[] = [
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    location: "San Francisco",
    time: "full",
    category: "engeneering",
  },
  {
    slug: "design-engineer",
    title: "Design Engineer",
    location: "San Francisco",
    time: "full",
    category: "engeneering",
  },
  {
    slug: "product-engineer",
    title: "Product Engineer",
    location: "Remote",
    time: "full",
    category: "engeneering",
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    location: "San Francisco",
    time: "full",
    category: "engeneering",
  },
  {
    slug: "software-engineer",
    title: "Software Engineer",
    location: "New York",
    time: "full",
    category: "engeneering",
  },
  {
    slug: "marketing-manager",
    title: "Marketing Manager",
    location: "New York",
    time: "full",
    category: "marketing",
  },
  {
    slug: "content-strategist",
    title: "Content Strategist",
    location: "Remote",
    time: "part",
    category: "marketing",
  },
  {
    slug: "compliance-officer",
    title: "Compliance Officer",
    location: "San Francisco",
    time: "full",
    category: "compliance",
  },
  {
    slug: "regulatory-analyst",
    title: "Regulatory Analyst",
    location: "New York",
    time: "full",
    category: "compliance",
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    location: "Remote",
    time: "full",
    category: "data",
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    location: "San Francisco",
    time: "full",
    category: "data",
  },
  {
    slug: "financial-analyst",
    title: "Financial Analyst",
    location: "New York",
    time: "full",
    category: "finance",
  },
  {
    slug: "accountant",
    title: "Accountant",
    location: "San Francisco",
    time: "part",
    category: "finance",
  },
]

const categories: (Role["category"] | "all")[] = [
  "all",
  ...new Set(openRoles.map((role) => role.category)),
]

export default function OpenRolesSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredRoles =
    selectedCategory === "all"
      ? openRoles
      : openRoles.filter((role) => role.category === selectedCategory)

  return (
    <section className="bg-background py-16 md:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-4xl font-semibold text-balance max-md:px-6 tracking-tight">
          Open Roles
        </h2>

        <div className="mt-12 grid max-md:gap-6 md:grid-cols-3">
          <div className="sticky top-0 z-10 flex h-fit gap-2 bg-background pt-2 max-md:overflow-x-auto max-md:border-b max-md:px-4 max-md:pb-2 md:top-4 md:flex-col md:pt-4">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setSelectedCategory(category)}
                data-active={selectedCategory === category}
                className="h-8 w-fit cursor-pointer rounded-full rounded-lg px-3 text-sm text-muted-foreground capitalize shadow ring-1 shadow-transparent ring-border-illustration not-data-[active=true]:hover:bg-foreground/5 data-[active=true]:bg-card data-[active=true]:text-primary data-[active=true]:shadow-black/6.5"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="@container max-md:px-2 md:col-span-2">
            {filteredRoles.map((role, index) => (
              <div
                key={role.slug}
                className="group not-last:space-y-0.5 not-last:pb-0.5"
              >
                <div className="relative grid gap-1 overflow-hidden rounded-xl p-4 hover:bg-foreground/5 @3xl:grid-cols-2">
                  <Link
                    href={role.slug}
                    className="font-medium after:absolute after:inset-0"
                  >
                    {role.title}
                  </Link>

                  <div className="flex items-center">
                    <div>
                      <span className="text-muted-foreground">
                        {role.location}
                      </span>{" "}
                      <span className="text-muted-foreground">
                        <span className="capitalize">{role.time}</span>
                        -time
                      </span>
                    </div>
                    <div className="ml-auto flex h-6 items-center rounded-full px-2 shadow shadow-transparent group-hover:bg-card group-hover:ring-1 group-hover:shadow-black/6.5 group-hover:ring-border-illustration">
                      <ArrowRight className="size-3.5 not-group-hover:opacity-50 group-hover:text-primary" />
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden
                  className="mx-4 h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[4px_1px] bg-repeat-x opacity-20 group-last:hidden"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
