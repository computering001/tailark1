import { Hulu } from '@/components/ui/svgs/hulu'
import { Vercel } from '@/components/ui/svgs/vercel'
import Image from 'next/image'

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'

export default function Testimonials() {
    return (
        <section className="bg-background @container py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="*:ring-foreground/10 *:bg-card @4xl:grid-cols-9 grid gap-6 *:overflow-hidden *:rounded-2xl *:border *:border-transparent *:shadow-md *:shadow-black/10 *:ring-1">
                    <div className="@4xl:col-span-4 row-span-2 grid grid-rows-subgrid gap-px">
                        <div className="@3xl:p-12 self-end p-8">
                            <p className='text-lg before:mr-1 before:font-serif before:content-["\201C"] after:ml-1 after:font-serif after:content-["\201D"] lg:text-xl'>Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences.</p>
                        </div>

                        <div className="from-background bg-linear-to-b @3xl:px-12 grid grid-cols-[1fr_auto] border-t to-green-500/10 p-8">
                            <div className="grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-full border border-transparent shadow-md shadow-black/15 ring-1">
                                    <Image
                                        src={MESCHAC_AVATAR}
                                        alt="Méschac's avatar"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                <div className="text-base *:block">
                                    <span className="text-foreground font-medium">Méschac Irung</span>
                                    <span className="text-muted-foreground text-sm">Backend Engineer</span>
                                </div>
                            </div>

                            <div>
                                <Hulu className="h-7 w-16" />
                            </div>
                        </div>
                    </div>
                    <div
                        data-theme="dark"
                        className="@4xl:col-span-5 row-span-2 grid grid-rows-subgrid gap-px">
                        <div className="@3xl:px-12 self-end p-8">
                            <p className='text-lg before:mr-1 before:font-serif before:content-["\201C"] after:ml-1 after:font-serif after:content-["\201D"] lg:text-xl'>Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences.</p>
                        </div>

                        <div className="from-foreground/10 bg-linear-to-bl border-foreground/10 to-background/5 @3xl:px-12 relative grid grid-cols-[1fr_auto] border-t p-8">
                            <div className="relative grid grid-cols-[auto_1fr] items-center gap-3 pl-px">
                                <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-full border border-transparent shadow-md shadow-black/15 ring-1">
                                    <Image
                                        src={BERNARD_AVATAR}
                                        alt="Bernard Ngandu's avatar"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                <div className="text-base *:block">
                                    <span className="text-foreground font-medium">Bernard Ngandu</span>
                                    <span className="text-foreground/65 text-sm">Backend Engineer</span>
                                </div>
                            </div>

                            <div className="relative">
                                <Vercel className="size-7" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
