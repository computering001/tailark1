import { YCombinator } from "@/components/ui/svgs/y-combinator"
import { Accel } from "@/components/ui/svgs/accel"
import { SVA } from "@/components/ui/svgs/sva"
import { Sequoia } from "@/components/ui/svgs/sequoia"
import { Salesforce } from "@/components/ui/svgs/salesforce"
import Image from "next/image"

type Investor = {
  name: string
  avatar: string
  role: string
}

const investors: Investor[] = [
  {
    name: "Shadcn",
    avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
    role: "Creator, Shadcn UI",
  },
  {
    name: "Guillermo Rauch",
    avatar: "https://avatars.githubusercontent.com/u/13041?v=4",
    role: "Founder, CEO - Vercel",
  },
  {
    name: "Adam Wathan",
    avatar: "https://avatars.githubusercontent.com/u/4323180?v=4",
    role: "CEO - Tailwind Labs",
  },
  {
    name: "Lee Robinson",
    avatar: "https://avatars.githubusercontent.com/u/9113740?v=4",
    role: "VP of Developer Education - Cursor",
  },
  {
    name: "Tobias Lütke",
    avatar: "https://avatars.githubusercontent.com/u/347?v=4",
    role: "Founder, Shopify",
  },
  {
    name: "Brandon Eich",
    avatar: "https://avatars.githubusercontent.com/u/313317?v=4",
    role: "Founder, Brave Browser",
  },
  {
    name: "Thomas Paul Mann",
    avatar: "https://avatars.githubusercontent.com/u/12066405?v=4",
    role: "Co-Founder, Raycast",
  },
  {
    name: "Paul Copplestone",
    avatar: "https://avatars.githubusercontent.com/u/10214025?v=4",
    role: "Co-Founder, Supabase",
  },
  {
    name: "Dylan Field",
    avatar: "https://avatars.githubusercontent.com/u/159643?v=4",
    role: "Founder, CEO - Figma",
  },
]

export default function DescriptionListSection() {
  return (
    <section className="bg-background py-16 md:py-32">
      <div className="@container mx-auto max-w-5xl px-6">
        <div>
          <h2 className="max-w-sm text-4xl font-semibold text-balance text-foreground tracking-tight">
            Backed by incredible investors
          </h2>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <div className="flex h-28 items-center justify-center rounded-2xl bg-card px-8 shadow-lg ring-1 shadow-black/3 ring-border *:h-7 *:w-fit md:px-12">
              <YCombinator />
            </div>
            <div className="flex h-28 items-center justify-center rounded-2xl bg-card px-8 shadow-lg ring-1 shadow-black/3 ring-border *:h-6 *:w-fit md:px-12">
              <Accel />
            </div>
            <div className="flex h-28 items-center justify-center rounded-2xl bg-card px-8 shadow-lg ring-1 shadow-black/3 ring-border *:h-7 *:w-fit md:px-12">
              <SVA />
            </div>
            <div className="flex h-28 items-center justify-center rounded-2xl bg-card px-8 shadow-lg ring-1 shadow-black/3 ring-border *:h-5 *:w-fit md:px-12">
              <Sequoia />
            </div>
            <div className="flex h-28 items-center justify-center rounded-2xl bg-card px-8 shadow-lg ring-1 shadow-black/3 ring-border *:h-12 *:w-fit md:px-12">
              <Salesforce />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-semibold text-foreground">
            Individual investors
          </h2>

          <div className="mt-12 grid gap-6 @2xl:grid-cols-2">
            {investors.map((investor) => (
              <div key={investor.name} className="flex gap-3 @md:items-center">
                <div className="relative size-6 shrink-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/15">
                  <Image
                    src={investor.avatar}
                    alt={investor.name}
                    className="size-full rounded-full"
                    width={64}
                    height={64}
                  />
                </div>

                <div className="flex @max-sm:flex-col @sm:gap-3">
                  <p className="font-medium text-foreground">{investor.name}</p>
                  <span className="text-muted-foreground @max-sm:hidden">
                    •
                  </span>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {investor.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
