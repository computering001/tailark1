'use client'
import { Spotify } from '@/components/ui/svgs/spotify'
import { VercelFull } from '@/components/ui/svgs/vercel'
import { SupabaseFull } from '@/components/ui/svgs/supabase'
import { Hulu } from '@/components/ui/svgs/hulu'
import { Bolt } from '@/components/ui/svgs/bolt'
import { Beacon } from '@/components/ui/svgs/beacon'
import { useMedia } from '@/hooks/use-media'
import { InfiniteSlider } from '@/components/ui/motion-primitives/infinite-slider'

export default function LogoCloud() {
    const isLarge = useMedia('(min-width: 64rem)')

    const Logos = () => {
        return (
            <>
                <Bolt
                    height={24}
                    width={58}
                />
                <VercelFull
                    height={24}
                    width={100}
                />
                <SupabaseFull className="h-7" />
                <Hulu
                    height={20}
                    width={60}
                />
                <Spotify
                    height={28}
                    width={90}
                />
                <Beacon
                    height={26}
                    width={92}
                />
            </>
        )
    }

    return (
        <section className="bg-background pb-16 pt-4">
            <div className="**:fill-foreground relative m-auto max-w-7xl">
                {isLarge ? (
                    <div className="relative flex items-center justify-between p-6">
                        <Logos />
                    </div>
                ) : (
                    <InfiniteSlider
                        gap={56}
                        className="mask-x-from-85% mask-x-to-99%"
                    >
                        <Logos />
                    </InfiniteSlider>
                )}
            </div>
        </section>
    )
}
