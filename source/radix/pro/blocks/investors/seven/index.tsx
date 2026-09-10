import { YCombinator } from '@/components/ui/svgs/y-combinator'
import { Accel } from '@/components/ui/svgs/accel'
import { SVA } from '@/components/ui/svgs/sva'
import { Sequoia } from '@/components/ui/svgs/sequoia'
import { Salesforce } from '@/components/ui/svgs/salesforce'

export default function InvestorsSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-6xl px-6">
                <div className="bg-foreground/3 @3xl:col-span-2 rounded-3xl p-8 md:p-12">
                    <p className="text-muted-foreground text-sm tracking-wide">Our investors</p>
                    <h2 className="text-foreground mt-4 max-w-sm text-balance text-3xl font-semibold md:text-4xl tracking-tight">Backed by world-class firms</h2>
                    <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-12">
                        <div className="*:size-6">
                            <YCombinator />
                        </div>
                        <div className="*:h-5 *:w-fit">
                            <Accel />
                        </div>
                        <div className="*:h-6 *:w-fit">
                            <SVA />
                        </div>
                        <div className="*:h-4 *:w-fit">
                            <Sequoia />
                        </div>
                        <div className="*:h-11 *:w-fit">
                            <Salesforce />
                        </div>
                    </div>
                </div>
                <div className="mt-6 px-8 md:px-12 lg:mt-12">
                    <p className="text-3xl font-semibold md:text-4xl tracking-tight">$50M+</p>
                    <p className="text-muted-foreground mt-2">Total funding raised</p>
                </div>
            </div>
        </section>
    )
}
