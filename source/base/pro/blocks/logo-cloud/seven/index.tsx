import { Beacon } from '@/components/ui/svgs/beacon'
import { Hulu } from '@/components/ui/svgs/hulu'
import { Stripe } from '@/components/ui/svgs/stripe'
import { Supabase } from '@/components/ui/svgs/supabase'
import { VercelFull } from '@/components/ui/svgs/vercel'
import { Spotify } from '@/components/ui/svgs/spotify'
import Link from 'next/link'
import TailwindCSS from '@/components/ui/svgs/tailwindcss'

export default function LogoCloud() {
    return (
        <div className="relative py-24">
            <div className="mx-auto max-w-6xl px-6 lg:px-12">
                <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-6">
                    <div className="space-y-4 max-lg:text-center">
                        <p className="text-foreground w-fit max-w-sm text-balance text-xl max-lg:mx-auto">Trusted by fast-growing companies around the world</p>

                        <Link
                            href="#"
                            className="text-primary text-sm underline">
                            Read case studies
                        </Link>
                    </div>
                    <div className="**:fill-foreground grid grid-cols-3 items-center gap-y-12 sm:grid-cols-4">
                        <div className="flex h-full items-center justify-center px-2">
                            <Hulu
                                height={16}
                                width="auto"
                            />
                        </div>

                        <div className="flex items-center justify-center px-2">
                            <Spotify
                                height={22}
                                width="auto"
                            />
                        </div>
                        <div className="flex items-center justify-center px-2">
                            <Supabase
                                height={20}
                                width="auto"
                            />
                        </div>
                        <div className="flex items-center justify-center px-2">
                            <Beacon
                                height={16}
                                width="auto"
                            />
                        </div>
                        <div className="flex items-center justify-center px-2">
                            <VercelFull
                                height={16}
                                width="auto"
                            />
                        </div>

                        <div className="flex items-center justify-center px-2">
                            <Stripe
                                height={20}
                                width="auto"
                            />
                        </div>
                        <div className="flex items-center justify-center px-2">
                            <TailwindCSS
                                height={20}
                                width="auto"
                            />
                        </div>
                        <div className="flex items-center justify-center px-2">
                            <Stripe
                                height={20}
                                width="auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
