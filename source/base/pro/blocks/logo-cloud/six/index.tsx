import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
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
            <div className="relative m-auto max-w-5xl px-6 text-center">
                <h2 className="text-center text-xl font-medium">Trusted by leading teams worldwide</h2>

                <div className="mx-auto my-12 grid max-w-3xl grid-cols-3 gap-x-6 gap-y-8 *:justify-center *:transition-none *:duration-200 sm:grid-cols-4 sm:gap-y-12">
                    <div className="group flex">
                        <Primevideo
                            height={28}
                            width="auto"
                            className="not-group-hover:*:fill-foreground!"
                        />
                    </div>
                    <div className="group flex">
                        <Cisco
                            height={32}
                            width="auto"
                            className="not-group-hover:*:fill-foreground!"
                        />
                    </div>
                    <div className="group flex">
                        <Stripe
                            height={24}
                            width="auto"
                            className="not-group-hover:*:fill-foreground!"
                        />
                    </div>
                    <div className="group flex">
                        <Hulu
                            height={20}
                            width="auto"
                            className="not-group-hover:*:fill-foreground!"
                        />
                    </div>
                    <div className="group flex">
                        <Bolt
                            height={20}
                            width="auto"
                            className="not-group-hover:*:fill-foreground!"
                        />
                    </div>
                    <div className="group flex">
                        <Supabase
                            height={24}
                            width="auto"
                            className="not-group-hover:*:fill-foreground!"
                        />
                    </div>
                    <div className="group flex">
                        <OpenAIFull
                            height={24}
                            width="auto"
                            className="not-group-hover:*:fill-foreground!"
                        />
                    </div>
                    <div className="group flex">
                        <Beacon
                            height={20}
                            width="auto"
                            className="not-group-hover:*:fill-foreground!"
                        />
                    </div>
                </div>
                <Button
                    render={
                        <Link href="#">
                            Meet our Customers
                                                    <ChevronRight className="size-3.5!" />
                        </Link>
                    }
                    nativeButton={false}
                    variant="outline"
                    size="sm"
                    className="pr-2"
                />
            </div>
        </section>
    )
}
