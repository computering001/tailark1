import { Layout } from '@/components/illustrations/layout'

export default function FeaturesSection5() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="relative">
                    <div className="z-10 max-w-xl">
                        <h2 className="mb-4 text-4xl font-semibold tracking-tight">Set the product direction</h2>
                        <p className="mb-8 text-lg">
                            Monitor your application's activity in real-time. <span className="text-muted-foreground"> Instantly identify and resolve issues.</span>
                        </p>
                    </div>

                    <div className="-translate-x-44 md:translate-x-0">
                        <Layout />
                    </div>
                </div>
            </div>
        </section>
    )
}
