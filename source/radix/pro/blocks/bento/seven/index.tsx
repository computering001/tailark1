import { Card } from '@/components/ui/card'
import { MemoryUsage } from '@/components/illustrations/memory-usage'
import { Activity, BetweenHorizonalEnd, MemoryStick } from 'lucide-react'
import { Ai1 } from '@/components/illustrations/ai-1'
import Map from '@/components/illustrations/map'
import { Documents } from '@/components/illustrations/documents'
import Fingerprint from '@/components/illustrations/finger-print'

export default function BentoSeven() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="@2xl:grid-cols-2 @2xl:grid-rows-2 @4xl:grid-cols-3 grid gap-3">
                    <div className="@xl:col-span-2 @2xl:row-span-2 grid grid-rows-[auto_1fr] gap-3">
                        <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8 pb-0">
                            <div>
                                <BetweenHorizonalEnd className="text-muted-foreground size-4" />
                                <h3 className="text-foreground mb-2 mt-4 font-medium">Advanced Data Visualization</h3>
                                <p className="text-muted-foreground text-balance">Transform complex data into clear, actionable insights with our powerful visualization tools.</p>
                            </div>
                            <div className="-mx-8 overflow-hidden">
                                <Map />
                            </div>
                        </Card>

                        <div className="grid grid-cols-2 gap-3">
                            <Card className="group grid grid-cols-[auto_1fr] gap-4 gap-6 overflow-hidden rounded-2xl p-8">
                                <div className="*:origin-left *:scale-90 *:transition-transform *:duration-1000 *:group-hover:-translate-y-[225%]">
                                    <Documents />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-medium">Supported Files</h3>
                                    <p className="text-muted-foreground mt-2">Import and export multiple file formats</p>
                                </div>
                            </Card>
                            <Card className="group grid grid-cols-[auto_1fr] gap-4 gap-6 overflow-hidden rounded-2xl p-8">
                                <Fingerprint />
                                <div>
                                    <h3 className="text-foreground font-medium">Biometric Access</h3>
                                    <p className="text-muted-foreground mt-2">Secure entry with fingerprint recognition</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                        <div>
                            <MemoryStick className="text-muted-foreground size-4" />
                            <h3 className="text-foreground mb-2 mt-4 font-medium">Memory Optimization</h3>
                            <p className="text-muted-foreground">Monitor and optimize your system's memory usage.</p>
                        </div>
                        <MemoryUsage />
                    </Card>
                    <Card className="grid grid-rows-[auto_1fr] gap-8 rounded-2xl p-8">
                        <div>
                            <Activity className="text-muted-foreground size-4" />
                            <h3 className="text-foreground mb-2 mt-4 font-medium">Uptime Monitoring</h3>
                            <p className="text-muted-foreground text-balance">Track your service reliability with real-time uptime metrics.</p>
                        </div>
                        <div className="flex flex-col justify-end">
                            <Ai1 />
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
