import { Card } from '@/components/ui/card'
import { Chart } from '@/components/illustrations/chart'
import { Document } from '@/components/illustrations/document'
import { Keys } from '@/components/illustrations/keys'
import { FingerprintScan } from '@/components/illustrations/fingerprint-scan'
import { Campaign } from '@/components/illustrations/campaign'

export default function SmartHomeBento() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="@xl:grid-cols-2 @4xl:grid-cols-10 grid grid-cols-1 gap-3">
                    <Card className="@4xl:col-span-4 group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                        <div>
                            <h3 className="text-foreground font-semibold">Smart Lighting Control</h3>
                            <p className="text-muted-foreground mt-3">Automate your home lighting with customizable schedules.</p>
                        </div>
                        <Keys />
                    </Card>
                    <Card className="@xl:col-span-2 @4xl:col-span-6 grid grid-rows-[auto_1fr] gap-8 rounded-2xl p-8 [--color-background:var(--color-muted)]">
                        <div>
                            <h3 className="text-foreground font-semibold">Interactive Dashboards</h3>
                            <p className="text-muted-foreground mt-3">Create custom dashboards with drag-and-drop simplicity. Automate your home lighting with customizable schedules.</p>
                        </div>
                        <div className="relative">
                            <Chart />
                        </div>
                    </Card>
                    <Card
                        data-theme="dark"
                        className="@4xl:col-span-3 group grid grid-rows-[1fr_auto] gap-8 overflow-hidden rounded-2xl p-8">
                        <FingerprintScan />
                        <div>
                            <h3 className="text-foreground font-semibold">Smart Lighting Control</h3>
                            <p className="text-muted-foreground mt-3">Automate your home lighting with customizable schedules.</p>
                        </div>
                    </Card>
                    <Card className="@4xl:col-span-4 group grid grid-rows-[1fr_auto] gap-8 overflow-hidden rounded-2xl p-8 [--color-background:var(--color-muted)]">
                        <Campaign />
                        <div>
                            <h3 className="text-foreground font-semibold">Smart Lighting Control</h3>
                            <p className="text-muted-foreground mt-3">Automate your home lighting with customizable schedules.</p>
                        </div>
                    </Card>
                    <Card className="@4xl:row-start-auto @4xl:col-span-3 row-start-1 grid grid-rows-[1fr_auto] gap-8 overflow-hidden rounded-2xl p-8">
                        <div className="**:mt-0 grid h-fit grid-cols-3 gap-3">
                            <Document />
                            <Document />
                            <Document />
                            <Document />
                            <Document />
                            <Document />
                        </div>
                        <div>
                            <h3 className="text-foreground font-semibold">Collaborative Analysis</h3>
                            <p className="text-muted-foreground mt-3">Add comments, share insights, and work together.</p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
