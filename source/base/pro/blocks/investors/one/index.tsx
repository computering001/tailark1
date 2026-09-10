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
      <div className="@container mx-auto max-w-5xl px-6 text-center">
        <h2 className="mx-auto max-w-sm text-4xl font-semibold text-balance text-foreground tracking-tight">
          Backed by incredible investors
        </h2>
        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="*:h-6 *:w-fit">
              <YCombinator />
            </div>
            <div className="*:h-5 *:w-fit">
              <Accel />
            </div>
            <div className="*:h-6 *:w-fit">
              <SVA />
            </div>
            <div className="*:h-4 *:w-fit">
              <Sequoia />
            </div>
            <div className="*:h-10 *:w-fit">
              <Salesforce />
            </div>
          </div>
        </div>
        <div></div>

        <div className="mt-32">
          <h2 className="text-4xl font-semibold text-foreground tracking-tight">
            Individual investors
          </h2>

          <div className="mt-12 grid gap-x-6 gap-y-8 @md:grid-cols-2 @2xl:grid-cols-3">
            {investors.map((investor) => (
              <div
                key={investor.name}
                className="flex flex-col items-center gap-3"
              >
                <div className="relative size-12 shrink-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/15">
                  <Image
                    src={investor.avatar}
                    alt={investor.name}
                    className="size-full rounded-full"
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {investor.name}
                  </p>
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
