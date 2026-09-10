import { Card } from "@/components/ui/card"
import { AiMemory } from "@/components/illustrations/ai-memory"
import { Campaign } from "@/components/illustrations/campaign"
import { Chart } from "@/components/illustrations/chart"
import { Fingerprint } from "@/components/illustrations/finger-print"
import { Message } from "@/components/illustrations/message"
import { Models2 } from "@/components/illustrations/models-2"

export default function BentoEight() {
  return (
    <section className="@container bg-background py-24">
      <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
        <div className="grid gap-3 @xl:grid-cols-2 @4xl:grid-cols-3 @4xl:grid-rows-2">
          <div className="row-span-2 grid grid-rows-[auto_1fr] gap-4">
            <Card className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
              <div>
                <h3 className="font-semibold text-foreground">
                  Smart Home Automation
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Control your entire home with{" "}
                  <span className="font-medium text-foreground">
                    intelligent ecosystem
                  </span>
                  .
                </p>
              </div>
              <div className="-mx-8 overflow-hidden">
                <AiMemory />
              </div>
            </Card>
            <Card className="group grid grid-cols-[auto_1fr] gap-4 gap-6 overflow-hidden rounded-2xl p-8">
              <Fingerprint />
              <div>
                <h3 className="font-semibold text-foreground">
                  Biometric Access
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Secure entry with fingerprint recognition
                </p>
              </div>
            </Card>
          </div>
          <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
            <div aria-hidden className="flex flex-col justify-end">
              <h3 className="font-semibold text-foreground">
                Marketing Campaigns
              </h3>
              <p className="mt-2 text-muted-foreground">
                Launch targeted promotions{" "}
                <span className="font-medium text-foreground">
                  across channels
                </span>
                .
              </p>
            </div>
            <div aria-hidden className="flex flex-col justify-end">
              <Campaign />
            </div>
          </Card>
          <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
            <div>
              <h3 className="font-semibold text-foreground">Team Messaging</h3>
              <p className="mt-2 text-muted-foreground">
                Real-time communication for seamless collaboration.
              </p>
            </div>
            <div aria-hidden className="flex flex-col justify-end">
              <Message />
            </div>
          </Card>
          <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
            <div>
              <h3 className="font-semibold text-foreground">
                Data Visualization
              </h3>
              <p className="mt-2 text-muted-foreground">
                Transform complex data into clear, actionable insights.
              </p>
            </div>
            <div aria-hidden className="flex flex-col justify-end">
              <Chart />
            </div>
          </Card>
          <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
            <div>
              <h3 className="font-semibold text-foreground">
                Customer Feedback
              </h3>
              <p className="mt-2 text-muted-foreground">
                Collect and analyze user opinions to improve products.
              </p>
            </div>
            <div
              aria-hidden
              className="-mx-8 flex flex-col justify-end overflow-hidden"
            >
              <Models2 />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
