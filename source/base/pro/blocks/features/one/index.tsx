import { Chart } from '@/components/illustrations/chart'
import { Invoice } from '@/components/illustrations/invoice'

export default function FeaturesSection() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="ring-border @4xl:grid-cols-2 @max-4xl:divide-y @4xl:divide-x bg-card/50 relative grid overflow-hidden rounded-2xl border border-transparent shadow-md shadow-black/5 ring-1">
                    <div className="row-span-2 grid grid-rows-subgrid gap-8">
                        <div className="px-8 pt-8">
                            <h3 className="text-balance font-semibold">Powerful analytics dashboard</h3>
                            <p className="text-muted-foreground mt-3">Track performance metrics with real-time data visualization and customizable reports for informed.</p>
                        </div>
                        <div className="self-end pb-4">
                            <Chart />
                        </div>
                    </div>
                    <div className="row-span-2 grid grid-rows-subgrid gap-8">
                        <div className="relative z-10 px-8 pt-8">
                            <h3 className="text-balance font-semibold">Streamlined invoicing system</h3>
                            <p className="text-muted-foreground mt-3">Generate, send, and manage professional invoices automatically with integrated payment tracking.</p>
                        </div>
                        <div className="self-end px-8 pb-8">
                            <Invoice />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
