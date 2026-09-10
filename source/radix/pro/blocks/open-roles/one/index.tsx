import { ArrowRight } from "lucide-react"
import Link from "next/link"

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

type GroupedRoles = { [K in Role["category"]]?: Role[] }

const groupedRoles: GroupedRoles = openRoles.reduce(
  (acc: GroupedRoles, role) => {
    if (!acc[role.category]) {
      acc[role.category] = []
    }
    acc[role.category]!.push(role)
    return acc
  },
  {}
)

export default function OpenRolesSection() {
  return (
    <section className="bg-background py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-2">
        <div className="flex flex-col gap-12">
          <h2 className="px-4 text-4xl font-semibold text-balance tracking-tight">
            Open Roles
          </h2>
          <div>
            {Object.entries(groupedRoles).map(([category, roles]) => (
              <div key={category} className="mb-12">
                <h3 className="mb-4 px-4 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  {category}
                </h3>
                {roles.map((role, index) => (
                  <div key={role.slug} className="group space-y-0.5 pb-0.5">
                    <div className="relative grid gap-1 overflow-hidden rounded-xl p-4 hover:bg-foreground/5 md:grid-cols-2">
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
                        <ArrowRight className="ml-auto size-4 not-group-hover:opacity-50" />
                      </div>
                    </div>
                    <div
                      aria-hidden
                      className="mx-4 h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[4px_1px] bg-repeat-x opacity-20"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
