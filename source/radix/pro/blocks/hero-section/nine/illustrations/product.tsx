import Image from 'next/image'

const previews = [
    {
        label: 'Analytics',
        image: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-dark_cv2taw.png',
        imageDark: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-2_qt7ip8.png',
    },
    {
        label: 'AI Copilot',
        image: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-dark_cv2taw.png',
        imageDark: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-3_tgdnaa.png',
    },
    {
        label: 'Task Management',
        image: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-dark_cv2taw.png',
        imageDark: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle_un3f39.png',
    },
]

export const Product = () => {
    return (
        <div className="relative z-10 mt-16 md:mt-24">
            <div
                aria-hidden
                className="absolute inset-x-1 -top-6 bottom-12 mx-auto max-w-6xl md:inset-x-0">
                <div
                    aria-hidden
                    className="bg-foreground/10 ring-illustration absolute right-3 top-3 size-1.5 rounded-full shadow shadow-black ring-2 max-lg:hidden"
                />
                <div
                    aria-hidden
                    className="bg-foreground/10 ring-illustration absolute left-11 top-3 size-1.5 rounded-full shadow shadow-black ring-2 max-lg:hidden"
                />
                <div
                    aria-hidden
                    className="bg-foreground/10 ring-illustration absolute left-4 top-10 size-1.5 rounded-full shadow shadow-black ring-2 max-lg:hidden"
                />

                <svg
                    className="text-foreground/15 fill-card/50 max-md:scale-x-250 w-full origin-top-right max-md:translate-x-3 max-md:scale-y-125"
                    viewBox="0 0 2402 1372"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.6 1033.34L4.26 1343.72C4.39 1359.1 16.91 1371.49 32.28 1371.48L2310.36 1369.51C2317.81 1369.5 2324.95 1366.53 2330.2 1361.25L2393.36 1297.69C2398.57 1292.44 2401.5 1285.35 2401.5 1277.95V1042.9C2401.5 1036.19 2399.09 1029.7 2394.71 1024.62L2364.79 989.88C2360.41 984.79 2358 978.31 2358 971.6V377.81C2358 370.26 2361.05 363.03 2366.46 357.76L2389.04 335.74C2394.45 330.47 2397.5 323.24 2397.5 315.69V29C2397.5 13.54 2384.96 1 2369.5 1H2300.5H1544.71C1536.92 1 1529.49 4.24 1524.19 9.95L1501.81 34.05C1496.51 39.76 1489.08 43 1481.29 43H926.2C918.71 43 911.54 40 906.28 34.68L881.22 9.32C875.96 4 868.79 1 861.3 1H87.6C80.17 1 73.05 3.95 67.8 9.2L9.2 67.8C3.95 73.05 1 80.17 1 87.6V315.07C1 322.1 3.64 328.87 8.4 334.04L34.1 361.96C38.86 367.13 41.5 373.9 41.5 380.93V970.3C41.5 977.79 38.5 984.96 33.17 990.22L9.93 1013.18C4.54 1018.5 1.54 1025.77 1.6 1033.34Z"
                        stroke="currentColor"
                    />
                </svg>
            </div>

            <div className="relative mx-auto max-w-6xl max-md:mx-1 md:px-6">
                <div className="group/grid relative grid lg:grid-cols-3">
                    {previews.map((preview, index) => (
                        <div
                            key={preview.label}
                            className="max-lg:not-first:hidden border-border-illustration group relative overflow-hidden">
                            <div className="mask-radial-from-60% max-lg:mask-radial-at-top mask-radial-at-top-left mask-radial-[95%_100%] pl-6 pt-6 max-lg:pr-6 max-md:pt-2">
                                <div className="bg-background/60 lg:min-w-4xl ring-border-illustration rounded-2xl p-1 shadow-xl shadow-black/20 ring-1">
                                    <div className="bg-card dark:bg-background lg:aspect-3/2 relative origin-top overflow-hidden rounded-xl border-4 border-l-8 border-transparent sm:aspect-video">
                                        <Image
                                            className="object-top-left not-dark:hidden size-full object-cover"
                                            src={preview.image}
                                            alt={preview.label}
                                            width={2880}
                                            height={1920}
                                            sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                                        />
                                        <Image
                                            className="object-top-left size-full object-cover dark:hidden"
                                            src={preview.imageDark}
                                            alt={preview.label}
                                            width={2880}
                                            height={1920}
                                            sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
