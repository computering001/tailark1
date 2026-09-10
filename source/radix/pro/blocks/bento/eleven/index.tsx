import { AddComment } from "@/components/illustrations/add-comment"
import { Document } from "@/components/illustrations/document"
import { Currency } from "@/components/illustrations/currency"
import { Schedule } from "@/components/illustrations/schedule"
import Image from "next/image"

const GLODIE_AVATAR = "https://avatars.githubusercontent.com/u/99137927?v=4"

export default function BentoEleven() {
  return (
    <section className="@container bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="border *:p-8 @3xl:grid @3xl:grid-cols-2 @3xl:*:p-12">
          <div className="row-span-2 grid grid-rows-subgrid gap-8 border-b @3xl:gap-12 @3xl:border-r">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Financial Analytics
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Track your financial performance with powerful visualizations.
                Monitor cash flow, revenue trends, and expense patterns in
                real-time.
              </p>
            </div>
            <Currency />
          </div>
          <div className="row-span-2 grid grid-rows-subgrid gap-8 border-b @3xl:gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Document Management
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Organize, store, and access all your important documents
                securely. Streamline your workflow with powerful search.
              </p>
            </div>
            <div className="relative flex gap-4">
              <Document />
              <Document />
              <Document />
            </div>
          </div>
          <div className="col-span-2 border-y border-background">
            <blockquote className="max-w-xl">
              <p className="text-lg sm:text-xl">
                Using TailsUI has been like unlocking a secret design
                superpower. It's the perfect fusion of simplicity and
                versatility, enabling us to create UIs that are as stunning as
                they are user-friendly.
              </p>

              <div className="mt-6 flex items-center gap-2">
                <div className="size-7 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5">
                  <Image
                    className="aspect-square rounded-full object-cover"
                    src={GLODIE_AVATAR}
                    alt="Glodie"
                    height="52"
                    width="52"
                  />
                </div>
                <span>Glodie Lukose</span>
                <span className="text-muted-foreground">@glodie</span>
              </div>
            </blockquote>
          </div>
          <div className="row-span-2 grid grid-rows-subgrid gap-8 border-t @3xl:gap-12 @3xl:border-r">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Team Collaboration
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Foster seamless communication within your team. Add comments,
                assign tasks, and keep everyone aligned on project goals.
              </p>
            </div>
            <AddComment className="self-end pl-6" />
          </div>
          <div className="row-span-2 grid grid-rows-subgrid gap-8 border-t @3xl:gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Smart Scheduling
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Plan your workday efficiently with intelligent scheduling tools.
                Automate appointments and receive timely reminders for important
                events.
              </p>
            </div>
            <Schedule className="self-end pl-9" />
          </div>
        </div>
      </div>
    </section>
  )
}
