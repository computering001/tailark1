import { Map } from './map'

export default function StatsSection() {
    return (
        <section className="bg-background @container py-16 md:py-24">
            <div className="relative mx-auto max-w-5xl px-6">
                <div className="@max-md:scale-200 @max-md:mask-t-from-75%">
                    <Map />
                </div>

                <div className="@xl:absolute @xl:inset-x-6 @xl:bottom-0 relative">
                    <div className="**:text-center bg-card *:hover:bg-foreground/2 ring-border @xl:grid-cols-3 shadow-black/6.5 grid grid-cols-2 divide-x rounded-xl shadow-lg ring-1 *:p-6 sm:*:p-8">
                        <div className="space-y-2">
                            <div className="bg-linear-to-t from-foreground to-muted-foreground bg-clip-text text-3xl font-medium text-transparent md:text-5xl tracking-tight">+85%</div>
                            <p className="text-muted-foreground text-sm">Conversion Rate</p>
                        </div>
                        <div className="@max-xl:border-0 space-y-2">
                            <div className="bg-linear-to-t from-foreground to-muted-foreground bg-clip-text text-3xl font-medium text-transparent md:text-5xl tracking-tight">12K</div>
                            <p className="text-muted-foreground text-sm">Active Users</p>
                        </div>
                        <div className="@max-xl:hidden space-y-2">
                            <div className="bg-linear-to-t from-foreground to-muted-foreground bg-clip-text text-3xl font-medium text-transparent md:text-5xl tracking-tight">40%</div>
                            <p className="text-muted-foreground text-sm">Revenue Growth</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
