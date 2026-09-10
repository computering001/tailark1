import { Beacon } from '@/components/ui/svgs/beacon'
import { Bolt } from '@/components/ui/svgs/bolt'
import { Hulu } from '@/components/ui/svgs/hulu'
import { Primevideo } from '@/components/ui/svgs/prime'
import { Stripe } from '@/components/ui/svgs/stripe'
import { Supabase } from '@/components/ui/svgs/supabase'
import { OpenAIFull } from '@/components/ui/svgs/open-ai'
import { Cisco } from '@/components/ui/svgs/cisco'

export default function LogoCloudTwo() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl px-6">
                <div className="*:nth-4:border-r-0 grid grid-cols-3 gap-x-6 divide-dashed *:items-center *:px-4 *:py-6 sm:grid-cols-4 sm:divide-x sm:border-x">
                    <div className="flex">
                        <Primevideo
                            height={28}
                            width="auto"
                        />
                    </div>
                    <div className="flex">
                        <Cisco
                            height={32}
                            width="auto"
                        />
                    </div>
                    <div className="flex">
                        <Stripe
                            height={24}
                            width="auto"
                        />
                    </div>
                    <div className="flex">
                        <Hulu
                            height={22}
                            width="auto"
                        />
                    </div>

                    <div className="flex">
                        <Bolt
                            height={20}
                            width="auto"
                        />
                    </div>

                    <div className="flex">
                        <Supabase
                            height={24}
                            width="auto"
                        />
                    </div>
                    <div className="flex">
                        <OpenAIFull
                            height={24}
                            width="auto"
                        />
                    </div>
                    <div className="flex">
                        <Beacon
                            height={20}
                            width="auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
