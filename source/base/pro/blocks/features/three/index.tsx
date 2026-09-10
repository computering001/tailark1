import { Message } from '@/components/illustrations/message'
import { Poll } from '@/components/illustrations/poll'
import { Uptime } from '@/components/illustrations/uptime'

export default function FeaturesSection() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="@max-4xl:max-w-sm ring-border verflow-hidden bg-card/50 mx-auto rounded-2xl border border-transparent shadow-md shadow-black/5 ring-1">
                    <div className="@4xl:grid-cols-3 @max-4xl:divide-y @4xl:divide-x grid">
                        <div className="row-span-2 grid grid-rows-subgrid gap-8 p-8">
                            <div className="mx-auto max-w-56 self-center">
                                <Message />
                            </div>
                            <div className="mx-auto max-w-sm text-center">
                                <h3 className="text-balance font-semibold">Fast Messaging</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Send and receive messages quickly and efficiently.</p>
                            </div>
                        </div>
                        <div className="row-span-2 grid grid-rows-subgrid gap-8 p-8">
                            <div className="self-center">
                                <Uptime />
                            </div>
                            <div className="relative z-10 mx-auto max-w-sm text-center">
                                <h3 className="text-balance font-semibold">Scan QR codes</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Scan QR codes to access your polls and vote.</p>
                            </div>
                        </div>
                        <div className="row-span-2 grid grid-rows-subgrid gap-8 p-8">
                            <div className="mx-auto self-center">
                                <Poll />
                            </div>
                            <div className="relative z-10 mx-auto max-w-sm text-center">
                                <h3 className="text-balance font-semibold">Customizable polls</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Create polls with custom questions, options, and voting methods.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
