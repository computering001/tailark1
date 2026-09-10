import { Card } from '@/components/ui/card'
import { Chart } from '@/components/illustrations/chart'
import { Kit } from '@/components/illustrations/kit'
import { Message } from '@/components/illustrations/message'

export default function BentoSix() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="@xl:grid-cols-2 @4xl:grid-cols-5 grid gap-3">
                    <div className="@4xl:col-span-2 space-y-3">
                        <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                            <div>
                                <h3 className="text-foreground font-semibold">Collaborative Analysis</h3>
                                <p className="text-muted-foreground mt-2">Add comments, share insights...</p>
                            </div>
                            <div aria-hidden>
                                <Chart />
                            </div>
                        </Card>
                        <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                            <div>
                                <h3 className="text-foreground font-semibold">Collaborative Analysis</h3>
                                <p className="text-muted-foreground mt-2">Add comments, share insights, and work together.</p>
                            </div>
                            <Message />
                        </Card>
                    </div>
                    <Card className="@4xl:col-span-3 group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                        <div>
                            <h3 className="text-foreground font-semibold">Smart Lighting Control</h3>
                            <p className="text-muted-foreground mt-2">
                                Automate your home lighting with customizable schedules and advanced <span className="text-foreground font-medium">team collaboration features</span>.
                            </p>
                        </div>
                        <Kit />
                    </Card>
                </div>
            </div>
        </section>
    )
}
