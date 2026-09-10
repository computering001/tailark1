import { Beacon } from '@/components/ui/svgs/beacon'
import { Bolt } from '@/components/ui/svgs/bolt'
import { Cisco } from '@/components/ui/svgs/cisco'
import { Hulu } from '@/components/ui/svgs/hulu'
import { OpenAIFull } from '@/components/ui/svgs/open-ai'
import { Primevideo } from '@/components/ui/svgs/prime'
import { Stripe } from '@/components/ui/svgs/stripe'
import { VisualStudioCode } from '@/components/ui/svgs/vs-code'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'

export default function LogoCloud() {
    return (
        <div className="mx-auto max-w-3xl">
            <div className="mask-x-from-90% py-16">
                <InfiniteSlider
                    speedOnHover={20}
                    speed={40}
                    className="*:gap-12! **:fill-foreground md:*:gap-24! items-center">
                    <Hulu
                        height={20}
                        width="auto"
                    />
                    <Beacon
                        height={24}
                        width="auto"
                    />
                    <Cisco
                        height={24}
                        width="auto"
                    />
                    <Primevideo
                        height={32}
                        width="auto"
                    />
                    <Stripe
                        height={20}
                        width="auto"
                    />
                    <OpenAIFull
                        height={24}
                        width="auto"
                    />
                    <VisualStudioCode
                        height={24}
                        width="auto"
                    />

                    <Bolt
                        height={20}
                        width="auto"
                    />
                </InfiniteSlider>
            </div>
        </div>
    )
}
