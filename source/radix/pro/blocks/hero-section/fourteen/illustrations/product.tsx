import Image from 'next/image'

export const Product = () => {
    return (
        <div className="pointer-events-none relative scale-105">
            <div
                aria-hidden
                className="mask-radial-from-55% mask-radial-to-75% pointer-events-none absolute -inset-x-12 inset-y-12 mx-auto max-w-[92rem] opacity-65"
                style={{
                    backgroundImage: `
                repeating-linear-gradient(22.5deg, transparent, transparent 1px, rgba(75, 85, 99, 0.06) 1px, rgba(75, 85, 99, 0.06) 2px, transparent 2px, transparent 4px),
                repeating-linear-gradient(67.5deg, transparent, transparent 1px, rgba(107, 114, 128, 0.05) 1px, rgba(107, 114, 128, 0.05) 2px, transparent 2px, transparent 4px),
                repeating-linear-gradient(112.5deg, transparent, transparent 1px, rgba(55, 65, 81, 0.04) 1px, rgba(55, 65, 81, 0.04) 2px, transparent 2px, transparent 4px),
                repeating-linear-gradient(157.5deg, transparent, transparent 1px, rgba(31, 41, 55, 0.03) 1px, rgba(31, 41, 55, 0.03) 2px, transparent 2px, transparent 4px)
              `,
                }}
            />
            <div className="perspective-[4000px] transform-3d">
                <div className="z-1 rotate-x-[30deg] md:mask-r-from-90% mask-radial-from-65% mask-radial-at-top-right mask-radial-[200%_100%] rotate-y-[24deg] min-w-xl lg:min-w-6xl relative mx-auto max-w-[96rem] rotate-[344deg] pl-12 pt-12 sm:translate-x-6 md:pt-20 xl:translate-x-32">
                    <div className="bg-background min-w-3xl ring-foreground/10 absolute -right-36 bottom-0 left-52 top-6 z-10 rounded-2xl p-1 shadow-2xl shadow-indigo-900/35 ring-1 backdrop-blur md:-right-56 md:top-14 lg:left-64 lg:max-w-6xl">
                        <div className="relative aspect-video overflow-hidden rounded-xl">
                            <Image
                                className="object-top-left size-full object-cover dark:hidden"
                                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-4_lkhxqm.png"
                                alt="app screenshot"
                                width={2880}
                                height={1920}
                                sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                            />
                            <Image
                                className="object-top-left not-dark:hidden size-full object-cover"
                                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-4-dark_m2mfxo.png"
                                alt="app screenshot"
                                width={2880}
                                height={1920}
                                sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                            />
                        </div>
                    </div>
                    <div className="min-w-4xl bg-linear-to-b dark:from-card dark:bg-card via-background from-muted to-background ring-foreground/10 border-background rounded-2xl border p-1 shadow-2xl shadow-black/5 ring-1 lg:max-w-6xl">
                        <div className="relative aspect-video overflow-hidden rounded-xl">
                            <Image
                                className="object-top-left size-full object-cover mix-blend-darken dark:hidden"
                                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle_un3f39.png"
                                alt="app screenshot"
                                width={2880}
                                height={1920}
                                sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                            />
                            <Image
                                className="object-top-left not-dark:hidden size-full object-cover opacity-65"
                                src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-dark_cv2taw.png"
                                alt="app screenshot"
                                width={2880}
                                height={1920}
                                sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
