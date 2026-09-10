import { Invoice } from '@/components/illustrations/invoice'
import { InvoiceSigning } from '@/components/illustrations/invoice-signing'
import { Payment } from '@/components/illustrations/payment'

export default function FeaturesSection() {
    return (
        <section className="bg-background @container py-16 md:py-24 lg:py-40">
            <div className="@max-6xl:px-6 relative mx-auto w-full max-w-5xl">
                <div className="@max-4xl:max-w-sm mx-auto">
                    <div className="@max-4xl:gap-12 @4xl:grid-cols-3 grid">
                        <div className="row-span-2 grid grid-rows-subgrid gap-8">
                            <div className="@4xl:pr-12">
                                <h3 className="text-balance text-lg font-semibold">
                                    <span className="text-muted-foreground self-center font-mono text-sm">1.</span> Add payment information
                                </h3>
                                <p className="text-muted-foreground mt-2">
                                    Securely add your <span className="text-foreground font-medium">payment details</span> to get started with our services.
                                </p>
                            </div>
                            <IllustrationPerspective>
                                <Payment />
                            </IllustrationPerspective>
                        </div>
                        <div className="row-span-2 grid grid-rows-subgrid gap-8">
                            <div className="@4xl:pr-12">
                                <h3 className="text-balance text-lg font-semibold">
                                    <span className="text-muted-foreground self-center font-mono text-sm"> 2.</span> Sign documents
                                </h3>
                                <p className="text-muted-foreground mt-2">
                                    Digitally sign and <span className="text-foreground font-medium">authorize transactions</span> with ease.
                                </p>
                            </div>
                            <IllustrationPerspective>
                                <InvoiceSigning />
                            </IllustrationPerspective>
                        </div>
                        <div className="row-span-2 grid grid-rows-subgrid gap-8">
                            <div className="@4xl:pr-12">
                                <h3 className="text-balance text-lg font-semibold">
                                    <span className="text-muted-foreground self-center font-mono text-sm">3.</span> Receive confirmation
                                </h3>
                                <p className="text-muted-foreground mt-2">
                                    Get instant <span className="text-foreground font-medium">confirmation receipts</span> for all your completed transactions.
                                </p>
                            </div>
                            <IllustrationPerspective>
                                <Invoice />
                            </IllustrationPerspective>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IllustrationPerspective = ({ children }: { children: React.ReactNode }) => (
    <div className="perspective-dramatic mask-radial-from-60% mask-radial-at-top-left mask-radial-[95%_100%] @4xl:pl-4 pl-5 pt-6">
        <div className="rotate-y-3 -skew-y-4">{children}</div>
    </div>
)
